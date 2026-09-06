import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowUpRight,
  Rocket,
  Users,
  Zap,
  Globe,
  Brain,
  Layers,
  Monitor,
  Server,
  Palette,
  BugPlay,
  CheckCircle2,
  Mail,
  GraduationCap,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { TechChip } from "@/components/icons/techIcons";

const APPLY_EMAIL = "info.codeenvision@gmail.com";

const applyHref = (title: string) =>
  `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
    `Internship Application: ${title}`,
  )}&body=${encodeURIComponent(
    `Hi Code Envision Technologies team,\n\nI would like to apply for the ${title} internship.\n\nName:\nCity / Country:\nUniversity / Degree:\nAvailability (hours per week):\nPortfolio / GitHub / LinkedIn:\n\nMy resume is attached to this email.\n\nThank you,`,
  )}`;

const perks = [
  { icon: Rocket, title: "Real Product Work", desc: "Contribute to live SaaS, AI, and enterprise projects — not throwaway exercises." },
  { icon: Users, title: "Senior Mentorship", desc: "Weekly reviews and pairing sessions with engineers and designers on the team." },
  { icon: Zap, title: "Modern Stack", desc: "React, TypeScript, Python, FastAPI, Node.js, and applied AI tooling." },
  { icon: Globe, title: "Remote-First", desc: "Work from anywhere in Pakistan with flexible hours around your studies." },
];

interface Internship {
  title: string;
  icon: typeof Brain;
  department: string;
  mode: string;
  duration: string;
  stack: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const internships: Internship[] = [
  {
    title: "AI / Machine Learning Intern",
    icon: Brain,
    department: "AI & Data",
    mode: "Remote",
    duration: "3 months",
    stack: ["Python", "TensorFlow", "LangChain", "FastAPI"],
    description:
      "Support applied AI work — data preparation, model experiments, and RAG-based assistants used in client projects.",
    responsibilities: [
      "Clean and prepare datasets for model experiments",
      "Run and document model evaluations",
      "Help build retrieval pipelines and prompt workflows",
    ],
    requirements: [
      "Python fundamentals and basic ML understanding",
      "Familiarity with notebooks and Git",
      "Clear written communication",
    ],
  },
  {
    title: "Full Stack Development Intern",
    icon: Layers,
    department: "Engineering",
    mode: "Remote",
    duration: "3–6 months",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    description:
      "Work across the stack on internal tools and client dashboards, shipping small features end to end.",
    responsibilities: [
      "Build UI components and connect them to APIs",
      "Write simple REST endpoints and database queries",
      "Fix bugs reported during QA reviews",
    ],
    requirements: [
      "Working knowledge of JavaScript/TypeScript and React",
      "Basic SQL and REST API understanding",
      "Comfortable with Git branching",
    ],
  },
  {
    title: "Frontend Development Intern",
    icon: Monitor,
    department: "Engineering",
    mode: "Remote",
    duration: "3 months",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Turn design files into responsive, accessible interfaces for product and marketing pages.",
    responsibilities: [
      "Implement responsive layouts from Figma designs",
      "Improve accessibility and page performance",
      "Maintain reusable component patterns",
    ],
    requirements: [
      "HTML, CSS, and React fundamentals",
      "Attention to spacing, typography, and detail",
      "Basic understanding of responsive design",
    ],
  },
  {
    title: "Backend Development Intern",
    icon: Server,
    department: "Engineering",
    mode: "Remote",
    duration: "3–6 months",
    stack: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
    description:
      "Help build and document APIs, background jobs, and database models behind our platforms.",
    responsibilities: [
      "Implement CRUD endpoints with validation",
      "Write database migrations and seed scripts",
      "Document endpoints for frontend consumers",
    ],
    requirements: [
      "Node.js or Python basics",
      "Understanding of relational databases",
      "Familiarity with Git and API testing tools",
    ],
  },
  {
    title: "UI/UX Design Intern",
    icon: Palette,
    department: "Design",
    mode: "Remote",
    duration: "3 months",
    stack: ["Figma", "React"],
    description:
      "Support product design work — wireframes, UI screens, and design-system upkeep for web apps.",
    responsibilities: [
      "Produce wireframes and high-fidelity screens in Figma",
      "Maintain components, tokens, and design documentation",
      "Prepare handoff specs for developers",
    ],
    requirements: [
      "Portfolio with web or app design work",
      "Figma proficiency",
      "Interest in usability and design systems",
    ],
  },
  {
    title: "QA / Software Testing Intern",
    icon: BugPlay,
    department: "Quality Assurance",
    mode: "Remote",
    duration: "3 months",
    stack: ["TypeScript", "Git", "REST APIs"],
    description:
      "Test releases across web and mobile builds, write clear reproduction steps, and grow into test automation.",
    responsibilities: [
      "Execute manual test passes on new releases",
      "Log detailed, reproducible bug reports",
      "Assist with basic automated UI test scripts",
    ],
    requirements: [
      "Structured, detail-oriented approach",
      "Basic scripting knowledge is a plus",
      "Good written English for bug reports",
    ],
  },
];

const Careers = () => {
  return (
    <PageTransition>
      <SEO
        title="Internships — Code Envision Technologies"
        description="Remote internship opportunities in AI/ML, full stack, frontend, backend, UI/UX design, and QA at Code Envision Technologies. Apply with your resume by email."
        path="/careers"
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2] pt-32 md:pt-40 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16 md:mb-20"
            >
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-semibold text-white px-3.5 py-1.5 rounded-full bg-[#8A08FA] mb-5">
                <GraduationCap size={14} /> Internships Open
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient-headline mb-5">
                Start Your Career
                <br />
                Building Real Software.
              </h1>
              <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                We currently offer remote internships only. You&apos;ll work alongside our
                engineers and designers on production AI, SaaS, and web projects — with
                mentorship, code reviews, and a certificate on completion.
              </p>
            </motion.div>

            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 md:mb-20"
            >
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="rounded-2xl p-6 bg-[#0F0F16] border border-white/12 hover:border-[#8A08FA]/50 transition-colors duration-300"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#8A08FA] text-white mb-4">
                    <perk.icon size={18} />
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{perk.title}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Openings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400 font-medium mb-3">
                Open Positions
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-headline">
                Current Internships
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16 md:mb-20">
              {internships.map((job, i) => (
                <motion.article
                  key={job.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex flex-col rounded-2xl p-6 md:p-7 bg-[#0F0F16] border border-white/12 hover:border-[#8A08FA]/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8A08FA] text-white">
                      <job.icon size={19} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white leading-snug mb-1.5">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300">
                          <Briefcase size={12} /> {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300">
                          <MapPin size={12} /> {job.mode}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300">
                          <Clock size={12} /> {job.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {job.stack.map((t) => (
                      <TechChip key={t} name={t} size={16} />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-semibold mb-2">
                        Responsibilities
                      </p>
                      <ul className="space-y-1.5">
                        {job.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-[#B583FF] mt-1 shrink-0" />
                            <span className="text-xs text-neutral-300 leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-semibold mb-2">
                        Requirements
                      </p>
                      <ul className="space-y-1.5">
                        {job.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-[#B583FF] mt-1 shrink-0" />
                            <span className="text-xs text-neutral-300 leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={applyHref(job.title)}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full bg-[#8A08FA] hover:bg-[#0025CC] transition-colors duration-300"
                  >
                    Apply via Email
                    <ArrowUpRight size={15} />
                  </a>
                  <p className="mt-2.5 text-[11px] text-neutral-400 text-center">
                    Email us to apply
                  </p>
                </motion.article>
              ))}
            </div>

            {/* How to apply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 md:p-12 text-center bg-[#0F0F16] border border-[#8A08FA]/35"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#8A08FA] text-white mx-auto mb-5">
                <Mail size={20} />
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                How to Send Your Resume
              </h3>
              <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6 leading-relaxed">
                Email your CV/resume (PDF) with the internship title in the subject line. Include
                your university, weekly availability, and portfolio or GitHub links. We reply to
                shortlisted applicants within 7 working days.
              </p>
              <a
                href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent("Internship Application")}`}
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white rounded-full bg-[#8A08FA] hover:bg-[#0025CC] transition-colors duration-300"
              >
                Email us
                <ArrowUpRight size={15} />
              </a>

            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Careers;
