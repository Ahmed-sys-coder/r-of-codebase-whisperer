import { motion } from "framer-motion";
import { GitBranch, Puzzle, Cpu, MessageSquare, ShieldCheck, TrendingUp } from "lucide-react";
import whyChooseImg from "@/assets/why-choose-team.jpg";

interface FeatureCard {
  icon: typeof GitBranch;
  title: string;
  text: string;
}

const leftFeatures: FeatureCard[] = [
  {
    icon: GitBranch,
    title: "Proven Development Process",
    text: "We follow a clear workflow from discovery to launch, helping every project move with structure, visibility, and measurable progress.",
  },
  {
    icon: Puzzle,
    title: "Custom-Built Solutions",
    text: "Every product is designed around your business goals, user needs, and technical requirements — not generic templates.",
  },
  {
    icon: Cpu,
    title: "AI & Modern Tech Expertise",
    text: "We build with trusted web, mobile, cloud, database, and AI technologies to create scalable digital products.",
  },
];

const rightFeatures: FeatureCard[] = [
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    text: "You stay updated throughout the project with clear milestones, practical guidance, and honest progress updates.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Delivery",
    text: "We focus on clean architecture, responsive UI, testing, performance, and long-term maintainability.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Support",
    text: "From launch to SEO, optimization, and future improvements, we support products beyond the first release.",
  },
];

const FeatureCardItem = ({ feature, index }: { feature: FeatureCard; index: number }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-[hsl(var(--border))] shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)] hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center shadow-sm">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <h4 className="text-[15px] font-semibold text-foreground tracking-[-0.01em] mb-1">
          {feature.title}
        </h4>
        <p className="text-[13px] text-[hsl(var(--text-silver))] leading-relaxed">
          {feature.text}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseSection = () => {
  return (
    <section className="relative z-10 px-6 py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-18"
        >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
          Why Choose Us
        </h2>
        <p className="text-sm md:text-base text-[hsl(var(--text-silver))] max-w-2xl mx-auto leading-relaxed">
          We combine custom software development, AI expertise, transparent communication, and long-term support to help businesses build reliable digital products.
        </p>
        </motion.div>

        {/* Desktop: 3 columns. Mobile: stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left features */}
          <div className="flex flex-col gap-4">
            {leftFeatures.map((feature, i) => (
              <FeatureCardItem key={feature.title} feature={feature} index={i} />
            ))}
          </div>

          {/* Center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-[hsl(var(--border))]">
              <img
                src={whyChooseImg}
                alt="Code Envision Technologies software development team collaboration"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
                width={1024}
                height={1024}
              />
              {/* Subtle blue/purple overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, hsla(217, 91%, 55%, 0.08) 0%, hsla(258, 90%, 66%, 0.08) 100%)",
                }}
              />
            </div>
            {/* Decorative glow */}
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] opacity-40 blur-2xl pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsla(217, 91%, 55%, 0.15), transparent 70%)",
              }}
            />
          </motion.div>

          {/* Right features */}
          <div className="flex flex-col gap-4">
            {rightFeatures.map((feature, i) => (
              <FeatureCardItem key={feature.title} feature={feature} index={i + 3} />
            ))}
          </div>
        </div>

        {/* SEO keywords - visually hidden */}
        <div className="sr-only">
          software development company, AI development services, custom software development,
          SaaS product development, web application development, software company in Pakistan
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
