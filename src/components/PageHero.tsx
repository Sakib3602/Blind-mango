import { useEffect, useRef } from "react";

type PageHeroProps = {
  /** Tomar nijer photo. public/images/menu-hero.jpg te rakho ba Cloudinary URL dao */
  imageSrc?: string;
  alt?: string;
};

export default function PageHero({
  imageSrc = "/images/menu-hero.jpg",
  alt = "Blind Mango Bar",
}: PageHeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (bgRef.current && y <= window.innerHeight) {
        bgRef.current.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;
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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[60svh] min-h-[360px] w-full overflow-hidden bg-[#0E0D06] md:h-[75svh]">
      {/* layer is 140% tall and starts 40% above, so scrolling never shows a gap */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[40%] h-[140%] will-change-transform"
      >
        <img
          src={imageSrc}
          alt={alt}
          className="h-full w-full object-cover object-[center_55%]"
          draggable={false}
        />
      </div>

      {/* top: nav readable, bottom: blends into the menu section */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0E0D06]/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F1EBDA] to-transparent dark:from-[#0A0A04]" />
    </section>
  );
}