import { Helmet } from "react-helmet-async";


type Item = {
  name: string;
  price: string;
  desc?: string;
  tag?: string; // populär / vegetarisk / vegansk / signatur
};

type Category = {
  title: string;
  hint?: string; // small text next to title
  note?: string; // italic note under list
  cols?: 1 | 2; // inner columns on desktop
  items: Item[];
};

type MenuPage = {
  id: string;
  label: string; // pill label
  subtitle: string;
  rows: Category[][]; // each row = 1 or 2 category cards side by side
  footer: string;
};

const PAGES: MenuPage[] = [
  {
    id: "meny",
    label: "Meny",
    subtitle: "MENY",
    footer: "Fråga oss om du är allergisk mot något · Priser i SEK",
    rows: [
      [
        {
          title: "Tilltugg",
          items: [
            { name: "Hot kycklingspett", price: "118", desc: "Marinerad med ingefära, vitlök & chili" },
            { name: "Sött umami-kycklingspett", price: "118", desc: "Marinerad i teriyakisås" },
            { name: "Vårrullar", tag: "vegetarisk", price: "89", desc: "Krispiga, med grönsaker & sötsur sås" },
            { name: "Kycklingvingar", price: "99", desc: "Krispiga vingar med aioli" },
            { name: "Pommes frites med aioli", price: "69" },
            { name: "Lökringar med aioli", price: "69" },
            { name: "Oliver", price: "55" },
            { name: "Saltgurka", price: "55" },
            { name: "Saltgurka & honungssmetana", price: "85" },
          ],
        },
        {
          title: "Varmrätter",
          items: [
            { name: "Långkokt Guinnessgryta", price: "199", desc: "Mör högrev långkokt i Guinness med timjan, vitlök, lök, morötter och svamp, avrundad med grädde. Serveras med surdegsbröd." },
            { name: "Fish & chips", price: "199", desc: "Tempurafriterad torskfilé, pommes, remoulad, citron & dill." },
            { name: "Klassisk ostburgare", price: "199", desc: "180g högrevsburgare med smält cheddar, krämig burgersås, sallad, tomat, picklad lök och saltgurka. Serveras med pommes frites och ketchup." },
            { name: "Krispig vegoburgare", tag: "vegetarisk", price: "159", desc: "Friterad vegetarisk burgare av soja med smält cheddar, krämig burgersås, sallad, tomat, picklad lök och saltgurka. Serveras med pommes frites och ketchup." },
            { name: "Sarisha gambas", price: "139 / 169", desc: "Räkor marinerade i sarisha (senapsolja), vitlök & koriander. Serveras med bröd & aioli." },
            { name: "Vegosoppa", tag: "vegansk", price: "119", desc: "Gul linssoppa med kokosmjölk, vitlök, lök & tomat. Serveras med surdegsbröd." },
          ],
        },
      ],
      [
        {
          title: "Varma mackor",
          hint: "surdegsbröd, med saltgurka, aioli & sallad",
          cols: 2,
          items: [
            { name: "Spicy Tuna", price: "139", desc: "Gochujang-tonfisk, salladslök & mozzarella" },
            { name: "Mango Special Triple Cheese", tag: "vegetarisk", price: "159", desc: "Kryddig & syrlig mangosylt, mozzarella, västerbottensost & brie." },
            { name: "Hot Ham", price: "139", desc: "Sambal-aioli, skinka & mozzarella" },
          ],
        },
      ],
      [
        {
          title: "Tillägg",
          cols: 2,
          items: [
            { name: "Bröd / glutenfritt bröd", price: "35" },
            { name: "Sallad", price: "29" },
          ],
        },
      ],
    ],
  },
  {
    id: "dryck",
    label: "Dryck",
    subtitle: "DRYCK",
    footer: "Fråga oss om du är allergisk mot något · Priser i SEK",
    rows: [
      [
        {
          title: "Cocktails",
          cols: 2,
          items: [
            { name: "Blind Mango", tag: "signatur", price: "149", desc: "Gin, triple sec, limoncello, mynta, mango & bubbel" },
            { name: "Salsa sour", tag: "signatur", price: "149", desc: "Tequila, rom, lime, jalapeño, tomat. Lite stark!" },
            { name: "Dacca", tag: "signatur", price: "169", desc: "Mörk rom, kaffelikör & tonic" },
            { name: "Tom collins", price: "119", desc: "Gin, sodavatten & citron" },
            { name: "Paloma", price: "129", desc: "Tequila, grapefrukt, sodavatten & lime" },
            { name: "Lynchburg lemonade", price: "149", desc: "Tennessee whiskey, triple sec, citronläsk & citron" },
            { name: "Peppar cola", price: "129", desc: "Vodka, jalapeño & cola" },
            { name: "Aperol Spritz", price: "129", desc: "Aperol, bubbel & apelsin" },
            { name: "Hugo", price: "129", desc: "Fläderlikör, mynta & bubbel" },
            { name: "Limoncello Spritz", price: "129", desc: "Limoncello, citron & bubbel" },
            { name: "Take a Break!", price: "179", desc: "Vodka, tequila, gin, rom, triple sec, cola & lime" },
            { name: "Fizzy Pop", price: "129", desc: "Vodka, tuggummi, lime & curaçao" },
            { name: "Tequila Sunrise", price: "139", desc: "Tequila, apelsin, grenadin & lime" },
            { name: "G&T", price: "119", desc: "Gin, tonic & lime" },
            { name: "Red Bull & vodka", price: "119" },
            { name: "Screwdriver", price: "119", desc: "Vodka & apelsinjuice" },
            { name: "Cranberry & vodka", price: "119", desc: "Vodka & tranbärsjuice" },
            { name: "Manhattan", price: "149", desc: "Whiskey, söt vermouth & bitter" },
            { name: "Martini", price: "169", desc: "Gin, torr vermouth & oliver" },
            { name: "Old Fashioned", price: "139", desc: "Bourbon & bitter" },
          ],
        },
      ],
      [
        {
          title: "Kaffedrinkar",
          items: [
            { name: "Irish Coffee", price: "149", desc: "Irish whiskey, kaffe & vispgrädde" },
            { name: "Kaffe Karlsson", price: "149", desc: "Cointreau, Baileys, kaffe, vispgrädde & chokladflagor" },
            { name: "Midnight Affogato", price: "149", desc: "Espresso, kaffelikör, vaniljglass & chokladflagor" },
          ],
        },
        {
          title: "Mocktails",
          items: [
            { name: "The Sober Mango", tag: "signatur", price: "115", desc: "Kokosmjölk, mango, lime & kardemumma" },
            { name: "Coco Bliss", price: "115", desc: "Kokosmjölk, ananas & lime" },
            { name: "Shirley Temple", price: "115", desc: "Grenadin, citronläsk, lime & körsbär" },
            { name: "Virgin Fizzy Pop", price: "115", desc: "Citronläsk, tuggummi, lime & curaçao" },
          ],
        },
      ],
    ],
  },
  {
    id: "efterratt",
    label: "Efterrätt & Dryck",
    subtitle: "EFTERRÄTT & DRYCK",
    footer: "Fråga oss om du är allergisk mot något · Priser i SEK",
    rows: [
      [
        {
          title: "Efterrätt",
          cols: 2,
          items: [
            { name: "Affogato", price: "79", desc: "Espresso med vaniljglass" },
            { name: "Kladdkaka", price: "85", desc: "Serveras med vispgrädde" },
            { name: "Vaniljglass med mangopuré", price: "79" },
            { name: "Vanilj- & hallontårta", tag: "vegansk", price: "85", desc: "Med blandade bär" },
          ],
        },
      ],
      [
        {
          title: "Fatöl",
          items: [
            { name: "1664 Blanc", price: "89" },
            { name: "Staropramen", price: "89" },
            { name: "Eriksberg Karaktär", price: "79" },
            { name: "Pripps Blå", price: "59" },
            { name: "Guinness", price: "99" },
            { name: "Brooklyn East IPA", price: "89" },
          ],
        },
        {
          title: "Vin",
          hint: "glas / flaska",
          note: "Fråga oss om vårt vinsortiment",
          items: [
            { name: "Husets röda", price: "85 / 320" },
            { name: "Husets vita", price: "85 / 320" },
            { name: "Husets rosé", price: "85 / 320" },
            { name: "Bubbel", price: "95 / 375" },
          ],
        },
      ],
      [
        {
          title: "Flaskor & alkoholfritt",
          note: "Fråga oss om öl på flaska",
          items: [
            { name: "Cider", price: "59" },
            { name: "Alkoholfri öl / cider", price: "49" },
            { name: "Läsk", price: "35" },
            { name: "Kolsyrat vatten", price: "29" },
          ],
        },
        {
          title: "Varma drycker",
          items: [
            { name: "Kaffe", price: "35" },
            { name: "Te", price: "35" },
            { name: "Espresso", price: "30" },
            { name: "Americano", price: "40" },
            { name: "Cappuccino", price: "49" },
            { name: "Latte macchiato", price: "49" },
          ],
        },
      ],
    ],
  },
];

// accent colour: dark gold on light bg (readable), bright mango on dark bg
const ACCENT = "text-[#8a5a00] dark:text-[#DCA54A]";
const MUTED = "text-[#4d4e52] dark:text-[#b4b5b8]";

function ItemRow({ item }: { item: Item }) {
  return (
    <li className="break-inside-avoid py-2.5">
      <div className="flex items-baseline gap-2">
        <span className="font-semibold leading-snug">{item.name}</span>
        {item.tag && <span className={`text-xs italic ${ACCENT}`}>– {item.tag}</span>}
        <span
          aria-hidden="true"
          className="relative -top-1 min-w-4 flex-1 border-b border-dotted border-current opacity-25"
        />
        <span className={`whitespace-nowrap font-bold tabular-nums ${ACCENT}`}>
          {item.price}
        </span>
      </div>
      {item.desc && (
        <p className={`mt-0.5 pr-10 text-sm leading-snug ${MUTED}`}>{item.desc}</p>
      )}
    </li>
  );
}

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-[#17160d] sm:p-8">
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3">
        <h3 className={`text-lg font-extrabold uppercase tracking-[0.2em] ${ACCENT}`}>
          {cat.title}
        </h3>
        {cat.hint && <span className={`text-sm ${MUTED}`}>· {cat.hint}</span>}
      </div>
      <span className="mb-3 block h-px w-full bg-gradient-to-r from-[#DCA54A] to-transparent" />

      <ul className={cat.cols === 2 ? "md:columns-2 md:gap-12" : ""}>
        {cat.items.map((it) => (
          <ItemRow key={it.name} item={it} />
        ))}
      </ul>

      {cat.note && <p className={`mt-3 text-sm italic ${MUTED}`}>{cat.note}</p>}
    </div>
  );
}

export default function Menu() {
  return (
    <>
      <Helmet>
        <title>Blind Mango Bar</title>
        <meta name="description" content="Utforska vår meny på Blind Mango Bar." />
      </Helmet>
      <section
        id="menu"
        className="scroll-mt-20 bg-[#F1EBDA] px-4 py-20 text-[#0E0D06] transition-colors duration-500 dark:bg-[#0A0A04] dark:text-[#FAF5E5] sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-5xl">
          {/* Intro + jump pills */}
          <div className="text-center">
            <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.3em] sm:text-5xl">
              Blind Mango
            </h2>
            <p className={`mt-2 font-mono text-xs uppercase tracking-[0.5em] ${MUTED}`}>Meny</p>

            <nav className="mt-8 flex flex-wrap justify-center gap-2">
              {PAGES.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="rounded-full bg-[#DCA54A] px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#0E0D06] transition-transform hover:scale-105 active:scale-95"
                >
                  {p.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Pages in order */}
          {PAGES.map((page) => (
            <div key={page.id} id={page.id} className="scroll-mt-24 pt-16">
              <div className="mb-8 text-center">
                <h3 className="font-mono text-2xl font-bold uppercase tracking-[0.3em] sm:text-3xl">
                  Blind Mango
                </h3>
                <p className={`mt-1 font-mono text-xs uppercase tracking-[0.5em] ${MUTED}`}>
                  {page.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {page.rows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid gap-6 ${row.length > 1 ? "md:grid-cols-2" : ""}`}
                  >
                    {row.map((cat) => (
                      <CategoryCard key={cat.title} cat={cat} />
                    ))}
                  </div>
                ))}
              </div>

              <p className={`mt-8 text-center font-mono text-xs ${MUTED}`}>{page.footer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}