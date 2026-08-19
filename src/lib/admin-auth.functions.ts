import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const requireAdminAccess = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });

    if (error) {
      console.error("Admin role verification failed", error.message);
      throw new Error("Forbidden");
    }

    if (data !== true) {
      throw new Error("Forbidden");
    }

    return { ok: true };
  });