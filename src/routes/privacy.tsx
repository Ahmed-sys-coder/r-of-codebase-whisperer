import { createFileRoute } from "@tanstack/react-router";
import Privacy from "@/pages/Privacy";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () =>
    pageHead({
      title: "Privacy Policy | Code Envision Technologies",
      description:
        "How Code Envision Technologies collects, uses, and protects your data across our website and client engagements.",
      path: "/privacy",
    }),
});
