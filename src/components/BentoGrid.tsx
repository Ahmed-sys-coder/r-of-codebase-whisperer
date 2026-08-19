import { motion } from "framer-motion";
import { Brain, Layers, Cloud, ShieldCheck, Smartphone, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan: string;
  accent: string;
}

const services: ServiceCard[] = [
  {
    title: "AI & Intelligent Systems",
    description:
      "We build multi-agent AI platforms, RAG pipelines, and LLM-powered products — not chatbot wrappers. Our flagship legal AI research platform processes thousands of case files with contextual accuracy.",
    icon: Brain,
    colSpan: "md:col-span-2",
    accent: "from-[hsl(280_80%_65%/0.15)] to-transparent",
  },
  {
    title: "Full-Stack Product Engineering",
    description:
      "From database schema to deployment — we own the entire stack. React, Node.js, PostgreSQL, and cloud-native architecture built to handle real traffic from day one.",
    icon: Layers,
    colSpan: "md:col-span-1",
    accent: "from-[hsl(200_80%_60%/0.12)] to-transparent",
  },
  {
    title: "Cloud Architecture & DevOps",
    description:
      "We design infrastructure that scales without burning your runway. CI/CD, containerization, and multi-cloud setups that keep your product online and your costs predictable.",
    icon: Cloud,
    colSpan: "md:col-span-1",
    accent: "from-[hsl(220_80%_60%/0.12)] to-transparent",
  },
  {
    title: "Security-First Engineering",
    description:
      "Encrypted document storage, JWT auth, role-based access — security isn't an afterthought, it's our starting point. Critical for fintech, legaltech, and healthcare.",
    icon: ShieldCheck,
    colSpan: "md:col-span-1",
    accent: "from-[hsl(160_70%_50%/0.1)] to-transparent",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "React Native and native apps that feel fast and look polished. We've shipped mobile products for healthcare, rental platforms, and service marketplaces.",
    icon: Smartphone,
    colSpan: "md:col-span-1",
    accent: "from-[hsl(30_80%_55%/0.1)] to-transparent",
  },
  {
    title: "Real-Time Data & Dashboards",
    description:
      "WebSocket-powered trading charts, multi-branch inventory systems, and live analytics dashboards — we handle data that can't afford to be stale.",
    icon: BarChart3,
    colSpan: "md:col-span-1",
    accent: "from-[hsl(340_70%_55%/0.1)] to-transparent",
  },
];

const BentoGrid = () => {
  return (
    <section id="services" className="relative z-10 px-6 py-24 md:py-32">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-dim font-medium mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
            What We Actually Build
          </h2>
          <p className="text-sm text-silver max-w-lg mx-auto">
            No vague promises. Here's exactly what our engineering team delivers — with proof from real projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`${service.colSpan} group relative rounded-2xl glass glass-hover cursor-default overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />
                <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[180px]">
                  <div className="mb-4 w-10 h-10 rounded-xl bg-[hsl(0_0%_100%/0.05)] border border-[hsl(0_0%_100%/0.08)] flex items-center justify-center group-hover:border-[hsl(0_0%_100%/0.15)] transition-colors duration-300">
                    <Icon size={18} className="text-silver group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-silver leading-relaxed">
                    {service.description}
                  </p>
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-full h-full"
                      style={{
                        background: "radial-gradient(circle at top right, hsl(260 80% 65% / 0.08), transparent 70%)",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
