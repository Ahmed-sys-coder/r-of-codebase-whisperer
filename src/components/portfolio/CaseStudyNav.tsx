import { motion } from "framer-motion";
import { caseStudies } from "./caseStudiesData";

const CaseStudyNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="relative z-10 px-6 mb-12 md:mb-16"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="glass rounded-2xl p-3 md:p-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {caseStudies.map((study) => (
              <a
                key={study.id}
                href={`#${study.id}`}
                className="px-3 py-2 text-[10px] md:text-[11px] font-medium text-dim hover:text-foreground uppercase tracking-[0.1em] rounded-lg hover:bg-[hsl(0_0%_100%/0.05)] transition-all duration-300"
              >
                {study.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyNav;
