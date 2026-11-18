import { useEffect, useState, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type BookingPageProps = {
  /** PaxBooking > HTML codes > Direct links and iframes > URLs > "Default link" */
  bookingUrl?: string;
  /** Google Maps "Embed a map" er src URL. Na dile address diye default map dekhabe. */
  mapSrc?: string;
};

const ADDRESS = "Nordenskiöldsgatan 3, 413 09 Göteborg";
const PHONE_TEL = "+46704382859";
const QUERY = encodeURIComponent("Blind Mango Bar, " + ADDRESS);

const DEFAULT_MAP_SRC = `https://www.google.com/maps?q=${QUERY}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${QUERY}`;

const ACCENT = "text-[#8a5a00] dark:text-[#DCA54A]";
const MUTED = "text-[#4d4e52] dark:text-[#b4b5b8]";

// website er dark/light follow korbe
function useIsDark() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("blind-mango-theme") !== "light";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setDark(el.classList.contains("dark")));
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return dark;
}

// PaxBooking path-based options: /theme/dark and /bg/transparent
function buildBookingUrl(url: string, dark: boolean) {
  const clean = url
    .trim()
    .replace(/\/(theme|bg)\/[^/?#]+/g, "")
    .replace(/\/+$/, "");
  return `${clean}/theme/${dark ? "dark" : "light"}/bg/transparent`;
}

function ActionButton({
  href,
  label,
  sublabel,
  primary = false,
  external = false,
  children,
}: {
  href: string;
  label: string;
  sublabel?: string;
  primary?: boolean;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex items-center gap-3.5 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] ${
        primary
          ? "bg-[#DCA54A] text-[#0E0D06] shadow-lg shadow-[#DCA54A]/20 hover:bg-[#e8b55d]"
          : "bg-white text-[#0E0D06] border border-[#e6dec8] hover:border-[#DCA54A] hover:bg-[#FAF5E5] dark:bg-[#17160d] dark:border-[#2a291b] dark:text-[#FAF5E5] dark:hover:bg-[#201f13] dark:hover:border-[#DCA54A]"
      }`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
          primary
            ? "bg-[#0E0D06]/10 text-[#0E0D06]"
            : "bg-[#F1EBDA] text-[#8a5a00] group-hover:bg-[#DCA54A] group-hover:text-[#0E0D06] dark:bg-[#222116] dark:text-[#DCA54A] dark:group-hover:bg-[#DCA54A] dark:group-hover:text-[#0E0D06]"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {children}
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[11px] font-bold uppercase tracking-[0.15s] opacity-75 sm:text-xs">
          {label}
        </span>
        <span className="text-sm font-semibold tracking-wide sm:text-base">
          {sublabel}
        </span>
      </div>
    </a>
  );
}

export default function BookingPage({
  bookingUrl = "",
  mapSrc = DEFAULT_MAP_SRC,
}: BookingPageProps) {
  const dark = useIsDark();
  const src = bookingUrl ? buildBookingUrl(bookingUrl, dark) : "";
  const [loadedSrc, setLoadedSrc] = useState("");
  const loaded = loadedSrc === src;

  return (
    <>
    <Helmet>

        <title>Booking - Blind Mango Bar</title>
        <meta name="description" content="Boka ett bord på Blind Mango Bar." />
      </Helmet>
    <main className="bg-[#F1EBDA] px-4 pb-16 pt-28 text-[#0E0D06] transition-colors duration-500 dark:bg-[#0A0A04] dark:text-[#FAF5E5] sm:px-6 sm:pb-20 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className={`inline-block mb-3 text-xs font-bold uppercase tracking-[0.3em] ${ACCENT}`}>
            Bordsreservation
          </span>
          <h1 className="font-mono text-3xl font-bold uppercase tracking-[0.25em] sm:text-5xl">
            Boka Bord
          </h1>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#DCA54A]" />
          <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>
            Välj datum, tid och antal gäster så ses vi på Blind Mango.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT: PaxBooking */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-xl shadow-black/5 border border-[#e6dec8] dark:bg-[#17160d] dark:border-[#242318] dark:shadow-black/40 sm:p-8">
            {/* mango glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#DCA54A]/15 blur-3xl" />

            <div className="flex items-center justify-between relative mb-4">
              <div>
                <p className={`text-xs font-bold uppercase tracking-[0.3em] ${ACCENT}`}>
                  Online Bokning
                </p>
                <h3 className="text-lg font-bold tracking-tight">Säkra din plats</h3>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <span className="relative mb-6 block h-px w-full bg-gradient-to-r from-[#DCA54A]/60 via-[#DCA54A]/20 to-transparent" />

            <div className="relative min-h-[560px] flex-1 rounded-2xl overflow-hidden bg-[#F9F6EE] dark:bg-[#111009]">
              {src ? (
                <>
                  {!loaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <span className="h-10 w-10 animate-spin rounded-full border-4 border-[#DCA54A]/30 border-t-[#DCA54A]" />
                      <span className={`text-xs uppercase tracking-widest ${MUTED}`}>
                        Laddar bokning…
                      </span>
                    </div>
                  )}
                  <iframe
                    key={src}
                    title="Boka bord på Blind Mango"
                    src={src}
                    onLoad={() => setLoadedSrc(src)}
                    className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${
                      loaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8 text-center">
                  <p className={`text-sm font-bold uppercase tracking-[0.25em] ${ACCENT}`}>
                    Booking URL saknas
                  </p>
                  <p className={`max-w-sm text-sm ${MUTED}`}>
                    Vänligen ange din PaxBooking URL i komponenten.
                  </p>
                </div>
              )}
            </div>

            {bookingUrl && (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:text-[#DCA54A] ${MUTED}`}
              >
                Öppna bokningen i separat flik ↗
              </a>
            )}
          </div>

          {/* RIGHT: Map + Location Info & Action Buttons */}
          <div className="flex flex-col gap-5">
            {/* Map Container */}
            <div className="relative min-h-[380px] flex-1 overflow-hidden rounded-3xl border border-[#e6dec8] shadow-xl shadow-black/5 dark:border-[#242318] dark:shadow-black/40">
              <iframe
                title="Blind Mango Bar på Google Maps"
                src={mapSrc}
                className="absolute inset-0 h-full w-full border-0 transition-[filter] duration-500 dark:[filter:invert(92%)_hue-rotate(180deg)_saturate(0.85)_brightness(0.95)]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address & Quick Info Banner */}
            <div className="flex items-center justify-between rounded-2xl bg-white p-5 border border-[#e6dec8] shadow-sm dark:bg-[#17160d] dark:border-[#242318]">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DCA54A]/15 text-[#8a5a00] dark:text-[#DCA54A]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest opacity-75">Hitta hit</h4>
                  <p className="text-sm font-medium">{ADDRESS}</p>
                </div>
              </div>
            </div>

            {/* 2 Clean Action Buttons */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ActionButton href={`tel:${PHONE_TEL}`} label="Ring oss direkt" sublabel="+46 70 438 28 59" primary>
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
              </ActionButton>

              <ActionButton href={MAPS_LINK} label="Navigering & Karta" sublabel="Öppna i Google Maps" external>
                <path d="M3 11l18-8-8 18-2-8-8-2z" />
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}