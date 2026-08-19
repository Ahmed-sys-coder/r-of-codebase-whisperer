import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import CaseStudyHero from "@/components/portfolio/CaseStudyHero";

import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import { caseStudies } from "@/components/portfolio/caseStudiesData";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";

const Portfolio = () => {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies — Code Envision Technologies",
    hasPart: caseStudies.map((c) => ({
      "@type": "CreativeWork",
      name: c.title,
    })),
  };

  return (
    <PageTransition>
      <SEO
        title="Case Studies — Real Outcomes"
        description="Selected case studies from Code Envision Technologies across LegalTech, FinTech, AI platforms, and enterprise software engagements."
        path="/portfolio"
        jsonLd={collectionSchema}
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2]">
          <CaseStudyHero />
          
          <section className="relative z-10 px-6">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              {caseStudies.map((study, i) => (
                <CaseStudyCard key={study.id} study={study} index={i} />
              ))}
            </div>
          </section>
          <div className="h-16 md:h-24" />
          <Footer />
        </main>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
