import { motion } from "framer-motion";
import {
  Cloud,
  GraduationCap,
  ShoppingBag,
  Building2,
  HeartPulse,
  Landmark,
  Store,
  Workflow,
} from "lucide-react";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&q=70&auto=format&fit=crop`;

const industries = [
  { icon: Cloud, name: "SaaS Startups", image: UNSPLASH("1551288049-bebda4e38f71") },
  { icon: GraduationCap, name: "Education", image: UNSPLASH("1503676260728-1c00da094a0b") },
  { icon: ShoppingBag, name: "E-commerce", image: UNSPLASH("1607082348824-0a96f2a4b9da") },
  { icon: Building2, name: "Real Estate", image: UNSPLASH("1560518883-ce09059eeffa") },
  { icon: HeartPulse, name: "Healthcare", image: UNSPLASH("1576091160399-112ba8d25d1d") },
  { icon: Landmark, name: "Fintech", image: UNSPLASH("1611974789855-9c2a0a7236a3") },
  { icon: Store, name: "Retail", image: UNSPLASH("1441986300917-64674bd600d8") },
  { icon: Workflow, name: "Business Automation", image: UNSPLASH("1552664730-d307ca884978") },
] as const;

const IndustriesSection = () => (
  <section id="industries" className="relative z-10 px-6 py-24 md:py-32">
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
          Industries We Serve
        </h2>
        <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
          We develop software solutions for SaaS startups, education, e-commerce, real estate, healthcare, fintech, retail, and business automation.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {industries.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              tabIndex={0}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer border border-[hsl(0_0%_100%/0.08)] shadow-[0_8px_30px_rgba(15,23,42,0.18)] transition-transform duration-500 hover:-translate-y-1"
            >
              <img
                src={it.image}
                alt={`${it.name} industry`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4594]/85 via-[#1e3a8a]/75 to-[#7c3aed]/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 h-full w-full flex flex-col items-start justify-end p-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 mb-3">
                  <Icon size={18} className="text-white" strokeWidth={2} />
                </span>
                <h3 className="text-sm md:text-base font-semibold text-white tracking-[-0.01em] drop-shadow">
                  {it.name}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
