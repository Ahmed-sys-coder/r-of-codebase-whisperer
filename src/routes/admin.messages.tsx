import { createFileRoute } from "@tanstack/react-router";
import AdminContactMessages from "@/pages/admin/AdminContactMessages";
import { requireAdminAccess } from "@/lib/admin-auth.functions";

export const Route = createFileRoute("/admin/messages")({
  loader: () => requireAdminAccess(),
  component: AdminContactMessages,
});
