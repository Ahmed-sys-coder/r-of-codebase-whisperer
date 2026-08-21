export interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags?: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  coverImage: string;
  featured?: boolean;
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  keyTakeaways?: string[];
  relatedSlugs?: string[];
}

import { crmGuide } from "./blogs/crm-guide";
import { customSoftware } from "./blogs/custom-software-development";
import { mvpDevelopment } from "./blogs/mvp-development";
import { erpGuide } from "./blogs/erp-guide";
import { aiAutomation } from "./blogs/ai-automation";
import { saasDevelopment } from "./blogs/saas-development";
import { nlpGuide } from "./blogs/nlp-guide";
import { machineLearning } from "./blogs/machine-learning";
import { computerVision } from "./blogs/computer-vision";
import { aiChatbotDevelopment } from "./blogs/ai-chatbot-development";
import { uiUxDesign } from "./blogs/ui-ux-design";

export const blogPosts: BlogPost[] = [
  crmGuide,
  customSoftware,
  mvpDevelopment,
  erpGuide,
  aiAutomation,
  saasDevelopment,
  nlpGuide,
  machineLearning,
  computerVision,
  aiChatbotDevelopment,
  uiUxDesign,
];

export const getBlogBySlug = (slug?: string): BlogPost | undefined =>
  blogPosts.find((p) => p.id === slug);

export const getRelatedBlogs = (post: BlogPost, all: BlogPost[] = blogPosts): BlogPost[] => {
  const related = (post.relatedSlugs ?? [])
    .map((s) => all.find((p) => p.id === s))
    .filter((p): p is BlogPost => !!p && p.id !== post.id);
  if (related.length >= 3) return related.slice(0, 3);
  const fillers = all.filter(
    (p) => p.id !== post.id && !related.some((r) => r.id === p.id)
  );
  return [...related, ...fillers].slice(0, 3);
};
