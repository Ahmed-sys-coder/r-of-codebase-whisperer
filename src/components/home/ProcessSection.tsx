import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Discovery & Requirements",
    desc: "We dive deep into your business goals, user needs, and technical requirements to create a solid foundation.",
  },
  {
    n: "02",
    title: "Strategy & Product Architecture",
    desc: "Our team designs the technical architecture and product strategy that ensures scalability and success.",
  },
  {
    n: "03",
    title: "UI/UX Design",
    desc: "We craft intuitive user experiences and beautiful interfaces that engage users and drive results.",
  },
  {
    n: "04",
    title: "Development & Testing",
    desc: "Our developers build your solution using modern best practices, with rigorous testing at every stage.",
  },
  {
    n: "05",
    title: "Launch, SEO & Ongoing Support",
    desc: "We handle deployment, optimize for search engines, and provide continuous support for your success.",
  },
];

const ProcessSection = () => (
  <section className="relative z-10 px-6 py-24 md:py-32">
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
          How We Work
        </h2>
        <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
          Our process takes your idea from discovery to launch through planning, UI/UX design, development, testing, deployment, and ongoing support.
        </p>
      </motion.div>

      <div className="relative">
        {/* Desktop connector line */}
        <div
          className="hidden md:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#0F4594]/30 to-transparent"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-4 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group"
            >
              {/* Arrow between cards (desktop) */}
              {i < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="hidden md:block absolute top-10 -right-3 z-10 text-[#0F4594]/50"
                  aria-hidden="true"
                />
              )}
              <div className="relative bg-white border border-[#E2E8F0] rounded-2xl p-6 h-full shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_36px_rgba(15,69,148,0.12)] hover:-translate-y-1 hover:border-[#0F4594]/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F4594] to-[#7c3aed] flex items-center justify-center text-white text-sm font-bold shadow-[0_8px_20px_rgba(15,69,148,0.25)] mb-4">
                  {s.n}
                </div>
                <h3 className="text-base font-semibold text-[#0F172A] mb-2 tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
