import { motion } from "framer-motion";
import {
  AlertTriangle,
  Compass,
  Layers,
  BarChart3,
  Sparkles,
  Users,
  ExternalLink,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  hafiz: UNSPLASH("1556742049-0cfed4f6a45d"),
  "inspire-interiors": UNSPLASH("1586023492125-27b2c045efd7"),
  "playland-sindbad": UNSPLASH("1513889961551-628c1e5e2ee9"),
  "sialkot-construction": UNSPLASH("1541888946425-d81bb19240f5"),
  "custom-erp": UNSPLASH("1554224155-6726b3ff858f"),
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
  <span className="text-[10px] md:text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#8A08FA]/15 text-white border border-[#8A08FA]/30">
    {name}
  </span>
);

const BlockLabel = ({
  icon: Icon,
  children,
}: {
  icon: typeof Users;
  children: React.ReactNode;
}) => (
  <div className="flex items-center gap-2 mb-2">
    <Icon size={13} className="text-[#B583FF]" />
    <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-semibold">
      {children}
    </span>
  </div>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-1.5">
    {items.map((t) => (
      <li key={t} className="flex items-start gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#8A08FA] mt-1.5 shrink-0" />
        <span className="text-xs md:text-sm text-neutral-200 leading-relaxed">{t}</span>
      </li>
    ))}
  </ul>
);

const CaseStudyCard = ({ study, index }: Props) => {
  const [open, setOpen] = useState(false);

  const displayTitle = TITLE_OVERRIDES[study.id] ?? study.title;
  const displayDescription = DESCRIPTION_OVERRIDES[study.id] ?? study.overview;
  const image = IMAGE_OVERRIDES[study.id] ?? UNSPLASH("1551288049-bebda4e38f71");
  const headlineResult = study.results?.[0];

  return (
    <>
      <motion.article
        id={study.id}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
        className="group relative h-full flex flex-col overflow-hidden rounded-2xl bg-[#0F0F16] border border-white/12 shadow-[0_10px_36px_-20px_rgba(0,0,0,0.8)] hover:border-[#8A08FA]/55 hover:shadow-[0_22px_50px_-26px_rgba(138,8,250,0.5)] transition-colors duration-300"
      >
        <div className="relative h-[200px] shrink-0 overflow-hidden">
          <img
            src={image}
            alt={`${displayTitle} — ${study.category} project preview`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute top-4 left-4">
            <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white px-3 py-1.5 rounded-full bg-[#8A08FA]">
              {study.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-lg md:text-xl font-bold text-white tracking-[-0.01em] mb-2">
            {displayTitle}
          </h2>
          <p className="text-[13px] text-neutral-300 leading-[1.6] mb-4 line-clamp-3">
            {displayDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {study.techStack.slice(0, 5).map((t) => (
              <TechPill key={t} name={t} />
            ))}
          </div>

          {headlineResult && (
            <div className="flex items-start gap-2 mb-5 p-3 rounded-xl bg-[#17171F] border border-[#8A08FA]/20">
              <TrendingUp size={15} className="text-[#B583FF] shrink-0 mt-0.5" />
              <p className="text-xs md:text-[13px] font-medium text-neutral-100 leading-snug line-clamp-2">
                {headlineResult}
              </p>
            </div>
          )}

          <div className="mt-auto flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#A855F7] hover:bg-[#0025CC] transition-colors duration-300"
            >
              View Case Study
              <ArrowRight size={13} />
            </button>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                Visit Site
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0F0F16] border border-white/12">
          <DialogHeader>
            <span className="inline-flex w-fit text-[10px] uppercase tracking-[0.18em] font-semibold text-white px-3 py-1.5 rounded-full bg-[#8A08FA] mb-2">
              {study.category}
            </span>
            <DialogTitle className="text-xl md:text-2xl font-bold text-white">
              {displayTitle}
            </DialogTitle>
            <DialogDescription className="text-sm text-neutral-300 leading-relaxed">
              {displayDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {study.techStack.map((t) => (
                <TechPill key={t} name={t} />
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#17171F] border border-white/10">
              <BlockLabel icon={Users}>Client Background</BlockLabel>
              <p className="text-xs md:text-sm text-neutral-200 leading-relaxed">
                {study.clientBackground}
              </p>
            </div>

            <div>
              <BlockLabel icon={AlertTriangle}>The Problem</BlockLabel>
              <Bullets items={study.problems} />
            </div>

            <div>
              <BlockLabel icon={Compass}>Our Approach</BlockLabel>
              <Bullets items={study.approach} />
            </div>

            <div>
              <BlockLabel icon={Layers}>Key Features</BlockLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {study.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-[#17171F] border border-white/10"
                  >
                    <Sparkles size={12} className="text-[#B583FF] mt-0.5 shrink-0" />
                    <span className="text-xs text-neutral-200 leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <BlockLabel icon={BarChart3}>Results</BlockLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {study.results.map((r) => (
                  <div
                    key={r}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-[#17171F] border border-[#8A08FA]/20"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A08FA] mt-1.5 shrink-0" />
                    <span className="text-xs text-neutral-200 leading-relaxed">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#8A08FA] hover:bg-[#0025CC] transition-colors duration-300"
              >
                Visit Live Site
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseStudyCard;
