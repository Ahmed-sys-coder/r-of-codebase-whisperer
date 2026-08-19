import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  Target,
  Radio,
  ShieldCheck,
  Gauge,
  LifeBuoy,
  BrainCircuit,
  MousePointerClick,
} from "lucide-react";
import PremiumIconBadge, { type IconTone } from "@/components/ui/PremiumIconBadge";

const tones: IconTone[] = ["purple", "cyan", "emerald", "amber", "rose", "cyan", "purple", "purple", "cyan"];

const reasons = [
  {
    icon: Layers,
    title: "Scalable architecture from day one",
    desc: "We design for your 3-year roadmap so you don't pay for rewrites later.",
  },
  {
    icon: Sparkles,
    title: "Clean and maintainable code",
    desc: "Documented, typed, and reviewed — your future engineers will thank you.",
  },
  {
    icon: Target,
    title: "Business-focused product thinking",
    desc: "Every feature is tied to a measurable outcome, not a wishlist.",
  },
  {
    icon: Radio,
    title: "Transparent remote communication",
    desc: "Weekly demos, async updates, and a shared workspace you actually own.",
  },
  {
    icon: ShieldCheck,
    title: "Security-conscious development",
    desc: "Auth, encryption, and RBAC are designed in, not bolted on at the end.",
  },
  {
    icon: Gauge,
    title: "SEO-friendly and performance-focused",
    desc: "Server-aware rendering, semantic HTML, and Core Web Vitals baked in.",
  },
  {
    icon: LifeBuoy,
    title: "Long-term support and maintenance",
    desc: "Post-launch SLAs, monitoring, and iteration cycles that keep you growing.",
  },
  {
    icon: BrainCircuit,
    title: "AI-ready product architecture",
    desc: "We design products with automation, AI features, and future intelligence in mind from the first build.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion-focused user experience",
    desc: "We build interfaces that feel premium, guide users clearly, and turn visitors into real business leads.",
  },
];

const WhyChooseUs = () => (
  <section className="relative z-10 px-6 py-24 md:py-32">
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 md:mb-16"
      >
        <p className="text-[11px] uppercase tracking-[0.3em] text-dim font-medium mb-4">
          Why Choose Us
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
          Engineering Standards, Not Shortcuts
        </h2>
        <p className="text-sm md:text-base text-silver max-w-xl mx-auto leading-relaxed">
          Code Envision Technologies is built around the way serious software
          should be made — disciplined, transparent, and outcome-driven.
        </p>
      </motion.div>

      <div className="interactive-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {reasons.map((r, i) => {
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              tabIndex={0}
              className="interactive-card group premium-card p-6 flex gap-4"
            >
              <PremiumIconBadge icon={r.icon} tone={tones[i]} size="md" />
              <div className="min-w-0">
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-1.5 tracking-[-0.01em]">
                  {r.title}
                </h3>
                <p className="text-xs md:text-sm text-silver leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
