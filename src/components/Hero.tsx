import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL, WHATSAPP_ARIA } from "@/lib/whatsapp";
import { useEffect, useRef } from "react";
import { useNavigate } from "@/lib/router-compat";

const NeuralNetworkBG = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const NODE_COUNT = 55;
    const MAX_DIST = 160;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduceMotion) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35;
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        grd.addColorStop(0, "rgba(147,197,253,0.95)");
        grd.addColorStop(1, "rgba(99,102,241,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();
    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
};

const Hero = () => {
  const navigate = useNavigate();

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/services");
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(85vh+100px)] md:min-h-[calc(90vh+100px)] flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* Deep navy → purple base */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #1e1b4b 0%, #0b1437 55%, #060a24 100%)",
        }}
      />

      {/* Animated AI neural network canvas */}
      <div className="absolute inset-0 -z-10 opacity-90">
        <NeuralNetworkBG />
      </div>

      {/* Glow blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-1/3 left-1/4 w-[560px] h-[560px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-45"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.38) 0%, transparent 70%)" }}
        />
      </div>

      {/* Readability overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,10,36,0.55) 0%, rgba(6,10,36,0.15) 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[2.25rem] sm:text-5xl md:text-6xl font-extrabold tracking-[-0.025em] leading-[1.08] mb-6 text-white"
        >
          Your Trusted{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #c084fc 100%)",
            }}
          >
            AI Development
          </span>{" "}
          Company
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm md:text-base text-white/80 max-w-[760px] mx-auto leading-relaxed mb-10"
        >
          We build secure AI platforms, SaaS products, and custom software
          solutions that help businesses grow smarter, faster, and globally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={WHATSAPP_ARIA}
            className="btn-white-cta group"
          >
            <FaWhatsapp size={16} />
            Discuss Project
            <ArrowRight size={16} className="arrow" />
          </a>

          <a
            href="/services"
            onClick={scrollToServices}
            className="group inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-sm font-medium text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-violet-400/60 transition-all duration-300"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
          >
            Explore Services
            <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
