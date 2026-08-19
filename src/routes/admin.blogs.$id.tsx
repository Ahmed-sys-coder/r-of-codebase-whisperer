import { createFileRoute } from "@tanstack/react-router";
import AdminBlogEditor from "@/pages/admin/AdminBlogEditor";
import { requireAdminAccess } from "@/lib/admin-auth.functions";

export const Route = createFileRoute("/admin/blogs/$id")({
  loader: () => requireAdminAccess(),
  component: AdminBlogEditor,
});
