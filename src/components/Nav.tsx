import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoimg from "../assets/logo.png"

type Theme = "dark" | "light";

const STORAGE_KEY = "blind-mango-theme";

// white background remove + faka jaygа trim + auto format/size
const LOGO_URL = logoimg;

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* localStorage blocked */
  }
  return "dark";
}

type NavProps = {
  logoSrc?: string;
  menuHref?: string;
  bookHref?: string;
  address?: string;
  foodoraHref?: string;
  uberEatsHref?: string;
  woltHref?: string;
};

function ThemeToggle({
  theme,
  onToggle,
  bordered = true,
}: {
  theme: Theme;
  onToggle: () => void;
  bordered?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={theme === "dark"}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative h-8 w-14 shrink-0 rounded-full transition-colors duration-300 ${
        bordered
          ? "border border-[#DCA54A]/60 bg-[#E3E3E3] dark:bg-[#0E0D06]"
          : "bg-[#E3E3E3] dark:bg-[#26251a]"
      }`}
    >
      <span
        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#DCA54A] text-sm transition-transform duration-300 ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

export default function Nav({
  logoSrc = LOGO_URL,
  menuHref = "/menu",
  bookHref = "/book",
  address = "Nordenskiöldsgatan 3",
  foodoraHref = "https://www.foodora.se/restaurant/mpru/the-blind-mango",
  uberEatsHref = "https://www.ubereats.com/se-en/store/blind-mango-bar/IZ7EoSXKT0GIYQPGKrEOQg?srsltid=AfmBOopBfvBTKTe_snEd-X7cnzWDFht3rzdp1p8nplTbi-JNLz8YI2qw",
  woltHref = "https://wolt.com/en/swe/goteborg/restaurant/blind-mango-bar",
}: NavProps) {
  const deliveryLinks = [
    { name: "Foodora", href: foodoraHref },
    { name: "Uber Eats", href: uberEatsHref },
    { name: "Wolt Food", href: woltHref },
  ];
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // menu open: body scroll lock + Esc to close + close if screen becomes desktop
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const close = () => setOpen(false);

  const linkColor = scrolled
    ? "text-[#0E0D06] hover:text-[#DCA54A] dark:text-[#FAF5E5] dark:hover:text-[#DCA54A]"
    : "text-white hover:text-[#DCA54A]";

  // stagger animation for items inside the full-screen menu
  const item = (i: number) => ({
    transitionDelay: open ? `${150 + i * 90}ms` : "0ms",
  });
  const itemClass = `transition-all duration-700 ease-out ${
    open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF5E5]/85 py-2 shadow-lg backdrop-blur-md dark:bg-[#0E0D06]/85"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
          <Link to="/" aria-label="Blind Mango home" className="flex items-center">
            <img
              src={logoSrc}
              alt="Blind Mango"
              className="h-12 w-auto sm:h-14"
              draggable={false}
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              to={menuHref}
              className={`rounded-full px-5 py-2 font-semibold uppercase tracking-widest transition-colors ${linkColor}`}
            >
              Menu
            </Link>
            <Link
              to={bookHref}
              className="rounded-full bg-[#DCA54A] px-6 py-2 font-bold uppercase tracking-widest text-[#0E0D06] shadow-md transition-all hover:scale-105 hover:bg-[#e8b55d] active:scale-95"
            >
              Book Now
            </Link>
            <ThemeToggle theme={theme} onToggle={toggle} />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#DCA54A]/60 bg-black/30 backdrop-blur md:hidden"
          >
            <span className="h-0.5 w-5 rounded bg-[#FAF5E5]" />
            <span className="h-0.5 w-5 rounded bg-[#DCA54A]" />
            <span className="h-0.5 w-5 rounded bg-[#FAF5E5]" />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu: black in dark mode, cream in light mode */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex flex-col overflow-hidden bg-[#FAF5E5] text-[#0E0D06] transition-all duration-500 ease-out dark:bg-[#0E0D06] dark:text-[#FAF5E5] md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* soft mango glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#DCA54A]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#DCA54A]/10 blur-3xl" />

        {/* top row */}
        <div className="relative flex items-center justify-between px-5 py-4">
          <img src={logoSrc} alt="Blind Mango" className="h-12 w-auto" />
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#DCA54A] transition-transform active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        {/* links */}
        <div className="relative flex flex-1 flex-col justify-center gap-6 px-8">
          <Link
            to={menuHref}
            onClick={close}
            style={item(0)}
            className={`group flex items-center justify-between text-5xl font-extrabold uppercase italic tracking-wide ${itemClass}`}
          >
            <span className="transition-colors group-active:text-[#DCA54A]">Menu</span>
            <span className="text-3xl text-[#DCA54A]">→</span>
          </Link>

          {/* delivery platforms */}
          <div style={item(1)} className={`flex flex-col gap-4 ${itemClass}`}>
            {deliveryLinks.map((d) => (
              <a
                key={d.name}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="group flex items-center justify-between text-lg font-semibold uppercase tracking-[0.2em] text-[#4d4e52] transition-colors active:text-[#DCA54A] dark:text-[#b4b5b8]"
              >
                <span>{d.name}</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#DCA54A]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            ))}
          </div>

          <span
            style={item(2)}
            className={`h-px w-full bg-gradient-to-r from-[#DCA54A]/60 to-transparent ${itemClass}`}
          />

          <Link
            to={bookHref}
            onClick={close}
            style={item(3)}
            className={`flex items-center justify-center rounded-full bg-[#DCA54A] py-4 text-lg font-bold uppercase tracking-[0.25em] text-[#0E0D06] shadow-xl shadow-[#DCA54A]/30 active:scale-95 ${itemClass}`}
          >
            Book Now
          </Link>
        </div>

        {/* bottom */}
        <div
          style={item(4)}
          className={`relative flex items-center justify-between px-8 pb-10 ${itemClass}`}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DCA54A]">
              Hitta oss
            </p>
            <p className="mt-1 text-sm text-[#808285]">{address}</p>
          </div>
          <ThemeToggle theme={theme} onToggle={toggle} bordered={false} />
        </div>
      </div>
    </>
  );
}