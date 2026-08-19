import { motion } from "framer-motion";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL, WHATSAPP_ARIA } from "@/lib/whatsapp";

const CaseStudyCTA = () => {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-14 text-center relative overflow-hidden"
        >
          {/* Accent glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(260 80% 60% / 0.08), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-[hsl(0_0%_100%/0.05)] border border-[hsl(0_0%_100%/0.08)] flex items-center justify-center mx-auto mb-6">
              <Lightbulb size={22} className="text-silver" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
              Your Project Could Be
              <br />
              The Next Case Study.
            </h2>
            <p className="text-sm text-silver max-w-md mx-auto leading-relaxed mb-8">
              Every project above started as a single conversation. We'll listen 
              to your challenge, tell you honestly if we're the right team, and 
              outline exactly what it takes to ship. No pitch decks. No fluff.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={WHATSAPP_ARIA}
                className="btn-white-cta group"
              >
                <FaWhatsapp size={16} />
                Talk About Your Project
                <ArrowUpRight size={16} className="arrow" />
              </a>

              <a
                href="mailto:info.codeenvision@gmail.com"
                className="btn-ghost-purple group inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-sm font-medium text-silver border border-[hsl(0_0%_100%/0.08)] transition-all duration-300"
              >
                info.codeenvision@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyCTA;
