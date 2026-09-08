import { createFileRoute } from "@tanstack/react-router";
import Terms from "@/pages/Terms";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () =>
    pageHead({
      title: "Terms of Service | Code Envision Technologies",
      description:
        "The terms and conditions that govern the use of the Code Envision Technologies website and services.",
      path: "/terms",
    }),
});
