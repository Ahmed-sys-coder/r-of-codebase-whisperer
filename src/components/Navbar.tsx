import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "@/lib/router-compat";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bot, ChevronDown } from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot";
import { SERVICE_NAV } from "@/components/services/serviceDetails";
import logoCE from "@/assets/logo-ce.jpg";

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { openChatbot } = useChatbot();

  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on ESC + outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        toggleRef.current &&
        !toggleRef.current.contains(t)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen]);

  const handleNavClick = (link: NavLinkItem) => {
    setMobileOpen(false);
    if (link.href.startsWith("/#")) {
      const id = link.href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 250);
      }
    } else {
      navigate(link.href);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return false;
    return location.pathname.startsWith(href);
  };

  const handleCTAClick = () => {
    setMobileOpen(false);
    openChatbot();
  };

  const isHome = location.pathname === "/";
  const onHero = isHome && !scrolled && !hovered;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        background: onHero ? "transparent" : "rgba(255,255,255,0.96)",
        backdropFilter: onHero ? "none" : "blur(18px) saturate(150%)",
        WebkitBackdropFilter: onHero ? "none" : "blur(18px) saturate(150%)",
        borderBottom: onHero
          ? "1px solid transparent"
          : "1px solid rgba(15,23,42,0.06)",
        boxShadow: onHero ? "none" : "0 14px 40px rgba(15,23,42,0.10)",
        transition:
          "background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 h-[76px] md:h-[92px] flex items-center justify-between gap-4">
        {/* Left: logo (image only, links to home) */}
        <Link
          to="/"
          aria-label="Go to homepage"
          className="flex items-center shrink-0 h-full py-1 px-2 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.08] hover:shadow-[0_12px_32px_rgba(37,99,235,0.22)]"
        >
          <img
            src={logoCE}
            alt="Code Envision Technologies"
            className="h-[44px] md:h-[64px] w-auto object-contain"
          />
        </Link>

        {/* Center: nav links (desktop) */}
        <nav className="hidden lg:flex items-center gap-2 mx-auto">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const isServices = link.href === "/services";
            const baseBtnClass = `relative px-[20px] py-[11px] text-[13.5px] font-medium tracking-tight rounded-full border border-transparent origin-center will-change-transform hover:bg-white hover:text-[#0F4594] hover:-translate-y-0.5 hover:scale-[1.12] hover:shadow-[0_12px_30px_rgba(15,69,148,0.18)] hover:border-[rgba(15,69,148,0.10)] ${
              active
                ? onHero
                  ? "text-white font-semibold"
                  : "text-[#0F4594] bg-[rgba(15,69,148,0.08)] font-semibold"
                : onHero
                ? "text-white"
                : "text-[#0F172A]"
            }`;
            const baseBtnStyle = {
              transition:
                "background 0.28s ease, color 0.28s ease, transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease, text-shadow 0.28s ease",
              textShadow: onHero ? "0 2px 10px rgba(0,0,0,0.35)" : "none",
            } as React.CSSProperties;

            if (isServices) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`${baseBtnClass} inline-flex items-center gap-1.5`}
                    style={baseBtnStyle}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown size={14} className="opacity-80" />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
                        style={{ width: "min(680px, 90vw)" }}
                      >
                        <div
                          role="menu"
                          className="rounded-2xl p-3 grid grid-cols-2 gap-1"
                          style={{
                            background: "rgba(255,255,255,0.98)",
                            backdropFilter: "blur(18px) saturate(150%)",
                            WebkitBackdropFilter: "blur(18px) saturate(150%)",
                            border: "1px solid rgba(15,69,148,0.14)",
                            boxShadow:
                              "0 24px 60px -20px rgba(15,69,148,0.28), 0 0 0 1px rgba(124,58,237,0.06)",
                          }}
                        >
                          {SERVICE_NAV.map((s) => {
                            const SIcon = s.icon;
                            return (
                              <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#0F172A] hover:bg-gradient-to-r hover:from-[rgba(15,69,148,0.08)] hover:to-[rgba(124,58,237,0.08)] transition-colors"
                              >
                                <span
                                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white shrink-0"
                                  style={{
                                    background:
                                      "linear-gradient(135deg, hsl(220 86% 48%), hsl(258 90% 60%))",
                                  }}
                                >
                                  <SIcon size={16} />
                                </span>
                                <span className="leading-tight group-hover:text-[#0F4594]">
                                  {s.shortName}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={baseBtnClass}
                style={baseBtnStyle}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: CTA (desktop) */}
        <button
          onClick={handleCTAClick}
          aria-label="Ask CodeEnvision AI"
          className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white shrink-0 transition-all duration-300 ease-out cursor-pointer hover:-translate-y-0.5 hover:scale-[1.07]"
          style={{
            background: "linear-gradient(135deg, hsl(220 86% 42%) 0%, hsl(220 86% 48%) 100%)",
            boxShadow:
              "0 8px 22px -10px hsl(220 86% 42% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.25)",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 16px 36px -10px hsl(258 90% 66% / 0.55), 0 0 0 1px hsl(258 90% 66% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.3)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 8px 22px -10px hsl(220 86% 42% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.25)";
          }}
        >
          Ask CodeEnvision AI
          <Bot size={16} />
        </button>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl text-[#0F172A] bg-white/70 hover:bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_4px_14px_rgba(15,23,42,0.06)] transition-all duration-200 active:scale-95"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex"
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="m"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex"
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile / tablet menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50"
            style={{
              width: "calc(100% - 32px)",
              maxWidth: "520px",
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(18px) saturate(150%)",
              WebkitBackdropFilter: "blur(18px) saturate(150%)",
              border: "1px solid rgba(15,23,42,0.08)",
              borderRadius: "24px",
              boxShadow: "0 18px 50px rgba(15,23,42,0.16)",
              padding: "12px",
            }}
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                const isServices = link.href === "/services";
                if (isServices) {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex items-center justify-between w-full text-left"
                        style={{
                          padding: "14px 18px",
                          borderRadius: "16px",
                          fontSize: "17px",
                          fontWeight: 500,
                          color: active ? "#0F4594" : "#0F172A",
                          background: active ? "rgba(15,69,148,0.08)" : "transparent",
                          border: "1px solid transparent",
                        }}
                        aria-expanded={mobileServicesOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={18}
                          style={{
                            transition: "transform 0.2s ease",
                            transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0)",
                          }}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-2 pr-1 py-1.5 flex flex-col gap-0.5">
                              <Link
                                to="/services"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="block px-3 py-2.5 rounded-xl text-[14px] font-semibold text-[#0F4594] hover:bg-[rgba(15,69,148,0.08)]"
                              >
                                All Services
                              </Link>
                              {SERVICE_NAV.map((s) => {
                                const SIcon = s.icon;
                                return (
                                  <Link
                                    key={s.slug}
                                    to={`/services/${s.slug}`}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] text-[#0F172A] hover:bg-[rgba(15,69,148,0.06)]"
                                  >
                                    <span
                                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white shrink-0"
                                      style={{
                                        background:
                                          "linear-gradient(135deg, hsl(220 86% 48%), hsl(258 90% 60%))",
                                      }}
                                    >
                                      <SIcon size={14} />
                                    </span>
                                    {s.shortName}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className="group text-left w-full"
                    style={{
                      padding: "14px 18px",
                      borderRadius: "16px",
                      fontSize: "17px",
                      fontWeight: 500,
                      color: active ? "#0F4594" : "#0F172A",
                      background: active ? "rgba(15,69,148,0.08)" : "transparent",
                      border: "1px solid transparent",
                      transition:
                        "background 0.25s ease, color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onClick={handleCTAClick}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white"
                style={{
                  height: "54px",
                  fontSize: "15px",
                  background: "linear-gradient(135deg, hsl(220 86% 42%) 0%, hsl(220 86% 48%) 100%)",
                  boxShadow:
                    "0 10px 26px -10px hsl(220 86% 42% / 0.55), inset 0 1px 0 hsl(0 0% 100% / 0.25)",
                }}
              >
                Ask CodeEnvision AI
                <Bot size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;