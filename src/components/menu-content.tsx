import { useState } from "react";

export type MenuItem = { name: string; price: string; desc?: string };
export type Category = {
  key: string;
  label: string;
  note?: string;
  items: MenuItem[];
};

const i = (name: string, price: string, desc?: string): MenuItem => (desc ? { name, price, desc } : { name, price });

export const categories: Category[] = [
  {
    key: "frites",
    label: "Frites",
    items: [i("Petite", "2,90 €"), i("Moyenne", "3,90 €"), i("Grande", "4,90 €")],
  },
  {
    key: "snacks",
    label: "Snacks",
    items: [
      i("Viande Hamburger", "2,20 €"), i("Fricadelle", "2,20 €"), i("Fricadelle Spéciale", "2,80 €"),
      i("Fricadelle XL", "3,00 €"), i("Viandelle", "2,70 €"),
      i("Viandelle Spicy", "3,20 €", "Viandelle traditionnelle avec une chapelure légèrement relevée"),
      i("Viandelle Spéciale", "3,20 €"), i("Boulette", "2,50 €"), i("Mexicanos", "3,00 €"),
      i("Mexicanos Crunch", "3,90 €", "Mexicanos traditionnel avec une chapelure croustillante"),
      i("Cervelas Brun", "3,80 €", "Classique"), i("Cervelas Rouge", "4,20 €", "Fumé"),
      i("Cervelas Spéciale", "4,50 €"), i("Poulycroc", "3,20 €"), i("Tenders Poulet", "4,50 €", "3 pièces"),
      i("Ragouzi", "3,40 €"), i("Belcrunch", "3,60 €"), i("Mini Lucifer", "4,50 €"), i("Mini Loempia", "4,20 €"),
      i("Nuggets", "3,80 €"), i("Chix Fingers", "4,30 €"), i("Cheese Crack", "3,40 €"),
      i("Soufflé Fromage", "3,20 €"), i("Croquette Fromage", "2,50 €"), i("Croquette Viande", "2,50 €"),
      i("B'bals", "3,20 €"), i("Top Mix", "7,50 €"), i("Chili Cheese Nuggets", "3,50 €"),
      i("Stick Mozzarella", "3,50 €"), i("Bami", "3,00 €"), i("Carbonnade", "2,50 €", "Sauce chaude"),
    ],
  },
  {
    key: "brochettes",
    label: "Brochettes",
    items: [
      i("Brochette de Bœuf", "6,50 €"), i("Brochette Ardennaise", "4,60 €"), i("Brochette de Dinde", "4,50 €"),
      i("Brochette Tzigane", "3,80 €"), i("Brochette de Poisson", "4,60 €"), i("Brochette Pilon Poulet", "5,50 €"),
      i("Brochette Grizzly", "5,20 €"), i("Brochette Merguez", "4,80 €"), i("Brochette Porc", "4,50 €"),
    ],
  },
  {
    key: "burgers-maison",
    label: "Burgers Maison",
    note: "Steak 100 % bœuf, sélection du boucher",
    items: [
      i("Le Classique", "8,60 €", "Bun artisanal, viande 140gr, salade, tomate, oignons frits, cheddar, sauce Giant"),
      i("USA", "9,60 €", "Bun artisanal, viande 140gr, salade, tomate, oignons rouges, bacon, cheddar, cornichon, sauce barbecue"),
      i("Savoyard", "9,60 €", "Bun artisanal, viande 140gr, salade, oignons caramélisés, fromage raclette, galette rösti PDT, sauce poivre"),
      i("Italien", "9,60 €", "Bun artisanal, viande 140gr, roquette, chorizo, mozzarella, tomates séchées, sauce toscane"),
      i("Picard", "9,60 €", "Bun artisanal, viande 140gr, salade, oignons caramélisés, bacon, maroilles, sauce au choix"),
      i("Berger", "9,60 €", "Bun artisanal, viande 140gr, fromage de chèvre, noix, pomme, roquette, miel, sauce au choix"),
      i("Frangins", "9,60 €", "Bun artisanal, viande 140gr, chorizo, oignons rouges, tomate, jalapeños, sauce Frangins"),
      i("Gourmet", "9,90 €", "Bun artisanal, viande 140gr, speck, mozzarella, roquette, aubergine grillée, champignons poêlés, sauce truffe"),
      i("Le Forestier", "9,90 €", "Porc effiloché aillé et poivré, galette de pommes de terre, roquette, sauce Archiduc crème de champignons"),
    ],
  },
  {
    key: "burgers",
    label: "Burgers",
    items: [
      i("Hamburger Ketchup", "3,00 €"), i("Bicky Burger", "3,70 €"), i("Bicky Cheese", "4,20 €"),
      i("Bicky Crispy", "4,40 €"), i("Bicky Rib", "5,40 €"), i("Fish Burger", "5,20 €"), i("Chicken Burger", "4,50 €"),
    ],
  },
  {
    key: "sandwichs",
    label: "Sandwichs",
    items: [i("Filet Américain", "4,20 €"), i("Thon Mayonnaise", "4,20 €"), i("Dagobert", "4,20 €")],
  },
  {
    key: "mitraillettes",
    label: "Mitraillettes",
    items: [
      i("Mitraillette", "6,00 €", "Pain, frites et sauce au choix"),
      i("Mitraillette Kebab", "11,00 €", "Avec salade et tomate"),
      i("Mitraillette Carbonnade", "13,50 €", "Carbonnade de bœuf"),
    ],
  },
  {
    key: "wraps",
    label: "Wraps",
    items: [i("Wrap Bicky", "3,80 €"), i("Wrap Mexicanos", "4,60 €"), i("Wrap Tenders", "6,00 €"), i("Wrap Pur Bœuf", "7,00 €")],
  },
  {
    key: "plats",
    label: "Plats",
    note: "Tous nos plats à 14,50 €",
    items: [
      i("Assiette Américain", "14,50 €"), i("Boulettes Sauce Tomate", "14,50 €"), i("Boulets Liégeois", "14,50 €"),
      i("Vol-au-vent", "14,50 €"), i("Trio Croquettes Fromage", "14,50 €"), i("Pêche au Thon", "14,50 €"),
      i("Assiette Frangins", "14,50 €", "Frites croustillantes, viande au choix, cheddar fondant et sauce au choix"),
    ],
  },
  {
    key: "vege",
    label: "Végé",
    items: [i("Hamburger Végé", "5,20 €"), i("Fricadelle Végé", "3,40 €"), i("Poulycroc Végé", "3,40 €")],
  },
  {
    key: "enfants",
    label: "Enfants",
    items: [i("Box Enfant", "6,90 €", "Nuggets, chix fingers, croquette fromage, fricadelle ou hamburger ketchup, sauce au choix et une boisson")],
  },
  {
    key: "boissons",
    label: "Boissons",
    items: [
      i("Coca-Cola", "2,20 €"), i("Coca-Cola Zéro", "2,20 €"), i("Coca-Cola Cherry", "2,20 €"), i("Coca-Cola Vanille", "2,20 €"),
      i("Fanta Orange", "2,20 €"), i("Fanta Citron", "2,20 €"), i("Sprite", "2,20 €"), i("Tropico", "2,20 €"),
      i("Ice Tea", "2,20 €"), i("Ice Tea Pêche", "2,20 €"), i("Fuze Tea", "2,20 €"), i("Caprisun", "2,00 €"),
      i("Eau Plate 33 cl", "2,00 €"), i("Eau Pétillante 33 cl", "2,00 €"), i("Nalu", "2,50 €"), i("Monster", "3,50 €"),
      i("Jupiler", "2,30 €"), i("Blanche Rosé", "3,20 €"), i("Trolls", "3,20 €"), i("Leffe", "3,60 €"),
      i("Desperados", "4,00 €"), i("Triple Karmeliet", "4,20 €"), i("Paix Dieu Nova", "4,50 €"), i("Paix Dieu", "5,00 €"),
      i("Eristoff Rouge", "5,00 €"), i("J&B", "5,00 €"), i("Captain Morgan", "5,00 €"), i("Bombay Sapphire", "5,00 €"),
      i("Absolut Vodka", "5,00 €"), i("Ricard", "5,00 €"), i("Aperol Spritz", "5,00 €"),
    ],
  },
  {
    key: "sauces",
    label: "Sauces",
    note: "Toutes les sauces : 1,10 €",
    items: [
      "Ail", "Algérienne", "Américaine", "Andalouse", "Barbecue", "Bicky Orange", "Brasil", "Cheddar",
      "Chicken", "Cocktail", "Dressing", "Giant", "Hannibal", "Hot", "Joppie", "Joppie Hot", "Ketchup",
      "Ketchup Curry", "Loempia", "Martino", "Mayonnaise", "Moutarde", "Pickles", "Poivre", "Provençale",
      "Riche", "Samouraï", "Snaky", "Tartare", "Toscane", "Truffe", "Frangins",
    ].map((name) => ({ name, price: "" })),
  },
];

export function MenuContent() {
  const [active, setActive] = useState("frites");
  const current = categories.find((c) => c.key === active) ?? categories[0];
  if (!current) return null;

  return (
    <div className="mx-auto max-w-6xl">
      {/* ===== Onglets catégories ===== */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            aria-pressed={active === c.key}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
              active === c.key
                ? "bg-foreground text-background shadow-sm"
                : "border border-border bg-card text-foreground/70 hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* ===== Contenu catégorie ===== */}
      <section className="mt-12">
        {current.note && (
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {current.note}
          </p>
        )}

        {current.key === "sauces" ? (
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {current.items.map((item) => (
                <span
                  key={item.name}
                  className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {current.items.map((item) => (
              <div
                key={item.name}
                className="group w-full max-w-xs rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-foreground/30 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
              >
                <div className="mb-1 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <h3 className="min-w-0 font-display text-base text-foreground">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="shrink-0 whitespace-nowrap text-base font-extrabold text-foreground">
                      {item.price}
                    </span>
                  )}
                </div>
                {item.desc && (
                  <p className="text-sm leading-snug text-muted-foreground">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
