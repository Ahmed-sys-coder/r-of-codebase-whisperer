import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Briefcase, MapPin, Clock, ArrowUpRight, Rocket, Users, Zap, Globe } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const perks = [
  { icon: Rocket, title: "Build Real Products", desc: "Work on SaaS platforms, AI systems, and enterprise software — not throwaway prototypes." },
  { icon: Users, title: "Small Team, Big Impact", desc: "Your contributions matter. No bureaucracy, no waiting months to ship." },
  { icon: Zap, title: "Cutting-Edge Stack", desc: "React, TypeScript, AI/ML, cloud-native — we use what's best, not what's trendy." },
  { icon: Globe, title: "Global Exposure", desc: "Serve clients from Pakistan, Saudi Arabia, Egypt, and beyond from day one." },
];

const openings = [
  {
    title: "Full-Stack Engineer",
    type: "Full-time",
    location: "Remote / Pakistan",
    description: "Build and ship production-grade web applications using React, Node.js, and cloud infrastructure. You'll own features end-to-end.",
    requirements: ["2+ years with React & TypeScript", "Backend experience (Node.js, Python, or Go)", "Database design & API development", "Strong ownership mindset"],
  },
  {
    title: "AI / ML Engineer",
    type: "Full-time",
    location: "Remote / Pakistan",
    description: "Design and implement AI-powered features including RAG pipelines, multi-agent systems, and intelligent automation for enterprise clients.",
    requirements: ["Experience with LLMs & RAG architectures", "Python, LangChain, or similar frameworks", "Understanding of vector databases", "Production ML deployment experience"],
  },
  {
    title: "UI/UX Designer",
    type: "Full-time / Contract",
    location: "Remote",
    description: "Craft intuitive, enterprise-grade interfaces for SaaS products, dashboards, and client-facing platforms. Figma expertise is essential.",
    requirements: ["Strong portfolio of web/SaaS design work", "Figma proficiency & design system thinking", "Understanding of frontend implementation", "User research & usability testing experience"],
  },
  {
    title: "Business Development Lead",
    type: "Full-time",
    location: "Remote / Pakistan",
    description: "Drive client acquisition and partnerships across global markets. You'll shape how Code Envision grows and positions itself internationally.",
    requirements: ["B2B sales or BD experience in tech", "Excellent written & verbal communication", "Understanding of software services market", "Self-starter with strategic thinking"],
  },
];

const Careers = () => {
  // SEO via <SEO> below

  return (
    <PageTransition>
      <SEO
        title="Careers — Build with us"
        description="Open engineering, AI, and product roles at Code Envision Technologies. Work on real SaaS, AI, and enterprise platforms shipped to production."
        path="/careers"
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2] pt-32 md:pt-40 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--text-dim))] font-medium mb-4">
                Join the Team
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient-headline mb-6">
                Build What Matters.
                <br />
                Grow With Us.
              </h1>
              <p className="text-[hsl(var(--text-silver))] text-sm md:text-base max-w-xl mx-auto">
                We're a team of engineers, designers, and strategists building enterprise-grade software 
                for clients worldwide. If you want to work on meaningful products — not just tasks — 
                Code Envision is your place.
              </p>
            </motion.div>

          {/* Perks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20"
          >
            {perks.map((perk) => (
              <div key={perk.title} className="glass rounded-2xl p-6 glass-hover">
                <perk.icon size={20} className="text-[hsl(var(--text-silver))] mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{perk.title}</h3>
                <p className="text-xs text-[hsl(var(--text-silver))] leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--text-dim))] font-medium mb-3">
              Open Positions
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-headline">
              Current Openings
            </h2>
          </motion.div>

          <div className="space-y-4 mb-20">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 md:p-8 glass-hover group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--text-silver))]">
                        <Clock size={12} /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--text-silver))]">
                        <MapPin size={12} /> {job.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href="mailto:careers@codeenvision.tech?subject=Application: {job.title}"
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-foreground rounded-full border border-[hsl(var(--glass-border))] bg-[hsl(var(--glass-bg))] hover:border-[hsl(var(--glass-border-hover))] transition-all duration-300 btn-glow"
                  >
                    Apply Now
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <p className="text-sm text-[hsl(var(--text-silver))] leading-relaxed mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req) => (
                    <span
                      key={req}
                      className="px-3 py-1 text-[10px] font-medium rounded-full bg-[hsl(var(--glass-bg))] border border-[hsl(var(--glass-border))] text-[hsl(var(--text-dim))]"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-8 md:p-12 text-center"
          >
            <Briefcase size={24} className="text-[hsl(var(--text-silver))] mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Don't See Your Role?
            </h3>
            <p className="text-sm text-[hsl(var(--text-silver))] max-w-md mx-auto mb-6">
              We're always looking for exceptional talent. Send us your portfolio 
              and tell us how you'd make an impact.
            </p>
            <a
              href="mailto:careers@codeenvision.tech"
              className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/85 transition-colors duration-300"
            >
              Send Your Resume
              <ArrowUpRight size={14} />
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
