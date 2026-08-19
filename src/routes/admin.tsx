import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminProvider } from "@/hooks/useAdmin";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Admin — Code Envision Technologies" },
    ],
  }),
  component: () => (
    <AdminProvider>
      <Outlet />
    </AdminProvider>
  ),
});
