import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      id="content"
      className="bg-[#FAF5E5] px-6 py-12 text-[#0E0D06] transition-colors duration-500 dark:bg-[#0E0D06] dark:text-[#FAF5E5] sm:py-16"
    >
     <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold leading-snug sm:text-3xl">
            Upptäck den mysiga atmosfären på{" "}
            <span className="text-[#9a6a10] dark:text-[#DCA54A]">
              Blind Mango!
            </span>
          </h2>
          <span className="mt-4 block h-1 w-12 rounded-full bg-[#DCA54A]" />
        </div>

        {/* Description - Hidden for now, keep for future use */}

        {/*
        <div className="space-y-3 text-left text-sm leading-relaxed text-[#2b2a24] dark:text-[#E3E3E3] sm:text-base">
          <p className="font-semibold">
            Upptäck den mysiga atmosfären på Blind Mango!
          </p>
          <p>
            Beläget på Nordenskiöldsgatan 3 är detta platsen där lokalborna kommer för att
            lämna alla bekymmer bakom sig!
          </p>
          <p>
            Blind Mango Bar erbjuder en varm och avslappnad miljö! Med sitt läge intill torget
            ger de stora panoramafönstren en perfekt utsikt över Sveaplan, oavsett om det är
            soligt eller regnigt. Här kan du njuta av bra musik, god mat och drycker som öl,
            vin eller cocktails i sällskap med Sveaplans fantastiska människor.
          </p>
          <p>
            Vår äventyrliga asiatiskinspirerade meny, cocktails och utvalda vinlista utvecklas
            ständigt. Perfekt för dig som söker en mysig men livfull plats. Blind Mango
            kombinerar kärleken till gemenskap, positiv energi och kulinarisk kreativitet,
            vilket gör varje besök till en upplevelse för både smaklökarna och sinnena.
          </p>
        </div>
        */}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to={"/book"}
          className="rounded-full bg-[#DCA54A] px-9 py-3 text-sm font-bold uppercase tracking-widest text-[#0E0D06] shadow-lg shadow-[#DCA54A]/30 transition-transform hover:scale-105 active:scale-95"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
