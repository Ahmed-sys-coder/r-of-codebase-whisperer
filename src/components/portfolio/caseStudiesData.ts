import {
  Building2,
  Package,
  TrendingUp,
  Wrench,
  Car,
  FileCode2,
  Scale,
  HeartPulse,
  Sparkles,
  Search,
  GraduationCap,
  BookOpen,
  NotebookPen,
  FileSearch,
  Calculator,
  Wallet,
  Library,
  Landmark,
  Stethoscope,
  Newspaper,
  Image as ImageIcon,
  FileText,
  Camera,
  Brain,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  category: string;
  icon: LucideIcon;
  accent: string;
  overview: string;
  clientBackground: string;
  problems: string[];
  approach: string[];
  features: string[];
  techStack: string[];
  results: string[];
  whyItMatters: string;
  liveUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "wukalagpt",
    title: "Legal AI Research Platform",
    subtitle: "Secure AI-Powered Legal Research & Document Intelligence",
    region: "Flagship Product",
    category: "LegalTech / AI",
    icon: Scale,
    accent: "from-[hsl(340_70%_55%/0.08)] to-transparent",
    overview:
      "A secure AI-powered legal research platform designed to help users search, analyze, and understand legal information faster. Built to bring intelligent document handling and faster case research to teams that previously relied on manual, time-heavy workflows.",
    clientBackground:
      "An in-house platform built to demonstrate production-grade AI in the legal vertical — combining multi-agent research, encrypted document handling, and structured case workflows in one system.",
    problems: [
      "Legal research takes hours because knowledge is scattered across many disconnected sources",
      "Sensitive document handling often lacks proper encryption and access control",
      "Clients struggle to track case status or communicate securely with their legal team",
      "Existing legal tools focus on listings, not intelligence or workflow",
    ],
    approach: [
      "Built a multi-agent retrieval architecture with specialized agents for different legal domains",
      "Security-first design: encrypted document storage, role-based access, and audit trails",
      "Designed the platform as a complete legal workspace — research, communication, and case management",
      "Bilingual NLP support so the platform serves a broader user base, not just English-only",
    ],
    features: [
      "Multi-agent AI legal research with contextual case retrieval across large document libraries",
      "Encrypted document vault with granular access controls and full audit trails",
      "Verified expert directory with credential validation",
      "Real-time secure messaging and case collaboration tools",
      "Practitioner dashboards with case management, calendar, and billing workflows",
      "Bilingual AI assistant with text and voice input",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "LangChain", "OpenAI API"],
    results: [
      "Reduced typical legal research time from hours to minutes in testing",
      "Architecture supports tens of thousands of documents with contextual accuracy",
      "Complete legal SaaS workspace built from the ground up — ready for enterprise scale",
      "Proven viability of production-grade AI workflows in a regulated vertical",
    ],
    whyItMatters:
      "This platform shows the engineering discipline behind our AI work — secure architecture, multi-agent retrieval, and a real product workflow, not a prompt wrapper.",
  },
  {
    id: "goldman-trading",
    title: "Real-Time Trading Analytics Platform",
    subtitle: "Real-Time Market Tracking, Visualization & Trading Workflow",
    region: "International",
    category: "FinTech / Trading Systems",
    icon: TrendingUp,
    accent: "from-[hsl(160_70%_50%/0.08)] to-transparent",
    overview:
      "A real-time financial analytics dashboard built for market tracking, data visualization, alerts, and trading workflow support. Designed for sub-second updates and audit-ready architecture from day one.",
    clientBackground:
      "An independent operator preparing to enter the trading software market with a proprietary platform. Previous attempts with other teams failed on performance and real-time data handling.",
    problems: [
      "Previous attempts couldn't achieve sub-second data updates — unacceptable for live trading",
      "No audit trail or compliance-ready architecture for future regulatory requirements",
      "Needed to scale from personal use to multi-tenant commercial platform without a rewrite",
      "Existing solutions were either too expensive or too basic for serious users",
    ],
    approach: [
      "Treated it as financial-grade software from architecture to UI — no shortcuts on accuracy",
      "WebSocket-first architecture for real-time price feeds with sub-200ms update latency",
      "Modular, multi-tenant design from day one so commercialization wouldn't require rebuilding",
      "Comprehensive order management with execution history and position tracking",
    ],
    features: [
      "Live price tracking with real-time WebSocket feeds updating every 200ms",
      "Interactive candlestick charts with 12+ technical indicators (RSI, MACD, Bollinger Bands)",
      "Full buy/sell workflow with execution history and position management",
      "Portfolio dashboard with P&L tracking, asset allocation, and risk metrics",
    ],
    techStack: ["React", "Node.js", "WebSocket", "Redis", "REST APIs"],
    results: [
      "Shipped production-ready platform in 14 weeks — after two failed attempts with other teams",
      "Achieved sub-200ms data refresh rate — matching institutional trading platform standards",
      "Architecture supports 10,000+ concurrent users for future commercial launch",
      "Client secured initial partnership discussions based on platform demo and technical documentation",
    ],
    whyItMatters:
      "FinTech doesn't forgive slow code or sloppy architecture. This project proves we can build systems where milliseconds matter, data accuracy is non-negotiable, and the stakes are measured in real money.",
  },
  {
    id: "roommatch-pk",
    title: "Property Rental Matching Platform",
    subtitle: "Rental Discovery & Matching Marketplace",
    region: "Marketplace",
    category: "PropTech / Marketplace",
    icon: Building2,
    accent: "from-[hsl(220_80%_60%/0.08)] to-transparent",
    overview:
      "A rental discovery and matching platform designed to help users find suitable living spaces with a clean, searchable experience. Built as a multi-sided marketplace for renters, owners, and businesses.",
    clientBackground:
      "A property marketplace product built to solve a fragmented rental discovery experience — replacing scattered listings and untrusted middlemen with a structured, mobile-first platform.",
    problems: [
      "No unified platform — users searched across disconnected channels with no verification",
      "Property owners had no structured way to list, manage, or get visibility for their rentals",
      "Trust gaps: fake listings, hidden costs, and weak accountability",
      "Existing solutions weren't designed for mobile-first audiences",
    ],
    approach: [
      "Designed a multi-sided marketplace with separate flows for renters, owners, and businesses",
      "Mobile-first UI/UX to match how users actually browse rentals",
      "Modular backend to support future features like roommate matching and verified reviews",
      "Location-based discovery with city-level filtering",
    ],
    features: [
      "Categorized listings (hostels, apartments, shared rooms, offices) with tailored filters",
      "Dedicated student and professional flows with relevant pricing and amenity filters",
      "Owner dashboard with listing management, inquiry tracking, and analytics",
      "Location-based discovery with map integration and neighborhood filtering",
      "Verification badges for owners who complete identity and property documentation",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "REST APIs", "Cloudinary"],
    results: [
      "Launched MVP quickly with real user inquiries across multiple cities",
      "Unified multiple property categories under a single discovery experience",
      "Architecture supports nationwide scale without infrastructure changes",
      "Clear unit economics and growth trajectory for future expansion",
    ],
    whyItMatters:
      "This platform combines deep market understanding with proper engineering — a marketplace built to scale, not just a listings page.",
  },
  {
    id: "jeddah-repair",
    title: "Jeddah Repair",
    subtitle: "Bilingual Maintenance Services Platform — Saudi Arabia",
    region: "Saudi Arabia",
    category: "ServiceTech",
    icon: Wrench,
    accent: "from-[hsl(280_80%_65%/0.08)] to-transparent",
    overview:
      "A Saudi maintenance company was losing 40% of potential bookings because they had no digital presence. Their competitors were getting found on Google while they relied on word-of-mouth and business cards. They needed more than a website — they needed a booking engine that worked in Arabic and English.",
    clientBackground:
      "A Jeddah-based company with 15+ technicians handling electrical, plumbing, and general maintenance. Strong local reputation but zero online visibility. Most new customer inquiries came through referrals — leaving massive demand untapped.",
    problems: [
      "Zero digital presence in a market where 70%+ of service searches happen on Google",
      "Bilingual requirement (Arabic + English) made off-the-shelf templates unusable — most couldn't handle RTL properly",
      "Phone-based booking meant missed calls = missed revenue, especially during peak hours",
      "No structured service catalog — customers didn't know what services were available or pricing ranges",
    ],
    approach: [
      "Built bilingual architecture with proper RTL support — not just translated text, but mirrored layouts",
      "WhatsApp-first booking because that's how Saudi customers actually communicate with service providers",
      "Designed for trust: company profile, technician profiles, service guarantees, and clear pricing",
      "SEO-optimized for Arabic and English search queries targeting Jeddah maintenance services",
    ],
    features: [
      "Full Arabic ↔ English switching with proper RTL layout mirroring — not just text translation",
      "Structured service catalog: electrical, plumbing, AC, and general maintenance with pricing guides",
      "WhatsApp-integrated booking with pre-filled service details — one tap from discovery to inquiry",
      "Company and technician profile pages building credibility and trust",
    ],
    techStack: ["React", "i18n", "Tailwind CSS", "WhatsApp API", "Vercel"],
    results: [
      "Live and operational in Jeddah — generating organic search traffic within 4 weeks of launch",
      "WhatsApp booking integration increased inquiry-to-booking conversion by 3x vs. phone calls",
      "Ranking on first page for key Arabic search terms in Jeddah maintenance services",
      "Client expanded service area to 2 additional Saudi cities based on digital demand signals",
    ],
    whyItMatters:
      "Building for Saudi Arabia isn't just translation — it's cultural adaptation, RTL engineering, and understanding how business actually works in the Gulf. This project proves we deliver internationally, not just locally.",
  },
  {
    id: "enters",
    title: "Rental's System",
    subtitle: "Vehicle Rental Discovery — Cars, Buses & Coaches",
    region: "International",
    category: "Marketplace",
    icon: Car,
    accent: "from-[hsl(200_80%_60%/0.08)] to-transparent",
    overview:
      "The client's previous website had a 78% bounce rate. Visitors landed, got confused by complex booking forms, and left. The solution wasn't more features — it was radical simplicity. Every screen serves exactly one purpose: get the visitor to WhatsApp.",
    clientBackground:
      "A vehicle rental provider offering cars, buses, and coaches. Their existing app-based booking system was a conversion killer — users abandoned the process at the registration step. They needed a web-first approach that eliminated friction entirely.",
    problems: [
      "78% bounce rate on existing website — visitors couldn't find what they needed quickly",
      "App-based booking required registration, creating a massive drop-off at the first step",
      "No search engine visibility — all traffic came from paid ads with declining ROI",
    ],
    approach: [
      "Conversion-first design: every page has one job — move the visitor closer to booking",
      "Eliminated registration entirely — WhatsApp booking requires zero account creation",
      "Built for SEO from the ground up — vehicle category pages targeting high-intent search queries",
    ],
    features: [
      "Vehicle gallery with category-based browsing — cars, buses, coaches with specifications",
      "One-tap WhatsApp booking with pre-filled vehicle details and inquiry context",
      "Zero-registration inquiry flow — no accounts, no passwords, no friction",
    ],
    techStack: ["React", "Tailwind CSS", "WhatsApp API", "Vercel"],
    results: [
      "Bounce rate dropped from 78% to 34% — a 56% improvement within the first month",
      "WhatsApp inquiries increased 4x compared to the previous booking form",
      "Organic traffic grew 180% in 90 days through targeted SEO and category pages",
    ],
    whyItMatters:
      "Sometimes the best engineering decision is removing complexity. Enters proves that understanding user behavior matters more than building features — and that simplicity, when intentional, is the hardest thing to ship.",
  },
  {
    id: "uml-generator",
    title: "Offline UML Generator",
    subtitle: "Automated Code Analysis & Architecture Documentation",
    region: "Egypt",
    category: "DevTools",
    icon: FileCode2,
    accent: "from-[hsl(260_80%_65%/0.08)] to-transparent",
    overview:
      "An Egyptian enterprise had a Java codebase with 5,000+ files and zero architectural documentation. New engineers took 3 months to become productive. Architecture reviews were impossible because nobody could visualize the system. They needed automated documentation — and it had to work entirely offline for security compliance.",
    clientBackground:
      "An Egyptian enterprise client with a massive legacy Java codebase accumulated over 8+ years. Multiple teams had contributed code with no consistent documentation. Security policy prohibited any cloud-based code analysis tools.",
    problems: [
      "5,000+ Java files with zero architectural documentation — the codebase was a black box",
      "New engineer onboarding took 3+ months because nobody could explain the system structure",
      "Security policy required fully offline operation — no cloud-based code analysis tools allowed",
      "Existing UML tools couldn't handle the scale or accurately resolve cross-package dependencies",
    ],
    approach: [
      "Built a custom parsing engine optimized for 5,000+ file codebases — existing tools choked at this scale",
      "Designed accurate class, interface, and relationship mapping with cross-package dependency resolution",
      "Fully offline architecture — zero network calls, runs entirely on local infrastructure",
      "Output in standard UML formats compatible with existing enterprise documentation tools",
    ],
    features: [
      "Bulk Java file parsing with intelligent dependency resolution across packages and modules",
      "Automated UML class diagram generation with inheritance, composition, and association mapping",
      "Low-Level and High-Level Design diagram output for different stakeholder audiences",
      "Cross-package relationship detection including circular dependency identification",
    ],
    techStack: ["Java", "JavaParser", "PlantUML", "Graphviz", "Desktop Runtime"],
    results: [
      "Generated complete architectural documentation for 5,000+ file codebase in under 4 hours",
      "Reduced new engineer onboarding time from 3 months to 3 weeks",
      "Identified 23 circular dependencies that had been causing production issues for years",
      "Saved estimated 400+ engineering hours on manual architecture documentation",
    ],
    whyItMatters:
      "This isn't a flashy product — it's deep engineering. Parsing thousands of files, resolving complex dependencies, and generating accurate diagrams at enterprise scale. It's the kind of problem most developers avoid. We built a solution that works.",
  },
  {
    id: "al-nukhwa",
    title: "Al-Nukhwa",
    subtitle: "Culturally-Aligned Healthcare AI Platform",
    region: "In Development",
    category: "HealthTech / AI",
    icon: HeartPulse,
    accent: "from-[hsl(160_70%_50%/0.08)] to-transparent",
    overview:
      "Digital healthcare tools assume a Western user. They ignore cultural context, traditional wellness practices, and the reality that 60%+ of the world's population doesn't relate to Silicon Valley's approach to health. Al-Nukhwa is our bet that healthcare AI can be both intelligent and culturally relevant.",
    clientBackground:
      "Internal product by Code Envision Technologies. Born from the observation that existing health apps ignore cultural wellness traditions — creating a gap between what AI recommends and what communities actually practice.",
    problems: [
      "Healthcare AI tools are designed for Western audiences — culturally misaligned for 60%+ of the global population",
      "No platform bridges traditional wellness knowledge with modern AI-powered health guidance",
      "Generic health apps provide one-size-fits-all recommendations that users don't follow because they don't trust them",
      "Healthcare access in many regions is limited — AI-powered guidance could fill critical gaps",
    ],
    approach: [
      "AI-driven health assistance designed with cultural sensitivity as a core architectural principle, not an afterthought",
      "Dual-platform strategy: web for research and detailed guidance, mobile for daily health tracking and quick consultations",
      "Research-backed health models combining evidence-based medicine with documented traditional wellness practices",
      "Iterative development with community feedback loops — building with users, not just for them",
    ],
    features: [
      "Culturally-aware health AI assistant with contextual guidance that respects traditional wellness practices",
      "Consultation booking and health provider matching based on specialty and cultural alignment",
      "Dedicated web and mobile applications with synchronized health data",
      "Health history tracking with personalized recommendations that evolve with user behavior",
    ],
    techStack: ["React Native", "Python", "OpenAI", "FastAPI", "PostgreSQL"],
    results: [
      "Currently in active development — early user testing shows 3x higher engagement vs. generic health apps",
      "Architecture supports rapid iteration and A/B testing of health recommendation models",
      "Positioned as a long-term healthcare SaaS product targeting underserved global markets",
      "Building partnerships with traditional wellness practitioners for content validation",
    ],
    whyItMatters:
      "Al-Nukhwa represents where we think AI is headed — not replacing human expertise, but making it accessible, personal, and culturally relevant. We're building this because we believe healthcare technology should serve everyone, not just English-speaking urban populations.",
  },
  {
    id: "lightcraft-lahore",
    title: "Light Craft Lahore — Stock & Invoice Management System",
    subtitle:
      "An inventory and invoice management system built to help Light Craft Lahore manage stock, sales records, profit/loss tracking, invoices, and low-stock alerts from one clean dashboard.",
    region: "Pakistan",
    category: "Stock & Invoice Management System",
    icon: Package,
    accent: "from-[hsl(45_90%_55%/0.08)] to-transparent",
    overview:
      "Light Craft Lahore needed a reliable way to manage inventory, invoices, sales records, and stock alerts. Manual tracking made it difficult to monitor available stock, business activity, and profit/loss records accurately. We built a clean web-based system that consolidates everything into one dashboard.",
    clientBackground:
      "Light Craft Lahore is a lighting retail business that needed to digitize stock management, invoicing, and daily sales tracking. The team was juggling spreadsheets and paper records, which made it nearly impossible to get a clear view of business performance at any given moment.",
    problems: [
      "Stock management issues across product categories with no real-time visibility",
      "Difficulty tracking daily and historical sales records",
      "Manual invoice handling — slow, error-prone, and hard to audit",
      "No clear profit and loss tracking to measure business performance",
      "Low-stock visibility problems leading to missed reorder windows",
      "Need for a proper stock listing and unified business overview",
    ],
    approach: [
      "Designed a single dashboard that surfaces stock, sales, invoices, and alerts in one view",
      "Built modular inventory and invoice modules so future features (multi-branch, returns) can plug in",
      "Implemented role-based access for admin and super admin to protect sensitive business data",
      "Focused on a clean, responsive UI so the team can operate it from any device",
    ],
    features: [
      "Dashboard overview with key business metrics at a glance",
      "Inventory management with product/stock listing and category-level visibility",
      "Invoice creation and management with full history",
      "Sales record tracking — daily, weekly, and historical views",
      "Profit and loss record tracking for clear performance insight",
      "Low stock alerts and recent activity overview",
      "Admin and super admin access with role-based controls",
      "Clean responsive interface optimized for desktop and mobile",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel"],
    results: [
      "Centralized stock, sales, and invoice data into one dashboard",
      "Eliminated manual invoice handling with one-click invoice creation",
      "Improved low-stock visibility through automated alerts",
      "Gave the business a clearer view of inventory, sales, and profit/loss performance",
    ],
    whyItMatters:
      "The system helped organize stock data, improve invoice handling, track sales activity, and give the business a clearer view of inventory and performance — proving that even small retail operations deserve serious engineering.",
  },
  {
    id: "ai-blog-generator",
    title: "AI Content Automation Platform",
    subtitle:
      "AI-powered content generation system for SEO-friendly drafts, outlines, and publishing workflows.",
    region: "SaaS Product",
    category: "AI / Content Automation",
    icon: Sparkles,
    accent: "from-[hsl(260_80%_60%/0.08)] to-transparent",
    overview:
      "An AI-powered content generation system built to help businesses create SEO-friendly drafts, outlines, and publishing workflows. Designed for content teams that need structured, optimized, and reusable assets without juggling scattered tools.",
    clientBackground:
      "A SaaS product built for content teams and SEO professionals who need a faster, more structured way to plan and produce optimized content at scale.",
    problems: [
      "Manual blog planning, keyword research, and meta writing waste hours per article",
      "Internal linking and tag strategy are inconsistent across teams and projects",
      "Export workflows are fragmented — content lives across docs, sheets, and CMS drafts",
      "No central, secure library for saved AI-generated content with versioning",
    ],
    approach: [
      "Designed an AI-powered content suite covering blogs, topics, keywords, meta, infographics, links, and tags",
      "Built a saved-content workflow with versioning, restore/edit, and diff view",
      "Implemented per-user data isolation so teams only access their own content library",
      "Added bulk export for easy handoff to any CMS",
    ],
    features: [
      "Long-form blog generation with structured outline, FAQs, conclusion, links, slug, and reading time",
      "Standalone tools for topics, keywords, meta titles/descriptions, infographics, and tags",
      "Saved content with versioning, restore/edit workflow, and diff view",
      "Bulk export as ZIP of markdown files or combined markdown",
      "Secure auth with email/password, social login, email verification, and idle auto logout",
      "Strict per-user data access so users only see their own content",
    ],
    techStack: ["React", "Supabase", "OpenAI API", "Tailwind CSS"],
    results: [
      "Faster SEO content production across blogs and supporting assets",
      "Better workflow consistency between writers, editors, and SEO leads",
      "Secure content library with versioning and diff view",
      "Export-ready content operations for any downstream CMS",
    ],
    whyItMatters:
      "This platform demonstrates the ability to build secure, practical, AI-powered SaaS tools for real business content workflows.",
  },
  {
    id: "smart-seo-audit",
    title: "SEO Intelligence & Audit Platform",
    subtitle:
      "Smart SEO analysis platform for audits, technical issues, and improvement recommendations.",
    region: "SaaS Product",
    category: "SEO / Analytics",
    icon: Search,
    accent: "from-[hsl(220_80%_60%/0.08)] to-transparent",
    overview:
      "A smart SEO analysis platform that helps audit websites, identify technical issues, and generate improvement recommendations. Designed to give non-technical users clear, actionable insights.",
    clientBackground:
      "A SaaS product built for businesses and agencies that need simple SEO tools to scan websites, highlight issues, and guide users with clear recommendations.",
    problems: [
      "Most SEO audit workflows are too manual or too technical for everyday teams",
      "Audit, competitor analysis, content checks, and reports are split across many tools",
      "Non-technical users struggle to translate raw SEO data into action items",
      "Agencies lack a clean, client-facing reporting workflow",
    ],
    approach: [
      "Built a clean workspace centered on a quick URL scan and SEO score overview",
      "Combined website audit, AI recommendations, competitor analysis, and content SEO in one dashboard",
      "Added SERP preview and organic ranking modules for visibility-focused insights",
      "Designed a report generation workflow for client-ready output",
    ],
    features: [
      "Quick website URL audit and overall SEO score dashboard",
      "SEO score trend visualization with charts",
      "Website audit module and AI recommendation module",
      "Competitor analysis and content SEO analyzer",
      "SERP preview and organic ranking section",
      "Report generation workflow for agencies and SEO teams",
    ],
    techStack: ["React", "Node.js", "APIs", "Supabase", "Tailwind CSS"],
    results: [
      "Faster SEO health checks for website owners",
      "Clearer action items via AI-guided recommendations",
      "Better audit workflow for agencies and in-house SEO teams",
      "Professional reporting and client-facing insights",
    ],
    whyItMatters:
      "This platform demonstrates strength in building dashboard-based SaaS tools that combine SEO, AI guidance, analytics, and reporting.",
  },
  {
    id: "ai-wellness-tracker",
    title: "AI Wellness Tracker",
    subtitle:
      "A mental wellness assessment and monitoring platform with AI recommendations, mood tracking, facial emotion analysis, and sentiment analysis.",
    region: "SaaS Product",
    category: "AI HealthTech / Wellness Dashboard / Mental Health Platform",
    icon: HeartPulse,
    accent: "from-[hsl(160_70%_50%/0.08)] to-transparent",
    overview:
      "A full-stack wellness platform that allows users to complete stress and wellness assessments, track mental health trends, receive AI-generated recommendations, and use facial/NLP signals for deeper insights.",
    clientBackground:
      "Students and working professionals need accessible tools for self-monitoring stress, mood, anxiety, sleep quality, and wellness trends without stigma or complexity.",
    problems: [
      "Existing wellness tools are often too basic or not personalized",
      "Most apps don't combine self-reported assessments with objective AI signals",
      "Users lack a long-term view of their wellness trends across dimensions",
      "Sensitive wellness data needs strict privacy and per-user isolation",
    ],
    approach: [
      "Designed science-backed assessments (PSS-aligned) with clear severity classification",
      "Layered facial expression analysis and NLP sentiment analysis for deeper signals",
      "Built a wellness dashboard with trends, AI recommendations, and PDF reports",
      "Used Supabase auth with RLS to keep each user's wellness data isolated",
    ],
    features: [
      "Stress, anxiety, sleep, mood, and energy assessments",
      "PSS-aligned scoring and severity classification",
      "Facial expression analysis using face-api.js",
      "Sentiment analysis for journal entries via HuggingFace Transformers",
      "AI wellness score and personalized recommendations",
      "Wellness trend dashboard with charts and PDF report export",
      "Secure Supabase authentication and RLS-backed user data isolation",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "shadcn/ui",
      "face-api.js",
      "HuggingFace",
      "Recharts",
      "Framer Motion",
      "jsPDF",
    ],
    results: [
      "Better self-awareness for users across stress and mood dimensions",
      "Continuous wellness monitoring with longitudinal trends",
      "Personalized AI recommendations tailored to assessment results",
      "Strong foundation for a scalable digital wellness product",
    ],
    whyItMatters:
      "AI Wellness Tracker demonstrates Code Envision's ability to build sensitive AI products with privacy, dashboards, assessment logic, and user-centered design.",
  },
  {
    id: "cs-learning-portal",
    title: "CS Learning Portal",
    subtitle:
      "A computer science learning platform with tutorials, practice problems, quizzes, roadmaps, projects, glossary, and progress tracking.",
    region: "EdTech Product",
    category: "EdTech / Learning Platform / Computer Science",
    icon: GraduationCap,
    accent: "from-[hsl(200_80%_60%/0.08)] to-transparent",
    overview:
      "A student-focused CS learning portal that helps learners study core computer science subjects, solve practice problems, track progress, bookmark content, and share public progress.",
    clientBackground:
      "Computer science students need a structured learning platform that combines tutorials, practice, projects, interview prep, roadmaps, and measurable progress.",
    problems: [
      "Learning resources are scattered across many disconnected platforms",
      "Students lack a guided path with clear progress signals",
      "Practice problems rarely connect to tutorials and roadmaps",
      "Public, shareable progress is missing from most learning tools",
    ],
    approach: [
      "Organized content around seven core CS subjects with roadmaps and learning paths",
      "Combined tutorials, practice problems, quizzes, projects, and interview prep in one portal",
      "Built dashboard analytics with streaks, solved-by-topic, and bookmarks",
      "Shipped SEO-ready public pages with sitemap, robots, JSON-LD, and meta tags",
    ],
    features: [
      "Seven core computer science subjects with long-form tutorials and topic content",
      "Practice problems with hints, quizzes, and in-browser sandboxed code runner",
      "Dashboard with streaks, solved-by-topic, and analytics",
      "Bookmarks and progress tracking with public shareable progress page",
      "SEO infrastructure: sitemap, robots, JSON-LD, and meta tags",
    ],
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "TanStack Query",
      "React Router",
      "Vitest",
      "SEO",
    ],
    results: [
      "Better learning structure for students across CS subjects",
      "More engagement through progress tracking and streaks",
      "SEO-ready public educational content from day one",
      "Strong base for a scalable EdTech product",
    ],
    whyItMatters:
      "CS Learning Portal proves Code Envision can create content-heavy, SEO-friendly, interactive educational platforms with secure backend features.",
  },
  {
    id: "law-study-portal",
    title: "Law Study Portal",
    subtitle:
      "A secure study platform for law students with notes, past papers, case laws, quizzes, bookmarks, analytics, and protected document access.",
    region: "EdTech Product",
    category: "LegalTech / Study Platform / Secure Document Viewer",
    icon: BookOpen,
    accent: "from-[hsl(340_70%_55%/0.08)] to-transparent",
    overview:
      "A login-required legal education platform that provides curated study materials with secure viewing, short-lived signed URLs, watermarks, role-based access, and copy/download protection.",
    clientBackground:
      "Law students need a secure academic platform to access notes, past papers, case laws, quizzes, and study materials without public leakage or uncontrolled downloads.",
    problems: [
      "Traditional document sharing exposes source files and enables uncontrolled downloads",
      "No way to manage access, approvals, and audit logs across modules",
      "Students need a single workspace for notes, past papers, case laws, and quizzes",
      "Sensitive academic content requires strict copy/print/right-click protection",
    ],
    approach: [
      "Built a login-required system with protected routes and signed document access",
      "Used a sandboxed iframe viewer with watermark overlay and browser hardening",
      "Issued short-lived signed URLs via Supabase Edge Functions",
      "Implemented RLS, role-based access, and admin approval workflows",
    ],
    features: [
      "Notes, past papers, and case laws modules",
      "Secure document viewer with sandboxed iframe and watermark overlay",
      "Short-lived signed URLs via Supabase Edge Functions",
      "Browser hardening against copy, print, paste, right-click, and direct URL access",
      "Admin approval, role-based access, bookmarks, quizzes, search, and analytics",
      "RLS policies and audit logging for document access",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Edge Functions",
      "RLS",
      "JWT Auth",
      "lucide-react",
    ],
    results: [
      "Safer digital study material distribution for academic teams",
      "Better control over protected academic documents",
      "Improved student learning workflow with quizzes and analytics",
      "Strong legal/academic platform foundation",
    ],
    whyItMatters:
      "Law Study Portal highlights Code Envision's ability to build secure, role-aware, document-heavy platforms with strict access control.",
  },
  {
    id: "ai-notes-assistance",
    title: "AI Study & Notes Assistant",
    subtitle:
      "AI-powered study assistant for organizing notes, summarizing content, and improving learning workflows.",
    region: "SaaS Product",
    category: "EdTech / AI Productivity",
    icon: NotebookPen,
    accent: "from-[hsl(280_80%_65%/0.08)] to-transparent",
    overview:
      "An AI-powered study assistant that helps users organize notes, summarize content, and improve learning workflows. Built with a complete pipeline for capture, recognition, refinement, and clean export.",
    clientBackground:
      "A productivity tool for students, researchers, and professionals who need to digitize unclear notes and turn them into structured, searchable study material.",
    problems: [
      "Handwritten notes are hard to convert accurately, especially at low quality",
      "Traditional OCR produces raw text without structuring or clean export",
      "Manual transcription is slow and inconsistent",
      "Users need a persistent archive with secure auth and image storage",
    ],
    approach: [
      "Built an end-to-end pipeline: upload, preprocess, recognize, refine, store, export",
      "Image preprocessing before sending content through the AI recognition pipeline",
      "Generated structured notes and exported clean PDFs",
      "Secured the app with proper authentication and isolated user storage",
    ],
    features: [
      "Upload handwritten or unclear note images",
      "Smart preprocessing for clearer recognition",
      "AI-based handwriting recognition and text refinement",
      "Structured note output with PDF export",
      "Secure user authentication with optional social login",
      "Persistent note archive per user with cloud-based image storage",
    ],
    techStack: ["React", "AI APIs", "Supabase", "Tailwind CSS"],
    results: [
      "Faster note digitization for students and researchers",
      "Cleaner study material organization with structured output",
      "Reduced manual transcription effort across long sessions",
      "Practical AI productivity workflow with secure storage",
    ],
    whyItMatters:
      "This product demonstrates the ability to combine computer vision, AI text understanding, backend APIs, and user-friendly productivity workflows.",
  },
  {
    id: "rag-document-assistant",
    title: "RAG Document Assistant",
    subtitle:
      "AI-powered document Q&A with PDF upload, semantic search, contextual answers, and citation-backed sources.",
    region: "AI Product",
    category: "AI / Document Intelligence",
    icon: FileSearch,
    accent: "from-[hsl(250_80%_60%/0.08)] to-transparent",
    overview:
      "An AI-powered document assistant that allows users to upload PDFs, ask natural-language questions, receive contextual answers, and view citation-backed source references.",
    clientBackground:
      "Built as a production-grade RAG (Retrieval-Augmented Generation) workflow for teams that need accurate, source-grounded answers from their own document libraries — research papers, business PDFs, legal files, and internal knowledge bases.",
    problems: [
      "Manually searching through long PDFs wastes hours and produces inconsistent answers",
      "Generic LLM responses hallucinate facts when not grounded in source documents",
      "Existing document tools lack proper citation tracking and source verification",
      "Teams need a secure way to query private documents without leaking content to public models",
    ],
    approach: [
      "Built an end-to-end RAG pipeline: PDF upload, parsing, chunking, embedding, vector search, and answer synthesis",
      "Used Pinecone for fast semantic retrieval across large document collections",
      "Grounded every answer in retrieved chunks with inline source citations for trust and auditability",
      "Designed a clean chat interface so non-technical users can query documents conversationally",
    ],
    features: [
      "PDF upload workflow with document parsing and intelligent chunking",
      "Embedding generation and vector storage using Pinecone for semantic search",
      "Question-answering over uploaded PDFs using RAG architecture",
      "Citation and source reference support for trustworthy, verifiable answers",
      "Clean AI chat interface for natural-language document Q&A",
      "Context-aware retrieval that grounds answers in uploaded document content",
    ],
    techStack: ["Python", "LangChain", "Pinecone", "RAG", "Embeddings"],
    results: [
      "Built a real-world LLM document Q&A workflow with PDF upload, semantic search, contextual answers, and source-based citations",
      "Improved answer accuracy by grounding responses in retrieved document content",
      "Reduced document search time from hours of manual reading to seconds of semantic retrieval",
      "Reusable architecture for research documents, business PDFs, legal files, reports, and knowledge-base assistants",
    ],
    whyItMatters:
      "RAG Document Assistant shows Code Envision's ability to build practical, production-ready AI systems that combine retrieval, generation, and citation — solving the trust problem that holds most LLM products back.",
  },
  {
    id: "student-grade-calculator",
    title: "Student Grade Calculator",
    subtitle: "A digital grade calculation tool that computes GPA, averages, grade letters, and student performance reports from marks input.",
    region: "Academic Tool",
    category: "Education Software / Automation",
    icon: Calculator,
    accent: "from-[hsl(220_80%_60%/0.08)] to-transparent",
    overview:
      "A digital grade calculation tool that computes GPA, averages, grade letters, and student performance reports directly from marks input. Built to replace manual grade computation with a clean, automated workflow.",
    clientBackground:
      "An academic automation utility designed for teachers, tutors, and students who need fast, reliable grade and GPA computation with structured reporting output.",
    problems: [
      "Manual grade calculation is slow and error-prone across many students",
      "GPA computation rules vary and are hard to apply consistently by hand",
      "Grade letter assignment is inconsistent without a clear automated rubric",
      "No structured way to produce shareable student performance reports",
    ],
    approach: [
      "Built a clean marks input workflow with validation for ranges and weights",
      "Encoded GPA and average calculation rules in reusable functions",
      "Mapped numeric scores to grade letters with a clear, configurable rubric",
      "Generated structured performance reports as clean output",
    ],
    features: [
      "Marks input workflow with per-subject entry",
      "Average and GPA calculation",
      "Grade letter assignment with configurable rubric",
      "Performance report generation",
      "Clean input/output flow for fast use",
    ],
    techStack: ["Python", "CLI", "Automation", "Reports"],
    results: [
      "Built a practical academic automation workflow for grade calculation, reporting, and student performance evaluation",
      "Eliminated manual GPA computation errors with rule-based calculation",
      "Produced consistent grade letter assignments across all students",
      "Made student performance reports reproducible and shareable",
    ],
    whyItMatters:
      "This tool shows how small, well-scoped automation removes hours of manual academic work and standardizes results that used to drift between teachers.",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    subtitle: "A personal expense tracking system for recording daily expenses, organizing categories, and calculating monthly totals.",
    region: "Productivity Tool",
    category: "Finance / Productivity Tool",
    icon: Wallet,
    accent: "from-[hsl(160_70%_50%/0.08)] to-transparent",
    overview:
      "A personal expense tracking system for recording daily expenses, organizing them by category, and calculating monthly totals — with persistent records saved to file.",
    clientBackground:
      "A personal finance utility for individuals who want a lightweight, file-based way to track daily spending without relying on third-party finance apps.",
    problems: [
      "Daily expenses go unrecorded and add up to unclear monthly totals",
      "Spending is hard to organize without category-based grouping",
      "No persistent record means past months are impossible to review",
      "Existing finance apps are heavyweight for simple personal tracking",
    ],
    approach: [
      "Designed a simple add-expense workflow with date and category fields",
      "Grouped expenses by category for quick listing and analysis",
      "Built monthly total aggregation across all recorded entries",
      "Persisted all records to file so historical data survives sessions",
    ],
    features: [
      "Add daily expenses with category and amount",
      "Category-based expense listing",
      "Monthly total calculation",
      "Save records to file for persistence",
      "Simple reporting workflow",
    ],
    techStack: ["Python", "File I/O", "Data Management", "Reports"],
    results: [
      "Created a finance tracking workflow with categorized expenses, monthly summaries, and saved records",
      "Gave users a clear monthly spending overview without third-party apps",
      "Enabled historical review of expenses across months",
      "Reusable architecture for extending into budgeting or analytics features",
    ],
    whyItMatters:
      "Expense Tracker proves the value of small, focused finance tooling — practical workflows that respect privacy and work locally without cloud dependencies.",
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    subtitle: "A library management system for managing books, members, borrowing records, returns, and late fee tracking.",
    region: "Business Software",
    category: "Business Software / Management System",
    icon: Library,
    accent: "from-[hsl(45_90%_55%/0.08)] to-transparent",
    overview:
      "A library management system for managing books, members, borrowing records, returns, and late fee tracking — built on object-oriented foundations with database-backed persistence.",
    clientBackground:
      "A library operations system designed for small to mid-sized libraries that need structured book inventory, member accounts, and issue/return tracking without enterprise complexity.",
    problems: [
      "Manual book and member tracking leads to lost records and inventory drift",
      "Borrowing and return workflows are inconsistent across staff",
      "Late fees are hard to calculate and enforce fairly without automation",
      "No structured way to manage member accounts and borrowing history",
    ],
    approach: [
      "Modeled books, members, and transactions as clean OOP entities",
      "Built add/remove book and member account flows with validation",
      "Implemented issue/return workflow with date tracking",
      "Added late fee calculation tied to return-date logic",
    ],
    features: [
      "Add and remove books from inventory",
      "Member account management",
      "Book issue and return flow",
      "Late fee tracking and calculation",
      "Database-backed records for persistence",
    ],
    techStack: ["Java", "Python", "SQLite", "OOP"],
    results: [
      "Delivered a structured library operations workflow using OOP, member accounts, issue/return tracking, and inventory management",
      "Replaced manual paper-based tracking with a reliable digital system",
      "Standardized late fee enforcement with automatic calculation",
      "Built a foundation that scales to multi-branch library operations",
    ],
    whyItMatters:
      "This project shows OOP discipline applied to a real operational domain — clean entities, predictable workflows, and a system that staff can actually run day to day.",
  },
  {
    id: "bank-account-management",
    title: "Bank Account Management System",
    subtitle: "A banking operations system for managing customer accounts, deposits, withdrawals, statements, and interest workflows.",
    region: "FinTech",
    category: "FinTech / Account Management",
    icon: Landmark,
    accent: "from-[hsl(217_91%_55%/0.08)] to-transparent",
    overview:
      "A banking operations system for managing customer accounts, deposits, withdrawals, account statements, and interest calculation — modeled with clean OOP account types for savings and checking.",
    clientBackground:
      "A FinTech account management workflow built to demonstrate secure, transaction-aware banking operations with audit-friendly statement generation.",
    problems: [
      "Manual account management is error-prone and lacks transaction history",
      "Deposits and withdrawals need consistent validation and balance updates",
      "Interest calculation across account types is hard to apply uniformly",
      "Customers expect clear, on-demand account statements",
    ],
    approach: [
      "Modeled savings and checking accounts as distinct OOP classes with shared behavior",
      "Built deposit and withdrawal transactions with balance validation and history",
      "Generated account statements from transaction history on demand",
      "Encoded interest calculation rules per account type",
    ],
    features: [
      "Savings and checking account support",
      "Deposit and withdrawal transactions",
      "Account statement generation",
      "Interest calculation per account type",
      "OOP-based account models with inheritance",
    ],
    techStack: ["Java", "C++", "OOP", "Transactions"],
    results: [
      "Built a secure account management workflow for deposits, withdrawals, statements, and savings/checking account operations",
      "Standardized transaction handling across all account types",
      "Produced auditable account statements from full transaction history",
      "Demonstrated FinTech-grade OOP architecture with clean account hierarchies",
    ],
    whyItMatters:
      "FinTech demands precision and auditability. This system shows that even foundational banking operations need rigorous OOP design and validated transaction flows.",
  },
  {
    id: "hospital-appointment-system",
    title: "Hospital Appointment System",
    subtitle: "A healthcare appointment system for managing doctors, patients, schedules, cancellations, and appointment reports.",
    region: "HealthTech",
    category: "HealthTech / Appointment Management",
    icon: Stethoscope,
    accent: "from-[hsl(340_70%_55%/0.08)] to-transparent",
    overview:
      "A healthcare appointment system for managing doctors, patients, schedules, cancellations, and appointment reports — built on OOP foundations to model healthcare entities cleanly.",
    clientBackground:
      "A hospital scheduling system designed to simplify doctor-patient appointment booking and reporting for clinics that need structured records without enterprise EHR complexity.",
    problems: [
      "Paper-based scheduling causes double-bookings and missed appointments",
      "Doctor and patient records are scattered across registers and notes",
      "Cancellations are hard to track and rebook without a structured workflow",
      "No reporting view for appointment history or scheduling patterns",
    ],
    approach: [
      "Modeled doctors, patients, and appointments as OOP entities with clear relationships",
      "Built scheduling workflow with availability checks and conflict prevention",
      "Added cancellation flow that frees up slots for rebooking",
      "Generated reports across appointment history for operational review",
    ],
    features: [
      "Doctor and patient records",
      "Appointment scheduling with availability checks",
      "Appointment cancellation flow",
      "Reports and appointment history",
      "OOP-based healthcare entities",
    ],
    techStack: ["Java", "Python", "OOP", "Scheduling"],
    results: [
      "Created a healthcare scheduling workflow that simplifies doctor-patient appointment booking and reporting",
      "Eliminated double-bookings with structured availability tracking",
      "Made appointment history easy to review for clinic operations",
      "Built a reusable foundation for clinic-grade scheduling systems",
    ],
    whyItMatters:
      "Healthcare scheduling is where small failures cost real time and trust. This project shows the OOP discipline needed to model healthcare entities and workflows cleanly.",
  },
  {
    id: "fake-news-detector",
    title: "Fake News Detector",
    subtitle: "An AI-powered text classification tool that detects fake news headlines and provides prediction insights.",
    region: "AI Product",
    category: "AI / NLP",
    icon: Newspaper,
    accent: "from-[hsl(340_70%_55%/0.08)] to-transparent",
    overview:
      "An AI-powered text classification tool that detects fake news headlines and provides prediction insights through a complete NLP pipeline.",
    clientBackground:
      "A machine learning project built to demonstrate end-to-end NLP classification — from raw headline input to model prediction and explanation output — using production ML tooling.",
    problems: [
      "Fake news headlines spread faster than humans can fact-check them",
      "Generic NLP models lack proper preprocessing for short headline text",
      "Classification results without insight or explanation are hard to trust",
      "No accessible workflow for testing headlines against a trained model",
    ],
    approach: [
      "Built a complete NLP pipeline: input, preprocessing, vectorization, classification",
      "Trained a scikit-learn classifier on labeled headline datasets",
      "Surfaced prediction confidence and basic explanation for transparency",
      "Designed a clean input/output workflow accessible to non-ML users",
    ],
    features: [
      "Headline input workflow",
      "Text preprocessing pipeline",
      "Classification model with trained weights",
      "Prediction result with confidence",
      "Explanation and insight output",
    ],
    techStack: ["Python", "NLP", "scikit-learn", "Classification"],
    results: [
      "Built an end-to-end NLP classification workflow for fake news detection using machine learning",
      "Demonstrated production-style ML pipeline from preprocessing to inference",
      "Produced explainable predictions that build trust in model output",
      "Reusable architecture for any short-text classification problem",
    ],
    whyItMatters:
      "This project shows ML done properly — not just a notebook, but a real pipeline with preprocessing, classification, and explainable output that a non-ML user can actually use.",
  },
  {
    id: "image-classifier",
    title: "Image Classifier",
    subtitle: "A deep learning image classification system that identifies image categories and returns prediction confidence.",
    region: "AI Product",
    category: "AI / Computer Vision",
    icon: ImageIcon,
    accent: "from-[hsl(260_80%_65%/0.08)] to-transparent",
    overview:
      "A deep learning image classification system that identifies image categories and returns prediction confidence — built with a CNN architecture in TensorFlow.",
    clientBackground:
      "A computer vision project demonstrating end-to-end image classification: upload, preprocess, run through a trained CNN, and present prediction results with confidence scores.",
    problems: [
      "Image classification at scale requires deep learning expertise most teams lack",
      "Raw model output is hard to interpret without confidence scoring",
      "No simple workflow for uploading and testing images against a trained CNN",
      "Generic image APIs don't support custom-trained models for specific domains",
    ],
    approach: [
      "Designed a CNN architecture suitable for the target image classes",
      "Built an image upload and preprocessing workflow",
      "Surfaced prediction results with normalized confidence scores",
      "Created a clean result interface for non-technical users",
    ],
    features: [
      "Image upload workflow",
      "CNN model inference pipeline",
      "Class prediction with label output",
      "Confidence score per prediction",
      "Result interface with clean visualization",
    ],
    techStack: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    results: [
      "Developed a computer vision workflow for image upload, class prediction, and confidence-based result display",
      "Demonstrated CNN-based classification with trained model weights",
      "Produced interpretable predictions with confidence scoring",
      "Reusable architecture for any custom image classification domain",
    ],
    whyItMatters:
      "Computer vision projects often stop at the notebook. This one shows the full pipeline — upload, inference, and a clean result interface anyone can use.",
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    subtitle: "An AI resume analysis platform that compares resumes with job descriptions and provides match scores and improvement tips.",
    region: "SaaS Product",
    category: "AI / HRTech",
    icon: FileText,
    accent: "from-[hsl(220_80%_60%/0.08)] to-transparent",
    overview:
      "An AI resume analysis platform that compares uploaded resumes with job descriptions and returns match scores, skill gap insights, and improvement suggestions through a clean HR-focused dashboard.",
    clientBackground:
      "An HR technology product built for candidates and recruiters who need intelligent resume-to-job matching with actionable feedback — not just keyword counting.",
    problems: [
      "Manual resume screening misses qualified candidates and slows hiring",
      "Candidates can't tell how well their resume matches a specific job",
      "Keyword-only matching tools produce shallow, misleading results",
      "No clear guidance on what to improve in a resume for a given role",
    ],
    approach: [
      "Built resume upload and parsing with structured extraction",
      "Used embeddings to compare resume content with job description semantically",
      "Generated match scores with skill-level breakdown",
      "Produced actionable improvement suggestions tied to skill gaps",
    ],
    features: [
      "Resume upload workflow",
      "Job description comparison",
      "Match score generation",
      "Skill gap insights",
      "Improvement suggestions",
      "Resume analysis dashboard",
    ],
    techStack: ["Python", "FastAPI", "React", "NLP", "Embeddings"],
    results: [
      "Created an intelligent HR workflow for resume matching, skill analysis, and job-description alignment",
      "Replaced shallow keyword matching with semantic similarity scoring",
      "Produced actionable improvement guidance for candidates",
      "Reusable architecture for ATS integration and recruiter dashboards",
    ],
    whyItMatters:
      "HRTech is moving beyond keyword filters. This platform shows how embeddings and NLP turn resume screening into genuine candidate-to-role matching with real guidance.",
  },
  {
    id: "smart-attendance-system",
    title: "Smart Attendance System",
    subtitle: "A face-recognition attendance platform that automates enrollment, live capture, attendance tracking, and reporting.",
    region: "AI Product",
    category: "AI / Computer Vision",
    icon: Camera,
    accent: "from-[hsl(280_80%_65%/0.08)] to-transparent",
    overview:
      "A face-recognition attendance platform that automates user enrollment, live camera capture, attendance detection, and report generation — built with OpenCV and a Flask web interface.",
    clientBackground:
      "A computer vision product designed for schools, offices, and training centers that need to replace manual attendance with reliable face-recognition automation.",
    problems: [
      "Manual attendance is slow, error-prone, and easy to falsify",
      "RFID and biometric solutions require expensive hardware deployments",
      "No simple workflow for enrolling new users and tracking them over time",
      "Attendance reports are hard to produce from manual or scattered records",
    ],
    approach: [
      "Built user enrollment with face capture and feature extraction",
      "Integrated live camera feed for real-time attendance detection",
      "Stored attendance records with timestamps for reporting",
      "Generated structured attendance reports across date ranges",
    ],
    features: [
      "Student/user enrollment with face capture",
      "Face capture workflow",
      "Attendance detection with face recognition",
      "Live camera integration",
      "Attendance reports and history",
    ],
    techStack: ["Python", "OpenCV", "Flask", "Computer Vision"],
    results: [
      "Built an automated attendance workflow using face recognition, live capture, and report generation",
      "Eliminated manual attendance overhead for classes and meetings",
      "Reduced attendance falsification through biometric verification",
      "Produced clean attendance reports from automatic capture",
    ],
    whyItMatters:
      "Computer vision applied to a daily operational pain point. This system shows how face recognition replaces hardware-heavy attendance with a software-first workflow.",
  },
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    subtitle: "An AI-powered study assistant that allows students to upload course PDFs and ask questions with citation-backed answers.",
    region: "EdTech Product",
    category: "AI / EdTech",
    icon: Brain,
    accent: "from-[hsl(200_80%_60%/0.08)] to-transparent",
    overview:
      "An AI-powered study assistant that allows students to upload course notes and PDFs, ask natural-language questions, and receive contextual answers with source citations — built on a RAG architecture tuned for academic content.",
    clientBackground:
      "An EdTech product for students who need a faster way to study from course PDFs and lecture notes without manually re-reading entire chapters.",
    problems: [
      "Students spend hours searching through PDFs for specific answers",
      "Generic LLMs hallucinate facts when answering from course material",
      "No citation tracking means students can't verify AI study answers",
      "Existing tools don't support multi-PDF course note libraries",
    ],
    approach: [
      "Built a RAG pipeline for PDF upload, chunking, embedding, and retrieval",
      "Grounded every answer in retrieved source chunks with inline citations",
      "Designed a chat interface tuned for study and revision workflows",
      "Supported multi-PDF course libraries per student",
    ],
    features: [
      "Upload course notes and PDFs",
      "Ask natural-language questions",
      "RAG-based answer generation",
      "Citation support tied to source chunks",
      "Chat-based study interface",
    ],
    techStack: ["Python", "LangChain", "React", "RAG", "Embeddings"],
    results: [
      "Delivered an AI study workflow for course notes, PDF Q&A, contextual answers, and source citations",
      "Replaced hours of manual PDF search with seconds of semantic retrieval",
      "Built trust through inline citations grounding every answer in source content",
      "Reusable architecture for any academic document Q&A use case",
    ],
    whyItMatters:
      "Study tools have to be trustworthy. This assistant shows RAG done right for education — grounded answers, real citations, and a chat workflow students will actually use.",
  },
  {
    id: "smart-parking-system",
    title: "Smart Parking System",
    subtitle: "A smart parking solution that detects available parking slots and provides alerts through a connected interface.",
    region: "IoT Product",
    category: "IoT / Computer Vision",
    icon: Car,
    accent: "from-[hsl(220_80%_60%/0.08)] to-transparent",
    overview:
      "A smart parking solution that detects available parking slots in real time and provides availability alerts through a connected mobile-friendly interface — combining Arduino sensors and computer vision.",
    clientBackground:
      "A smart-city IoT prototype built to demonstrate how sensor-driven and vision-based parking detection can replace manual slot management in urban parking facilities.",
    problems: [
      "Drivers waste time circling lots looking for empty parking slots",
      "Manual slot management can't scale to large parking facilities",
      "No real-time visibility into availability for drivers or operators",
      "Existing solutions require expensive proprietary hardware",
    ],
    approach: [
      "Combined Arduino-based sensors with computer vision slot detection",
      "Built a real-time availability status layer aggregating sensor data",
      "Designed a mobile-friendly UI for drivers to check slots before arrival",
      "Added alert and monitoring workflow for parking operators",
    ],
    features: [
      "Parking slot detection",
      "Sensor and computer vision workflow",
      "Availability status with real-time updates",
      "Mobile UI concept for drivers",
      "Alerts and operator monitoring",
    ],
    techStack: ["Arduino", "Python", "IoT", "Computer Vision"],
    results: [
      "Designed a smart parking workflow for slot detection, availability status, mobile-friendly alerts, and monitoring",
      "Demonstrated low-cost IoT + CV approach as a viable alternative to proprietary hardware",
      "Reduced driver search time through real-time availability visibility",
      "Built a foundation for smart-city parking deployments",
    ],
    whyItMatters:
      "Smart-city IoT only works when sensors, vision, and UX come together. This prototype shows how all three layers integrate into a single practical workflow.",
  },
  {
    id: "healthcare-appointment-platform",
    title: "Healthcare Appointment System",
    subtitle: "A healthcare appointment platform that helps patients book appointments, join virtual consultations, and manage medical records.",
    region: "International",
    category: "HealthTech / Telemedicine",
    icon: Video,
    accent: "from-[hsl(160_70%_50%/0.08)] to-transparent",
    overview:
      "A telemedicine-ready healthcare appointment platform where patients can browse doctors, book appointments, join virtual video consultations, and manage their medical records in one responsive interface.",
    clientBackground:
      "A full-stack healthcare product built to bridge clinic operations and patient-facing telemedicine — combining doctor listings, structured booking, video consultations, and patient record management.",
    problems: [
      "Patients struggle to find and book appropriate doctors online",
      "Telemedicine adoption is blocked by fragmented booking and video tools",
      "Medical records live in disconnected systems patients can't access",
      "Appointment history is rarely available to patients in one place",
    ],
    approach: [
      "Built searchable doctor listings with specialty and availability filters",
      "Designed a structured patient booking workflow with confirmation",
      "Integrated WebRTC video consultations directly into the appointment flow",
      "Added patient record management with appointment history",
    ],
    features: [
      "Doctor listing with specialty filters",
      "Patient booking workflow",
      "Virtual appointment and video call support",
      "Patient records dashboard",
      "Appointment history",
      "Responsive healthcare UI",
    ],
    techStack: ["React", "Node.js", "WebRTC", "Full Stack"],
    results: [
      "Built a telemedicine-ready appointment workflow with doctor booking, video consultation, and patient record management",
      "Unified doctor discovery, booking, and consultation in a single interface",
      "Enabled remote consultations through embedded WebRTC video",
      "Gave patients ownership of their appointment history and records",
    ],
    whyItMatters:
      "Healthcare delivery is moving online. This platform shows full-stack engineering applied to a real telemedicine workflow — booking, video, and records in one place.",
  },
];
