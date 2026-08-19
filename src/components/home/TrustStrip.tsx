import { motion } from "framer-motion";
import { Users, BrainCircuit, GitBranch, Globe2 } from "lucide-react";
import PremiumIconBadge, { type IconTone } from "@/components/ui/PremiumIconBadge";
import { InteractiveCardGrid } from "@/components/ui/InteractiveCardGrid";

const items: { icon: typeof Users; title: string; desc: string; tone: IconTone }[] = [
  {
    icon: Users,
    title: "Remote-first Software Team",
    desc: "A distributed engineering team that works in your timezone, not against it.",
    tone: "purple",
  },
  {
    icon: BrainCircuit,
    title: "AI, SaaS & Web App Expertise",
    desc: "Production-grade systems across AI platforms, multi-tenant SaaS, and web/mobile apps.",
    tone: "cyan",
  },
  {
    icon: GitBranch,
    title: "Agile Project Delivery",
    desc: "Weekly demos, transparent sprints, and predictable milestones from kickoff to launch.",
    tone: "amber",
  },
  {
    icon: Globe2,
    title: "Pakistan to Global Clients",
    desc: "Headquartered in Pakistan, shipping software for clients across the US, EU, and Middle East.",
    tone: "emerald",
  },
];

const TrustStrip = () => (
  <section className="relative z-10 px-6 py-20 md:py-28">
    <div className="w-full max-w-5xl mx-auto">
      <InteractiveCardGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            tabIndex={0}
            className="interactive-card group premium-card p-6 flex flex-col h-full"
          >
            <PremiumIconBadge icon={item.icon} tone={item.tone} size="md" className="mb-4" />
            <h3 className="text-sm font-semibold text-foreground mb-2 tracking-[-0.01em]">
              {item.title}
            </h3>
            <p className="text-xs text-silver leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </InteractiveCardGrid>
    </div>
  </section>
);

export default TrustStrip;
