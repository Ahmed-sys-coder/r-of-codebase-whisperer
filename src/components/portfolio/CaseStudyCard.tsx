import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Compass,
  Layers,
  BarChart3,
  Sparkles,
  Users,
  ChevronDown,
  ExternalLink,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useId, useState } from "react";
import type { CaseStudy } from "./caseStudiesData";

interface Props {
  study: CaseStudy;
  index: number;
}

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1200&q=70&auto=format&fit=crop`;

const TITLE_OVERRIDES: Record<string, string> = {
  wukalagpt: "Legal AI Platform",
  "goldman-trading": "Trading Analytics Platform",
  "roommatch-pk": "Property Rental Platform",
  "jeddah-repair": "Repair Service Platform",
  enters: "Vehicle Rental System",
  "uml-generator": "UML Generator",
  "al-nukhwa": "Healthcare Platform",
  "lightcraft-lahore": "Stock & Invoice System",
  "ai-blog-generator": "AI Content Platform",
  "smart-seo-audit": "SEO Audit Platform",
  "ai-wellness-tracker": "AI Wellness Tracker",
  "cs-learning-portal": "CS Learning Platform",
  "law-study-portal": "Law Study Platform",
  "ai-notes-assistance": "AI Notes Assistant",
};

const DESCRIPTION_OVERRIDES: Record<string, string> = {
  wukalagpt:
    "An AI-powered legal research and document intelligence platform built to help users search, analyze, and understand legal information faster.",
  "goldman-trading":
    "A real-time analytics platform for market tracking, data visualization, portfolio insights, and fast decision-making.",
  "roommatch-pk":
    "A rental discovery and matching platform designed to connect users with suitable properties through a clean marketplace experience.",
  "jeddah-repair":
    "A repair and maintenance service platform for managing bookings, service requests, customer communication, and vendor workflows.",
  enters:
    "A vehicle rental management system built to handle bookings, listings, customer inquiries, and rental operations.",
  "uml-generator":
    "An offline UML and architecture documentation tool designed for software modeling and structured technical documentation.",
  "al-nukhwa":
    "A healthcare-focused digital platform built to support patient workflows, service management, and user-friendly medical interactions.",
  "lightcraft-lahore":
    "A stock and invoice management system for inventory tracking, product records, billing, and daily operational reporting.",
  "ai-blog-generator":
    "An AI-powered content generation platform for blogs, captions, keywords, meta tags, and SEO-focused workflows.",
  "smart-seo-audit":
    "A smart SEO audit platform for website analysis, technical SEO checks, recommendations, and performance tracking.",
  "ai-wellness-tracker":
    "An AI wellness platform for stress tracking, mood analysis, recommendations, and personal progress monitoring.",
  "cs-learning-portal":
    "A computer science learning platform with tutorials, quizzes, progress tracking, coding practice, and structured learning paths.",
  "law-study-portal":
    "A law study platform for notes, documents, legal resources, bookmarks, analytics, and exam-focused learning support.",
  "ai-notes-assistance":
    "An AI-powered study assistant for organizing notes, summarizing content, improving workflows, and supporting smarter learning.",
};

const IMAGE_OVERRIDES: Record<string, string> = {
  wukalagpt: UNSPLASH("1589829545856-d10d557cf95f"),
  "goldman-trading": UNSPLASH("1611974789855-9c2a0a7236a3"),
  "roommatch-pk": UNSPLASH("1560518883-ce09059eeffa"),
  "jeddah-repair": UNSPLASH("1581094288338-2314dddb7ece"),
  enters: UNSPLASH("1502877338535-766e1452684a"),
  "uml-generator": UNSPLASH("1555066931-4365d14bab8c"),
  "al-nukhwa": UNSPLASH("1576091160399-112ba8d25d1d"),
  "lightcraft-lahore": UNSPLASH("1556740758-90de374c12ad"),
  "ai-blog-generator": UNSPLASH("1499750310107-5fef28a66643"),
  "smart-seo-audit": UNSPLASH("1460925895917-afdab827c52f"),
  "ai-wellness-tracker": UNSPLASH("1506126613408-eca07ce68773"),
  "cs-learning-portal": UNSPLASH("1517694712202-14dd9538aa97"),
  "law-study-portal": UNSPLASH("1505664194779-8beaceb93744"),
  "ai-notes-assistance": UNSPLASH("1455390582262-044cdead277a"),
  "rag-document-assistant": UNSPLASH("1568667256549-094345857637"),
  "student-grade-calculator": UNSPLASH("1518133910546-b6c2fb7d79e3"),
  "expense-tracker": UNSPLASH("1554224155-6726b3ff858f"),
  "library-management-system": UNSPLASH("1521587760476-6c12a4b040da"),
  "bank-account-management": UNSPLASH("1601597111158-2fceff292cdc"),
  "hospital-appointment-system": UNSPLASH("1538108149393-fbbd81895907"),
  "fake-news-detector": UNSPLASH("1495020689067-958852a7765e"),
  "image-classifier": UNSPLASH("1620712943543-bcc4688e7485"),
  "ai-resume-analyzer": UNSPLASH("1586281380349-632531db7ed4"),
  "smart-attendance-system": UNSPLASH("1573164713714-d95e436ab8d6"),
  "ai-study-assistant": UNSPLASH("1522202176988-66273c2fd55f"),
  "smart-parking-system": UNSPLASH("1506521781263-d8422e82f27a"),
  "healthcare-appointment-platform": UNSPLASH("1576091160550-2173dba999ef"),
};

const TechPill = ({ name }: { name: string }) => (
  <span className="text-[10px] md:text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#0F4594]/8 text-[#0F4594] border border-[#0F4594]/15">
    {name}
  </span>
);

const CaseStudyCard = ({ study, index }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  const displayTitle = TITLE_OVERRIDES[study.id] ?? study.title;
  const displayDescription = DESCRIPTION_OVERRIDES[study.id] ?? study.overview;
  const image = IMAGE_OVERRIDES[study.id] ?? UNSPLASH("1551288049-bebda4e38f71");
  const headlineResult = study.results?.[0];

  return (
    <motion.article
      id={study.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_50px_rgba(15,69,148,0.15)] hover:-translate-y-1 hover:border-[#0F4594]/25 transition-all duration-300"
    >
      <div className="relative h-[220px] md:h-[240px] overflow-hidden">
        <img
          src={image}
          alt={`${displayTitle} — ${study.category} project preview`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4594]/55 via-[#1e3a8a]/35 to-[#7c3aed]/55 mix-blend-multiply" />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30">
            {study.category}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h2 className="text-lg md:text-xl font-bold text-[#0F172A] tracking-[-0.01em] mb-2">
          {displayTitle}
        </h2>
        <p className="text-[13px] text-slate-600 leading-[1.55] mb-4">
          {displayDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {study.techStack.slice(0, 6).map((t) => (
            <TechPill key={t} name={t} />
          ))}
        </div>

        {headlineResult && (
          <div className="flex items-start gap-2 mb-4 p-2.5 rounded-lg bg-gradient-to-r from-[#0F4594]/5 to-[#7c3aed]/5 border border-[#0F4594]/10">
            <TrendingUp size={15} className="text-[#0F4594] shrink-0 mt-0.5" />
            <p className="text-xs md:text-[13px] font-medium text-[#0F172A] leading-snug">
              {headlineResult}
            </p>
          </div>
        )}

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              }}
              className="overflow-hidden"
            >
              <div className="pt-1 space-y-5">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Users size={13} className="text-slate-500" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                      Client Background
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                    {study.clientBackground}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={13} className="text-rose-500" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                      The Problem
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {study.problems.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                        <span className="text-xs md:text-sm text-slate-700 leading-relaxed">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Compass size={13} className="text-[#7c3aed]" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                      Our Approach
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {study.approach.map((a) => (
                      <li key={a} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" />
                        <span className="text-xs md:text-sm text-slate-700 leading-relaxed">
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Layers size={13} className="text-[#0F4594]" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                      Key Features
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/70"
                      >
                        <Sparkles size={12} className="text-[#0F4594] mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-700 leading-relaxed">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 size={13} className="text-emerald-600" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                      Results
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.results.map((r) => (
                      <div
                        key={r}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span className="text-xs text-slate-700 leading-relaxed">
                          {r}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F4594] hover:text-[#7c3aed] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4594]/40 rounded"
          >
            {expanded ? "Hide Case Study" : "View Case Study"}
            {expanded ? (
              <ChevronDown size={14} className="rotate-180 transition-transform" />
            ) : (
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            )}
          </button>
          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0F4594] transition-colors"
            >
              Visit Site
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default CaseStudyCard;