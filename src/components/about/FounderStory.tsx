import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FounderStory = () => {
  return (
    <section className="relative z-10 px-6 py-16 md:py-24">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl overflow-hidden"
        >
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-dim font-medium mb-8">
              The Origin
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-gradient-headline">
                  Why We Started This
                </h2>

                <div className="space-y-4 text-sm text-silver leading-relaxed">
                  <p>
                    Pakistan has extraordinary engineering talent. We produce world-class developers,
                    designers, and architects every year. Yet Western companies still assume they need
                    to hire from San Francisco or Berlin. This bias costs them talent. It costs us
                    opportunity. We wanted to change that.
                  </p>
                  <p>
                    We didn't start as another outsourcing shop. From day one, we positioned ourselves
                    as technical co-founders — the kind of team that understands business models, user
                    psychology, market dynamics, and scalable architecture. We treat every product as
                    if it were our own because, philosophically, it is.
                  </p>
                  <p>
                    We've shipped AI legal platforms that process thousands of case files. Built trading
                    systems handling real market data. Created multi-sided marketplaces serving hundreds
                    of thousands of users. We've worked across LegalTech, FinTech, PropTech, HealthTech,
                    and enterprise software.
                  </p>
                  <p>
                    Our thesis is simple: Pakistan can compete with the best. Not by undercutting on price,
                    but by over-delivering on quality, speed, and strategic thinking. Every product we
                    ship is proof of that.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="relative p-6 md:p-8 rounded-2xl bg-[hsl(0_0%_100%/0.02)] border border-[hsl(0_0%_100%/0.06)]">
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 20% 10%, hsl(260 80% 60% / 0.06), transparent 70%)",
                    }}
                  />
                  <div className="relative z-10">
                    <Quote
                      size={24}
                      className="text-[hsl(var(--glow-purple))] opacity-40 mb-4"
                    />
                    <p className="text-sm md:text-base text-foreground font-medium leading-relaxed mb-6 italic">
                      "We're not building a company. We're building proof that world-class engineering
                      comes from Pakistan, not despite it."
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Founder & CEO
                      </p>
                      <p className="text-xs text-dim">Code Envision Technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderStory;
