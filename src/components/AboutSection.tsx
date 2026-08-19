import { motion } from "framer-motion";
import { Package, Globe, Briefcase, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "PROJECTS DELIVERED", value: 30, suffix: "+", icon: Package },
  { label: "COUNTRIES SERVED", value: 4, suffix: "", icon: Globe },
  { label: "INDUSTRIES COVERED", value: 8, suffix: "+", icon: Briefcase },
  { label: "YEARS EXPERIENCE", value: 2, suffix: "+", icon: Award },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #123BFF 0%, #5B2EFF 50%, #8B35FF 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}
      />

      {/* Soft radial glow behind cards */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="px-6 py-24 md:py-32 lg:py-36">
        <div className="w-full max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2
              className="font-bold tracking-tight mb-6 text-[26px] sm:text-[30px] md:text-[36px] lg:text-[48px] leading-[1.15] text-white"
              style={{ textShadow: "0 4px 20px rgba(15, 69, 148, 0.35)" }}
            >
              Why Choose Code Envision Technologies
            </h2>
            <p className="text-base md:text-lg text-white/85 max-w-[720px] mx-auto leading-relaxed">
              We build secure, scalable, and AI-ready digital products that help
              businesses grow faster, operate smarter, and compete globally.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div
                    className="group h-full rounded-2xl md:rounded-3xl p-6 md:p-8 text-center cursor-pointer
                      bg-white/[0.10] backdrop-blur-xl border border-white/[0.22]
                      transition-all duration-300 ease-out
                      hover:bg-white hover:border-white/90
                      hover:-translate-y-2 hover:scale-[1.02]
                      hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5
                        bg-white/[0.15] border border-white/[0.25]
                        transition-all duration-300 ease-out
                        group-hover:scale-110 group-hover:-translate-y-1
                        group-hover:bg-[#3B0764]/10 group-hover:border-[#3B0764]/30"
                    >
                      <Icon
                        size={24}
                        className="text-white/90 transition-colors duration-300 group-hover:text-[#3B0764]"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Number */}
                    <p className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2 transition-colors duration-300 group-hover:text-[#3B0764]">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </p>

                    {/* Label */}
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-medium transition-colors duration-300 group-hover:text-[#3B0764]">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
