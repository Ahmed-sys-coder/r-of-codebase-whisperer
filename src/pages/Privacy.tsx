import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Shield, Lock, EyeOff, UserCheck, Mail } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const highlights = [
  { icon: EyeOff, title: "We never sell your data", text: "No selling, renting or trading of personal information — ever." },
  { icon: Lock, title: "Encrypted & access-controlled", text: "Industry-standard encryption, least-privilege access and secure development practices." },
  { icon: UserCheck, title: "You stay in control", text: "Access, correct, export or delete your information whenever you ask." },
];

const sections = [
  {
    title: "1. Who We Are",
    content: [
      "Code Envision Technologies is a software engineering company providing custom software development, SaaS product engineering, AI and automation solutions, enterprise web applications, API integrations, and MVP development.",
      "This Privacy Policy explains what information we collect, why we collect it, how we protect it, and the choices available to you. It applies to our website, our proposals and communications, and the services we deliver to clients.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "Information you give us: your name, email address, phone number, company details, and project requirements when you contact us, request a quote, apply for an internship, or engage our services.",
      "Information collected automatically: IP address, browser and device type, referring pages, and usage patterns collected through cookies and similar technologies.",
      "Content you choose to publish: for example a display name and comment text when you take part in a discussion on our blog.",
      "We do not knowingly collect information from children under 16, and we ask you not to send us sensitive personal data (such as health or payment card details) through website forms or email.",
    ],
  },
  {
    title: "3. How and Why We Use Information",
    content: [
      "To deliver, maintain and improve our engineering and consulting services, and to prepare proposals and estimates you request.",
      "To communicate with you about project updates, support requests, and service-related announcements.",
      "To understand how our website is used so we can improve content, performance and accessibility.",
      "To keep our services secure, prevent abuse and spam, and to comply with legal and accounting obligations.",
      "Where the law requires a legal basis, we rely on your consent, the performance of a contract with you, our legitimate business interests, or compliance with a legal obligation.",
    ],
  },
  {
    title: "4. Sharing and Third-Party Services",
    content: [
      "We do not sell, rent or trade your personal information.",
      "We share information only with trusted service providers who help us operate — for example website hosting, database and authentication platforms, email delivery, and analytics — and only to the extent needed to provide those services under confidentiality obligations.",
      "We may disclose information when required by law, regulation or legal process, or to protect the rights, safety and property of Code Envision Technologies, our clients and our users.",
      "If our business is ever reorganised or transferred, information may be shared as part of that transaction, subject to this policy.",
    ],
  },
  {
    title: "5. International Transfers",
    content: [
      "We operate from Pakistan and work with clients and providers worldwide, so your information may be processed in countries other than your own.",
      "Wherever data is processed, we apply the same protections described in this policy and require appropriate safeguards from our providers.",
    ],
  },
  {
    title: "6. Data Security",
    content: [
      "We use encryption in transit, role-based access controls, secure credential management, and secure development and review practices to protect information against unauthorised access, alteration or disclosure.",
      "No method of electronic transmission or storage is completely secure. We continuously review and improve our security controls, and we will notify affected parties and authorities where required if a breach occurs.",
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "We keep personal information only as long as needed for the purposes described here, to comply with legal obligations, to resolve disputes and to enforce agreements.",
      "Project-related data is retained for the duration of the engagement and a reasonable period afterwards for reference, warranty and compliance purposes, after which it is deleted or anonymised.",
    ],
  },
  {
    title: "8. Your Rights and Choices",
    content: [
      "You may request access to your information, correction of inaccuracies, deletion, restriction of processing, or a copy of the data you provided to us.",
      "You can opt out of marketing messages at any time and still receive essential service communications.",
      "Depending on where you live, you may have additional rights under laws such as the GDPR or CCPA, including the right to complain to your local data protection authority.",
      "To exercise any right, email info.codeenvision@gmail.com. We respond within 30 days and may need to verify your identity first.",
    ],
  },
  {
    title: "9. Cookies and Tracking",
    content: [
      "We use essential cookies to make the website work, and analytics cookies to understand traffic and improve the experience. We do not use cookies to build advertising profiles.",
      "You can control or delete cookies through your browser settings. Blocking some cookies may affect parts of the website.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      "We may update this policy to reflect changes in our practices, technology or legal requirements, and we will update the date shown above whenever we do.",
      "For material changes we will provide notice on this website or by direct communication. Continuing to use our services after an update means you accept the revised policy.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "Questions, concerns or requests about this policy or our data practices are welcome at info.codeenvision@gmail.com, and we aim to reply within two business days.",
    ],
  },
];

const Privacy = () => (
  <PageTransition>
    <SEO
      title="Privacy Policy"
      description="How Code Envision Technologies collects, uses, protects and shares your information, and the privacy rights available to you."
      path="/privacy"
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
                <Shield size={20} className="text-white" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#B583FF] font-semibold">
                Legal
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Privacy Policy
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
              At Code Envision Technologies we treat your information the way we treat our clients'
              production systems: carefully, transparently and with strict access control. This
              policy is written in plain language so you know exactly what we collect, why we
              collect it and how you stay in control.
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
                transition={{ duration: 0.5, delay: 0.24 + i * 0.04 }}
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
              Have a privacy question?
            </h2>
            <p className="text-sm text-neutral-300 mb-5">
              Our team answers privacy and data requests within two business days.
            </p>
            <a
              href="mailto:info.codeenvision@gmail.com?subject=Privacy%20Question"
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

export default Privacy;
