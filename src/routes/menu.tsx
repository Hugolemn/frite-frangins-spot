import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, ArrowLeft, Euro } from "lucide-react";

import logoAsset from "@/assets/frites-frangins-logo.jpg.asset.json";

export const Route = createFileRoute("/menu")({
  component: Menu,
  head: () => ({
    meta: [
      { title: "La carte — Frites & Frangins, friterie à Tournai" },
      { name: "description", content: "Toute la carte de Frites & Frangins : frites, burgers maison, snacks, mitraillettes, plats, brochettes, boissons et sauces. Prix et choix complets." },
      { property: "og:title", content: "La carte — Frites & Frangins" },
      { property: "og:description", content: "Frites fraîches, burgers maison, snacks et sauces : toute la carte avec les prix." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

type MenuItem = { name: string; price: string; desc?: string };
type Category = {
  key: string;
  label: string;
  emoji: string;
  note?: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    key: "frites",
    label: "Frites",
    emoji: "🍟",
    items: [
      { name: "Petite", price: "2,70 €" },
      { name: "Moyenne", price: "3,70 €" },
      { name: "Grande", price: "4,70 €" },
    ],
  },
  {
    key: "snacks",
    label: "Snacks",
    emoji: "🌭",
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
    key: "brochettes",
    label: "Brochettes",
    emoji: "🍢",
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
    key: "burgers-maison",
    label: "Burgers Maison",
    emoji: "🍔",
    note: "Servis seuls / sur assiette — steak 100 % bœuf, sélection du boucher",
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
    key: "burgers",
    label: "Burgers",
    emoji: "🍞",
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
    key: "sandwichs",
    label: "Sandwichs",
    emoji: "🥖",
    items: [
      { name: "Filet Américain", price: "3,80 €" },
      { name: "Thon Mayonnaise", price: "3,80 €" },
      { name: "Dagobert", price: "3,80 €" },
    ],
  },
  {
    key: "mitraillettes",
    label: "Mitraillettes",
    emoji: "🥪",
    items: [{ name: "La Base", price: "5,50 €", desc: "+ viande au choix" }],
  },
  {
    key: "wraps",
    label: "Wraps",
    emoji: "🌯",
    items: [
      { name: "Wrap Bicky", price: "3,80 €" },
      { name: "Wrap Mexicanos", price: "4,60 €" },
      { name: "Wrap Tenders", price: "4,00 €" },
      { name: "Wrap Pur Bœuf", price: "7,00 €" },
    ],
  },
  {
    key: "plats",
    label: "Plats",
    emoji: "🍽️",
    note: "Tous nos plats à 14,00 €",
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
    key: "vege",
    label: "Végé",
    emoji: "🥬",
    items: [
      { name: "Hamburger Végé", price: "5,00 €" },
      { name: "Fricadelle Végé", price: "3,20 €" },
      { name: "Poulycroc Végé", price: "3,20 €" },
    ],
  },
  {
    key: "enfants",
    label: "Enfants",
    emoji: "🧒",
    items: [{ name: "Box Enfant", price: "6,50 €" }],
  },
  {
    key: "boissons",
    label: "Boissons",
    emoji: "🥤",
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
  {
    key: "sauces",
    label: "Sauces",
    emoji: "🧂",
    note: "Toutes les sauces : 1,10 €",
    items: [
      "Aïl", "Algérienne", "Andalouse", "Américaine", "Barbecue", "Bicky Orange",
      "Brasil", "Cheddar", "Chicken", "Cocktail", "Dressing", "Giant", "Hot",
      "Joppie", "Joppie Hot", "Ketchup", "Ketchup Curry", "Loempia", "Martino",
      "Mayonnaise", "Moutarde", "Pickels", "Poivre", "Samouraï", "Snaky",
      "Tartare", "Toscane", "Truffe", "Frangins",
    ].map((name) => ({ name, price: "" })),
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Frites+%26+Frangins+Chauss%C3%A9e+de+Douai+850+Tournai";

function Menu() {
  const [active, setActive] = useState("frites");
  const current: Category = categories.find((c) => c.key === active) ?? categories[0]!;

  return (
    <div className="min-h-screen bg-ink text-ink-foreground">
      {/* ===== Navbar ===== */}
      <nav className="sticky top-0 z-50 border-b border-mustard/20 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Frites & Frangins"
              className="h-10 w-10 rounded-lg object-cover"
              width={80}
              height={80}
            />
            <span className="font-display text-lg text-mustard">
              Frites & Frangins
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-mustard/60 px-4 py-2 text-xs font-bold text-mustard transition-colors hover:bg-mustard hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Accueil
            </Link>
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

      {/* ===== En-tête ===== */}
      <header className="px-4 pb-4 pt-12 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-mustard/80">Sur place · À emporter · Livraison</p>
        <h1 className="mt-2 font-display text-5xl text-mustard sm:text-6xl">
          La <span className="italic text-ink-foreground">carte</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-ink-foreground/60">
          Choisissez une catégorie pour découvrir nos produits et leurs prix.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        {/* ===== Onglets catégories ===== */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(c.key)}
              aria-pressed={active === c.key}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                active === c.key
                  ? "bg-mustard text-ink shadow-md"
                  : "border border-mustard/30 bg-ink-foreground/[0.04] text-ink-foreground/80 hover:border-mustard/60 hover:text-mustard"
              }`}
            >
              <span className="mr-1">{c.emoji}</span> {c.label}
            </button>
          ))}
        </div>

        {/* ===== Contenu catégorie ===== */}
        <section className="mt-12">
          <div className="text-center">
            <h2 className="font-display text-3xl text-mustard sm:text-4xl">
              {current.label}
            </h2>
            {current.note && (
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink-foreground/60">
                {current.note}
              </p>
            )}
          </div>

          {current.key === "sauces" ? (
            <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-mustard/15 bg-ink-foreground/[0.03] p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {current.items.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-full bg-ink-foreground/10 px-4 py-2 text-sm font-medium text-ink-foreground"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {current.items.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-2xl border border-mustard/15 bg-ink-foreground/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-mustard/50 hover:bg-ink-foreground/[0.06]"
                >
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <h3 className="font-display text-base text-ink-foreground transition-colors group-hover:text-mustard">
                      {item.name}
                    </h3>
                    {item.price && (
                      <span className="whitespace-nowrap text-base font-extrabold text-mustard">
                        {item.price}
                      </span>
                    )}
                  </div>
                  {item.desc && (
                    <p className="text-sm leading-snug text-ink-foreground/55">{item.desc}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="mt-12 flex items-center justify-center gap-2 text-center text-sm font-medium text-ink-foreground/60">
          <Euro className="h-4 w-4 shrink-0 text-mustard" />
          Comptez entre 10 et 20 € par personne. Pour les allergènes, adressez-vous au personnel.
        </p>
      </main>

      {/* ===== Footer ===== */}
      <footer className="border-t border-mustard/20 px-6 pb-28 pt-12 text-center text-ink-foreground/60">
        <img
          src={logoAsset.url}
          alt="Logo Frites & Frangins"
          className="mx-auto h-16 w-16 rounded-2xl object-cover"
          width={128}
          height={128}
          loading="lazy"
        />
        <p className="mt-4 font-display text-xl text-mustard">Frites & Frangins</p>
        <p className="mt-2 text-sm">Chaussée de Douai 850, 7504 Tournai</p>
        <p className="mt-1 text-sm">Tél. 069 21 26 55</p>
        <p className="mt-6 text-xs uppercase tracking-widest opacity-50">
          © {new Date().getFullYear()} Frites & Frangins — Tous droits réservés
        </p>
      </footer>

      {/* ===== Barre d'action sticky ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-ink via-ink/95 to-transparent p-4">
        <div className="mx-auto flex max-w-3xl gap-3">
          <a
            href="tel:069212655"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-mustard py-4 font-display text-sm text-ink shadow-lg transition-transform active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Appeler
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ink-foreground/10 py-4 font-display text-sm text-mustard ring-1 ring-mustard/40 backdrop-blur transition-transform active:scale-95"
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
