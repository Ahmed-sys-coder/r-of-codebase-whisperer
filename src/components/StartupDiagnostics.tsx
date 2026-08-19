import { useEffect, useState } from "react";
import {
  installErrorLogging,
  runStartupChecks,
  type DiagnosticIssue,
} from "@/lib/runtime-diagnostics";

/**
 * Dev-only startup checker. Verifies required packages/integrations resolve and
 * renders a clear on-screen banner when something is broken.
 */
export default function StartupDiagnostics() {
  const [issues, setIssues] = useState<DiagnosticIssue[]>([]);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    installErrorLogging();
    let active = true;
    runStartupChecks().then((found) => {
      if (active) setIssues(found);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!import.meta.env.DEV || dismissed || issues.length === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] max-h-[60vh] overflow-auto border-t-4 border-destructive bg-background/98 p-4 text-left shadow-2xl backdrop-blur">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-sm font-semibold text-destructive">
            Startup check failed ({issues.length} {issues.length === 1 ? "issue" : "issues"})
          </h2>
          <button
            onClick={() => setDismissed(true)}
            className="rounded-md border border-input px-2 py-1 text-xs text-muted-foreground hover:bg-accent"
          >
            Dismiss
          </button>
        </div>
        <ul className="mt-3 space-y-3">
          {issues.map((issue, i) => (
            <li key={i} className="rounded-md border border-destructive/40 bg-destructive/5 p-3">
              <p className="text-sm font-medium text-foreground">{issue.title}</p>
              <pre className="mt-1 whitespace-pre-wrap break-words text-xs text-muted-foreground">
                {issue.detail}
              </pre>
              {issue.hint && (
                <p className="mt-2 text-xs text-muted-foreground">Hint: {issue.hint}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
