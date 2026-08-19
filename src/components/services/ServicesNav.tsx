import { motion } from "framer-motion";
import {
  Braces,
  BrainCircuit,
  Rocket,
  Globe2,
  Network,
  Lightbulb,
} from "lucide-react";
import { servicesData } from "./servicesData";
import PremiumIconBadge, { type IconTone } from "@/components/ui/PremiumIconBadge";

const navMeta: Record<string, { label: string; icon: any; tone: IconTone }> = {
  "custom-software":  { label: "Custom Software",  icon: Braces,        tone: "purple" },
  "ai-automation":    { label: "AI Platforms",     icon: BrainCircuit,  tone: "rose"   },
  "saas-development": { label: "SaaS Product",     icon: Rocket,        tone: "emerald"},
  "enterprise-web":   { label: "Enterprise Web",   icon: Globe2,        tone: "cyan"   },
  "api-integrations": { label: "API Integration",  icon: Network,       tone: "amber"  },
  "mvp-startups":     { label: "MVP Development",  icon: Lightbulb,     tone: "amber"  },
};

const ServicesNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="px-6 pb-16 md:pb-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="glass rounded-2xl p-4 md:p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {servicesData.map((service) => {
              const meta = navMeta[service.id] ?? {
                label: service.title.split(" ").slice(0, 2).join(" "),
                icon: service.icon,
                tone: "purple" as IconTone,
              };
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="group flex flex-col items-center gap-2 px-3 py-3 rounded-xl text-center hover:bg-[hsl(0_0%_100%/0.04)] transition-colors duration-300"
                >
                  <PremiumIconBadge icon={meta.icon} tone={meta.tone} size="sm" />
                  <span className="text-[10px] md:text-[11px] font-medium text-silver group-hover:text-foreground transition-colors duration-300 leading-tight">
                    {meta.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesNav;
