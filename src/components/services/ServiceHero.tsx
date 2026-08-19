import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="w-full max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold tracking-[-0.03em] leading-[1.1] text-gradient-headline mb-6 text-balance"
        >
          Software Development Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-sm md:text-base text-silver max-w-3xl mx-auto leading-relaxed"
        >
          We provide custom software development, AI platform development, SaaS product development, web apps, mobile apps, e-commerce solutions, UI/UX design, and SEO services for startups and businesses.
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceHero;
