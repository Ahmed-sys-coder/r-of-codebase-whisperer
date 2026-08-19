import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TechStackSection from "@/components/home/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogPreview from "@/components/home/BlogPreview";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import FAQSection, { buildFAQSchema } from "@/components/FAQSection";

const Index = () => {
  const faqs = [
    {
      q: "What does Code Envision Technologies do?",
      a: "We're a remote-first software engineering company building AI platforms, SaaS products, custom enterprise software, and web/mobile apps for clients in Pakistan and globally.",
    },
    {
      q: "Which industries do you work with?",
      a: "SaaS, education, e-commerce, real estate, healthcare, fintech, trading & analytics, and business automation. Every engagement starts from business outcomes first.",
    },
    {
      q: "How do engagements typically start?",
      a: "Most clients begin with a free discovery call. We map product goals, technical constraints, and target users, then propose an architecture, timeline, and team shape before any code is written.",
    },
    {
      q: "Do you work with startups or enterprises?",
      a: "Both. We support funded startups that need a senior engineering partner from day one, and businesses that need a focused team to build a new product line or modernize a platform.",
    },
    {
      q: "Where are you based and do you work globally?",
      a: "We're a remote-first company headquartered in Pakistan, delivering to clients across North America, Europe, and the Middle East. All consultations and project updates happen online.",
    },
  ];

  const homepageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Code Envision Technologies",
      url: "/",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Code Envision Technologies",
      url: "/",
      description:
        "Remote-first software engineering company based in Pakistan, building AI platforms, SaaS products, web apps, mobile apps, and custom software for businesses worldwide.",
      areaServed: ["Pakistan", "Worldwide"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info.codeenvision@gmail.com",
          telephone: "+92-336-2704833",
          availableLanguage: ["English", "Urdu"],
          areaServed: "Worldwide",
        },
      ],
    },
    buildFAQSchema(faqs),
  ];

  return (
    <PageTransition>
      <SEO
        title="Code Envision Technologies | AI, SaaS & Custom Software"
        description="Code Envision Technologies builds AI platforms, SaaS products, web apps, mobile apps, and custom software for businesses in Pakistan and worldwide."
        path="/"
        keywords="software company in Pakistan, custom software development company, AI development company, SaaS development company, web app development, mobile app development, software engineering company, remote software agency, Code Envision Technologies"
        jsonLd={homepageSchema}
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2]">
          <Hero />
          <AboutSection />
          <ServicesOverview />
          <IndustriesSection />
          <TechStackSection />
          <PortfolioSection />
          <ProcessSection />
          <BlogPreview />
          <FAQSection intro={undefined} faqs={faqs} />
          <Footer />
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;
