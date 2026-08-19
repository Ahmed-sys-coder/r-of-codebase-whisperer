import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";

import ValuesStrip from "@/components/about/ValuesStrip";
import TeamSection from "@/components/about/TeamSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <PageTransition>
      <SEO
        title="About — Code Envision Technologies"
        description="Code Envision Technologies builds scalable web apps, SaaS products, and AI-powered software for startups and enterprises worldwide."
        path="/about"
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2]">
          <AboutHero />
          <FounderStory />
          
          <ValuesStrip />
          <TeamSection />
          <WhyChooseSection />
          <Footer />
        </main>
      </div>
    </PageTransition>
  );
};

export default About;
