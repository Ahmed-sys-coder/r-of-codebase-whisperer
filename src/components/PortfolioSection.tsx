import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1200&q=70&auto=format&fit=crop`;

type Study = {
  category: string;
  title: string;
  description: string;
  tech: string[];
  result: string;
  image: string;
};

const studies: Study[] = [
  {
    category: "SaaS Platform",
    title: "AI-Powered Analytics Dashboard",
    description:
      "Built a comprehensive analytics platform that helps businesses track performance, predict trends, and optimize operations using machine learning.",
    tech: ["React", "Node.js", "Python", "TensorFlow", "AWS"],
    result: "300% increase in data processing speed, serving 50K+ users.",
    image: UNSPLASH("1551288049-bebda4e38f71"),
  },
  {
    category: "Mobile App",
    title: "Healthcare Appointment System",
    description:
      "Developed a HIPAA-compliant mobile app connecting patients with healthcare providers for seamless booking and consultations.",
    tech: ["React Native", "Firebase", "Node.js"],
    result: "100K+ appointments booked in the first 6 months.",
    image: UNSPLASH("1576091160399-112ba8d25d1d"),
  },
  {
    category: "E-commerce",
    title: "Multi-Vendor Marketplace",
    description:
      "Created a scalable e-commerce platform supporting thousands of vendors with secure payments, inventory, and order management.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    result: "$2M+ in transactions within the first year.",
    image: UNSPLASH("1607082348824-0a96f2a4b9da"),
  },
  {
    category: "FinTech",
    title: "Real-Time Trading Platform",
    description:
      "Built a high-performance trading platform with real-time data streaming, advanced charting, and institutional-grade analytics.",
    tech: ["React", "WebSocket", "Python", "MongoDB"],
    result: "Processing 100K+ trades daily with 99.9% uptime.",
    image: UNSPLASH("1611974789855-9c2a0a7236a3"),
  },
];

const TechPill = ({ name }: { name: string }) => (
  <span className="text-[10px] md:text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#0F4594]/8 text-[#0F4594] border border-[#0F4594]/15">
    {name}
  </span>
);

const CardInner = ({ s, featured }: { s: Study; featured?: boolean }) => (
  <div
    className={`relative h-full grid ${
      featured ? "md:grid-cols-2" : "grid-cols-1"
    } overflow-hidden rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_50px_rgba(15,69,148,0.15)] hover:-translate-y-1 hover:border-[#0F4594]/25 transition-all duration-300`}
  >
    <div
      className={`relative overflow-hidden ${
        featured ? "min-h-[260px] md:min-h-full" : "aspect-[16/9]"
      }`}
    >
      <img
        src={s.image}
        alt={s.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F4594]/55 via-[#1e3a8a]/35 to-[#7c3aed]/55 mix-blend-multiply" />
      <div className="absolute top-4 left-4">
        <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30">
          {s.category}
        </span>
      </div>
    </div>

    <div className={`p-6 md:p-8 flex flex-col ${featured ? "md:p-10" : ""}`}>
      <h3
        className={`font-bold text-[#0F172A] tracking-[-0.01em] mb-3 ${
          featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
        }`}
      >
        {s.title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-5">
        {s.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {s.tech.map((t) => (
          <TechPill key={t} name={t} />
        ))}
      </div>

      <div className="flex items-start gap-2 mb-6 p-3 rounded-lg bg-gradient-to-r from-[#0F4594]/5 to-[#7c3aed]/5 border border-[#0F4594]/10">
        <TrendingUp size={16} className="text-[#0F4594] shrink-0 mt-0.5" />
        <p className="text-xs md:text-sm font-medium text-[#0F172A] leading-snug">
          {s.result}
        </p>
      </div>

      <a
        href="/portfolio"
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F4594] hover:text-[#7c3aed] transition-colors group/cta"
      >
        View Case Study
        <ArrowRight
          size={14}
          className="transition-transform group-hover/cta:translate-x-1"
        />
      </a>
    </div>
  </div>
);

const PortfolioSection = () => {
  const [featured, ...rest] = studies;
  return (
    <section id="portfolio" className="relative z-10 px-6 py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
            Case Studies
          </h2>
          <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
            Explore real software, AI, SaaS, and automation projects built to solve practical business problems and support digital growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="group mb-6 md:mb-8"
        >
          <CardInner s={featured} featured />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {rest.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group"
            >
              <CardInner s={s} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0F4594] to-[#7c3aed] shadow-[0_10px_30px_rgba(15,69,148,0.25)] hover:shadow-[0_14px_36px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Case Studies
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
