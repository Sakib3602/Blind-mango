import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import homeimg from "../assets/home-page-blind-mango-bar.image.WhatsApp-Image-2024-11-05-at-18.21.34_5c7f03d5_upscayl_5x_ultrasharp.Woblo.png"
const HERO_URL = homeimg;

type HeroProps = {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
};

export default function Hero({
  imageSrc = HERO_URL,
  title = "Välkommen till Blind Mango",
  subtitle = "Upptäck den mysiga atmosfären på Nordenskiöldsgatan 3",
}: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const h = window.innerHeight;

      if (y <= h * 1.2) {
        if (bgRef.current) {
          // background moves slower than the page = parallax
          bgRef.current.style.transform = `translate3d(0, ${y * 0.4}px, 0) scale(1.1)`;
        }
        if (textRef.current) {
          textRef.current.style.transform = `translate3d(0, ${y * 0.2}px, 0)`;
          textRef.current.style.opacity = String(Math.max(0, 1 - y / (h * 0.7)));
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-[#0E0D06]">
      {/* Full-bleed parallax photo */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "scale(1.1)" }}
      >
        <img
          src={imageSrc}
          alt="Blind Mango bar at night"
          className="h-full w-full animate-[slowZoom_18s_ease-out_forwards] object-cover object-[8%_center] md:object-[center_48%]"
          draggable={false}
        />
      </div>

      {/* Soft overlays: nav on top, text at bottom, photo stays bright in middle */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0E0D06]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D06] via-[#0E0D06]/50 to-[#0E0D06]/40" />

      {/* Text */}
      <div
        ref={textRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-16 text-center will-change-transform"
      >
        <h1 className="max-w-4xl text-3xl font-extrabold uppercase italic leading-tight tracking-wide text-[#FAF5E5] drop-shadow-lg sm:text-5xl md:text-6xl">
          {title}
        </h1>

        <span className="mt-4 block h-1 w-16 rounded-full bg-[#DCA54A]" />

        <p className="mt-4 max-w-xl text-base text-[#E3E3E3] sm:text-lg">{subtitle}</p>

        <Link to="/menu">
        <p
         
          className="mt-7 rounded-full bg-[#DCA54A] px-10 py-3.5 text-base font-bold uppercase tracking-widest text-[#0E0D06] shadow-lg shadow-[#DCA54A]/30 transition-transform hover:scale-105 active:scale-95"
        >
          Menu
        </p>
        </Link>
      </div>

      {/* Scroll indicator */}
      <a
        href="#content"
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FAF5E5]"
      >
        Scroll down
        <span className="flex flex-col items-center -space-y-3 text-[#DCA54A]">
          {[0, 1].map((i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className="h-7 w-7 animate-[arrowFade_1.4s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.25}s` }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          ))}
        </span>
      </a>

      <style>{`
        @keyframes arrowFade {
          0% { transform: translateY(-6px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(6px); opacity: 0; }
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }
      `}</style>
    </section>
  );
}