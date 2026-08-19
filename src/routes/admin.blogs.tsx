import { createFileRoute } from "@tanstack/react-router";
import AdminBlogs from "@/pages/admin/AdminBlogs";
import { requireAdminAccess } from "@/lib/admin-auth.functions";

export const Route = createFileRoute("/admin/blogs")({
  loader: () => requireAdminAccess(),
  component: AdminBlogs,
});
