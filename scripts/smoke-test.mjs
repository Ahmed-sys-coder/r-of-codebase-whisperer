#!/usr/bin/env node
/**
 * Dev-time smoke test: requests key routes against the running dev server
 * and reports any non-200 responses or server-rendered error markers.
 *
 * Usage: bun run smoke  (optionally BASE_URL=http://localhost:8080)
 */

const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
const ROUTES = ["/", "/blog", "/admin/login", "/contact"];

const ERROR_MARKERS = [
  "Cannot find module",
  "Failed to resolve import",
  "Internal Server Error",
  "vite:import-analysis",
];

async function waitForServer(timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      await fetch(BASE_URL, { method: "GET" });
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  return false;
}

async function checkRoute(route) {
  const url = `${BASE_URL}${route}`;
  const started = Date.now();
  try {
    const res = await fetch(url, { headers: { accept: "text/html" } });
    const body = await res.text();
    const marker = ERROR_MARKERS.find((m) => body.includes(m));
    const ms = Date.now() - started;
    if (!res.ok) return { route, ok: false, ms, reason: `HTTP ${res.status}` };
    if (marker) return { route, ok: false, ms, reason: `error marker in HTML: "${marker}"` };
    return { route, ok: true, ms };
  } catch (error) {
    return { route, ok: false, ms: Date.now() - started, reason: String(error) };
  }
}

const up = await waitForServer();
if (!up) {
  console.error(`[smoke] dev server not reachable at ${BASE_URL}`);
  process.exit(1);
}

const results = await Promise.all(ROUTES.map(checkRoute));
for (const r of results) {
  console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.route}  ${r.ms}ms${r.ok ? "" : `  -> ${r.reason}`}`);
}

const failures = results.filter((r) => !r.ok);
console.log(`[smoke] ${results.length - failures.length}/${results.length} routes healthy`);
process.exit(failures.length ? 1 : 0);
