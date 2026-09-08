import { createFileRoute } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";
import { getBlogBySlug } from "@/data/blogData";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  head: ({ params }) => {
    const post = getBlogBySlug(params.slug);
    if (!post) {
      return pageHead({
        title: "Blog | Code Envision Technologies",
        description:
          "Insights on CRM, AI automation, SaaS development, custom software, and UI/UX design from the Code Envision Technologies team.",
        path: `/blog/${params.slug}`,
      });
    }
    return pageHead({
      title: `${post.seoTitle ?? post.title} | Code Envision Technologies`,
      description: post.seoDescription ?? post.excerpt,
      path: `/blog/${post.id}`,
      type: "article",
    });
  },
});
