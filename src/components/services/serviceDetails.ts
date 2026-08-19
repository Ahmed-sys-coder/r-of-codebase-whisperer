import {
  Brain,
  Bot,
  TrendingUp,
  Smartphone,
  Code2,
  MessageSquare,
  Cpu,
  Eye,
  Globe,
  Palette,
  Shield,
  Zap,
  Layers,
  Bell,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface ServiceCardItem {
  title: string;
  desc: string;
}
export interface ProcessStep {
  title: string;
  desc: string;
}
export interface FeatureItem {
  title: string;
  desc: string;
}
export interface RelatedBlog {
  title: string;
  excerpt: string;
  image: string;
}
export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  shortName: string; // for dropdown
  icon: LucideIcon;
  heroSubtitle: string;
  techBadges: string[];
  overviewHeading: string;
  overviewParagraphs: string[];
  overviewBenefits: string[];
  overviewImage: string;
  servicesHeading: string;
  serviceItems: ServiceCardItem[]; // 6
  featuresHeading: string;
  features: FeatureItem[]; // 4-6
  techHeading: string;
  techList: string[];
  processHeading: string;
  processSteps: ProcessStep[]; // 5
  whyHeading: string;
  whyItems: FeatureItem[]; // 4-6
  blogsHeading: string;
  relatedBlogs: RelatedBlog[]; // 3
  faqs: FAQ[]; // 6-8
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "ai-development",
    name: "AI Development",
    shortName: "AI Development",
    icon: Brain,
    heroSubtitle:
      "We build production-grade AI applications, LLM tools, and RAG systems that turn your data into real business outcomes.",
    techBadges: ["Python", "OpenAI", "LangChain", "FastAPI", "RAG", "Pinecone"],
    overviewHeading: "AI solutions built for real business workflows",
    overviewParagraphs: [
      "We design and ship AI products that work in the real world — not demos. From private LLM assistants to retrieval-augmented search over your own documents, every system is engineered for accuracy, speed, and cost control.",
      "Our team integrates AI directly into your existing tools — CRMs, dashboards, support systems, and operations — so the value lands where work actually happens.",
      "You get clean architecture, secure data handling, and measurable ROI inside 90 days.",
    ],
    overviewBenefits: [
      "Custom LLM and RAG pipelines",
      "Secure private data integration",
      "Production monitoring & evals",
      "Cost-optimized model routing",
    ],
    overviewImage: img("photo-1677442136019-21780ecad995"),
    servicesHeading: "Our AI Development Services",
    serviceItems: [
      { title: "AI Strategy & Consulting", desc: "Identify the highest-ROI AI use cases for your business and a clear roadmap to ship them." },
      { title: "Custom LLM Applications", desc: "End-to-end AI products built on GPT, Claude, and open-source models tailored to your domain." },
      { title: "RAG & Knowledge Systems", desc: "Retrieval-augmented assistants that answer accurately from your private documents and data." },
      { title: "AI Workflow Automation", desc: "Automate document review, data extraction, classification, and multi-step operations." },
      { title: "AI Agents & Copilots", desc: "Goal-driven agents that plan, call tools, and complete tasks across your stack." },
      { title: "Model Deployment & MLOps", desc: "Secure, scalable hosting with monitoring, evaluations, and continuous improvement." },
    ],
    featuresHeading: "AI Development Features",
    features: [
      { title: "Private Data Handling", desc: "Your data stays in your environment with strict access controls." },
      { title: "Low Latency Inference", desc: "Optimized prompt and retrieval pipelines for fast response times." },
      { title: "Model Flexibility", desc: "Swap between OpenAI, Anthropic, and open-source models without rewrites." },
      { title: "Built-in Evaluations", desc: "Quality, accuracy, and hallucination tests baked into every release." },
      { title: "Scalable Architecture", desc: "Designed to handle thousands of concurrent users from day one." },
      { title: "Cost Optimization", desc: "Smart caching and model routing keep token spend predictable." },
    ],
    techHeading: "Top AI Development Technologies We Use",
    techList: ["Python", "OpenAI", "LangChain", "FastAPI", "Pinecone", "Supabase", "PostgreSQL"],
    processHeading: "AI Development Service Process",
    processSteps: [
      { title: "Discovery & Use Case Mapping", desc: "Identify where AI delivers measurable value in your workflows." },
      { title: "Data Preparation", desc: "Audit, clean, and structure your data for high-quality model results." },
      { title: "Model & Pipeline Design", desc: "Choose the right models and build the RAG or agent architecture." },
      { title: "Build, Evaluate & Iterate", desc: "Develop, run evals, and refine prompts and retrieval continuously." },
      { title: "Deploy & Monitor", desc: "Ship to production with logging, monitoring, and ongoing tuning." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for AI Development",
    whyItems: [
      { title: "Production-Ready Engineering", desc: "We ship AI products that scale — not throwaway prototypes." },
      { title: "Security & Compliance First", desc: "Private data, encrypted pipelines, and audit-friendly architecture." },
      { title: "Measurable ROI in 90 Days", desc: "Clear KPIs and evaluations from day one." },
      { title: "Long-Term Partnership", desc: "Ongoing optimization, monitoring, and model upgrades." },
    ],
    blogsHeading: "Blogs Related to AI Development",
    relatedBlogs: [
      { title: "RAG vs Fine-Tuning: Which One Do You Actually Need?", excerpt: "A practical breakdown for product teams choosing between retrieval and fine-tuning.", image: img("photo-1620712943543-bcc4688e7485") },
      { title: "Shipping LLM Apps That Don't Hallucinate", excerpt: "Patterns for grounding, evals, and guardrails in production AI systems.", image: img("photo-1655720828018-edd2daec9349") },
      { title: "Building AI Agents for Real Business Workflows", excerpt: "How to scope, design, and deploy goal-driven AI agents that ship value.", image: img("photo-1535378917042-10a22c95931a") },
    ],
    faqs: [
      { q: "Do we need a large dataset to start with AI?", a: "Not always — RAG and prompt-engineered systems work well with smaller, well-structured data. We help you assess what's needed for your use case." },
      { q: "How long does an AI project take to ship?", a: "A focused MVP typically ships in 6–10 weeks. Larger AI platforms run on 3-month delivery cycles with continuous releases." },
      { q: "Will our data be used to train external models?", a: "No. We use enterprise APIs with data-isolation guarantees, and self-hosted models where required." },
      { q: "Which AI models do you use?", a: "We pick the best model per use case — OpenAI, Anthropic, open-source Llama/Mistral — and design systems that let you switch later." },
      { q: "How do you measure AI quality?", a: "Every project includes automated evaluations for accuracy, relevance, and hallucination — tracked across releases." },
      { q: "Can you integrate AI into our existing product?", a: "Yes. We add AI features to existing SaaS and enterprise platforms without rewriting your stack." },
    ],
  },
  {
    slug: "ai-chatbot-development",
    name: "AI Chatbot Development",
    shortName: "AI Chatbot Development",
    icon: Bot,
    heroSubtitle:
      "Smart website, WhatsApp, and support chatbots that capture leads, answer customers, and automate conversations 24/7.",
    techBadges: ["OpenAI", "LangChain", "WhatsApp API", "React", "Node.js", "Webhooks"],
    overviewHeading: "Chatbots that actually convert and support customers",
    overviewParagraphs: [
      "We build AI chatbots that go beyond scripted replies — context-aware assistants that understand your business, your products, and your customers.",
      "Whether it's a website chatbot for lead capture, a WhatsApp support agent, or an internal voice assistant, every bot is trained on your real content for accurate, on-brand responses.",
      "All bots integrate with your CRM, helpdesk, and analytics — so every conversation drives measurable outcomes.",
    ],
    overviewBenefits: [
      "24/7 customer support",
      "Lead capture automation",
      "WhatsApp & web integration",
      "CRM-connected conversations",
    ],
    overviewImage: img("photo-1531746790731-6c087fecd65a"),
    servicesHeading: "Our AI Chatbot Development Services",
    serviceItems: [
      { title: "Website AI Chatbot", desc: "Branded chat widgets that answer questions and capture leads on your site." },
      { title: "WhatsApp Chatbot", desc: "Automated WhatsApp support and sales bots using the official WhatsApp Business API." },
      { title: "Customer Support Agent", desc: "AI bots trained on your knowledge base to resolve tier-1 support tickets instantly." },
      { title: "Voice AI Assistants", desc: "Voice-based bots for calls, kiosks, and accessibility-first experiences." },
      { title: "Lead Capture & Qualification", desc: "Conversational forms that qualify leads and push them straight into your CRM." },
      { title: "Multilingual Chatbots", desc: "Bots that switch language automatically for global audiences." },
    ],
    featuresHeading: "AI Chatbot Features",
    features: [
      { title: "Context-Aware Replies", desc: "Bots remember conversation context for natural multi-turn chats." },
      { title: "Knowledge Base Training", desc: "Trained on your docs, FAQs, and product info for accurate answers." },
      { title: "Human Handoff", desc: "Seamlessly transfer chats to a real agent when needed." },
      { title: "Analytics Dashboard", desc: "Track conversations, conversion rates, and top user questions." },
      { title: "Secure & Private", desc: "Conversation data stored in your infrastructure with encryption." },
      { title: "Multi-Channel Deployment", desc: "One bot, deployed across web, WhatsApp, and mobile." },
    ],
    techHeading: "Top Chatbot Technologies We Use",
    techList: ["OpenAI", "LangChain", "WhatsApp API", "Node.js", "React", "Supabase", "Webhooks"],
    processHeading: "AI Chatbot Service Process",
    processSteps: [
      { title: "Use Case & Channel Mapping", desc: "Decide channels, goals, and conversation flows." },
      { title: "Knowledge & Data Collection", desc: "Collect FAQs, docs, and product data to train the bot." },
      { title: "Bot Design & Prompting", desc: "Design persona, tone, and conversation logic." },
      { title: "Integration & Testing", desc: "Connect to WhatsApp, CRM, and helpdesk — test edge cases." },
      { title: "Launch & Continuous Tuning", desc: "Deploy live and improve based on real conversations." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for AI Chatbots",
    whyItems: [
      { title: "Official WhatsApp Partner Setup", desc: "Properly configured WhatsApp Business API integration." },
      { title: "Brand-Aligned Conversations", desc: "Bots that sound like you — not a generic AI." },
      { title: "Real Business Outcomes", desc: "Bots designed around lead capture, retention, and support KPIs." },
      { title: "Continuous Improvement", desc: "We tune your bot monthly based on real conversation data." },
    ],
    blogsHeading: "Blogs Related to AI Chatbot Development",
    relatedBlogs: [
      { title: "How to Build a WhatsApp Chatbot That Actually Converts", excerpt: "Lessons from launching WhatsApp bots for service and e-commerce businesses.", image: img("photo-1611162616475-46b635cb6868") },
      { title: "AI Chatbots vs Traditional Live Chat", excerpt: "When AI wins, when humans win, and how to combine both intelligently.", image: img("photo-1556761175-5973dc0f32e7") },
      { title: "Designing Chatbot Conversations That Feel Human", excerpt: "Persona, tone, and flow design tips for natural AI conversations.", image: img("photo-1517245386807-bb43f82c33c4") },
    ],
    faqs: [
      { q: "Can the chatbot answer from our own documents?", a: "Yes — we train bots on your knowledge base, product info, and policies using RAG for accurate, grounded answers." },
      { q: "Do you support WhatsApp Business API?", a: "Yes. We set up official WhatsApp Business API with templates, webhooks, and analytics." },
      { q: "Can the bot hand off to a human agent?", a: "Absolutely. Smart escalation rules route complex queries to a live agent without breaking the conversation." },
      { q: "How do you prevent the bot from making things up?", a: "We use RAG, strict grounding, fallback prompts, and evaluations to minimize hallucinations." },
      { q: "Can the chatbot integrate with our CRM?", a: "Yes. We integrate with HubSpot, Zoho, Pipedrive, Salesforce, and custom CRMs." },
      { q: "Will it work in multiple languages?", a: "Yes. We support multilingual bots that auto-detect and reply in the user's language." },
    ],
  },
  {
    slug: "predictive-models",
    name: "Predictive Models",
    shortName: "Predictive Models",
    icon: TrendingUp,
    heroSubtitle:
      "Forecasting, churn prediction, demand planning, and decision-intelligence models that give your business an edge.",
    techBadges: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "XGBoost", "Power BI"],
    overviewHeading: "Predictive analytics that drive better business decisions",
    overviewParagraphs: [
      "We build predictive models that turn your historical data into reliable forecasts — sales, churn, pricing, demand, and operational risk.",
      "Every model is built around your real KPIs, not academic accuracy scores. We deliver dashboards and APIs your team can actually use.",
      "From data audit to deployed model, you get a production-ready prediction system with monitoring and retraining built in.",
    ],
    overviewBenefits: [
      "Accurate forecasting models",
      "Churn & retention prediction",
      "Dynamic pricing intelligence",
      "Real-time decision APIs",
    ],
    overviewImage: img("photo-1551288049-bebda4e38f71"),
    servicesHeading: "Our Predictive Modeling Services",
    serviceItems: [
      { title: "Sales & Revenue Forecasting", desc: "Predict revenue, pipeline health, and demand with confidence intervals." },
      { title: "Customer Churn Prediction", desc: "Identify at-risk customers before they leave and target retention plays." },
      { title: "Demand & Inventory Forecasting", desc: "Plan stock, staffing, and capacity with reliable forecasts." },
      { title: "Dynamic Pricing Models", desc: "Adaptive pricing engines that react to demand and competitor signals." },
      { title: "Risk & Fraud Scoring", desc: "Score transactions, applications, or users in real time." },
      { title: "Decision Intelligence Dashboards", desc: "Combine predictions with BI dashboards your team can act on." },
    ],
    featuresHeading: "Predictive Model Features",
    features: [
      { title: "Explainable Predictions", desc: "SHAP and feature-importance reports so decisions are auditable." },
      { title: "Real-Time API Access", desc: "Models exposed as low-latency APIs for in-product use." },
      { title: "Automatic Retraining", desc: "Scheduled retraining keeps models accurate as data evolves." },
      { title: "Drift Monitoring", desc: "Alerts when input data or model performance shifts." },
      { title: "BI Integrations", desc: "Plug predictions directly into Power BI, Tableau, or your dashboards." },
      { title: "Secure Data Pipelines", desc: "End-to-end encryption and role-based access for sensitive data." },
    ],
    techHeading: "Top Predictive Modeling Technologies We Use",
    techList: ["Python", "Pandas", "Scikit-learn", "XGBoost", "TensorFlow", "FastAPI", "Power BI"],
    processHeading: "Predictive Modeling Service Process",
    processSteps: [
      { title: "Business Question Framing", desc: "Define the exact decision the model will support." },
      { title: "Data Audit & Engineering", desc: "Clean, join, and engineer features from your raw data." },
      { title: "Model Training & Selection", desc: "Test multiple algorithms and pick the best by your KPI." },
      { title: "Validation & Explainability", desc: "Backtest, validate, and produce explainability reports." },
      { title: "Deploy, Monitor & Retrain", desc: "Ship as an API or dashboard with monitoring and retraining." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for Predictive Models",
    whyItems: [
      { title: "KPI-First Modeling", desc: "We optimize for your business metric, not generic accuracy." },
      { title: "Explainable AI", desc: "Every prediction comes with a reason — no black boxes." },
      { title: "Production-Ready", desc: "APIs, dashboards, and retraining pipelines included." },
      { title: "Cross-Industry Experience", desc: "SaaS, retail, fintech, and operations use cases delivered." },
    ],
    blogsHeading: "Blogs Related to Predictive Models",
    relatedBlogs: [
      { title: "Why Most Forecasting Projects Fail (and How to Fix Them)", excerpt: "The hidden traps in business forecasting and how to avoid them.", image: img("photo-1460925895917-afdab827c52f") },
      { title: "Churn Prediction: From Model to Retention Playbook", excerpt: "Turning churn scores into real customer retention actions.", image: img("photo-1556761175-b413da4baf72") },
      { title: "Explainable AI for Business Leaders", excerpt: "Why SHAP and feature importance matter for executive trust.", image: img("photo-1551288049-bebda4e38f71") },
    ],
    faqs: [
      { q: "How much historical data do we need?", a: "Most use cases need 12+ months of clean data, but we can often deliver value with less using transfer learning or hybrid approaches." },
      { q: "Can predictions integrate into our product?", a: "Yes — we expose models as low-latency APIs that any app or dashboard can consume." },
      { q: "Are the predictions explainable?", a: "Every model includes feature importance and SHAP-based explanations so decisions are auditable." },
      { q: "How do you keep models accurate over time?", a: "We schedule automatic retraining and monitor for data drift to maintain accuracy." },
      { q: "What industries do you cover?", a: "SaaS, e-commerce, fintech, logistics, and operations — anywhere predictions drive decisions." },
      { q: "Will we own the model and code?", a: "Yes — full IP ownership of the model, code, and pipelines." },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile App Development",
    icon: Smartphone,
    heroSubtitle:
      "Cross-platform Android and iOS apps built for speed, reliability, and real business growth.",
    techBadges: ["React Native", "Flutter", "Firebase", "Supabase", "REST APIs", "Stripe", "Figma"],
    overviewHeading: "Mobile app solutions built for real business growth",
    overviewParagraphs: [
      "We design and develop mobile apps that look premium, perform reliably, and scale with your users — on both Android and iOS from one codebase.",
      "From startup MVPs to production-grade business apps, every project is engineered for clean UX, secure data, and fast time-to-market.",
      "You get a maintainable codebase, App Store and Play Store deployment, and ongoing support to keep your app growing.",
    ],
    overviewBenefits: [
      "Cross-platform from one codebase",
      "App Store & Play Store ready",
      "Secure API integrations",
      "Push notifications & analytics",
    ],
    overviewImage: img("photo-1512941937669-90a1b58e7e9c"),
    servicesHeading: "Our Mobile App Development Services",
    serviceItems: [
      { title: "App Development Consultation", desc: "Scope your idea, validate features, and choose the right tech stack." },
      { title: "App UI/UX Design", desc: "Premium mobile-first designs with prototypes and design systems." },
      { title: "Cross-Platform App Development", desc: "One codebase for Android and iOS using React Native or Flutter." },
      { title: "API Integration", desc: "Connect your app to backends, payments, maps, and third-party services." },
      { title: "App Testing & QA", desc: "Manual and automated testing for stable, crash-free experiences." },
      { title: "Deployment & Maintenance", desc: "Store submissions, release management, and ongoing updates." },
    ],
    featuresHeading: "Mobile App Development Features",
    features: [
      { title: "User-Friendly Interface", desc: "Intuitive, accessible UX designed for real-world use." },
      { title: "High Performance", desc: "Optimized rendering and bundle sizes for fast load times." },
      { title: "Secure Architecture", desc: "Encrypted storage, secure auth, and best-practice API security." },
      { title: "Scalable Integrations", desc: "Built to integrate with CRMs, payments, and analytics tools." },
      { title: "Push Notifications", desc: "Re-engage users with targeted, segmented push campaigns." },
      { title: "Smooth App Experience", desc: "Polished animations and 60fps interactions across devices." },
    ],
    techHeading: "Top Mobile Development Platforms We Use",
    techList: ["React Native", "Flutter", "Firebase", "Supabase", "REST APIs", "Stripe", "Figma"],
    processHeading: "Mobile App Development Service Process",
    processSteps: [
      { title: "Requirement Gathering", desc: "Understand your goals, users, and core feature set." },
      { title: "UI/UX & Prototype", desc: "Design screens and a clickable prototype for early feedback." },
      { title: "Development", desc: "Build the app with clean architecture and reusable components." },
      { title: "Testing & Implementation", desc: "QA on real devices, fix bugs, and deploy to stores." },
      { title: "Maintenance & Updates", desc: "Continuous monitoring, updates, and feature releases." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for Mobile App Development",
    whyItems: [
      { title: "Scalable Architecture", desc: "Codebases ready to grow from MVP to millions of users." },
      { title: "Modern UI/UX", desc: "App-Store-quality design across every screen." },
      { title: "Secure Development", desc: "Industry best practices for auth, storage, and APIs." },
      { title: "Long-Term Support", desc: "We stay with you through updates, OS changes, and growth." },
    ],
    blogsHeading: "Blogs Related to Mobile App Development",
    relatedBlogs: [
      { title: "React Native vs Flutter in 2026", excerpt: "Which cross-platform framework wins for your next mobile app?", image: img("photo-1607252650355-f7fd0460ccdb") },
      { title: "How to Ship a Mobile MVP in 8 Weeks", excerpt: "Our proven playbook for fast, focused mobile MVP delivery.", image: img("photo-1551650975-87deedd944c3") },
      { title: "Mobile App Security Checklist", excerpt: "The 12 must-have security controls for production mobile apps.", image: img("photo-1563013544-824ae1b704d3") },
    ],
    faqs: [
      { q: "Do you build for both iOS and Android?", a: "Yes — we use React Native or Flutter to ship one codebase that runs on both platforms." },
      { q: "How long does a mobile MVP take?", a: "A focused MVP typically ships in 6–8 weeks; larger apps run 3–4 months." },
      { q: "Will you submit the app to App Store and Play Store?", a: "Yes — we handle store accounts, metadata, screenshots, and submission." },
      { q: "Can you integrate payments and subscriptions?", a: "Yes — Stripe, in-app purchases, and other payment flows are all supported." },
      { q: "Do you provide post-launch support?", a: "Every engagement includes an SLA-backed support plan for bug fixes and updates." },
      { q: "Do we own the source code?", a: "Yes. Full IP ownership of the codebase and design files." },
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    shortName: "Custom Software Development",
    icon: Code2,
    heroSubtitle:
      "CRM, ERP, dashboards, internal tools, and workflow systems built around exactly how your business operates.",
    techBadges: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "REST APIs"],
    overviewHeading: "Custom software engineered around your real workflows",
    overviewParagraphs: [
      "Off-the-shelf tools force you to change how you work. We build custom software that matches how your business actually operates — replacing spreadsheets, workarounds, and disconnected SaaS.",
      "Every system is architected for security, scale, and long-term ownership. You get a single source of truth and workflows tuned to your team.",
      "From CRMs to ERPs, dashboards to internal automation tools — we deliver software your team will actually use.",
    ],
    overviewBenefits: [
      "Tailored to your workflows",
      "Single source of truth",
      "Full IP ownership",
      "Scalable cloud architecture",
    ],
    overviewImage: img("photo-1551288049-bebda4e38f71"),
    servicesHeading: "Our Custom Software Development Services",
    serviceItems: [
      { title: "Custom CRM Development", desc: "Sales and customer systems built around your pipeline and team." },
      { title: "Custom ERP Solutions", desc: "Operations, finance, and inventory systems for growing businesses." },
      { title: "Internal Tools & Dashboards", desc: "Admin panels and operational dashboards that ship in weeks." },
      { title: "Workflow Automation", desc: "Eliminate manual processes with automated approvals and tasks." },
      { title: "Legacy System Modernization", desc: "Migrate old systems to modern, secure, scalable architectures." },
      { title: "API & Microservices", desc: "Modular backends that plug into the rest of your stack." },
    ],
    featuresHeading: "Custom Software Development Features",
    features: [
      { title: "Role-Based Access", desc: "Granular permissions and audit logs for every action." },
      { title: "Scalable Cloud Hosting", desc: "Architected for your 3–5 year roadmap, not just today." },
      { title: "Real-Time Sync", desc: "Live updates across users and devices." },
      { title: "Custom Reporting", desc: "Dashboards and exports built around your KPIs." },
      { title: "Secure by Default", desc: "Encryption, RBAC, and compliance-ready architecture." },
      { title: "Integrations Ready", desc: "Connect to your existing CRM, ERP, and 3rd-party tools." },
    ],
    techHeading: "Top Custom Software Technologies We Use",
    techList: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "REST APIs"],
    processHeading: "Custom Software Service Process",
    processSteps: [
      { title: "Discovery & Workflow Mapping", desc: "Understand your processes, pain points, and goals." },
      { title: "Architecture & Design", desc: "Design data models, APIs, and user flows." },
      { title: "Iterative Development", desc: "Ship working modules in 2-week sprints with reviews." },
      { title: "QA & UAT", desc: "Test thoroughly and validate with real users." },
      { title: "Launch & Continuous Improvement", desc: "Deploy, monitor, and iterate based on real usage." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for Custom Software",
    whyItems: [
      { title: "Built for Your Workflow", desc: "We engineer around your real operations, not a generic template." },
      { title: "Clean, Documented Code", desc: "Maintainable code with documentation and onboarding guides." },
      { title: "Cloud-Native Architecture", desc: "AWS or GCP architectures designed to scale safely." },
      { title: "Long-Term Partnership", desc: "Ongoing improvements, support, and feature delivery." },
    ],
    blogsHeading: "Blogs Related to Custom Software Development",
    relatedBlogs: [
      { title: "When Custom Software Beats Off-the-Shelf SaaS", excerpt: "Five signs your business has outgrown generic SaaS tools.", image: img("photo-1531403009284-440f080d1e12") },
      { title: "How to Replace a Legacy System Without Downtime", excerpt: "A migration playbook for risk-averse teams.", image: img("photo-1518770660439-4636190af475") },
      { title: "Build vs Buy: A Practical Decision Framework", excerpt: "How CTOs decide between custom builds and SaaS purchases.", image: img("photo-1551434678-e076c223a692") },
    ],
    faqs: [
      { q: "How long does custom software take to build?", a: "MVPs ship in 8–12 weeks; full platforms run 3–6 months depending on scope." },
      { q: "Will we own the code?", a: "Yes — full IP ownership of the code, infrastructure config, and design files." },
      { q: "Can you integrate with our existing tools?", a: "Yes — we integrate with CRMs, ERPs, payment systems, and any tool with an API." },
      { q: "How do you handle data migration?", a: "We plan migrations with phased cutovers, validation, and rollback plans." },
      { q: "Do you provide hosting and DevOps?", a: "Yes — we set up cloud hosting, CI/CD, and monitoring or hand off cleanly to your team." },
      { q: "What about ongoing support?", a: "Every project includes an SLA-backed support and improvement plan." },
    ],
  },
  {
    slug: "natural-language-processing",
    name: "Natural Language Processing",
    shortName: "Natural Language Processing",
    icon: MessageSquare,
    heroSubtitle:
      "Document intelligence, sentiment analysis, classification, summarization, and entity extraction at scale.",
    techBadges: ["Python", "Transformers", "Hugging Face", "spaCy", "LangChain", "Elasticsearch"],
    overviewHeading: "NLP systems that turn text into structured business value",
    overviewParagraphs: [
      "We build NLP pipelines that extract structure, meaning, and insight from unstructured text — contracts, emails, support tickets, reviews, and internal documents.",
      "From sentiment analysis to entity extraction and document summarization, every system is tuned to your domain vocabulary and accuracy targets.",
      "You get production-ready NLP services exposed as APIs your apps and analytics can consume.",
    ],
    overviewBenefits: [
      "Domain-tuned NLP models",
      "Document intelligence at scale",
      "Real-time text APIs",
      "Multi-language support",
    ],
    overviewImage: img("photo-1455390582262-044cdead277a"),
    servicesHeading: "Our NLP Services",
    serviceItems: [
      { title: "Document Intelligence", desc: "Extract structured fields from PDFs, contracts, and forms." },
      { title: "Sentiment Analysis", desc: "Analyze reviews, tickets, and social mentions at scale." },
      { title: "Text Classification", desc: "Auto-categorize emails, tickets, or documents by topic or intent." },
      { title: "Named Entity Recognition", desc: "Extract people, organizations, dates, amounts, and custom entities." },
      { title: "Summarization", desc: "Generate executive summaries from long documents and meetings." },
      { title: "Semantic Search", desc: "Vector-based search that understands meaning, not just keywords." },
    ],
    featuresHeading: "NLP Features",
    features: [
      { title: "Domain-Specific Models", desc: "Models fine-tuned on your industry vocabulary." },
      { title: "Multi-Language Support", desc: "Process content in dozens of languages." },
      { title: "High-Throughput Pipelines", desc: "Batch-process millions of documents reliably." },
      { title: "API-First Delivery", desc: "Every NLP capability exposed as a clean REST API." },
      { title: "Privacy-Safe Processing", desc: "On-premise and private-cloud deployments available." },
      { title: "Evaluation Reports", desc: "Accuracy and recall reports on your real data." },
    ],
    techHeading: "Top NLP Technologies We Use",
    techList: ["Python", "Transformers", "Hugging Face", "spaCy", "LangChain", "Elasticsearch"],
    processHeading: "NLP Service Process",
    processSteps: [
      { title: "Use Case & Data Audit", desc: "Define the task and inspect data quality." },
      { title: "Annotation & Training Data", desc: "Build clean labeled datasets where needed." },
      { title: "Model Selection & Fine-Tuning", desc: "Pick pre-trained models and fine-tune on your data." },
      { title: "Evaluation & Iteration", desc: "Measure accuracy and refine until KPIs are hit." },
      { title: "Deploy as API", desc: "Production deployment with monitoring and retraining." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for NLP",
    whyItems: [
      { title: "Real Production Experience", desc: "Pipelines processing millions of documents in production." },
      { title: "Accuracy-Focused", desc: "Honest evaluations on your real data — no inflated benchmarks." },
      { title: "Privacy & Compliance", desc: "On-premise and private deployments for regulated industries." },
      { title: "Integrated Deliverables", desc: "Models, APIs, and dashboards delivered together." },
    ],
    blogsHeading: "Blogs Related to NLP",
    relatedBlogs: [
      { title: "Choosing Between Fine-Tuning and Prompting for NLP", excerpt: "When fine-tuning beats prompts — and when it doesn't.", image: img("photo-1432821596592-e2c18b78144f") },
      { title: "Document Intelligence in Regulated Industries", excerpt: "How legal and finance teams extract structured data from contracts.", image: img("photo-1450101499163-c8848c66ca85") },
      { title: "Semantic Search vs Keyword Search", excerpt: "Why vector search transforms enterprise knowledge discovery.", image: img("photo-1499750310107-5fef28a66643") },
    ],
    faqs: [
      { q: "What languages do you support?", a: "We work with dozens of languages via multilingual transformer models — English, Arabic, Urdu, Spanish, French, and more." },
      { q: "How accurate are NLP models?", a: "Accuracy depends on the task and data, typically 85–95% after fine-tuning on your domain." },
      { q: "Can you process scanned documents?", a: "Yes — we combine OCR with NLP for end-to-end document intelligence." },
      { q: "Do we need labeled data?", a: "Not always — many tasks work with pre-trained models. We help with labeling when needed." },
      { q: "How are NLP services deployed?", a: "As REST APIs in the cloud, on-premise, or in your private VPC." },
      { q: "Can NLP integrate with our CRM or BI?", a: "Yes — outputs can flow into any tool with an API or database connector." },
    ],
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    shortName: "Machine Learning",
    icon: Cpu,
    heroSubtitle:
      "Custom ML model development, recommendations, classification, and deployment with monitoring built in.",
    techBadges: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "MLflow", "FastAPI"],
    overviewHeading: "Machine learning systems engineered for production",
    overviewParagraphs: [
      "We build, deploy, and monitor machine learning models that solve real business problems — recommendations, classification, scoring, and automation.",
      "Every ML system includes the pieces most teams skip: data validation, monitoring, retraining, and clear evaluation against business KPIs.",
      "You get a model your engineering team can actually maintain, not a notebook that nobody can ship.",
    ],
    overviewBenefits: [
      "Custom ML model development",
      "Recommendation systems",
      "Real-time scoring APIs",
      "Full MLOps pipelines",
    ],
    overviewImage: img("photo-1518770660439-4636190af475"),
    servicesHeading: "Our Machine Learning Services",
    serviceItems: [
      { title: "Custom Model Development", desc: "Tailored ML models built around your data and KPIs." },
      { title: "Recommendation Systems", desc: "Personalized recommendations for content, products, and users." },
      { title: "Classification & Scoring", desc: "Score leads, transactions, content, or risk in real time." },
      { title: "Anomaly Detection", desc: "Detect unusual patterns in transactions, logs, or behavior." },
      { title: "Model Deployment & MLOps", desc: "Production deployment with CI/CD, monitoring, and retraining." },
      { title: "ML Strategy Consulting", desc: "Roadmaps and architecture reviews for ML programs." },
    ],
    featuresHeading: "Machine Learning Features",
    features: [
      { title: "End-to-End MLOps", desc: "From data ingestion to production monitoring." },
      { title: "Drift & Performance Monitoring", desc: "Alerts when data or model performance shifts." },
      { title: "Automated Retraining", desc: "Scheduled retraining keeps models fresh." },
      { title: "Explainability Built In", desc: "Every prediction is auditable with SHAP or LIME." },
      { title: "Scalable Serving", desc: "Real-time or batch inference at any volume." },
      { title: "Experiment Tracking", desc: "MLflow-based tracking of every experiment." },
    ],
    techHeading: "Top Machine Learning Technologies We Use",
    techList: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "MLflow", "FastAPI", "Docker"],
    processHeading: "Machine Learning Service Process",
    processSteps: [
      { title: "Problem Definition", desc: "Translate the business question into an ML problem." },
      { title: "Data Engineering", desc: "Build clean, reproducible data pipelines." },
      { title: "Model Training & Evaluation", desc: "Train, compare, and validate models on real data." },
      { title: "Deployment & Serving", desc: "Ship the model as an API with CI/CD and monitoring." },
      { title: "Monitor & Retrain", desc: "Continuous monitoring, retraining, and improvement." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for Machine Learning",
    whyItems: [
      { title: "Production-Grade MLOps", desc: "We ship ML systems, not throwaway notebooks." },
      { title: "Business-First Metrics", desc: "We optimize for your KPI, not academic accuracy." },
      { title: "Reliable Engineering", desc: "Tested, monitored, version-controlled ML pipelines." },
      { title: "Cross-Industry Experience", desc: "Recommendations, scoring, and detection across many sectors." },
    ],
    blogsHeading: "Blogs Related to Machine Learning",
    relatedBlogs: [
      { title: "From Notebook to Production: A Practical MLOps Path", excerpt: "How to take a working model and ship it reliably.", image: img("photo-1551288049-bebda4e38f71") },
      { title: "Recommendation Systems That Actually Convert", excerpt: "Beyond collaborative filtering — modern recommendation patterns.", image: img("photo-1559526324-4b87b5e36e44") },
      { title: "Model Monitoring: Catching Drift Before It Hurts", excerpt: "Practical monitoring stacks for production ML.", image: img("photo-1518770660439-4636190af475") },
    ],
    faqs: [
      { q: "Do you handle the full MLOps stack?", a: "Yes — data pipelines, training, deployment, monitoring, and retraining." },
      { q: "How do you decide which model to use?", a: "We start with the simplest model that fits the problem and only add complexity when it improves the business KPI." },
      { q: "Can you deploy on our own cloud?", a: "Yes — AWS, GCP, Azure, or on-premise deployments are all supported." },
      { q: "How do you measure ML success?", a: "We define business KPIs upfront — conversion, retention, cost savings — and track them post-deploy." },
      { q: "Will the model degrade over time?", a: "All models drift. We monitor for drift and retrain on a schedule or based on triggers." },
      { q: "Who owns the trained models?", a: "You do — full IP ownership of the model, code, and pipelines." },
    ],
  },
  {
    slug: "computer-vision",
    name: "Computer Vision",
    shortName: "Computer Vision",
    icon: Eye,
    heroSubtitle:
      "Object detection, OCR, video analytics, and visual inspection systems built with modern computer vision models.",
    techBadges: ["OpenCV", "YOLO", "TensorFlow", "PyTorch", "Python", "MediaPipe"],
    overviewHeading: "Computer vision systems for real-world automation",
    overviewParagraphs: [
      "We build computer vision systems that detect, classify, and analyze images and video — for inspection, security, retail analytics, and process automation.",
      "From real-time object detection to OCR pipelines and visual QA, every system is tuned for accuracy and the latency your operations need.",
      "You get models, APIs, and dashboards delivered together — production-ready from day one.",
    ],
    overviewBenefits: [
      "Real-time object detection",
      "OCR & document capture",
      "Video analytics pipelines",
      "Edge & cloud deployment",
    ],
    overviewImage: img("photo-1535378917042-10a22c95931a"),
    servicesHeading: "Our Computer Vision Services",
    serviceItems: [
      { title: "Object Detection", desc: "Detect and track objects in images and video streams." },
      { title: "OCR & Document Capture", desc: "Extract text and structured data from scanned documents." },
      { title: "Visual Inspection & QA", desc: "Automated defect detection for manufacturing and quality control." },
      { title: "Face & Person Recognition", desc: "Identity verification and presence detection." },
      { title: "Video Analytics", desc: "Crowd counts, dwell time, and behavior analytics from video." },
      { title: "Edge Deployment", desc: "On-device inference for cameras, mobile, and embedded systems." },
    ],
    featuresHeading: "Computer Vision Features",
    features: [
      { title: "Real-Time Inference", desc: "Optimized models for low-latency, on-the-edge use." },
      { title: "Custom Model Training", desc: "Models trained on your own labeled images." },
      { title: "Scalable Pipelines", desc: "Process millions of images or live video streams reliably." },
      { title: "Privacy-First Options", desc: "On-device or private-cloud inference to keep visuals secure." },
      { title: "Dashboards & Alerts", desc: "Visualize detections and trigger real-time alerts." },
      { title: "Multi-Camera Support", desc: "Aggregate analytics across many cameras and locations." },
    ],
    techHeading: "Top Computer Vision Technologies We Use",
    techList: ["OpenCV", "YOLO", "TensorFlow", "PyTorch", "Python", "MediaPipe"],
    processHeading: "Computer Vision Service Process",
    processSteps: [
      { title: "Use Case & Environment Audit", desc: "Define what to detect and the camera or video setup." },
      { title: "Data Collection & Labeling", desc: "Gather and annotate images for training." },
      { title: "Model Training & Tuning", desc: "Train and tune models for accuracy and latency." },
      { title: "Pipeline & API Build", desc: "Wrap models in real-time inference pipelines and APIs." },
      { title: "Deploy, Monitor & Improve", desc: "Edge or cloud deployment with monitoring and retraining." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for Computer Vision",
    whyItems: [
      { title: "Real Production Pipelines", desc: "Systems running 24/7 in operations and inspection settings." },
      { title: "Edge + Cloud Expertise", desc: "We deploy where your latency and privacy needs require." },
      { title: "Honest Accuracy", desc: "Reported on your real data, not curated benchmarks." },
      { title: "End-to-End Delivery", desc: "Models, APIs, and dashboards in one engagement." },
    ],
    blogsHeading: "Blogs Related to Computer Vision",
    relatedBlogs: [
      { title: "YOLO vs Detectron: Which Object Detector to Pick", excerpt: "A practical comparison for real-world detection projects.", image: img("photo-1535378917042-10a22c95931a") },
      { title: "Deploying Computer Vision on the Edge", excerpt: "Patterns for running CV models on cameras and embedded devices.", image: img("photo-1518770660439-4636190af475") },
      { title: "OCR Beyond Scanned Documents", excerpt: "Modern OCR pipelines for receipts, IDs, and handwriting.", image: img("photo-1455390582262-044cdead277a") },
    ],
    faqs: [
      { q: "Can you train models on our own images?", a: "Yes — we build custom datasets and fine-tune models on your data." },
      { q: "Do you support edge deployment?", a: "Yes — Jetson, mobile, and other edge targets are supported." },
      { q: "How accurate are computer vision models?", a: "Accuracy varies by task and data quality, typically 90%+ after tuning." },
      { q: "Can you integrate with our existing cameras?", a: "Yes — we work with most IP camera and CCTV systems." },
      { q: "Is the video data secure?", a: "We support on-device and private-cloud deployments to keep video data secure." },
      { q: "Do you provide dashboards?", a: "Yes — real-time dashboards and alerts come standard." },
    ],
  },
  {
    slug: "custom-web-development",
    name: "Custom Web Development",
    shortName: "Custom Web Development",
    icon: Globe,
    heroSubtitle:
      "Fast, SEO-friendly business websites, SaaS dashboards, and web platforms built with modern frameworks.",
    techBadges: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "Tailwind"],
    overviewHeading: "Modern web platforms built for performance and growth",
    overviewParagraphs: [
      "We design and develop fast, SEO-friendly web applications and business sites with modern React and Next.js stacks.",
      "From marketing websites to SaaS dashboards and customer portals, every project is engineered for sub-second load times, accessibility, and clean architecture.",
      "You get a website your team can update, your customers love, and your business can scale on for years.",
    ],
    overviewBenefits: [
      "Sub-second page loads",
      "SEO-friendly architecture",
      "Modern responsive UI",
      "Scalable backend APIs",
    ],
    overviewImage: img("photo-1467232004584-a241de8bcf5d"),
    servicesHeading: "Our Custom Web Development Services",
    serviceItems: [
      { title: "Business Websites", desc: "Modern, SEO-friendly websites that convert visitors into leads." },
      { title: "Web Applications", desc: "Feature-rich React/Next.js apps for any business workflow." },
      { title: "SaaS Dashboards", desc: "Multi-tenant dashboards with auth, billing, and analytics." },
      { title: "Customer Portals", desc: "Self-service portals for customers, partners, and vendors." },
      { title: "E-commerce Platforms", desc: "Stores with checkout, inventory, and admin built in." },
      { title: "Web App Modernization", desc: "Rebuild slow, legacy web apps on modern frameworks." },
    ],
    featuresHeading: "Custom Web Development Features",
    features: [
      { title: "Lightning-Fast Performance", desc: "Optimized rendering, caching, and asset delivery." },
      { title: "SEO-Friendly Architecture", desc: "SSR, structured data, and clean URLs out of the box." },
      { title: "Responsive on Every Device", desc: "Polished on phones, tablets, and large desktops." },
      { title: "Accessibility-First", desc: "WCAG-aligned components and keyboard support." },
      { title: "Secure by Default", desc: "Modern auth, encryption, and best-practice headers." },
      { title: "CMS-Friendly", desc: "Integrate with Sanity, Strapi, or a custom admin." },
    ],
    techHeading: "Top Web Development Technologies We Use",
    techList: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "Tailwind", "Vercel"],
    processHeading: "Web Development Service Process",
    processSteps: [
      { title: "Discovery & Scope", desc: "Map goals, users, and the feature set." },
      { title: "Design & Prototype", desc: "High-fidelity designs and clickable prototypes." },
      { title: "Development", desc: "Build with reusable components and clean architecture." },
      { title: "QA & Performance", desc: "Test, optimize, and harden before launch." },
      { title: "Launch & Iterate", desc: "Deploy, monitor, and improve based on real usage." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for Web Development",
    whyItems: [
      { title: "Premium Modern UI", desc: "Designs that look and feel like a serious brand." },
      { title: "Engineered for SEO", desc: "Built to rank from day one." },
      { title: "Clean, Maintainable Code", desc: "Codebases your team or future devs can extend easily." },
      { title: "Long-Term Support", desc: "Ongoing improvements, monitoring, and growth support." },
    ],
    blogsHeading: "Blogs Related to Custom Web Development",
    relatedBlogs: [
      { title: "Next.js vs React: When to Use Which", excerpt: "Choose the right framework for your next web project.", image: img("photo-1517180102446-f3ece451e9d8") },
      { title: "Web Performance: The Real-World Playbook", excerpt: "How to consistently hit sub-second load times.", image: img("photo-1467232004584-a241de8bcf5d") },
      { title: "Designing for SEO Without Sacrificing UX", excerpt: "Patterns for sites that rank and convert.", image: img("photo-1559136555-9303baea8ebd") },
    ],
    faqs: [
      { q: "Do you build with WordPress?", a: "Our focus is modern React/Next.js stacks for performance and SEO, but we can integrate headless CMS like Sanity or Strapi." },
      { q: "Will the site be fast and SEO-friendly?", a: "Yes — SSR, performance budgets, and SEO best practices are built into every project." },
      { q: "Can you redesign our existing website?", a: "Yes — we redesign and rebuild outdated websites on modern frameworks." },
      { q: "Do you provide hosting?", a: "Yes — Vercel, AWS, or your preferred cloud, with CI/CD and monitoring." },
      { q: "Will I be able to update content?", a: "We integrate a CMS or admin panel so your team can manage content." },
      { q: "Do you provide post-launch support?", a: "Every engagement includes an SLA-backed support plan." },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI UX Design",
    shortName: "UI UX Design",
    icon: Palette,
    heroSubtitle:
      "Premium product design, design systems, prototypes, and SaaS dashboards focused on conversion and clarity.",
    techBadges: ["Figma", "Wireframes", "Design Systems", "Prototypes", "User Research", "Usability Testing"],
    overviewHeading: "Product design that converts and clarifies",
    overviewParagraphs: [
      "We design clean, modern interfaces for SaaS, dashboards, mobile apps, and marketing sites — backed by real user thinking, not just aesthetics.",
      "From wireframes to production-ready design systems, every project is built around clarity, conversion, and accessibility.",
      "You get Figma files, prototypes, and a system your engineering team can build from without guessing.",
    ],
    overviewBenefits: [
      "Premium product design",
      "Design systems & components",
      "Interactive prototypes",
      "Conversion-focused UI",
    ],
    overviewImage: img("photo-1581291518857-4e27b48ff24e"),
    servicesHeading: "Our UI UX Design Services",
    serviceItems: [
      { title: "Product UI/UX Design", desc: "End-to-end product design for SaaS, mobile, and web platforms." },
      { title: "Design Systems", desc: "Scalable component libraries and design tokens for your product." },
      { title: "Wireframes & Prototypes", desc: "Low and high-fidelity prototypes for early validation." },
      { title: "User Research", desc: "Interviews, surveys, and usability testing to guide design." },
      { title: "SaaS Dashboard Design", desc: "Information-dense dashboards that stay clean and usable." },
      { title: "Landing Page Design", desc: "Conversion-focused landing pages and marketing sites." },
    ],
    featuresHeading: "UI UX Design Features",
    features: [
      { title: "User-First Thinking", desc: "Every screen designed around real user needs." },
      { title: "Design Systems", desc: "Reusable components and tokens for consistency." },
      { title: "Accessibility-Aware", desc: "Contrast, focus states, and WCAG considerations baked in." },
      { title: "Interactive Prototypes", desc: "Clickable Figma prototypes for validation." },
      { title: "Conversion-Focused", desc: "Layouts engineered around the next user action." },
      { title: "Dev-Ready Handoff", desc: "Clean Figma files with specs your engineers will love." },
    ],
    techHeading: "Top UI UX Design Tools We Use",
    techList: ["Figma", "Wireframes", "Design Systems", "Prototypes", "User Research", "Usability Testing"],
    processHeading: "UI UX Design Service Process",
    processSteps: [
      { title: "Discovery & User Research", desc: "Understand users, goals, and pain points." },
      { title: "Wireframes & Information Architecture", desc: "Map flows and structure before visuals." },
      { title: "Visual Design & Prototyping", desc: "Design high-fidelity screens and clickable prototypes." },
      { title: "Usability Testing & Iteration", desc: "Test with real users and refine." },
      { title: "Design System & Handoff", desc: "Document the system and hand off to engineering." },
    ],
    whyHeading: "Why Choose Code Envision Technologies for UI UX Design",
    whyItems: [
      { title: "Designers Who Think in Systems", desc: "We deliver scalable design systems, not one-off mockups." },
      { title: "Business-Aware Design", desc: "We design around your KPIs — conversion, activation, retention." },
      { title: "Engineering Alignment", desc: "Designs built to ship cleanly, with dev-friendly handoff." },
      { title: "End-to-End Capability", desc: "Same team can design and build if you want." },
    ],
    blogsHeading: "Blogs Related to UI UX Design",
    relatedBlogs: [
      { title: "Designing SaaS Dashboards Users Don't Hate", excerpt: "Patterns for keeping dense dashboards clean and usable.", image: img("photo-1581291518857-4e27b48ff24e") },
      { title: "How a Design System Speeds Up Engineering", excerpt: "Real numbers on how design systems pay back fast.", image: img("photo-1559028012-481c04fa702d") },
      { title: "Conversion-Centered Landing Page Design", excerpt: "What separates pages that convert from pages that just look nice.", image: img("photo-1559136555-9303baea8ebd") },
    ],
    faqs: [
      { q: "Do you provide design only, or design + development?", a: "Both. We can deliver design only with full Figma files, or design + engineering in one engagement." },
      { q: "Will you create a design system?", a: "Yes — scalable design systems are part of most projects." },
      { q: "How do you ensure designs are usable?", a: "We run usability testing with real users and iterate before handoff." },
      { q: "Do you handle mobile and web design?", a: "Yes — web, mobile, and dashboard design are all part of our scope." },
      { q: "What deliverables do we get?", a: "Figma files, prototypes, design system documentation, and dev-ready specs." },
      { q: "Can you redesign our existing product?", a: "Yes — we do product redesigns and design audits regularly." },
    ],
  },
];

export const SERVICE_HERO_IMAGES: Record<string, string> = {
  "ai-development":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
  "ai-chatbot-development":
    "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1920&q=80",
  "predictive-models":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
  "mobile-app-development":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1920&q=80",
  "custom-software-development":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
  "natural-language-processing":
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1920&q=80",
  "machine-learning":
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1920&q=80",
  "computer-vision":
    "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1920&q=80",
  "custom-web-development":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80",
  "ui-ux-design":
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1920&q=80",
};

export interface OverviewMiniCard {
  title: string;
  desc: string;
}
export interface OverviewContent {
  intro: string;
  miniCards: OverviewMiniCard[];
}

export const SERVICE_OVERVIEW_CONTENT: Record<string, OverviewContent> = {
  "ai-development": {
    intro:
      "Build AI-powered systems, LLM tools, RAG assistants, and automation workflows that help your business work faster and smarter.",
    miniCards: [
      { title: "AI Automation", desc: "Automate decisions and workflows with production-grade AI agents." },
      { title: "LLM Applications", desc: "Custom GPT, Claude, and open-source LLM apps for your domain." },
      { title: "RAG Systems", desc: "Connect your data to AI with secure retrieval-augmented generation." },
    ],
  },
  "ai-chatbot-development": {
    intro:
      "Create smart website, WhatsApp, and support chatbots that answer customers, capture leads, and automate conversations 24/7.",
    miniCards: [
      { title: "Lead Capture Bots", desc: "Qualify and capture leads directly from your website chat." },
      { title: "WhatsApp Automation", desc: "Automate WhatsApp replies, FAQs, and order updates." },
      { title: "Human Handoff", desc: "Seamlessly route complex queries from bot to live agent." },
    ],
  },
  "predictive-models": {
    intro:
      "Turn business data into accurate forecasts, customer insights, and decision-ready dashboards using machine learning models.",
    miniCards: [
      { title: "Forecasting Models", desc: "Predict demand, revenue, and churn with high accuracy." },
      { title: "Customer Insights", desc: "Understand segments, behavior, and lifetime value." },
      { title: "Decision Analytics", desc: "Real-time dashboards that drive smarter business calls." },
    ],
  },
  "mobile-app-development": {
    intro:
      "Build modern Android and iOS apps with smooth UI, secure APIs, and scalable cross-platform technology for startups and businesses.",
    miniCards: [
      { title: "Android & iOS Apps", desc: "Native-quality apps for both major platforms." },
      { title: "Cross-Platform Development", desc: "Ship faster with React Native and Flutter." },
      { title: "API Integration", desc: "Secure backend and third-party API integration." },
    ],
  },
  "custom-software-development": {
    intro:
      "We build secure, scalable custom software that fits your business workflows, automates daily operations, and replaces scattered tools with one reliable system.",
    miniCards: [
      { title: "Workflow Automation", desc: "Streamline repetitive tasks and reduce manual work." },
      { title: "Custom Dashboards", desc: "Track operations, users, reports, and business data in one place." },
      { title: "Scalable Architecture", desc: "Software that grows with your team, customers, and business." },
    ],
  },
  "natural-language-processing": {
    intro:
      "Extract meaning from text, documents, and conversations using NLP systems for classification, summarization, sentiment, and search.",
    miniCards: [
      { title: "Document Intelligence", desc: "Parse, summarize, and extract data from any document." },
      { title: "Text Classification", desc: "Auto-tag and route text with high-accuracy models." },
      { title: "Sentiment Analysis", desc: "Measure customer tone across reviews and conversations." },
    ],
  },
  "machine-learning": {
    intro:
      "Develop machine learning models that classify, recommend, predict, and automate decisions using clean data pipelines and deployment-ready systems.",
    miniCards: [
      { title: "Model Development", desc: "Custom ML models tuned to your data and use case." },
      { title: "Data Pipelines", desc: "Reliable ingestion, cleaning, and feature engineering." },
      { title: "Model Deployment", desc: "Production deployment with monitoring and retraining." },
    ],
  },
  "computer-vision": {
    intro:
      "Build AI vision systems for OCR, object detection, image recognition, video analytics, and visual inspection workflows.",
    miniCards: [
      { title: "Object Detection", desc: "Detect and track objects in images and live video." },
      { title: "OCR Systems", desc: "Extract text from scans, IDs, invoices, and forms." },
      { title: "Video Analytics", desc: "Real-time insights from surveillance and camera feeds." },
    ],
  },
  "custom-web-development": {
    intro:
      "Build fast, responsive, and scalable websites, SaaS dashboards, business portals, and web applications with modern web technologies.",
    miniCards: [
      { title: "SaaS Dashboards", desc: "Multi-tenant dashboards with billing and analytics." },
      { title: "Business Portals", desc: "Custom portals for clients, partners, and internal teams." },
      { title: "Responsive Web Apps", desc: "Pixel-perfect web apps that work on every device." },
    ],
  },
  "ui-ux-design": {
    intro:
      "Design clean, conversion-focused interfaces, wireframes, prototypes, and design systems for SaaS, AI, mobile, and web products.",
    miniCards: [
      { title: "Wireframes", desc: "Low-fidelity flows that validate ideas fast." },
      { title: "Prototypes", desc: "Interactive prototypes for user testing and approvals." },
      { title: "Design Systems", desc: "Scalable component libraries and design tokens." },
    ],
  },
};

export const getServiceBySlug = (slug: string) =>
  SERVICE_DETAILS.find((s) => s.slug === slug);

export const SERVICE_NAV = SERVICE_DETAILS.map((s) => ({
  slug: s.slug,
  name: s.name,
  shortName: s.shortName,
  icon: s.icon,
}));

