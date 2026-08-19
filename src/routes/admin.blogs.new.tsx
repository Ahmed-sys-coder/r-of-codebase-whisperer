import { createFileRoute } from "@tanstack/react-router";
import AdminBlogEditor from "@/pages/admin/AdminBlogEditor";
import { requireAdminAccess } from "@/lib/admin-auth.functions";

export const Route = createFileRoute("/admin/blogs/new")({
  loader: () => requireAdminAccess(),
  component: AdminBlogEditor,
});
