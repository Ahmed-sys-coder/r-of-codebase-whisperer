export const SITE_URL = "https://codeenvisiontechnologies.com";
export const SITE_NAME = "Code Envision Technologies";
export const OG_IMAGE = `${SITE_URL}/og-banner.jpg`;
export const LINKEDIN_URL = "https://www.linkedin.com/company/code-envision-technologies";

type HeadOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  scripts?: { type: string; children: string }[];
};

export function pageHead({
  title,
  description,
  path,
  type = "website",
  image = OG_IMAGE,
  scripts,
}: HeadOptions) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    ...(scripts ? { scripts } : {}),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  image: OG_IMAGE,
  description:
    "Pakistan-based remote-first software engineering company building scalable AI, SaaS, web, mobile, and custom software solutions for businesses worldwide.",
  sameAs: [LINKEDIN_URL],
};
