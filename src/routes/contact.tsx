import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () =>
    pageHead({
      title: "Contact Us | Code Envision Technologies",
      description:
        "Get in touch with Code Envision Technologies for custom software, AI, and app development projects.",
      path: "/contact",
    }),
});
