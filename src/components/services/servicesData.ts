import { Code2, Brain, Rocket, Globe, Puzzle, Lightbulb } from "lucide-react";
import type { ServiceData } from "./ServiceCard";

export const servicesData: ServiceData[] = [
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    tagline: "Your operations are unique. Your software should be too.",
    problem:
      "You bought Salesforce, customized it for 6 months, and it still doesn't match your workflow. Your team runs on spreadsheets, WhatsApp groups, and workarounds — because no off-the-shelf tool understands how your business actually operates. Every month you delay, you're paying for inefficiency.",
    audience: [
      "Enterprises stuck on legacy systems that cost more to maintain than replace",
      "Operations teams managing critical workflows in spreadsheets",
      "Regulated industries needing audit trails and compliance baked in",
      "Growing companies where manual processes are the bottleneck",
    ],
    impact: [
      "Cut manual process time by 60–80% (we measured this across 3 client deployments)",
      "Single source of truth — no more conflicting data across departments",
      "Architecture built for your 3–5 year roadmap, not just today's requirements",
      "Full IP ownership — zero vendor lock-in, your code lives on your infrastructure",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", ".NET", "AWS", "Docker"],
    accent: "from-[hsl(220_80%_60%/0.08)] to-transparent",
  },
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI & Intelligent Automation",
    tagline: "Stop hiring people for work machines should handle.",
    problem:
      "Your team spends 40% of their day on tasks that don't require human judgment — data entry, report formatting, document classification, customer routing. Meanwhile, the data sitting in your CRM, emails, and documents holds patterns you're not seeing. Your competitors already automated this. You're falling behind.",
    audience: [
      "Operations teams drowning in repetitive, low-value tasks",
      "Legal, finance, or healthcare firms processing thousands of documents",
      "Businesses sitting on data goldmines they can't extract insights from",
      "Customer-facing teams needing 24/7 intelligent response capabilities",
    ],
    impact: [
      "Automate 70%+ of repetitive workflows — proven on our legal AI research platform",
      "Extract actionable insights from unstructured data (contracts, emails, reports)",
      "Deploy intelligent agents that handle customer queries with contextual accuracy",
      "Measurable ROI within 90 days — or we'll tell you honestly if AI isn't the right fit",
    ],
    techStack: ["Python", "OpenAI", "LangChain", "RAG", "FastAPI", "GCP"],
    accent: "from-[hsl(280_80%_65%/0.08)] to-transparent",
  },
  {
    id: "saas-development",
    icon: Rocket,
    title: "SaaS Product Development",
    tagline: "From validated idea to paying customers — in weeks, not years.",
    problem:
      "You have a validated concept and maybe some seed funding — but building production-grade SaaS is a different beast. You need multi-tenancy, subscription billing, user management, analytics, and an architecture that scales from 100 to 100,000 users without a costly rewrite. Most dev shops will build you a prototype. You need a product.",
    audience: [
      "Funded startups ready to build their core product (not another prototype)",
      "Businesses launching new digital revenue streams alongside existing operations",
      "Founders who've validated demand and need engineering speed, not more research",
      "Companies pivoting from services to software-as-a-service models",
    ],
    impact: [
      "Go from concept to first paying customers in 12–16 weeks (our trading analytics platform shipped in 14)",
      "Multi-tenant architecture that won't need rewriting at 10K users",
      "Subscription billing, analytics dashboards, and admin panels from day one",
      "Investor-ready codebase with clean architecture and documentation",
    ],
    techStack: ["Next.js", "TypeScript", "Stripe", "Supabase", "Vercel", "Redis"],
    accent: "from-[hsl(30_80%_55%/0.08)] to-transparent",
  },
  {
    id: "enterprise-web",
    icon: Globe,
    title: "Enterprise Web Applications",
    tagline: "Built for thousands of users. Tested under pressure.",
    problem:
      "Your web application buckles under traffic spikes. Page loads take 5+ seconds. Your users are switching to competitors with smoother experiences. The platform your team built 3 years ago wasn't architected for enterprise demands — and every patch makes the technical debt worse.",
    audience: [
      "Organizations needing internal platforms that handle real concurrent load",
      "Businesses serving thousands of daily active users who expect instant response",
      "Enterprises requiring SSO, role-based access, and full audit trails",
      "Companies where a 1-hour outage means six-figure revenue loss",
    ],
    impact: [
      "Sub-second page loads with 99.9% uptime — architectured, not promised",
      "Handle 10,000+ concurrent users without performance degradation",
      "Enterprise security: SSO, RBAC, encryption at rest, and compliance-ready",
      "30–50% infrastructure cost reduction through proper architecture optimization",
    ],
    techStack: ["React", "GraphQL", "Kubernetes", "Azure", "Elasticsearch", "Terraform"],
    accent: "from-[hsl(200_80%_60%/0.08)] to-transparent",
  },
  {
    id: "api-integrations",
    icon: Puzzle,
    title: "API & System Integrations",
    tagline: "Your tools don't talk to each other. We fix that.",
    problem:
      "Your CRM doesn't sync with your ERP. Your payment system lives in a silo. Your team copies data between 5 tools manually — and every disconnected system introduces human error, delays, and frustrated employees. You're paying for premium tools but getting spreadsheet-level coordination.",
    audience: [
      "Businesses running 5+ disconnected software tools that should share data",
      "Companies needing real-time sync between sales, operations, and finance",
      "Organizations building partner or vendor ecosystems with shared data flows",
      "Teams losing 10+ hours per week on manual data transfers between platforms",
    ],
    impact: [
      "Eliminate manual data entry across all platforms — real-time, bi-directional sync",
      "Unified dashboards pulling live data from every tool in your stack",
      "Reduce integration-related errors by 90%+ (we tracked this across 4 integration projects)",
      "Future-proof architecture: add new tools without rebuilding existing connections",
    ],
    techStack: ["REST", "GraphQL", "Webhooks", "RabbitMQ", "Zapier", "n8n"],
    accent: "from-[hsl(160_70%_50%/0.08)] to-transparent",
  },
  {
    id: "mvp-startups",
    icon: Lightbulb,
    title: "MVP Development for Startups",
    tagline: "Build only what your first 100 users actually need.",
    problem:
      "You burned 6 months and half your runway building a 'complete' product — then discovered the market wants something different. Your development team gold-plated features nobody asked for while ignoring the one thing that would've proven product-market fit. You don't need perfection. You need proof.",
    audience: [
      "Pre-seed and seed-stage founders who need to ship before the runway ends",
      "Accelerator participants with 8–12 weeks to prove traction",
      "Corporate innovation labs testing new ventures without enterprise overhead",
      "Solo founders who can't afford to build the wrong thing twice",
    ],
    impact: [
      "Launch a testable, real-user-facing MVP in 6–8 weeks (our rental matching platform shipped in 7)",
      "Save 60% of budget vs. building a full product before validation",
      "Get real user feedback and usage data before committing to scale",
      "Clean, documented codebase — ready for your Series A engineering hire to extend",
    ],
    techStack: ["React", "Supabase", "Tailwind", "Vercel", "Figma", "Stripe"],
    accent: "from-[hsl(340_70%_55%/0.08)] to-transparent",
  },
];
