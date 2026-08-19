import { motion } from "framer-motion";
import { Gem, Cog, Shield, ClipboardCheck, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Gem,
    label: "Client Value",
    description:
      "We focus on building software solutions that solve real business problems and create measurable value for our clients.",
    iconBg: "linear-gradient(135deg, rgba(15,69,148,0.12), rgba(37,99,235,0.10))",
    iconColor: "#0F4594",
    iconHoverColor: "#2563EB",
  },
  {
    icon: Cog,
    label: "Quality Engineering",
    description:
      "We write clean, scalable, and maintainable code so every product is reliable, secure, and ready to grow.",
    iconBg: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.10))",
    iconColor: "#2563EB",
    iconHoverColor: "#7C3AED",
  },
  {
    icon: Shield,
    label: "Integrity",
    description:
      "We work with honesty, transparency, and clear communication throughout every stage of the project.",
    iconBg: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(139,92,246,0.10))",
    iconColor: "#7C3AED",
    iconHoverColor: "#8B5CF6",
  },
  {
    icon: ClipboardCheck,
    label: "Accountability",
    description:
      "We take ownership of our work, timelines, decisions, and results to keep every project moving with confidence.",
    iconBg: "linear-gradient(135deg, rgba(15,69,148,0.12), rgba(37,99,235,0.10))",
    iconColor: "#0F4594",
    iconHoverColor: "#2563EB",
  },
  {
    icon: Users,
    label: "Collaboration",
    description:
      "We work closely with clients as partners, combining technical expertise with their business vision.",
    iconBg: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.10))",
    iconColor: "#2563EB",
    iconHoverColor: "#7C3AED",
  },
  {
    icon: TrendingUp,
    label: "Growth Mindset",
    description:
      "We design digital products that support long-term growth through better performance, automation, and user experience.",
    iconBg: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(139,92,246,0.10))",
    iconColor: "#7C3AED",
    iconHoverColor: "#8B5CF6",
  },
];

const ValuesStrip = () => {
  return (
    <section className="relative z-10 px-6 py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-dim font-medium mb-4">
            Core Values
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-silver leading-relaxed">
            We build software, AI platforms, and digital products with a focus on quality, trust, clarity, and long-term business value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="premium-card glass-hover group p-6 md:p-8 flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500"
                    style={{
                      background: value.iconBg,
                      boxShadow: `0 8px 22px -10px ${value.iconColor}33`,
                    }}
                  >
                    <Icon
                      size={22}
                      className="transition-colors duration-500"
                      style={{ color: value.iconColor }}
                    />
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-[#0B3D91] mb-2">
                    {value.label}
                  </h3>

                  <p className="text-sm text-silver leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesStrip;