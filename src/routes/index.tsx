import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Quote, ShoppingBag, Truck, ArrowRight } from "lucide-react";

import logoAsset from "@/assets/frites-frangins-logo.jpg.asset.json";
import ffAsset from "@/assets/frites-frangins-ff.png.asset.json";
import thaiAsset from "@/assets/suggestion-moment-thai.png.asset.json";
import { MenuContent } from "@/components/menu-content";

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

const reviews: { name: string; text: string; rating: number }[] = [
  { name: "Julien V.", text: "Des frites parfaitement croustillantes et un accueil toujours souriant. Le burger Frangins vaut vraiment le détour !", rating: 5 },
  { name: "Sarah L.", text: "Les burgers maison sont énormes et savoureux, le pain est excellent. Ma friterie préférée sur Tournai.", rating: 5 },
  { name: "Nicolas B.", text: "Service rapide, portions généreuses et un vrai choix de sauces. On y retourne chaque vendredi en famille.", rating: 4 },
  { name: "Élodie M.", text: "Très bon rapport qualité-prix, tout est frais et bien préparé. Mention spéciale pour la mitraillette !", rating: 5 },
];


const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Frites+%26+Frangins+Chauss%C3%A9e+de+Douai+850+Tournai";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== Navbar ===== */}
      <nav className="sticky top-0 z-50 border-b border-mustard/20 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-3">
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
          </a>
          <div className="hidden items-center gap-6 font-display text-sm text-ink-foreground/80 md:flex">
            <Link to="/menu" className="transition-colors hover:text-mustard">Menu</Link>
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

      {/* ===== Hero ===== */}
      <header className="relative isolate overflow-hidden bg-mustard">
        {/* F&F en filigrane sur tout le fond */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-contain bg-center bg-no-repeat opacity-[0.06]"
          style={{ backgroundImage: `url(${ffAsset.url})` }}
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-2 lg:gap-12 lg:py-22">
          {/* Visuel suggestion */}
          <div className="relative flex aspect-square max-h-[420px] items-center justify-center justify-self-center rounded-[2rem] bg-ink/5 p-8 ring-1 ring-ink/10 lg:max-h-[520px] lg:justify-self-end">
              <img
                src={thaiAsset.url}
                alt="Le Thaï : bun brioché au poulet croustillant, nouilles teriyaki et sauce sriracha"
                className="h-full w-auto object-contain drop-shadow-2xl"
                width={1400}
                height={1000}
                fetchPriority="high"
              />
          </div>

          {/* Texte suggestion */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-mustard">
              Suggestion du moment
            </span>

              <h1 className="mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
                Le Thaï
              </h1>

              <ul className="mx-auto mt-4 max-w-sm space-y-2 text-base leading-relaxed text-ink/80 lg:mx-0">
                <li>Un bun artisanal brioché</li>
                <li>150 g de poulet croustillant</li>
                <li>Mayonnaise sriracha très légèrement épicée</li>
                <li>Nouilles sauce teriyaki et soja sucré, petits légumes</li>
                <li>Chips chinois à la crevette pour le côté croustillant</li>
              </ul>

            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <span className="rounded-full bg-ink px-6 py-2.5 font-display text-xl text-mustard">
                11,50 €
              </span>
              <a
                href="tel:069212655"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-2.5 font-display text-sm text-ink transition-colors hover:bg-ink hover:text-mustard"
              >
                <Phone className="h-4 w-4" />
                Commander
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Menu ===== */}
      <section id="menu" className="bg-ink px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto mb-10 max-w-6xl text-center">
          <h2 className="font-display text-4xl text-mustard sm:text-5xl">
            Notre <span className="italic text-ink-foreground">menu</span>
          </h2>
        </div>
        <MenuContent />
      </section>

      {/* ===== Avis clients ===== */}
      <section id="avis" className="scroll-mt-20 bg-mustard px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-ink/60">Témoignages</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
              Ce que disent nos <span className="italic text-ink/80">clients</span>
            </h2>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-ink/15 bg-ink/5 px-6 py-3">
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-ink text-ink" />
                ))}
                <Star className="h-5 w-5 fill-ink/40 text-ink" />
              </div>
              <span className="font-display text-2xl text-ink">4,3</span>
              <span className="text-sm text-ink/60">/ 5 · 130 avis Google</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="relative rounded-3xl border border-ink/15 bg-ink/5 p-8 transition-all hover:border-ink/40"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-ink/20" />
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${j < r.rating ? "fill-ink text-ink" : "text-ink/30"}`}
                    />
                  ))}
                </div>
                <p className="italic leading-relaxed text-ink/85">"{r.text}"</p>
                <span className="mt-4 block text-sm font-bold text-ink">{r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Infos pratiques ===== */}
      <section id="infos" className="scroll-mt-20 bg-ink px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-ink-foreground/60">Tout ce qu'il faut savoir</p>
            <h2 className="mt-2 font-display text-4xl text-mustard sm:text-5xl">
              Infos <span className="italic text-ink-foreground">pratiques</span>
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            {/* Adresse */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-4 rounded-3xl bg-ink-foreground/[0.03] p-6 ring-1 ring-mustard/15 transition-colors hover:ring-mustard"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg text-ink-foreground">Adresse</h3>
                <p className="mt-1 text-sm text-ink-foreground/60">
                  Chaussée de Douai 850
                  <br />
                  7504 Tournai
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-mustard group-hover:underline">
                Itinéraire <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            {/* Téléphone */}
            <a
              href="tel:069212655"
              className="group flex h-full flex-col gap-4 rounded-3xl bg-ink-foreground/[0.03] p-6 ring-1 ring-mustard/15 transition-colors hover:ring-mustard"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg text-ink-foreground">Téléphone</h3>
                <p className="mt-1 text-2xl font-extrabold text-ink-foreground">069 21 26 55</p>
                <p className="mt-1 text-sm text-ink-foreground/60">Appeler pour commander ou réserver</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-mustard group-hover:underline">
                Appeler <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          {/* Horaires + Carte */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-ink-foreground/[0.03] ring-1 ring-mustard/15">
              <div className="flex items-center gap-3 bg-mustard px-6 py-4">
                <Clock className="h-5 w-5 text-ink" />
                <h3 className="font-display text-ink">Horaires d'ouverture</h3>
              </div>
              <div className="divide-y divide-mustard/15 px-6 py-2">
                {schedule.map((item) => (
                  <div key={item.day} className="flex items-center justify-between py-3">
                    <span className={item.closed ? "text-ink-foreground/60 line-through" : "font-medium text-ink-foreground"}>
                      {item.day}
                    </span>
                    <span className={item.closed ? "italic text-ink-foreground/60" : "text-right text-ink-foreground/60"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl ring-1 ring-mustard/15">
              <iframe
                title="Frites & Frangins sur Google Maps — Chaussée de Douai 850, 7504 Tournai"
                src="https://www.google.com/maps?q=Frites%20%26%20Frangins%2C%20Chauss%C3%A9e%20de%20Douai%20850%2C%207504%20Tournai&output=embed"
                className="h-80 w-full border-0 lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-ink px-4 pb-16 pt-16 text-center text-ink-foreground/60 sm:px-6">
        <div className="mx-auto max-w-6xl border-t border-mustard/20 pt-12">
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
        </div>
      </footer>
    </div>
  );
}
