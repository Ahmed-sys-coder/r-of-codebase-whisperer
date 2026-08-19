import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We came in with a rough concept for a legal AI platform. They turned it into a multi-agent research system processing thousands of case files — in 14 weeks. No other team we spoke to even understood the architecture we needed.",
    name: "Internal Product Team",
    role: "Legal AI Research Platform",
  },
  {
    quote:
      "Our inventory was a mess across multiple branches. They didn't just build us a dashboard — they redesigned our operational workflow. Stock discrepancies dropped within the first month of launch.",
    name: "Operations Director",
    role: "Enterprise Inventory Platform",
  },
  {
    quote:
      "They built our bilingual services platform and understood the RTL, cultural, and messaging integration requirements without us having to explain twice. The site was live in 6 weeks.",
    name: "Business Owner",
    role: "Bilingual Services Platform",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-dim font-medium mb-4">
            From Our Partners
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline">
            Don't Take Our Word For It
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 md:p-8 flex flex-col"
            >
              <Quote size={20} className="text-dim mb-4 shrink-0" />
              <p className="text-sm text-silver leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-[11px] text-dim mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
