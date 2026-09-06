import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { FileText, Handshake, ShieldCheck, ScrollText, Mail } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const highlights = [
  { icon: Handshake, title: "Clear scope, in writing", text: "Every engagement is defined by a proposal or Statement of Work you approve first." },
  { icon: ShieldCheck, title: "You own the deliverables", text: "On full payment, ownership of the custom work transfers to you." },
  { icon: ScrollText, title: "30-day warranty", text: "Delivered work is covered for 30 days against defects in agreed functionality." },
];

const sections = [
  {
    title: "1. Agreement and Definitions",
    content: [
      "These Terms of Service govern your engagement with Code Envision Technologies (\"we\", \"us\") for software development, consulting and related technology services, and your use of this website.",
      "A \"Statement of Work\" (SOW) or project proposal describes the scope, deliverables, milestones, timeline and fees for a specific engagement. If an SOW and these terms conflict, the signed SOW prevails for that engagement.",
      "By engaging our services or accepting a proposal, you confirm you have the authority to enter this agreement on behalf of your organisation.",
    ],
  },
  {
    title: "2. Our Services",
    content: [
      "We provide custom software development, SaaS product engineering, AI and automation solutions, enterprise web applications, API integrations, UI/UX design, MVP development and ongoing support.",
      "Services are delivered remotely by our team unless otherwise agreed. We may use qualified subcontractors, and we remain responsible for the delivered work.",
    ],
  },
  {
    title: "3. Engagement, Change Requests and Client Responsibilities",
    content: [
      "An engagement begins on written acceptance of a proposal or SOW and receipt of any applicable initial payment.",
      "You agree to provide timely feedback, approvals, content, credentials and access to systems required for delivery. Delays in these inputs may shift timelines and cost.",
      "Work beyond the agreed scope is handled through a written change request describing the additional effort, fee and schedule impact before it starts.",
    ],
  },
  {
    title: "4. Fees, Invoicing and Taxes",
    content: [
      "Fees, payment schedules and methods are stated in the proposal or SOW; standard terms are milestone-based or phased payments, invoiced as each milestone is reached.",
      "Invoices are payable within the period stated on the invoice. Overdue amounts may accrue interest at 1.5% per month, and we may pause work until payment is received.",
      "Quoted prices exclude taxes, duties, bank charges and third-party costs such as hosting, licences and API usage unless explicitly stated.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      "On full payment, ownership of the custom deliverables described in the SOW transfers to you.",
      "We retain ownership of our pre-existing tools, frameworks, internal libraries and general know-how, and grant you a perpetual licence to use them as embedded in your deliverables.",
      "Third-party and open-source components remain subject to their own licences, which we disclose on request.",
      "Unless you ask us not to, we may reference the engagement by name and show non-confidential visuals in our portfolio.",
    ],
  },
  {
    title: "6. Confidentiality and Data Protection",
    content: [
      "Both parties will keep the other's proprietary information, business strategies, technical specifications and sensitive data confidential, and use it only for the engagement.",
      "This obligation continues for two (2) years after the engagement ends and does not apply to information that is public or independently developed.",
      "Personal data we process is handled in line with our Privacy Policy and applicable data protection law.",
    ],
  },
  {
    title: "7. Acceptance, Warranty and Support",
    content: [
      "Deliverables are reviewed on submission. If you do not report issues within 7 days of delivery, the milestone is treated as accepted.",
      "We warrant that deliverables will substantially conform to the agreed specifications for 30 days after delivery, and we will fix qualifying defects at no charge within that period.",
      "The warranty does not cover changes made by others, third-party service failures, new requirements, or use outside the documented purpose. Ongoing maintenance is available under a separate support agreement.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "Our total liability for any claim arising from an engagement will not exceed the total fees paid by you for that engagement.",
      "We are not liable for indirect, incidental, consequential or punitive damages, including lost profits, lost data or business interruption.",
      "Nothing in these terms limits liability that cannot be limited by law, such as liability for fraud or wilful misconduct.",
    ],
  },
  {
    title: "9. Suspension and Termination",
    content: [
      "Either party may terminate an engagement with 15 days' written notice. You remain responsible for fees for all work completed and committed up to the termination date.",
      "We may suspend work immediately for non-payment or unlawful use of our services.",
      "On termination and receipt of final payment, we deliver completed work, source code and relevant materials, and hand over credentials in our possession.",
    ],
  },
  {
    title: "10. Website Use and Acceptable Conduct",
    content: [
      "You may not attempt to disrupt, reverse engineer or gain unauthorised access to this website or our systems, or post unlawful, misleading or abusive content in blog discussions.",
      "We may remove user-submitted content and restrict access where these rules are broken.",
      "Website content is provided for information only and does not constitute a binding offer or professional advice.",
    ],
  },
  {
    title: "11. Force Majeure",
    content: [
      "Neither party is liable for delays caused by events beyond reasonable control, including natural disasters, war, strikes, internet or power outages and government action. Affected timelines are extended by the length of the disruption.",
    ],
  },
  {
    title: "12. Dispute Resolution and Governing Law",
    content: [
      "Both parties will first attempt to resolve any dispute through good-faith negotiation, then mediation, before starting formal proceedings.",
      "These terms are governed by the laws of Pakistan, without regard to conflict of law principles, and the courts of Pakistan have jurisdiction unless the SOW states otherwise.",
    ],
  },
  {
    title: "13. Changes to These Terms",
    content: [
      "We may update these terms to reflect changes in our services or legal requirements, and the date above will show the latest version. Material changes are communicated on this website or directly, and continued engagement means acceptance.",
    ],
  },
  {
    title: "14. Contact",
    content: [
      "For questions about these terms, or to request a copy of a signed agreement, email info.codeenvision@gmail.com.",
    ],
  },
];

const Terms = () => (
  <PageTransition>
    <SEO
      title="Terms of Service"
      description="Terms governing engagements with Code Envision Technologies: scope, payment, intellectual property, warranty, liability and termination."
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
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#8A08FA] flex items-center justify-center">
                <FileText size={20} className="text-white" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#B583FF] font-semibold">
                Legal
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-neutral-400 text-sm md:text-base">Last updated: February 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-2xl p-6 md:p-8 mb-6 bg-[#0F0F16] border border-[#8A08FA]/35"
          >
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              These terms explain how we work together: what we deliver, how scope and payments are
              agreed, who owns the result, and how either side can end an engagement. They apply
              whenever you engage Code Envision Technologies or use this website.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.18 + i * 0.06 }}
                  className="rounded-2xl p-5 bg-[#0A0A10] border border-white/10 hover:border-[#8A08FA]/50 transition-colors duration-300"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#8A08FA] text-white mb-3">
                    <Icon size={16} />
                  </span>
                  <h2 className="text-sm font-semibold text-white mb-1.5">{h.title}</h2>
                  <p className="text-xs text-neutral-400 leading-relaxed">{h.text}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-5">
            {sections.map((section, i) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 + i * 0.03 }}
                className="rounded-2xl p-6 md:p-8 bg-[#0A0A10] border border-white/10 hover:border-[#8A08FA]/40 transition-colors duration-300"
              >
                <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((paragraph, j) => (
                    <li key={j} className="flex gap-3 text-neutral-300 text-sm leading-relaxed">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A08FA]" />
                      <span>{paragraph}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-6 md:p-8 text-center bg-[#0F0F16] border border-[#8A08FA]/35">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#8A08FA] text-white mx-auto mb-4">
              <Mail size={18} />
            </span>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Questions about these terms?
            </h2>
            <p className="text-sm text-neutral-300 mb-5">
              Tell us about your project and we'll share a proposal with clear scope and pricing.
            </p>
            <a
              href="mailto:info.codeenvision@gmail.com?subject=Question%20about%20Terms"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white rounded-full bg-[#8A08FA] hover:bg-[#0025CC] transition-colors duration-300"
            >
              Email us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </PageTransition>
);

export default Terms;
