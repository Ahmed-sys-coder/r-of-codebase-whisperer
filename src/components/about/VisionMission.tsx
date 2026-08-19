import { motion } from "framer-motion";
import { Target, Eye, Rocket, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PillarProps {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  accent: string;
  iconBg: string;
  iconGlow: string;
  iconColor: string;
  index: number;
}


const Pillar = ({ icon: Icon, label, title, description, accent, iconBg, iconGlow, iconColor, index }: PillarProps) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative glass glass-hover rounded-2xl overflow-hidden"
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
    />
    <div className="relative p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{ background: iconBg, boxShadow: `0 8px 22px -10px ${iconGlow}` }}
        >
          <Icon size={20} style={{ color: iconColor }} />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-dim font-medium">
          {label}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-foreground tracking-[-0.01em] mb-3">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-silver leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const pillars: Omit<PillarProps, "index">[] = [
  {
    icon: Eye,
    label: "Our Vision",
    title: "Pakistan as a Global Engineering Hub",
    description:
      "Within 5 years, 'Built in Pakistan' should mean the same as 'Built in Silicon Valley' — engineering excellence, architectural rigor, and uncompromising quality. We're proving it one product at a time.",
    accent: "from-[hsl(260_80%_65%/0.08)] to-transparent",
    iconBg: "linear-gradient(135deg, rgba(167,139,250,0.28), rgba(99,102,241,0.2))",
    iconGlow: "rgba(167,139,250,0.55)",
    iconColor: "#C4B5FD",
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Solve Hard Problems. Build Lasting Products.",
    description:
      "Deliver enterprise-grade software that survives market realities — real users, real traffic, real scale. We combine deep technical architecture with business acumen to build products that drive measurable outcomes.",
    accent: "from-[hsl(220_80%_60%/0.08)] to-transparent",
    iconBg: "linear-gradient(135deg, rgba(244,114,182,0.28), rgba(167,139,250,0.2))",
    iconGlow: "rgba(244,114,182,0.55)",
    iconColor: "#F472B6",
  },
  {
    icon: Rocket,
    label: "Our Path",
    title: "From Partner to Product Owner",
    description:
      "We're investing profits into our own SaaS products and AI research. The agency funds the vision. Today we're trusted engineering partners. Tomorrow, we'll have our own global products.",
    accent: "from-[hsl(30_80%_55%/0.08)] to-transparent",
    iconBg: "linear-gradient(135deg, rgba(251,146,60,0.28), rgba(251,191,36,0.2))",
    iconGlow: "rgba(251,146,60,0.55)",
    iconColor: "#FB923C",
  },
  {
    icon: Globe2,
    label: "How We Work",
    title: "Local Team, Global Standards",
    description:
      "Distributed from Islamabad with timezone coverage for US, EU, and MENA. We follow Silicon Valley best practices: clean architecture, TDD, continuous deployment, and agile cycles. No shortcuts on quality.",
    accent: "from-[hsl(160_70%_50%/0.08)] to-transparent",
    iconBg: "linear-gradient(135deg, rgba(34,211,238,0.28), rgba(59,130,246,0.2))",
    iconGlow: "rgba(34,211,238,0.55)",
    iconColor: "#22D3EE",
  },
];


const VisionMission = () => {
  return (
    <section className="relative z-10 px-6 py-16 md:py-24">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-18"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-dim font-medium mb-4">
            Strategic Direction
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
            Where We're Headed
          </h2>
          <p className="text-sm text-silver max-w-lg mx-auto">
            Clear vision, focused execution, long-term thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {pillars.map((pillar, i) => (
            <Pillar key={pillar.label} {...pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
