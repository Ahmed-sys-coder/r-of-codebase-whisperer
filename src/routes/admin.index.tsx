import { createFileRoute } from "@tanstack/react-router";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import { requireAdminAccess } from "@/lib/admin-auth.functions";

export const Route = createFileRoute("/admin/")({
  loader: () => requireAdminAccess(),
  component: AdminDashboard,
});
