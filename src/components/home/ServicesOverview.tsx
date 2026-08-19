import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import {
  Code2,
  BrainCircuit,
  Rocket,
  Globe2,
  Smartphone,
  ShoppingCart,
  PenTool,
  Search,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Build tailored software solutions that align with your business processes, workflows, and long-term goals.",
    benefits: [
      "Fully customized to your business requirements",
      "Scalable architecture for long-term growth",
      "Seamless integration with existing systems",
      "Ongoing support and continuous improvement",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI Platform Development",
    description:
      "We build AI-powered platforms, automation tools, chatbots, and intelligent systems that help businesses work smarter.",
    benefits: [
      "AI workflows and automation",
      "LLM, chatbot, and RAG-based solutions",
      "Smart dashboards and analytics",
      "Secure integration with existing systems",
    ],
  },
  {
    icon: Rocket,
    title: "SaaS Product Development",
    description:
      "We help founders and businesses build SaaS products with user roles, dashboards, authentication, APIs, and scalable infrastructure.",
    benefits: [
      "MVP to production-ready SaaS",
      "Multi-tenant architecture",
      "Dashboard and subscription-ready flows",
      "Scalable backend and database structure",
    ],
  },
  {
    icon: Globe2,
    title: "Web App Development",
    description:
      "We build fast, responsive, and SEO-friendly web applications using modern frontend and backend technologies.",
    benefits: [
      "Modern responsive web apps",
      "Secure backend and API integration",
      "Performance-focused development",
      "SEO-friendly structure",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We create mobile-friendly and cross-platform digital experiences with smooth user flows and reliable performance.",
    benefits: [
      "Mobile-first user experience",
      "Clean app architecture",
      "API-connected features",
      "Scalable user journeys",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "We build e-commerce platforms with product management, cart, checkout, order flow, admin panels, and SEO-ready pages.",
    benefits: [
      "Product and order management",
      "Secure checkout-ready structure",
      "Admin and customer flows",
      "SEO-friendly store pages",
    ],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "We design clean, modern, and conversion-focused interfaces that make digital products easier to use and more professional.",
    benefits: [
      "User-friendly layouts",
      "Clean design systems",
      "Conversion-focused screens",
      "Responsive design",
    ],
  },
  {
    icon: Search,
    title: "SEO & Digital Growth",
    description:
      "We optimize websites for search visibility, technical performance, content structure, and organic business growth.",
    benefits: [
      "Technical SEO audits",
      "On-page optimization",
      "Content structure improvement",
      "Growth-focused SEO strategy",
    ],
  },
];

const ServicesOverview = () => {
  const [active, setActive] = useState(0);
  const current = services[active];
  const ActiveIcon = current.icon;

  return (
    <section id="services" className="relative z-10 px-6 py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
            Services We Offer
          </h2>
          <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
            We build secure, scalable, and growth-ready software solutions including custom web apps, AI platforms, SaaS products, mobile apps, and e-commerce systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
            {/* Tabs */}
            <div className="p-3 md:p-4 md:border-r border-b md:border-b-0 border-border/60 bg-background/40">
              <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = i === active;
                  return (
                    <li key={s.title} className="shrink-0 md:shrink">
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-pressed={isActive}
                        className={[
                          "w-full text-left flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                          isActive
                            ? "bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(270_75%_60%)] text-white shadow-[0_8px_24px_-12px_hsl(220_85%_55%/0.7)]"
                            : "text-foreground/75 hover:text-foreground hover:bg-foreground/5",
                        ].join(" ")}
                      >
                        <Icon size={16} className="shrink-0" />
                        <span className="whitespace-nowrap md:whitespace-normal">{s.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Detail */}
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-6 md:p-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(220_85%_55%)] to-[hsl(270_75%_60%)] text-white">
                  <ActiveIcon size={18} />
                </span>
                <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-foreground">
                  {current.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-silver leading-relaxed mb-6 max-w-2xl">
                {current.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {current.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(220_85%_55%/0.12)] text-[hsl(220_85%_55%)]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                aria-label={`Explore ${current.title} service details`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(270_75%_60%)] shadow-[0_10px_30px_-12px_hsl(220_85%_55%/0.7)] hover:opacity-95 transition"
              >
                Explore {current.title}
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
