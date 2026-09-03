import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import { Check, ArrowRight } from "lucide-react";
import { SERVICE_DETAILS } from "@/components/services/serviceDetails";

const ServicesOverview = () => {
  const [active, setActive] = useState(0);
  const current = SERVICE_DETAILS[active];
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
            AI platforms, chatbots, machine learning, custom software, web and
            mobile apps, and product design — engineered for scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-card/80 backdrop-blur-sm shadow-[0_24px_70px_-34px_rgba(138,8,250,0.45)] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
            {/* Tabs */}
            <div className="p-3 md:p-4 md:border-r border-b md:border-b-0 border-white/10 bg-background/40">
              <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                {SERVICE_DETAILS.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = i === active;
                  return (
                    <li key={s.slug} className="shrink-0 md:shrink">
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-pressed={isActive}
                        className={[
                          "group w-full text-left flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                          isActive
                            ? "bg-[#8A08FA] text-white shadow-[0_10px_28px_-14px_rgba(138,8,250,0.75)]"
                            : "text-foreground/75 hover:text-white hover:bg-[#0025CC]",
                        ].join(" ")}
                      >
                        <Icon size={16} className="shrink-0" />
                        <span className="whitespace-nowrap md:whitespace-normal">
                          {s.name}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Detail */}
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-6 md:p-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white bg-[#8A08FA] shadow-[0_12px_30px_-14px_rgba(138,8,250,0.8)]">
                  <ActiveIcon size={20} />
                </span>
                <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-foreground">
                  {current.name}
                </h3>
              </div>
              <p className="text-sm md:text-base text-silver leading-relaxed mb-6 max-w-2xl">
                {current.heroSubtitle}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {current.overviewBenefits.slice(0, 4).map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,37,204,0.22)] text-[#B583FF]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-8">
                {current.techBadges.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-[11px] font-medium text-white/85 border border-white/12 bg-white/[0.04]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to={`/services/${current.slug}`}
                aria-label={`Explore ${current.name}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#8A08FA] hover:bg-[#0025CC] shadow-[0_14px_34px_-16px_rgba(138,8,250,0.8)] transition-colors duration-300"
              >
                Explore {current.name}
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
