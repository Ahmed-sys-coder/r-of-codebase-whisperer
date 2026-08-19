import { motion } from "framer-motion";

const CaseStudyHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
      <div className="w-full max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.1] text-gradient-headline mb-5"
        >
          Our Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed"
        >
          Explore custom software, AI platforms, SaaS products, automation tools, and web applications built by Code Envision Technologies for real business needs.
        </motion.p>
      </div>
    </section>
  );
};

export default CaseStudyHero;
