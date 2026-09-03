import { Link } from "@/lib/router-compat";
import { Mail, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoCE from "@/assets/CET_logo.svg";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const services = [
  { label: "Custom Software", href: "/services" },
  { label: "AI Platforms", href: "/services" },
  { label: "SaaS Products", href: "/services" },
  { label: "Web & Mobile Apps", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const blogCats = [
  {
    label: "What Is a CRM? A Complete Guide to Customer Relationship Management",
    href: "/blog/what-is-crm-and-how-it-helps-businesses",
  },
  {
    label: "Custom Software Development: A Complete Guide for Businesses",
    href: "/blog/custom-software-development-complete-guide",
  },
  {
    label: "AI Automation: How Businesses Can Automate Workflows With Artificial Intelligence",
    href: "/blog/ai-automation-for-business-workflows",
  },
  {
    label: "SaaS Development: How to Build a Scalable Software-as-a-Service Product",
    href: "/blog/saas-development-scalable-product-guide",
  },
  {
    label: "UI/UX Design: A Practical Guide to Creating Better Digital Products",
    href: "/blog/ui-ux-design-practical-guide",
  },
];


const Footer = () => {
  return (
    <footer
      id="contact"
      className="site-footer relative z-10 px-6 pt-16 md:pt-24 pb-6 md:pb-8"
    >
      <div className="w-full max-w-6xl mx-auto">

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-12">
          {/* Brand blurb */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-white ring-1 ring-white/25 flex items-center justify-center overflow-hidden p-1.5 shrink-0">
                <img
                  src={logoCE}
                  alt="Code Envision Technologies logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Code Envision Technologies
              </span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed mb-5">
              Code Envision Technologies is a Pakistan-based remote-first
              software engineering company building scalable AI, SaaS, web,
              mobile, and custom software solutions for businesses worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info.codeenvision@gmail.com"
                aria-label="Email"
                className="footer-social"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
                className="footer-social"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>

          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="footer-heading">Services</h4>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="footer-heading">Company</h4>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="footer-heading">Blog</h4>
            <ul className="space-y-3">
              {blogCats.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="footer-heading">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 text-neutral-400 shrink-0" />
                <a
                  href="mailto:info.codeenvision@gmail.com"
                  className="footer-link break-all"
                >
                  info.codeenvision@gmail.com
                </a>
              </li>
              <li className="text-neutral-400 leading-relaxed">
                Pakistan-based · Serving clients worldwide
              </li>
            </ul>
          </div>
        </div>

        

        <div className="footer-bottom flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-medium text-neutral-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Code Envision Technologies. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="footer-link text-xs">Privacy</Link>
            <Link to="/terms" className="footer-link text-xs">Terms</Link>
            <Link to="/careers" className="footer-link text-xs">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;