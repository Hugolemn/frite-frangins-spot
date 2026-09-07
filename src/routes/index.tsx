import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Euro, ShoppingBag, Truck } from "lucide-react";

import logoAsset from "@/assets/frites-frangins-logo.jpg.asset.json";

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
  { day: "Mercredi", hours: "11:30 – 13:30, 17:30 – 21:30", closed: false },
  { day: "Jeudi", hours: "11:30 – 13:30, 17:30 – 21:30", closed: false },
  { day: "Vendredi", hours: "11:30 – 13:30, 17:30 – 22:00", closed: false, highlight: true },
  { day: "Samedi", hours: "11:30 – 13:30, 17:30 – 22:00", closed: false, highlight: true },
  { day: "Dimanche", hours: "17:30 – 21:30", closed: false },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top status bar */}
      <div className="bg-ink text-mustard px-4 py-2.5">
        <div className="mx-auto max-w-3xl flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest">
          <span>Tournai, Belgique</span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span>Ouvert aujourd’hui jusqu’à 21:30</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden bg-mustard px-6 pt-12 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 w-40 sm:w-48">
            <img
              src={logoAsset.url}
              alt="Logo Frites & Frangins"
              className="h-auto w-full rounded-3xl shadow-2xl shadow-ink/10"
              width={400}
              height={400}
            />
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-6xl">
            Frites & Frangins
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg font-medium text-ink/80">
            La vraie frite belge, le goût de la tradition. À Tournai, depuis toujours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-bold text-mustard">
              <Star className="h-4 w-4 fill-current" />
              4,3 / 5
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/10 px-4 py-2 text-sm font-semibold text-ink">
              130 avis Google
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/10 px-4 py-2 text-sm font-semibold text-ink">
              <Euro className="h-4 w-4" />
              10–20 € par pers.
            </span>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-sm ring-1 ring-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold">À emporter</h2>
                <p className="text-sm text-muted-foreground">Votre cornet prêt en quelques minutes</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-sm ring-1 ring-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold">Livraison</h2>
                <p className="text-sm text-muted-foreground">Livraison disponible aux alentours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Address & phone cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Frites+%26+Frangins+Chauss%C3%A9e+de+Douai+850+Tournai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border transition-colors hover:bg-accent/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mustard text-ink">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold">Adresse</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Chaussée de Douai 850
                  <br />
                  7504 Tournai
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-mustard-foreground group-hover:underline">
                  Itinéraire
                </span>
              </div>
            </a>

            <a
              href="tel:069212655"
              className="group flex items-start gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border transition-colors hover:bg-accent/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mustard text-ink">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold">Téléphone</h3>
                <p className="mt-1 text-lg font-bold text-foreground">069 21 26 55</p>
                <p className="mt-1 text-sm text-muted-foreground">Appeler pour commander ou réserver</p>
              </div>
            </a>
          </div>

          {/* Hours */}
          <div className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border">
            <div className="flex items-center gap-3 bg-ink px-6 py-4">
              <Clock className="h-5 w-5 text-mustard" />
              <h3 className="font-display font-bold text-mustard">Horaires d’ouverture</h3>
            </div>
            <div className="divide-y divide-border px-6 py-2">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-3 ${
                    item.highlight ? "font-semibold text-foreground" : "text-foreground"
                  }`}
                >
                  <span className={item.closed ? "text-muted-foreground line-through" : ""}>{item.day}</span>
                  <span className={item.closed ? "italic text-muted-foreground" : "text-right text-muted-foreground"}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews teaser */}
          <div className="rounded-2xl bg-mustard px-6 py-8 text-center text-ink">
            <p className="font-display text-2xl font-bold">4,3 sur 5</p>
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

      {/* Footer */}
      <footer className="bg-ink px-6 py-12 text-center text-ink-foreground/60">
        <p className="font-display text-xl font-bold text-mustard">Frites & Frangins</p>
        <p className="mt-2 text-sm">Chaussée de Douai 850, 7504 Tournai</p>
        <p className="mt-1 text-sm">Tél. 069 21 26 55</p>
        <p className="mt-6 text-xs uppercase tracking-widest opacity-50">
          © {new Date().getFullYear()} Frites & Frangins — Tous droits réservés
        </p>
      </footer>

      {/* Sticky action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background via-background/95 to-transparent p-4">
        <div className="mx-auto flex max-w-3xl gap-3">
          <a
            href="tel:069212655"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ink py-4 text-sm font-bold text-mustard shadow-lg transition-transform active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Appeler
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Frites+%26+Frangins+Chauss%C3%A9e+de+Douai+850+Tournai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-mustard py-4 text-sm font-bold text-ink shadow-lg transition-transform active:scale-95"
          >
            <MapPin className="h-4 w-4" />
            Itinéraire
          </a>
        </div>
      </div>

      {/* Spacer for sticky bar */}
      <div className="h-24" />
    </div>
  );
}
