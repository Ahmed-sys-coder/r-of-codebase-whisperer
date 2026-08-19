let lastError: unknown = null;

if (typeof globalThis !== "undefined") {
  const g = globalThis as any;
  if (!g.__errorCaptureInstalled) {
    g.__errorCaptureInstalled = true;
    try {
      process.on?.("uncaughtException", (err: unknown) => { lastError = err; });
      process.on?.("unhandledRejection", (err: unknown) => { lastError = err; });
    } catch {}
  }
}

export function consumeLastCapturedError(): unknown {
  const e = lastError;
  lastError = null;
  return e;
}

export function captureError(err: unknown) {
  lastError = err;
}
