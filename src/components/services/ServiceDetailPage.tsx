import { motion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import FAQSection, { buildFAQSchema } from "@/components/FAQSection";
import PremiumIconBadge from "@/components/ui/PremiumIconBadge";
import { TechChip } from "@/components/icons/techIcons";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";
import { SERVICE_HERO_IMAGES, SERVICE_OVERVIEW_CONTENT, type ServiceDetail } from "./serviceDetails";


interface Props {
  service: ServiceDetail;
}

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`relative z-10 px-6 py-16 md:py-20 ${className}`}>
    <div className="w-full max-w-6xl mx-auto">{children}</div>
  </section>
);

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-10 md:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gradient-headline mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const ServiceDetailPage = ({ service }: Props) => {
  const Icon = service.icon;
  const cta = getServiceWhatsAppUrl(service.name);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.heroSubtitle,
    provider: { "@type": "Organization", name: "Code Envision Technologies" },
  };

  return (
    <PageTransition>
      <SEO
        title={`${service.name} Services — Code Envision Technologies`}
        description={service.heroSubtitle}
        path={`/services/${service.slug}`}
        keywords={`${service.name}, ${service.techBadges.join(", ")}`}
        jsonLd={[schema, buildFAQSchema(service.faqs)]}
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2]">
          {/* 1. HERO — full-width background image with blue/purple overlay */}
          <section
            className="relative w-full overflow-hidden flex items-center justify-center min-h-[320px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px] pt-28 pb-16 md:pt-32 md:pb-20 px-6"
          >
            <img
              src={SERVICE_HERO_IMAGES[service.slug] ?? service.overviewImage}
              alt={`${service.name} background`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, hsl(225 70% 10% / 0.92) 0%, hsl(232 70% 18% / 0.88) 45%, hsl(265 70% 25% / 0.9) 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top, hsl(220 85% 55% / 0.25), transparent 60%), radial-gradient(ellipse at bottom, hsl(270 75% 55% / 0.25), transparent 60%)",
              }}
            />
            <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1.1] text-white mb-5"
              >
                {service.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-sm md:text-base lg:text-lg text-white/85 max-w-[850px] mx-auto leading-relaxed"
              >
                {service.heroSubtitle}
              </motion.p>
            </div>
          </section>


          {/* 2. OVERVIEW LANDSCAPE CARD */}
          <Section>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
                {(() => {
                  const overview =
                    SERVICE_OVERVIEW_CONTENT[service.slug] ?? {
                      intro: service.overviewParagraphs[0] ?? service.heroSubtitle,
                      miniCards: [],
                    };
                  return (
                    <div className="p-8 md:p-10 flex flex-col">
                      <div className="flex items-center gap-3 mb-5">
                        <PremiumIconBadge icon={Icon} tone="purple" size="sm" />
                        <span className="text-[10px] uppercase tracking-[0.22em] text-[hsl(258_90%_66%)] font-semibold px-2.5 py-1 rounded-full bg-[hsl(258_90%_66%/0.08)] border border-[hsl(258_90%_66%/0.2)]">
                          Service
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-[-0.02em] text-foreground mb-4 leading-tight">
                        {service.name}
                      </h2>
                      <p className="text-sm md:text-base text-silver leading-relaxed mb-6">
                        {overview.intro}
                      </p>
                      {overview.miniCards.length > 0 && (
                        <div className="grid grid-cols-1 gap-3 mb-6">
                          {overview.miniCards.map((m) => (
                            <div
                              key={m.title}
                              className="flex items-start gap-3 rounded-xl p-3.5 border border-[hsl(258_90%_66%/0.18)]"
                              style={{
                                background:
                                  "linear-gradient(135deg, hsl(220 85% 55% / 0.06), hsl(270 75% 60% / 0.06))",
                              }}
                            >
                              <span
                                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white shrink-0"
                                style={{
                                  background:
                                    "linear-gradient(135deg, hsl(220 86% 48%), hsl(258 90% 60%))",
                                }}
                              >
                                <CheckCircle2 size={16} />
                              </span>
                              <div className="min-w-0">
                                <h4 className="text-sm font-semibold text-foreground leading-snug mb-0.5">
                                  {m.title}
                                </h4>
                                <p className="text-xs text-silver leading-relaxed">
                                  {m.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <ul className="flex flex-wrap gap-2 mt-auto">
                        {service.overviewBenefits.map((b) => (
                          <li
                            key={b}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/85 px-2.5 py-1 rounded-full border border-border/70 bg-background/60"
                          >
                            <CheckCircle2
                              size={12}
                              className="text-[hsl(258_90%_66%)] shrink-0"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })()}
                <div className="relative min-h-[260px] md:min-h-full">
                  <img
                    src={service.overviewImage}
                    alt={`${service.name} illustration`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(220 85% 35% / 0.35), hsl(270 75% 45% / 0.35))",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </Section>

          {/* 3. SERVICES SECTION */}
          <Section>
            <SectionHeading title={service.servicesHeading} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {service.serviceItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_hsl(220_85%_55%/0.45)] transition-all duration-300"
                >
                  <div className="mb-4">
                    <PremiumIconBadge icon={Sparkles} tone="purple" size="sm" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-silver leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 4. FEATURES — premium blue/purple */}
          <section className="relative z-10 px-6 py-16 md:py-20">
            <div className="w-full max-w-6xl mx-auto">
              <div
                className="relative rounded-3xl px-6 md:px-12 py-12 md:py-16 border border-white/15 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(222 80% 32%) 0%, hsl(244 70% 38%) 45%, hsl(270 75% 50%) 100%)",
                  boxShadow:
                    "0 30px 80px -30px hsl(258 80% 40% / 0.55), inset 0 1px 0 hsl(0 0% 100% / 0.12)",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 15% 10%, hsl(220 100% 70% / 0.35), transparent 45%), radial-gradient(circle at 85% 90%, hsl(280 100% 70% / 0.3), transparent 50%)",
                  }}
                />
                <div className="relative">

                <div className="text-center mb-10 md:mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-white mb-3">
                    {service.featuresHeading}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {service.features.map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: i * 0.05 }}
                      className="rounded-2xl p-6 border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                    >
                      <div className="mb-4">
                        <PremiumIconBadge
                          icon={CheckCircle2}
                          tone="cyan"
                          size="sm"
                        />
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                        {f.title}
                      </h4>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {f.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </section>


          {/* 5. TECH / PLATFORMS */}
          <Section>
            <SectionHeading title={service.techHeading} />
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {service.techList.map((t) => (
                <TechChip key={t} name={t} />
              ))}
            </div>
          </Section>

          {/* 6. PROCESS */}
          <Section>
            <SectionHeading title={service.processHeading} />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
              {service.processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="relative rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-5"
                >
                  <div
                    className="absolute -top-3 left-5 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(220 85% 55%), hsl(270 75% 60%))",
                    }}
                  >
                    {i + 1}
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground mt-3 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-sm text-silver leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 7. WHY CHOOSE */}
          <Section>
            <SectionHeading title={service.whyHeading} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {service.whyItems.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6"
                >
                  <div className="mb-4">
                    <PremiumIconBadge icon={Sparkles} tone="amber" size="sm" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {w.title}
                  </h4>
                  <p className="text-sm text-silver leading-relaxed">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* 8. RELATED BLOGS */}
          <Section>
            <SectionHeading title={service.blogsHeading} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.relatedBlogs.map((b, i) => (
                <motion.article
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-2xl overflow-hidden border border-border/60 bg-card/70 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-semibold text-foreground mb-2 line-clamp-2">
                      {b.title}
                    </h4>
                    <p className="text-sm text-silver leading-relaxed mb-4 line-clamp-3">
                      {b.excerpt}
                    </p>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(258_90%_66%)] hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </Section>

          {/* 9. FAQs */}
          <FAQSection
            title="Frequently Asked Questions"
            faqs={service.faqs}
          />

          {/* 10. FINAL CTA */}
          <section className="relative z-10 px-6 pb-24">
            <div className="w-full max-w-5xl mx-auto">
              <div
                className="rounded-3xl px-6 md:px-12 py-12 md:py-16 text-center border border-white/10"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(220 85% 45%) 0%, hsl(270 75% 55%) 100%)",
                  boxShadow:
                    "0 30px 80px -30px hsl(258 90% 50% / 0.7), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
                }}
              >
                <h2 className="text-2xl md:text-4xl font-bold tracking-[-0.02em] text-white mb-4">
                  Ready to build your {service.name} solution?
                </h2>
                <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-7">
                  Let's talk about your goals and how we can ship them — fast,
                  reliably, and to your budget.
                </p>
                <a
                  href={cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[hsl(258_60%_25%)] bg-white shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-transform"
                >
                  Start Your Project
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </PageTransition>
  );
};

export default ServiceDetailPage;
