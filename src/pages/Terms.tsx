import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { FileText } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const sections = [
  {
    title: "1. Services",
    content: [
      "Code Envision Technologies provides custom software development, SaaS product engineering, AI & automation solutions, enterprise web applications, API integrations, and MVP development services as outlined in individual project agreements.",
      "The specific scope, deliverables, timelines, and pricing for each engagement will be defined in a separate Statement of Work (SOW) or project proposal mutually agreed upon by both parties.",
    ],
  },
  {
    title: "2. Engagement & Communication",
    content: [
      "All project engagements begin upon written acceptance of a project proposal or SOW and receipt of any applicable initial payment.",
      "Both parties agree to maintain open and timely communication throughout the project lifecycle. Delays caused by insufficient client feedback or approvals may affect project timelines.",
    ],
  },
  {
    title: "3. Intellectual Property",
    content: [
      "Upon full payment, the client receives ownership of all custom-developed deliverables as specified in the SOW, unless otherwise agreed in writing.",
      "Code Envision Technologies retains the right to use general knowledge, techniques, and non-proprietary components developed during the engagement for future projects.",
      "Pre-existing intellectual property, third-party libraries, and open-source components remain subject to their respective licenses.",
    ],
  },
  {
    title: "4. Payment Terms",
    content: [
      "Payment terms, schedules, and methods will be specified in the project proposal or SOW. Standard terms include milestone-based or phased payments.",
      "Late payments may result in project suspension or delays. Code Envision Technologies reserves the right to charge interest on overdue amounts at a rate of 1.5% per month.",
      "All quoted prices are exclusive of applicable taxes unless explicitly stated otherwise.",
    ],
  },
  {
    title: "5. Confidentiality",
    content: [
      "Both parties agree to maintain strict confidentiality regarding proprietary information, business strategies, technical specifications, and any sensitive data shared during the engagement.",
      "This obligation survives the termination of the engagement and remains in effect for a period of two (2) years thereafter.",
    ],
  },
  {
    title: "6. Warranties & Liability",
    content: [
      "Code Envision Technologies warrants that all deliverables will substantially conform to the agreed specifications for a period of 30 days following delivery (the \"Warranty Period\").",
      "Our total liability for any claim arising from our services shall not exceed the total fees paid by the client for the specific engagement giving rise to such claim.",
      "We are not liable for indirect, incidental, consequential, or punitive damages, including lost profits or business interruption.",
    ],
  },
  {
    title: "7. Termination",
    content: [
      "Either party may terminate an engagement with 15 days written notice. Upon termination, the client is responsible for payment for all work completed up to the termination date.",
      "Code Envision Technologies will deliver all completed work and materials upon receipt of final payment.",
    ],
  },
  {
    title: "8. Dispute Resolution",
    content: [
      "Both parties agree to attempt to resolve any disputes through good-faith negotiation. If unresolved, disputes shall be submitted to mediation before pursuing formal legal proceedings.",
      "These terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to conflict of law principles.",
    ],
  },
  {
    title: "9. Modifications",
    content: [
      "Code Envision Technologies reserves the right to update these Terms of Service. Material changes will be communicated through our website or direct notification. Continued engagement constitutes acceptance of updated terms.",
    ],
  },
  {
    title: "10. Contact",
    content: [
      "For questions or concerns regarding these Terms, please contact us at info.codeenvision@gmail.com.",
    ],
  },
];

const Terms = () => {
  // SEO via <SEO> below

  return (
    <PageTransition>
      <SEO
        title="Terms of Service"
        description="Terms governing the use of Code Envision Technologies services, deliverables, and engagements."
        path="/terms"
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2] pt-32 md:pt-40 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--glass-bg))] border border-[hsl(var(--glass-border))] flex items-center justify-center">
                  <FileText size={20} className="text-[hsl(var(--text-silver))]" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--text-dim))] font-medium">
                  Legal
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient-headline mb-4">
                Terms of Service
              </h1>
              <p className="text-[hsl(var(--text-silver))] text-sm md:text-base">
                Last updated: February 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="glass rounded-2xl p-6 md:p-10 mb-8"
            >
              <p className="text-[hsl(var(--text-silver))] text-sm md:text-base leading-relaxed">
                These Terms of Service govern your engagement with Code Envision Technologies for software development, consulting, and related technology services. By engaging our services, you agree to be bound by these terms.
              </p>
            </motion.div>

            <div className="space-y-6">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                  className="glass rounded-2xl p-6 md:p-8 glass-hover"
                >
                  <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, j) => (
                      <p key={j} className="text-[hsl(var(--text-silver))] text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Terms;
