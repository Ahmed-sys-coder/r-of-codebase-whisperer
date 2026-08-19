import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";

const AboutHero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image with blue/purple overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutHeroBg}
          alt="Modern software development team workspace with blue and purple ambient lighting"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(11, 61, 145, 0.82) 0%, rgba(37, 99, 235, 0.70) 35%, rgba(124, 58, 237, 0.68) 70%, rgba(15, 23, 42, 0.85) 100%)",
          }}
        />
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-36 pb-20 md:pt-44 md:pb-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1.12] text-white mb-6"
        >
          About Code Envision Technologies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-white/85 max-w-[900px] mx-auto leading-[1.75] mb-10"
        >
          Code Envision Technologies is a software development and AI services company helping startups,
          businesses, and digital brands build scalable web applications, SaaS products, AI tools,
          automation systems, and custom software solutions. We combine clean engineering, modern design,
          and growth-focused strategy to turn ideas into reliable digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full bg-white text-[#0B3D91] border border-white/80 shadow-[0_10px_30px_-8px_rgba(15,23,42,0.45)] hover:bg-[#EEF2FF] hover:text-[#0B3D91] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(124,58,237,0.55)] transition-all duration-300 group"
          >
            Start Your Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade into page content */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />
    </section>
  );
};

export default AboutHero;
