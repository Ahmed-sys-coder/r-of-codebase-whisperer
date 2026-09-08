import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/pages/Portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () =>
    pageHead({
      title: "Our Portfolio | Code Envision Technologies",
      description:
        "See real projects delivered by Code Envision Technologies across AI, SaaS, web, and mobile app development for clients worldwide.",
      path: "/portfolio",
    }),
});
