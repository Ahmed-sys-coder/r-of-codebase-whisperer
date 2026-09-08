import { createFileRoute } from "@tanstack/react-router";
import Careers from "@/pages/Careers";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  component: Careers,
  head: () =>
    pageHead({
      title: "Careers | Code Envision Technologies",
      description:
        "Join Code Envision Technologies' remote-first team and work on AI, SaaS, and custom software projects for clients worldwide.",
      path: "/careers",
    }),
});
