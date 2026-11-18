type DeliveryProps = {
  foodoraHref?: string;
  uberEatsHref?: string;
  woltHref?: string;
};

export default function Delivery({
  foodoraHref = "https://www.foodora.se/restaurant/mpru/the-blind-mango",
  uberEatsHref = "https://www.ubereats.com/se-en/store/blind-mango-bar/IZ7EoSXKT0GIYQPGKrEOQg?srsltid=AfmBOopBfvBTKTe_snEd-X7cnzWDFht3rzdp1p8nplTbi-JNLz8YI2qw",
  woltHref = "https://wolt.com/en/swe/goteborg/restaurant/blind-mango-bar",
}: DeliveryProps) {
  const platforms = [
    { name: "Foodora", href: foodoraHref },
    { name: "Uber Eats", href: uberEatsHref },
    { name: "Wolt Food", href: woltHref },
  ];

  return (
    <section className="bg-[#FAF5E5] px-6 py-16 text-center text-[#0E0D06] transition-colors duration-500 dark:bg-[#0E0D06] dark:text-[#FAF5E5] sm:py-20">
      <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">
        Vår mat finns tillgänglig på alla populära matleverans plattformar!
      </h2>
      <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-[#DCA54A]" />

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-[#DCA54A] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0E0D06] shadow-lg shadow-[#DCA54A]/25 transition-all hover:scale-105 hover:bg-[#e8b55d] active:scale-95 sm:w-auto"
          >
            {p.name}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}