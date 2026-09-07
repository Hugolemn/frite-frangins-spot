import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, ShoppingBag, Truck, ArrowRight, Utensils } from "lucide-react";

import logoAsset from "@/assets/frites-frangins-logo.jpg.asset.json";
import heroFood from "@/assets/hero-food.png";
import fritesImg from "@/assets/frites.png";
import burgerImg from "@/assets/burger.png";
import bouletteImg from "@/assets/boulette.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Frites & Frangins — Friterie à Tournai" },
      { name: "description", content: "Frites & Frangins, friterie à Tournai. Cornets croustillants, burgers et snacks. À emporter ou en livraison." },
      { property: "og:title", content: "Frites & Frangins — Friterie à Tournai" },
      { property: "og:description", content: "La vraie frite belge à Tournai. À emporter ou en livraison." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const schedule = [
  { day: "Lundi", hours: "17:30 – 21:30", closed: false },
  { day: "Mardi", hours: "Fermé", closed: true },
  { day: "Mercredi", hours: "11:30 – 13:30 / 17:30 – 21:30", closed: false },
  { day: "Jeudi", hours: "11:30 – 13:30 / 17:30 – 21:30", closed: false },
  { day: "Vendredi", hours: "11:30 – 13:30 / 17:30 – 22:00", closed: false, highlight: true },
  { day: "Samedi", hours: "11:30 – 13:30 / 17:30 – 22:00", closed: false, highlight: true },
  { day: "Dimanche", hours: "17:30 – 21:30", closed: false },
];

const incontournables = [
  { name: "Le Cornet du Frangin", desc: "Frites fraîches, sauce au choix", price: "3,50 €", img: fritesImg, badge: "Best-seller" },
  { name: "Le Frangin Burger", desc: "Smashé, cheddar fondant, sauce maison", price: "8,90 €", img: burgerImg, badge: null },
  { name: "Boulettes de la Mama", desc: "Sauce tomate maison, comme à la maison", price: "9,50 €", img: bouletteImg, badge: "Fait maison" },
];

type MenuItem = { name: string; price: string; desc?: string };
type MenuGroup = { title: string; note?: string; desc?: string; items: MenuItem[] };

const menuGroups: MenuGroup[] = [
  {
    title: "Les Frites",
    items: [
      { name: "Petite", price: "2,70 €" },
      { name: "Moyenne", price: "3,70 €" },
      { name: "Grande", price: "4,70 €" },
    ],
  },
  {
    title: "Les Mitraillettes",
    items: [{ name: "La Base", price: "5,50 €", desc: "+ viande au choix" }],
  },
  {
    title: "Les Sandwichs",
    items: [
      { name: "Filet Américain", price: "3,80 €" },
      { name: "Thon Mayonnaise", price: "3,80 €" },
      { name: "Dagobert", price: "3,80 €" },
    ],
  },
  {
    title: "Les Enfants",
    items: [{ name: "Box Enfant", price: "6,50 €" }],
  },
  {
    title: "La Gamme Végé",
    items: [
      { name: "Hamburger Végé", price: "5,00 €" },
      { name: "Fricadelle Végé", price: "3,20 €" },
      { name: "Poulycroc Végé", price: "3,20 €" },
    ],
  },
  {
    title: "Les Burgers Maison",
    note: "Servis seuls / sur assiette — Steak 100% bœuf sélection du boucher",
    items: [
      { name: "Le Classique", price: "8,20 € / 12,50 €", desc: "Bun artisanal, viande 140gr, salade, tomate, oignons frits, cheddar, sauce Giant" },
      { name: "USA", price: "9,20 € / 14,00 €", desc: "Bun artisanal, viande 140gr, salade, tomate, oignons rouges, bacon, cheddar, cornichon, sauce barbecue" },
      { name: "Savoyard", price: "9,20 € / 14,00 €", desc: "Bun artisanal, viande 140gr, salade, oignons caramélisés, fromage raclette, galette rösti PDT, sauce poivre" },
      { name: "Italien", price: "9,20 € / 14,00 €", desc: "Bun artisanal, viande 140gr, roquette, chorizo, mozzarella, tomates séchées, sauce toscane" },
      { name: "Picard", price: "9,20 € / 14,00 €", desc: "Bun artisanal, viande 140gr, salade, oignons caramélisés, bacon, maroilles, sauce au choix" },
      { name: "Berger", price: "9,20 € / 14,00 €", desc: "Bun artisanal, viande 140gr, fromage de chèvre, noix, pomme, roquette, miel, sauce au choix" },
      { name: "Frangins", price: "9,20 € / 14,00 €", desc: "Bun artisanal, viande 140gr, chorizo, oignons rouges, tomate, jalapeños, sauce Frangins" },
      { name: "Gourmet", price: "9,90 € / 14,50 €", desc: "Bun artisanal, viande 140gr, speck, mozzarella, roquette, aubergine grillée, champignons poêlés, sauce truffe" },
      { name: "Burger du Moment", price: "9,50 € / 14,00 €" },
    ],
  },
  {
    title: "Les Burgers",
    items: [
      { name: "Hamburger Ketchup", price: "3,00 €" },
      { name: "Bicky Burger", price: "3,60 €" },
      { name: "Bicky Cheese", price: "4,00 €" },
      { name: "Bicky Crispy", price: "4,20 €" },
      { name: "Bicky Rib", price: "5,20 €" },
      { name: "Fish Burger", price: "4,60 €" },
      { name: "Chicken Burger", price: "4,30 €" },
    ],
  },
  {
    title: "Les Plats",
    note: "Tous à 14,00 €",
    items: [
      { name: "Assiette Américain", price: "14,00 €" },
      { name: "Boulettes Sauce Tomate", price: "14,00 €" },
      { name: "Boulets Liégeois", price: "14,00 €" },
      { name: "Vol-au-vent", price: "14,00 €" },
      { name: "Trio Croquettes Fromage", price: "14,00 €" },
      { name: "Pêche au Thon", price: "14,00 €" },
      { name: "Assiette Frangins", price: "14,00 €" },
    ],
  },
  {
    title: "Les Wraps",
    items: [
      { name: "Wrap Bicky", price: "3,80 €" },
      { name: "Wrap Mexicanos", price: "4,60 €" },
      { name: "Wrap Tenders", price: "4,00 €" },
      { name: "Wrap Pur Bœuf", price: "7,00 €" },
    ],
  },
  {
    title: "Les Snacks",
    items: [
      { name: "Viande Hamburger", price: "2,20 €" },
      { name: "Fricadelle", price: "2,20 €" },
      { name: "Fricadelle Spéciale", price: "2,70 €" },
      { name: "Fricadelle XL", price: "2,70 €" },
      { name: "Viandelle", price: "2,60 €" },
      { name: "Viandelle Spéciale", price: "3,10 €" },
      { name: "Boulette", price: "2,50 €" },
      { name: "Mexicanos", price: "3,00 €" },
      { name: "Cervelas (Brun ou Rouge)", price: "3,50 €" },
      { name: "Cervelas Spéciale", price: "4,00 €" },
      { name: "Poulycroc", price: "3,20 €" },
      { name: "Ragouzi", price: "3,20 €" },
      { name: "Belcrunch", price: "3,50 €" },
      { name: "Mini Lucifer", price: "4,20 €" },
      { name: "Mini Loempia", price: "4,20 €" },
      { name: "Nuggets", price: "3,60 €" },
      { name: "Chix Fingers", price: "4,30 €" },
      { name: "Cheese Crack", price: "3,20 €" },
      { name: "Soufflé Fromage", price: "3,20 €" },
      { name: "Croquette Fromage", price: "2,50 €" },
      { name: "Croquette Viande", price: "2,50 €" },
      { name: "B'bals", price: "3,20 €" },
      { name: "Top Mix", price: "7,50 €" },
    ],
  },
  {
    title: "Les Brochettes",
    items: [
      { name: "Brochette de Bœuf", price: "6,00 €" },
      { name: "Brochette Ardennaise", price: "4,50 €" },
      { name: "Brochette de Dinde", price: "4,50 €" },
      { name: "Brochette Tzigane", price: "3,80 €" },
      { name: "Brochette de Poisson", price: "4,50 €" },
      { name: "Brochette Pilon Poulet", price: "5,50 €" },
      { name: "Brochette Grizzly", price: "5,00 €" },
      { name: "Brochette Merguez", price: "4,80 €" },
    ],
  },
  {
    title: "Les Sauces",
    note: "Toutes les sauces : 1,10 €",
    desc: "Aïl · Algérienne · Andalouse · Américaine · Barbecue · Bicky Orange · Brasil · Cheddar · Chicken · Cocktail · Dressing · Giant · Hot · Joppie · Joppie Hot · Ketchup · Ketchup Curry · Loempia · Martino · Mayonnaise · Moutarde · Pickels · Poivre · Samouraï · Snaky · Tartare · Toscane · Truffe · Frangins",
    items: [],
  },
  {
    title: "Boissons Softs",
    items: [
      { name: "Coca-Cola", price: "2,00 €" },
      { name: "Coca-Cola Zéro", price: "2,00 €" },
      { name: "Fanta Orange", price: "2,00 €" },
      { name: "Sprite", price: "2,00 €" },
      { name: "Tropico", price: "2,20 €" },
      { name: "Ice Tea", price: "2,20 €" },
      { name: "Ice Tea Pêche", price: "2,20 €" },
      { name: "Caprisun", price: "2,00 €" },
      { name: "Eau Plate 50 cl", price: "2,00 €" },
      { name: "Eau Pétillante 50 cl", price: "2,00 €" },
    ],
  },
  {
    title: "Boissons Moins Soft",
    items: [
      { name: "Jupiler", price: "2,20 €" },
      { name: "Blanche Rosé", price: "3,00 €" },
      { name: "Trolls", price: "3,00 €" },
      { name: "Leffe", price: "3,50 €" },
      { name: "Desperados", price: "4,00 €" },
      { name: "Triple Karmeliet", price: "4,00 €" },
      { name: "Eristoff Rouge", price: "4,50 €" },
      { name: "J&B", price: "4,50 €" },
      { name: "Captain Morgan", price: "4,50 €" },
      { name: "Bombay Sapphire", price: "4,50 €" },
    ],
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Frites+%26+Frangins+Chauss%C3%A9e+de+Douai+850+Tournai";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== Navbar (style Fritapapa) ===== */}
      <nav className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-mustard/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Frites & Frangins"
              className="h-10 w-10 rounded-lg object-cover"
              width={80}
              height={80}
            />
            <span className="font-display text-lg font-extrabold uppercase tracking-wide text-mustard">
              Frites & Frangins
            </span>
          </a>
          <div className="hidden items-center gap-6 font-display text-sm font-bold uppercase tracking-wider text-ink-foreground/80 md:flex">
            <a href="#incontournables" className="transition-colors hover:text-mustard">Incontournables</a>
            <a href="#menu" className="transition-colors hover:text-mustard">Menu</a>
            <a href="#infos" className="transition-colors hover:text-mustard">Infos</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-mustard/60 px-4 py-2 text-xs font-bold text-mustard transition-colors hover:bg-mustard hover:text-ink sm:inline-flex"
            >
              <MapPin className="h-3.5 w-3.5" />
              Nous trouver
            </a>
            <a
              href="tel:069212655"
              className="inline-flex items-center gap-1.5 rounded-full bg-mustard px-4 py-2 text-xs font-bold text-ink transition-transform active:scale-95"
            >
              <Phone className="h-3.5 w-3.5" />
              Commander
            </a>
          </div>
        </div>
      </nav>

      {/* ===== Hero : bandeau titre géant + visuel produit ===== */}
      <header className="bg-mustard">
        <h1 className="px-4 pt-10 text-center font-display text-[18vw] font-extrabold uppercase leading-[0.85] tracking-tight text-ink sm:pt-14 sm:text-[13vw] lg:text-[10rem]">
          Friterie
        </h1>
        {/* bord déchiré */}
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="block h-8 w-full text-ink" aria-hidden="true">
          <path
            d="M0,40 L0,24 L60,28 L140,18 L220,26 L320,14 L420,24 L540,16 L660,26 L780,12 L900,22 L1020,16 L1140,26 L1260,14 L1360,22 L1440,18 L1440,40 Z"
            fill="currentColor"
          />
        </svg>

        <div className="bg-ink">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-mustard px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">
                <Star className="h-3.5 w-3.5 fill-current" />
                4,3/5 — 130 avis Google
              </span>
              <p className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] text-mustard sm:text-5xl">
                La vraie frite belge,
                <br />
                <span className="text-ink-foreground">entre frangins.</span>
              </p>
              <p className="mt-4 max-w-md text-base font-medium text-ink-foreground/70">
                Cornets croustillants, burgers smashés et sauces maison, en plein cœur de Tournai. À emporter ou en livraison.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full bg-mustard px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:scale-105 active:scale-95"
                >
                  Voir le menu
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-mustard px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-mustard transition-colors hover:bg-mustard hover:text-ink"
                >
                  <MapPin className="h-4 w-4" />
                  Trouver la friterie
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroFood}
                alt="Cornet de frites belges à la mayonnaise et burger au cheddar fondant"
                className="mx-auto w-full max-w-lg drop-shadow-2xl"
                width={1400}
                height={1000}
                fetchPriority="high"
              />
              {/* Badge prix style Fritapapa */}
              <div className="absolute bottom-2 right-2 flex h-24 w-24 rotate-[-8deg] items-center justify-center rounded-full bg-mustard text-center shadow-xl sm:h-28 sm:w-28">
                <p className="font-display text-ink">
                  <span className="block text-[10px] font-bold uppercase leading-tight">Cornets</span>
                  <span className="block text-xl font-extrabold leading-tight sm:text-2xl">dès 3,50€</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Nos incontournables ===== */}
      <section id="incontournables" className="bg-ink px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-widest text-mustard/80">Sélectionnés pour vous</p>
          <h2 className="mt-1 font-display text-4xl font-extrabold uppercase text-mustard sm:text-5xl">
            Nos <span className="italic text-ink-foreground">incontournables</span>
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {incontournables.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-3xl bg-background shadow-xl ring-1 ring-mustard/20 transition-transform hover:-translate-y-1"
              >
                <div className="relative flex h-48 items-center justify-center bg-mustard/10 p-4">
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-mustard px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
                      {item.badge}
                    </span>
                  )}
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-auto object-contain drop-shadow-lg transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold">{item.name}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-ink px-3.5 py-1.5 font-display text-sm font-extrabold text-mustard">
                    {item.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Vous cherchez quoi ? ===== */}
      <section className="bg-mustard px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-extrabold uppercase text-ink sm:text-5xl">
            Vous cherchez <span className="italic">quoi</span> ?
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="#menu"
              className="group rounded-3xl bg-ink p-6 text-ink-foreground transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mustard/15 text-mustard"><Utensils className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase text-mustard">Notre menu</h3>
              <p className="mt-2 text-sm text-ink-foreground/70">
                Frites fraîches, burgers, snacks et sauces maison — toute la carte, avec les prix.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-mustard group-hover:underline">
                Voir le menu <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="tel:069212655"
              className="group rounded-3xl bg-ink p-6 text-ink-foreground transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mustard/15 text-mustard"><ShoppingBag className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase text-mustard">Commander</h3>
              <p className="mt-2 text-sm text-ink-foreground/70">
                Sur place, à emporter ou en livraison. Un coup de fil et c'est prêt en quelques minutes.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-mustard group-hover:underline">
                069 21 26 55 <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#infos"
              className="group rounded-3xl bg-ink p-6 text-ink-foreground transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mustard/15 text-mustard"><MapPin className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase text-mustard">Nous trouver</h3>
              <p className="mt-2 text-sm text-ink-foreground/70">
                Chaussée de Douai 850, 7504 Tournai. Horaires, accès et itinéraire.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-mustard group-hover:underline">
                Voir les infos <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== Au menu (la vraie carte) ===== */}
      <section id="menu" className="bg-ink px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-widest text-mustard/80">Sur place · À emporter · Livraison</p>
          <h2 className="mt-1 font-display text-4xl font-extrabold uppercase text-mustard sm:text-5xl">
            Au <span className="italic text-ink-foreground">menu</span>
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl bg-ink-foreground/5 p-6 ring-1 ring-mustard/20 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-foreground/10 hover:shadow-xl hover:shadow-mustard/5 hover:ring-mustard"
              >
                <h3 className="font-display text-xl font-extrabold uppercase text-mustard">
                  <span className="inline-block bg-mustard px-2 py-0.5 text-ink [clip-path:polygon(0_15%,4%_0,96%_5%,100%_20%,98%_85%,94%_100%,3%_95%,0_80%)]">
                    {group.title}
                  </span>
                </h3>
                {group.note && (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-mustard/70">{group.note}</p>
                )}
                {group.desc && (
                  <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">{group.desc}</p>
                )}
                <ul className="mt-3 space-y-0.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="group/item -mx-2 cursor-default rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-mustard/15"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-semibold text-ink-foreground transition-colors group-hover/item:text-mustard">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-ink-foreground/25 transition-colors group-hover/item:border-mustard/50" aria-hidden="true" />
                        <span className="shrink-0 rounded-full px-2 py-0.5 font-display text-sm font-extrabold text-mustard transition-colors group-hover/item:bg-mustard group-hover/item:text-ink">
                          {item.price}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="mt-0.5 text-xs leading-snug text-ink-foreground/50">{item.desc}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm font-medium text-ink-foreground/60">
            <Euro className="h-4 w-4 text-mustard" />
            Comptez entre 10 et 20 € par personne. Pour les allergènes, adressez-vous au personnel.
          </p>
        </div>
      </section>

      {/* ===== À emporter / Livraison ===== */}
      <section className="bg-background px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mustard text-ink">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">À emporter</h3>
              <p className="text-sm text-muted-foreground">Votre cornet prêt en quelques minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mustard text-ink">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Livraison</h3>
              <p className="text-sm text-muted-foreground">Livraison disponible aux alentours de Tournai</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Infos pratiques ===== */}
      <section id="infos" className="bg-ink px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-extrabold uppercase text-mustard sm:text-5xl">
            Infos <span className="italic text-ink-foreground">pratiques</span>
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl bg-ink-foreground/5 p-6 ring-1 ring-mustard/20 transition-colors hover:ring-mustard"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mustard text-ink">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink-foreground">Adresse</h3>
                  <p className="mt-1 text-sm text-ink-foreground/70">
                    Chaussée de Douai 850
                    <br />
                    7504 Tournai
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-semibold text-mustard group-hover:underline">
                    Itinéraire
                  </span>
                </div>
              </a>

              <a
                href="tel:069212655"
                className="group flex items-start gap-4 rounded-2xl bg-ink-foreground/5 p-6 ring-1 ring-mustard/20 transition-colors hover:ring-mustard"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mustard text-ink">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink-foreground">Téléphone</h3>
                  <p className="mt-1 text-lg font-bold text-ink-foreground">069 21 26 55</p>
                  <p className="mt-1 text-sm text-ink-foreground/60">Appeler pour commander ou réserver</p>
                </div>
              </a>
            </div>

            {/* Horaires */}
            <div className="overflow-hidden rounded-2xl bg-ink-foreground/5 ring-1 ring-mustard/20">
              <div className="flex items-center gap-3 bg-mustard px-6 py-4">
                <Clock className="h-5 w-5 text-ink" />
                <h3 className="font-display font-bold text-ink">Horaires d'ouverture</h3>
              </div>
              <div className="divide-y divide-mustard/10 px-6 py-2">
                {schedule.map((item) => (
                  <div key={item.day} className="flex items-center justify-between py-3">
                    <span className={item.closed ? "text-ink-foreground/40 line-through" : "text-ink-foreground"}>
                      {item.day}
                    </span>
                    <span className={item.closed ? "italic text-ink-foreground/40" : "text-right text-ink-foreground/70"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Avis */}
          <div className="mt-8 rounded-2xl bg-mustard px-6 py-10 text-center text-ink">
            <p className="font-display text-3xl font-extrabold uppercase">4,3 sur 5</p>
            <div className="mt-2 flex items-center justify-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-ink text-ink" />
              ))}
              <Star className="h-5 w-5 fill-ink/50 text-ink" />
            </div>
            <p className="mt-3 text-sm font-medium opacity-80">130 avis sur Google</p>
            <p className="mx-auto mt-2 max-w-md text-sm italic opacity-70">
              "Les meilleures frites de Tournai, un accueil toujours chaleureux !"
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-ink px-6 pb-28 pt-12 text-center text-ink-foreground/60">
        <div className="border-t border-mustard/20 pt-12">
          <img
            src={logoAsset.url}
            alt="Logo Frites & Frangins"
            className="mx-auto h-16 w-16 rounded-2xl object-cover"
            width={128}
            height={128}
            loading="lazy"
          />
          <p className="mt-4 font-display text-xl font-extrabold uppercase text-mustard">Frites & Frangins</p>
          <p className="mt-2 text-sm">Chaussée de Douai 850, 7504 Tournai</p>
          <p className="mt-1 text-sm">Tél. 069 21 26 55</p>
          <p className="mt-6 text-xs uppercase tracking-widest opacity-50">
            © {new Date().getFullYear()} Frites & Frangins — Tous droits réservés
          </p>
        </div>
      </footer>

      {/* ===== Barre d'action sticky (mobile) ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-ink via-ink/95 to-transparent p-4">
        <div className="mx-auto flex max-w-3xl gap-3">
          <a
            href="tel:069212655"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-mustard py-4 font-display text-sm font-bold uppercase tracking-wide text-ink shadow-lg transition-transform active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Appeler
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ink-foreground/10 py-4 font-display text-sm font-bold uppercase tracking-wide text-mustard ring-1 ring-mustard/40 backdrop-blur transition-transform active:scale-95"
          >
            <MapPin className="h-4 w-4" />
            Itinéraire
          </a>
        </div>
      </div>

      <div className="h-24 bg-ink" />
    </div>
  );
}
