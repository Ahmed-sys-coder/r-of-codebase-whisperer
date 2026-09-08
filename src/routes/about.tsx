import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageHead({
      title: "About Us | Code Envision Technologies",
      description:
        "Learn about Code Envision Technologies, a Pakistan-based remote-first software engineering company serving clients worldwide.",
      path: "/about",
    }),
});
