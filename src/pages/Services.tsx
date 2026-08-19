import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import ServiceHero from "@/components/services/ServiceHero";
import { Link } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ServiceCard from "@/components/services/ServiceCard";

import { servicesData } from "@/components/services/servicesData";
import { SERVICE_DETAILS } from "@/components/services/serviceDetails";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import FAQSection, { buildFAQSchema } from "@/components/FAQSection";


const Services = () => {
  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Discovery and architecture usually take 1–2 weeks. From there, a focused MVP ships in 6–10 weeks, and larger platforms run in 3‑month delivery cycles with continuous releases.",
    },
    {
      q: "Can you integrate AI into our existing product?",
      a: "Yes. We add AI features to existing SaaS and enterprise platforms — search, summarization, copilots, document understanding, and custom model pipelines — without rewriting your stack.",
    },
    {
      q: "Do you provide post‑launch support and scaling?",
      a: "Every engagement includes monitoring, performance tuning, and an SLA‑backed support plan. We stay involved as your traffic, data, and team grow.",
    },
    {
      q: "Which tech stacks do you use?",
      a: "We favor TypeScript, React, Node, Python, and managed cloud (AWS, GCP, Supabase). Stack choices follow the product and team — not the other way around.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesData.map((s, i) => ({
      "@type": "Service",
      position: i + 1,
      name: s.title,
      description: s.tagline,
      provider: { "@type": "Organization", name: "Code Envision Technologies" },
    })),
  };

  return (
    <PageTransition>
      <SEO
        title="Services — AI & SaaS Software"
        description="Custom AI development, SaaS engineering, enterprise platforms, and product-grade software services from Code Envision Technologies."
        path="/services"
        keywords="AI development services, SaaS development, enterprise software, custom software engineering"
        jsonLd={[serviceSchema, buildFAQSchema(faqs)]}
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2]">
          <ServiceHero />

          {/* All Services — compact landscape cards linking to detail pages */}
          <section className="relative z-10 px-6 pb-8 md:pb-12">
            <div className="w-full max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gradient-headline mb-3">
                  Explore Each Service
                </h2>
                <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
                  Pick a service to view its dedicated page with features, technologies, process, and FAQs.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {SERVICE_DETAILS.map((s, i) => {
                  const SIcon = s.icon;
                  return (
                    <motion.div
                      key={s.slug}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                    >
                      <Link
                        to={`/services/${s.slug}`}
                        className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_hsl(220_85%_55%/0.45)] transition-all duration-300 h-full"
                      >
                        <span
                          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, hsl(220 86% 48%), hsl(258 90% 60%))",
                          }}
                        >
                          <SIcon size={18} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm md:text-[15px] font-semibold text-foreground leading-snug mb-0.5 truncate">
                            {s.name}
                          </h3>
                          <p className="text-xs text-silver line-clamp-2">
                            {s.heroSubtitle}
                          </p>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-[hsl(258_90%_66%)] shrink-0 group-hover:translate-x-0.5 transition-transform"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Service Cards */}
          <section className="relative z-10 px-6 pt-8">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              {servicesData.map((service, i) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={i}
                  reversed={i % 2 !== 0}
                />
              ))}
            </div>
          </section>


          <FAQSection
            title="Services FAQ"
            intro={undefined}
            faqs={faqs}
          />

          <Footer />
        </main>
      </div>
    </PageTransition>
  );
};

export default Services;
