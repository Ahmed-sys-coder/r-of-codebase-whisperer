import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  component: Blog,
  head: () =>
    pageHead({
      title: "Blog | Code Envision Technologies",
      description:
        "Insights on CRM, AI automation, SaaS development, custom software, and UI/UX design from the Code Envision Technologies team.",
      path: "/blog",
    }),
});
