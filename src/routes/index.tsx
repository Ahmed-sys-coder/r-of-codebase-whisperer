import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { pageHead, organizationSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    pageHead({
      title: "Code Envision Technologies | Custom Software, AI & SaaS Development Company",
      description:
        "Pakistan-based remote-first software engineering company building scalable AI, SaaS, web, mobile, and custom software solutions for businesses worldwide.",
      path: "/",
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
      ],
    }),
});
