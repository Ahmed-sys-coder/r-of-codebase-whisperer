import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { ArrowRight, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL, WHATSAPP_ARIA } from "@/lib/whatsapp";

const EMAIL = "info.codeenvision@gmail.com";

const Contact = () => {
  return (
    <PageTransition>
      <SEO
        title="Contact — Code Envision Technologies"
        description="Talk to Code Envision Technologies on WhatsApp or email. Pakistan-based, remote-first software engineering team serving clients worldwide."
        path="/contact"
        keywords="contact Code Envision Technologies, hire software company Pakistan, whatsapp consultation"
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-[2] pt-32 pb-20 px-6">
          <div className="w-full max-w-5xl mx-auto">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-5">
                Contact Us
              </h1>
              <p className="text-sm md:text-base text-silver max-w-2xl mx-auto leading-relaxed">
                Have a software, AI, SaaS, web app, or digital product idea?
                Contact Code Envision Technologies and our team will guide you
                with clear next steps for your project.
              </p>
            </motion.div>

            {/* Single wide contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 0%, hsl(245 80% 62% / 0.16), transparent 70%), radial-gradient(ellipse 60% 50% at 100% 100%, hsl(268 89% 62% / 0.12), transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-gradient-headline mb-3">
                  Start the Conversation
                </h2>
                <p className="text-sm md:text-base text-silver max-w-md mx-auto leading-relaxed mb-10">
                  Reach out through WhatsApp or email and we'll respond with
                  clear next steps for your project.
                </p>

                {/* Email + WhatsApp blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {/* Email block */}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="glass glass-hover rounded-2xl p-6 flex items-center gap-4 text-left group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(56,189,248,0.22), rgba(59,130,246,0.18))",
                        boxShadow: "0 8px 24px -10px rgba(56,189,248,0.55)",
                      }}
                    >
                      <Mail size={20} className="text-[#38BDF8]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-dim font-medium mb-0.5">
                        Email
                      </p>
                      <p className="text-sm text-foreground font-semibold break-all">
                        {EMAIL}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp block */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={WHATSAPP_ARIA}
                    className="glass glass-hover rounded-2xl p-6 flex items-center gap-4 text-left group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(217 91% 55% / 0.22), hsl(258 89% 62% / 0.20))",
                        boxShadow: "0 8px 24px -10px hsl(245 80% 62% / 0.55)",
                        border: "1px solid hsl(245 80% 62% / 0.35)",
                      }}
                    >
                      <FaWhatsapp size={20} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-dim font-medium mb-0.5">
                        WhatsApp
                      </p>
                      <p className="text-sm text-foreground font-semibold flex items-center gap-2">
                        Message Us on WhatsApp
                        <ArrowRight
                          size={14}
                          className="text-dim group-hover:translate-x-0.5 transition-transform"
                        />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
