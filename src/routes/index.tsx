import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, ShoppingBag, Truck, ArrowRight, Utensils } from "lucide-react";

import logoAsset from "@/assets/frites-frangins-logo.jpg.asset.json";
import ffAsset from "@/assets/frites-frangins-ff.png.asset.json";
import thaiAsset from "@/assets/suggestion-moment-thai.png.asset.json";

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

      {/* ===== Appel à l'action ===== */}
      <section className="bg-ink px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl text-mustard sm:text-4xl">
              Une petite <span className="italic text-ink-foreground">faim</span> ?
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink-foreground/70 sm:text-base">
              Toute la carte est en ligne — et un coup de fil suffit pour que ce soit prêt à votre arrivée.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-mustard px-8 py-3.5 font-display text-lg text-ink shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Utensils className="h-5 w-5" /> Voir la carte
            </Link>
            <a
              href="tel:069212655"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-mustard px-8 py-3.5 font-display text-lg text-mustard transition-colors hover:bg-mustard hover:text-ink"
            >
              <Phone className="h-5 w-5" /> 069 21 26 55
            </a>
          </div>
        </div>
      </section>

      {/* ===== Infos pratiques ===== */}
      <section id="infos" className="scroll-mt-20 bg-background px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tout ce qu'il faut savoir</p>
            <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
              Infos <span className="italic text-mustard">pratiques</span>
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {/* Adresse */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-colors hover:ring-mustard"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg">Adresse</h3>
                <p className="mt-1 text-sm text-muted-foreground">
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
              className="group flex h-full flex-col gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-colors hover:ring-mustard"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg">Téléphone</h3>
                <p className="mt-1 text-2xl font-extrabold text-foreground">069 21 26 55</p>
                <p className="mt-1 text-sm text-muted-foreground">Appeler pour commander ou réserver</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-mustard group-hover:underline">
                Appeler <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            {/* Services */}
            <div className="flex h-full flex-col gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg">Service</h3>
                <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4 text-mustard" />
                    À emporter
                  </p>
                  <p className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-mustard" />
                    Livraison aux alentours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires + Carte */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border">
              <div className="flex items-center gap-3 bg-mustard px-6 py-4">
                <Clock className="h-5 w-5 text-ink" />
                <h3 className="font-display text-ink">Horaires d'ouverture</h3>
              </div>
              <div className="divide-y divide-border px-6 py-2">
                {schedule.map((item) => (
                  <div key={item.day} className="flex items-center justify-between py-3">
                    <span className={item.closed ? "text-muted-foreground line-through" : "font-medium text-foreground"}>
                      {item.day}
                    </span>
                    <span className={item.closed ? "italic text-muted-foreground" : "text-right text-muted-foreground"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl ring-1 ring-border">
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

          {/* Avis */}
          <div className="mt-6 rounded-3xl bg-mustard px-6 py-10 text-center text-ink">
            <p className="font-display text-3xl">4,3 sur 5</p>
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
      <footer className="bg-ink px-4 pb-28 pt-16 text-center text-ink-foreground/60 sm:px-6">
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

      {/* ===== Barre d'action sticky (mobile) ===== */}
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

      <div className="h-20 bg-ink" />
    </div>
  );
}
