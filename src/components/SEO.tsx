import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  ogImage?: string;
  keywords?: string;
  noIndex?: boolean;
  publishedTime?: string;
  author?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "Code Envision Technologies";
const SITE_ORIGIN =
  typeof window !== "undefined" && window.location?.origin
    ? window.location.origin
    : "";

const SEO = ({
  title,
  description,
  path,
  type = "website",
  image,
  ogImage,
  keywords,
  noIndex = false,
  publishedTime,
  author,
  jsonLd,
}: SEOProps) => {
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  // Titles, descriptions, canonical, and social tags are rendered server-side
  // through each route's head() config (see src/lib/seo.ts). This component now
  // only adds page-level structured data so tags are never duplicated.
  if (schemas.length === 0) return null;

  return (
    <Helmet>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};


export default SEO;