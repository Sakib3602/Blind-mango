type FooterProps = {
  /** Google Maps "Embed a map" er iframe src URL. Na dile address diye default map dekhabe. */
  mapSrc?: string;
};

const ADDRESS = "Nordenskiöldsgatan 3, 413 09 Göteborg";
const PHONE_DISPLAY = "+46 70 438 28 59";
const PHONE_TEL = "+46704382859";

const DEFAULT_MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  "Blind Mango Bar, " + ADDRESS
)}&output=embed`;

const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Blind Mango Bar, " + ADDRESS
)}`;

const ACCENT = "text-[#8a5a00] dark:text-[#DCA54A]";
const MUTED = "text-[#66676b] dark:text-[#a1a2a7]";

export default function Footer({ mapSrc = DEFAULT_MAP_SRC }: FooterProps) {
  return (
    <footer
      id="kontakt"
      className="bg-[#FAF5E5] px-6 py-12 text-[#0E0D06] transition-colors duration-500 dark:bg-[#0A0A04] dark:text-[#FAF5E5] sm:py-16"
    >
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-12">
        {/* Left Side: Clean Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Blind Mango Bar</h2>
            <p className={`mt-1 text-sm ${MUTED}`}>Göteborg, Sweden</p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <span className={`block text-xs font-bold uppercase tracking-wider ${ACCENT}`}>
                Öppettider
              </span>
              <p className="font-medium">Öppet från kl 14 varje dag</p>
            </div>

            <div>
              <span className={`block text-xs font-bold uppercase tracking-wider ${ACCENT}`}>
                Quizkväll
              </span>
              <p className="font-medium">Varje Onsdag</p>
            </div>

            <div>
              <span className={`block text-xs font-bold uppercase tracking-wider ${ACCENT}`}>
                Adress
              </span>
              <p className="font-medium">{ADDRESS}</p>
            </div>

            <div>
              <span className={`block text-xs font-bold uppercase tracking-wider ${ACCENT}`}>
                Ring oss
              </span>
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-bold transition-colors hover:text-[#DCA54A]"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Simple Map */}
        <div className="relative min-h-[280px] w-full overflow-hidden rounded-2xl sm:min-h-[320px]">
          <iframe
            title="Blind Mango Bar på Google Maps"
            src={mapSrc}
            className="h-full w-full border-0 transition-[filter] duration-500 dark:[filter:invert(92%)_hue-rotate(180deg)_saturate(0.85)_brightness(0.95)]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 left-3 rounded-xl bg-[#DCA54A] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0E0D06] shadow-md transition-opacity hover:opacity-90"
          >
            Öppna i Maps ↗
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto mt-12 max-w-5xl border-t border-[#e6dec8] pt-6 text-center dark:border-[#201f16]">
        <p className={`text-xs ${MUTED}`}>
          © {new Date().getFullYear()} Blind Mango Bar. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}