import { motion } from "framer-motion";
import { TechChip } from "@/components/icons/techIcons";

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "ASP.NET Core", "FastAPI", "Django"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    label: "AI / Automation",
    items: [
      "OpenAI APIs",
      "Multi-agentic RAG Systems",
      "AI Agents",
      "Chatbots",
      "Automation Workflows",
    ],
  },
  {
    label: "Cloud / Tools",
    items: ["Vercel", "GitHub", "Docker", "REST APIs"],
  },
];

const Card = ({ g }: { g: (typeof groups)[number] }) => (
  <div className="premium-card card-3d card-gradient-hover p-7 md:p-9 flex flex-col min-h-[300px] md:min-h-[340px] h-full overflow-hidden">
    <p className="text-[10px] uppercase tracking-[0.25em] text-dim font-semibold mb-6">
      {g.label}
    </p>
    <div className="flex flex-wrap gap-3 md:gap-4 min-w-0">
      {g.items.map((tech) => (
        <TechChip key={tech} name={tech} />
      ))}
    </div>
  </div>
);

const TechStackSection = () => {
  // Duplicate the list once so the keyframes can scroll exactly -50%
  // for a seamless infinite loop.
  const loop = [...groups, ...groups];

  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
          Technologies We Use
        </h2>
        <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
          We use modern frontend, backend, cloud, database, and AI technologies to build fast, secure, and scalable digital products.
        </p>
        </motion.div>

        <div className="tech-marquee" aria-label="Technology stack marquee">
          <div className="tech-marquee-track">
            {loop.map((g, i) => (
              <div
                key={`${g.label}-${i}`}
                className="tech-marquee-item"
                aria-hidden={i >= groups.length ? true : undefined}
              >
                <Card g={g} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
