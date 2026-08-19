import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import PremiumIconBadge, { type IconTone } from "@/components/ui/PremiumIconBadge";
import { TechChip } from "@/components/icons/techIcons";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";

export interface ServiceData {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  problem: string;
  audience: string[];
  impact: string[];
  techStack: string[];
  accent: string;
}

interface ServiceCardProps {
  service: ServiceData;
  index: number;
  reversed?: boolean;
}

const toneRotation: IconTone[] = ["purple", "cyan", "emerald", "amber", "rose"];

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const tone = toneRotation[index % toneRotation.length];
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      id={service.id}
      className="scroll-mt-28 h-full"
    >
      <article
        className={`premium-card group h-full ${tone === "cyan" ? "tone-cyan" : tone === "emerald" ? "tone-emerald" : ""} overflow-hidden`}
      >
        <div className="relative p-6 md:p-8 flex flex-col h-full">
          {/* Icon + Title */}
          <div className="flex items-start gap-4 mb-5">
            <PremiumIconBadge icon={service.icon} tone={tone} size="md" />
            <div className="min-w-0">
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-[-0.01em] mb-1.5">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-silver leading-relaxed">{service.tagline}</p>
            </div>
          </div>

          {/* Short problem summary */}
          <div className="mb-5 p-4 rounded-2xl bg-[hsl(0_0%_100%/0.025)] border border-[hsl(0_0%_100%/0.06)]">
            <p className="text-sm text-silver leading-relaxed line-clamp-3">
              {service.problem}
            </p>
          </div>

          {/* Tech stack chips — always visible */}
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-dim font-semibold mb-3">
              Technology Stack
            </p>
            <div className="flex flex-wrap gap-2 min-w-0">
              {service.techStack.map((tech) => (
                <TechChip key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* Expandable details */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={panelId}
                key="panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                }}
                className="overflow-hidden motion-reduce:!h-auto"
              >
                <motion.div
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="pt-1 pb-2 space-y-5"
                >
                  <div className="p-4 rounded-xl bg-[hsl(0_0%_100%/0.02)] border border-[hsl(0_0%_100%/0.05)]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-dim font-semibold mb-2">
                      The Problem We Solve
                    </p>
                    <p className="text-sm text-silver leading-relaxed">{service.problem}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[hsl(0_0%_100%/0.02)] border border-[hsl(0_0%_100%/0.05)]">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-dim font-semibold mb-3">
                        Who It's For
                      </p>
                      <ul className="space-y-2">
                        {service.audience.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-silver leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-silver mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[hsl(0_0%_100%/0.02)] border border-[hsl(0_0%_100%/0.05)]">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-dim font-semibold mb-3">
                        Business Impact
                      </p>
                      <ul className="space-y-2">
                        {service.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-silver leading-relaxed">
                            <CheckCircle2 size={14} className="text-[hsl(var(--glow-purple))] mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTAs */}
          <div className="mt-auto pt-5 border-t border-[hsl(0_0%_100%/0.06)] flex flex-wrap items-center gap-3">
            <button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls={panelId}
              className="btn-ghost-purple inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-silver border border-[hsl(0_0%_100%/0.1)] transition-all duration-300"
            >
              {expanded ? "Hide Details" : "View Service Details"}
              <ChevronDown
                size={14}
                className="transition-transform duration-300"
                style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            <a
              href={getServiceWhatsAppUrl(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white-cta group !py-2.5 !px-5 !text-xs"
            >
              Discuss This Service
            </a>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default ServiceCard;
