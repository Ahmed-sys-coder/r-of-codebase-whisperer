/**
 * Dev-time runtime diagnostics.
 *
 * - Verifies that critical integration packages are actually resolvable at
 *   runtime (catches the "Cannot find module '@supabase/supabase-js'" class of
 *   failures immediately, instead of on first feature use).
 * - Confirms the Supabase client can be constructed and a session fetched.
 * - Logs module-resolution / integration errors loudly and consistently.
 */

export type DiagnosticIssue = {
  title: string;
  detail: string;
  hint?: string;
};

const MODULE_ERROR_PATTERNS = [
  /Cannot find module/i,
  /Failed to resolve (?:import|module)/i,
  /Failed to fetch dynamically imported module/i,
  /does not provide an export named/i,
  /is not defined/i,
];

export function isModuleResolutionError(message: string) {
  return MODULE_ERROR_PATTERNS.some((p) => p.test(message));
}

function logIssue(issue: DiagnosticIssue) {
  console.error(
    `%c[diagnostics] ${issue.title}`,
    "color:#fff;background:#b91c1c;padding:2px 6px;border-radius:3px",
    `\n${issue.detail}${issue.hint ? `\nHint: ${issue.hint}` : ""}`,
  );
}

/** Packages that must be resolvable for the app's integrations to work. */
const REQUIRED_PACKAGES: Array<{ name: string; load: () => Promise<unknown> }> = [
  { name: "@supabase/supabase-js", load: () => import("@supabase/supabase-js") },
];

async function checkPackages(): Promise<DiagnosticIssue[]> {
  const issues: DiagnosticIssue[] = [];
  for (const pkg of REQUIRED_PACKAGES) {
    try {
      await pkg.load();
      console.info(`[diagnostics] package resolved: ${pkg.name}`);
    } catch (error) {
      issues.push({
        title: `Missing dependency: ${pkg.name}`,
        detail: error instanceof Error ? error.message : String(error),
        hint: `Install it (bun add ${pkg.name}) and restart the dev server. If it is already installed, clear the Vite cache (rm -rf node_modules/.vite).`,
      });
    }
  }
  return issues;
}

async function checkSupabase(): Promise<DiagnosticIssue[]> {
  try {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      return [
        {
          title: "Supabase session fetch failed",
          detail: error.message,
          hint: "Check VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY in .env.",
        },
      ];
    }
    console.info(
      `[diagnostics] Supabase client OK — session fetch succeeded (${
        data.session ? `signed in as ${data.session.user.email ?? data.session.user.id}` : "no active session"
      })`,
    );
    return [];
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    return [
      {
        title: isModuleResolutionError(detail)
          ? "Supabase integration failed to load (module resolution)"
          : "Supabase client initialization failed",
        detail,
        hint: "Verify @supabase/supabase-js is installed and the Supabase env vars are present.",
      },
    ];
  }
}

/** Installs global listeners that surface module/integration errors clearly. */
export function installErrorLogging() {
  if (typeof window === "undefined") return;
  const w = window as unknown as { __diagnosticsErrorHooks?: boolean };
  if (w.__diagnosticsErrorHooks) return;
  w.__diagnosticsErrorHooks = true;

  window.addEventListener("error", (event) => {
    const message = event.message ?? String(event.error ?? "");
    if (isModuleResolutionError(message)) {
      logIssue({
        title: "Module resolution error",
        detail: message,
        hint: "A dependency is missing or the Vite cache is stale.",
      });
    }
  });

  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    const message = reason instanceof Error ? reason.message : String(reason);
    if (isModuleResolutionError(message)) {
      logIssue({
        title: "Module resolution error (async import)",
        detail: message,
        hint: "A dynamically imported dependency could not be loaded.",
      });
    }
  });
}

/** Runs all startup checks and returns issues found (empty array = healthy). */
export async function runStartupChecks(): Promise<DiagnosticIssue[]> {
  const packageIssues = await checkPackages();
  const issues = [...packageIssues];
  if (packageIssues.length === 0) issues.push(...(await checkSupabase()));
  issues.forEach(logIssue);
  if (issues.length === 0) console.info("[diagnostics] startup checks passed");
  return issues;
}
