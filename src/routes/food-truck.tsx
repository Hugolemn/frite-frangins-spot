import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, ArrowRight, Truck, Menu, X, CalendarHeart } from "lucide-react";
import { useState } from "react";

import logoAsset from "@/assets/frites-frangins-logo.jpg.asset.json";
import foodTruckHero from "@/assets/food-truck-hero.jpg";
import ffMark from "@/assets/frites-frangins-ff-mark.png";

export const Route = createFileRoute("/food-truck")({
  component: FoodTruck,
  head: () => ({
    meta: [
      { title: "Food-Truck — Frites & Frangins à Tournai" },
      { name: "description", content: "Le food-truck Frites & Frangins se déplace pour vos événements à Tournai et en Wallonie picarde : mariages, anniversaires, entreprises, fêtes locales. Frites fraîches et burgers au bœuf pur sur place." },
      { property: "og:title", content: "Food-Truck — Frites & Frangins à Tournai" },
      { property: "og:description", content: "Notre food-truck s'invite à vos événements : la vraie frite belge, servie chez vous." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/food-truck" }],
  }),
});

const occasions = [
  { title: "Mariages", desc: "Un moment convivial et gourmand pour régaler tous vos invités, du cocktail jusqu'au bout de la nuit." },
  { title: "Anniversaires", desc: "Petits ou grands comités, on installe le camion et tout le monde se régale." },
  { title: "Événements d'entreprise", desc: "Fêtes du personnel, journées team building ou séminaires : une pause frites qui fait toujours plaisir." },
  { title: "Fêtes de village & kermesses", desc: "L'ambiance friterie au cœur de votre localité, pour petits et grands." },
  { title: "Festivals & marchés", desc: "Un service rapide et efficace, même pour les grandes foules affamées." },
  { title: "Sport & associations", desc: "Tournois, buvettes et manifestations de club : on vient avec le sourire et la friture chaude." },
];

const prestations = [
  { title: "Frites fraîches maison", desc: "Nos frites coupées et cuites sur place, comme à la friterie : croustillantes et dorées." },
  { title: "Burgers au bœuf pur", desc: "Nos burgers faits maison, préparés devant vos invités." },
  { title: "Snacks & frangins", desc: "La carte des classiques de la friterie, adaptée au service en extérieur." },
  { title: "Formules sur mesure", desc: "Menu adapté à votre événement et à votre budget : on le construit ensemble." },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Frites+%26+Frangins+Chauss%C3%A9e+de+Douai+850+Tournai";

function FoodTruck() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== Navbar ===== */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Frites & Frangins"
              className="h-10 w-10 rounded-lg object-cover"
              width={80}
              height={80}
            />
            <span className="font-display text-lg text-foreground">Frites & Frangins</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 font-display text-sm text-foreground/70 md:flex">
            <Link to="/" className="transition-colors hover:text-foreground">
              Accueil
            </Link>
            <Link to="/menu" className="transition-colors hover:text-foreground">
              La carte
            </Link>
            <span className="text-foreground font-semibold underline underline-offset-8">Food-Truck</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:069212655"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background transition-transform active:scale-95"
            >
              <Phone className="h-3.5 w-3.5" />
              Commander
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-full p-2 text-foreground md:hidden"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border px-4 pb-4 pt-2 md:hidden">
            <div className="flex flex-col gap-2 font-display text-sm text-foreground/80">
              <Link to="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 transition-colors hover:bg-muted hover:text-foreground">
                Accueil
              </Link>
              <Link to="/menu" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 transition-colors hover:bg-muted hover:text-foreground">
                La carte
              </Link>
              <span className="rounded-lg bg-muted px-3 py-2 font-semibold text-foreground">Food-Truck</span>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* ===== Hero ===== */}
        <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={foodTruckHero} alt="Le food-truck Frites & Frangins installé pour un événement" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-background/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground/70">
              <Truck className="h-3.5 w-3.5" />
              Food-Truck Frites & Frangins
            </span>
            <h1 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Notre food-truck s'invite à vos événements
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/70">
              Mariages, anniversaires, fêtes de village ou événements d'entreprise : on amène la vraie frite belge et nos burgers faits maison, directement chez vous.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#devis"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 font-display text-sm text-background transition-transform active:scale-95"
              >
                <CalendarHeart className="h-4 w-4" />
                Demander un devis
              </a>
              <a
                href="tel:069212655"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-2.5 font-display text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Phone className="h-4 w-4" />
                069 21 26 55
              </a>
            </div>
          </div>
        </section>

        {/* ===== Occasions ===== */}
        <section className="border-t border-border bg-muted/40 px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Pour quelles occasions ?</p>
              <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
                Pour tous vos événements
              </h2>
              <p className="mt-4 text-muted-foreground">
                De 30 à 500 personnes, on adapte le camion, la carte et le rythme du service à votre journée.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {occasions.map((o) => (
                <div key={o.title} className="flex h-full flex-col rounded-3xl bg-card p-6 ring-1 ring-border transition-colors hover:ring-foreground/40">
                  <h3 className="font-display text-lg text-foreground">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Prestations ===== */}
        <section className="bg-background px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">À bord du camion</p>
              <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
                Ce qu'on sert
              </h2>
              <p className="mt-4 text-muted-foreground">
                La même qualité qu'à la friterie, servie en plein air.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {prestations.map((p) => (
                <div key={p.title} className="flex h-full flex-col rounded-3xl bg-card p-6 ring-1 ring-border transition-colors hover:ring-foreground/40">
                  <h3 className="font-display text-lg text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Devis / contact ===== */}
        <section id="devis" className="relative isolate scroll-mt-20 border-t border-border bg-muted/40 px-4 py-16 sm:px-6 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-no-repeat opacity-[0.10]"
            style={{ backgroundImage: `url(${ffMark})`, backgroundSize: "min(50%, 460px)", backgroundPosition: "50% 50%" }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Demande de devis</p>
            <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
              Parlons de votre événement
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Appelez-nous ou passez à la friterie : on regarde ensemble la date, le nombre de personnes et la formule qui vous convient.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <a
                href="tel:069212655"
                className="group flex h-full flex-col gap-4 rounded-3xl bg-card p-6 text-left ring-1 ring-border transition-colors hover:ring-foreground/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">Par téléphone</h3>
                  <p className="mt-1 text-2xl font-extrabold text-foreground">069 21 26 55</p>
                  <p className="mt-1 text-sm text-muted-foreground">Pendant les heures d'ouverture de la friterie</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-foreground group-hover:underline">
                  Appeler <ArrowRight className="h-4 w-4" />
                </span>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-3xl bg-card p-6 text-left ring-1 ring-border transition-colors hover:ring-foreground/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">En direct à la friterie</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Chaussée de Douai 850
                    <br />
                    7504 Tournai
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-foreground group-hover:underline">
                  Itinéraire <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="border-t border-border bg-background px-4 pb-16 pt-16 text-center text-muted-foreground sm:px-6">
        <div className="mx-auto max-w-6xl">
          <img
            src={logoAsset.url}
            alt="Logo Frites & Frangins"
            className="mx-auto h-16 w-16 rounded-2xl object-cover"
            width={128}
            height={128}
            loading="lazy"
          />
          <p className="mt-4 font-display text-xl text-foreground">Frites & Frangins</p>
          <p className="mt-2 text-sm">Chaussée de Douai 850, 7504 Tournai</p>
          <p className="mt-1 text-sm">Tél. 069 21 26 55</p>
          <p className="mt-6 text-xs uppercase tracking-widest opacity-50">
            © {new Date().getFullYear()} Frites & Frangins — Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}
