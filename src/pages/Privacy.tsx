import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Shield } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly, such as your name, email address, phone number, and project details when you contact us, request a quote, or engage our services.",
      "We may also automatically collect technical data including IP addresses, browser type, device information, and usage patterns through cookies and similar technologies to improve our services and website experience.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To deliver, maintain, and improve our software engineering and consulting services.",
      "To communicate with you regarding project updates, support requests, and service-related announcements.",
      "To analyze usage patterns and optimize our website and service delivery.",
      "To comply with legal obligations and protect our legitimate business interests.",
    ],
  },
  {
    title: "3. Data Sharing & Third Parties",
    content: [
      "We do not sell, rent, or trade your personal information to third parties. We may share data with trusted service providers who assist in delivering our services, subject to strict confidentiality agreements.",
      "We may disclose information when required by law, regulation, or legal process, or to protect the rights, safety, and property of Code Envision Technologies and its clients.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement industry-standard security measures including encryption, access controls, and secure development practices to protect your information against unauthorized access, alteration, or disclosure.",
      "While we strive to protect your data, no method of electronic transmission or storage is 100% secure. We continuously evaluate and improve our security protocols.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
      "Project-related data is retained for the duration of our engagement and a reasonable period thereafter for reference and compliance purposes.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "You have the right to access, correct, update, or request deletion of your personal information at any time by contacting us.",
      "You may opt out of marketing communications while still receiving essential service-related notifications.",
      "Depending on your jurisdiction, you may have additional rights under applicable data protection laws (e.g., GDPR, CCPA).",
    ],
  },
  {
    title: "7. Cookies & Tracking",
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze traffic, and understand user behavior.",
      "You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically to reflect changes in our practices, technologies, or legal requirements. We will notify you of significant changes through our website or direct communication.",
      "Your continued use of our services after any modifications constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at info.codeenvision@gmail.com.",
    ],
  },
];

const Privacy = () => {
  // SEO via <SEO> below

  return (
    <PageTransition>
      <SEO
        title="Privacy Policy"
        description="How Code Envision Technologies collects, uses, and protects your information."
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
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--glass-bg))] border border-[hsl(var(--glass-border))] flex items-center justify-center">
                  <Shield size={20} className="text-[hsl(var(--text-silver))]" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--text-dim))] font-medium">
                  Legal
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient-headline mb-4">
                Privacy Policy
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
                At Code Envision Technologies, we are committed to protecting your privacy and handling your data with transparency and integrity. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our services and website.
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

export default Privacy;
