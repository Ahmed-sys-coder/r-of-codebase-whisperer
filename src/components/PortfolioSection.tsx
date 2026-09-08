import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import { caseStudies } from "@/components/portfolio/caseStudiesData";

const HOMEPAGE_IDS = ["custom-erp", "sialkot-construction", "hafiz"];

const homepageStudies = HOMEPAGE_IDS.map((id) =>
  caseStudies.find((s) => s.id === id)!
).filter(Boolean);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative z-10 px-6 py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
            Case Studies
          </h2>
          <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
            Explore real software, AI, SaaS, and automation projects built to solve practical business problems and support digital growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {homepageStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#8A08FA] hover:bg-[#0025CC] transition-colors duration-300"
          >
            View All Case Studies
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
