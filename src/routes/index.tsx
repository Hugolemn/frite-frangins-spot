import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Star, Quote, ArrowRight, Menu, X, ShoppingBag, ExternalLink } from "lucide-react";

import logoAsset from "@/assets/frites-frangins-logo.jpg.asset.json";
import ffMark from "@/assets/frites-frangins-ff-mark.png";
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
  { name: "Lenny V.", text: "Une friterie d'exception ! Le burger au bœuf pur est un vrai régal ; on sent la qualité dès le premier coup d'œil. Un service client excellent et un frigo à boissons qui donne envie d'y passer tout le week-end !", rating: 5 },
  { name: "Murielle B.", text: "Nous y sommes allés deux fois : une fois pour emporter et une fois pour une livraison, et nous sommes ravis : la cuisine est excellente ! Nous le recommandons vivement.", rating: 5 },
  { name: "Jacky B.", text: "Un endroit génial, une superbe découverte !! La cuisine était excellente et le service rapide et sympathique.", rating: 5 },
  { name: "Nicolas V.", text: "D'excellents burgers au bœuf faits maison. Je vous les recommande vivement !", rating: 5 },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Frites+%26+Frangins+Chauss%C3%A9e+de+Douai+850+Tournai";

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Suggestion du moment", href: "#suggestion" },
    { label: "Menu", href: "#menu" },
    { label: "Témoignages", href: "#avis" },
    { label: "Infos pratiques", href: "#infos" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== Navbar ===== */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Frites & Frangins"
              className="h-10 w-10 rounded-lg object-cover"
              width={80}
              height={80}
            />
            <span className="font-display text-lg text-foreground">
              Frites & Frangins
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 font-display text-sm text-foreground/70 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-foreground/25 px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background sm:inline-flex"
            >
              <MapPin className="h-3.5 w-3.5" />
              Nous trouver
            </a>
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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ===== Hero ===== */}
      <header id="suggestion" className="relative isolate overflow-hidden bg-background scroll-mt-20">
        {/* F&F en filigrane sur tout le fond */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-center bg-no-repeat opacity-[0.08]"
          style={{ backgroundImage: `url(${ffMark})`, backgroundSize: "min(58%, 460px)" }}
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-2 lg:gap-12 lg:py-22">
          {/* Visuel suggestion */}
          <div className="relative flex aspect-square max-h-[420px] items-center justify-center justify-self-center lg:max-h-[520px] lg:justify-self-end">
              <img
                src={thaiAsset.url}
                alt="Le Thaï : bun brioché au poulet croustillant, nouilles teriyaki et sauce sriracha"
                className="h-full w-auto object-contain drop-shadow-xl"
                width={1400}
                height={1000}
                fetchPriority="high"
              />
          </div>

          {/* Texte suggestion */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground/70">
              Suggestion du moment
            </span>

              <h1 className="mt-5 font-display text-4xl leading-[0.95] text-foreground sm:text-5xl lg:text-6xl">
                Le Thaï
              </h1>

              <ul className="mx-auto mt-4 max-w-sm space-y-2 text-base leading-relaxed text-foreground/70 lg:mx-0">
                <li>Un bun artisanal brioché</li>
                <li>150 g de poulet croustillant</li>
                <li>Mayonnaise sriracha très légèrement épicée</li>
                <li>Nouilles sauce teriyaki et soja sucré, petits légumes</li>
                <li>Chips chinois à la crevette pour le côté croustillant</li>
              </ul>

            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <span className="rounded-full bg-foreground px-6 py-2.5 font-display text-xl text-background">
                9,50 €
              </span>
              <a
                href="tel:069212655"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-2.5 font-display text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Phone className="h-4 w-4" />
                Commander
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Menu ===== */}
      <section id="menu" className="scroll-mt-20 border-t border-border bg-muted/40 px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto mb-10 max-w-6xl text-center">
          <h2 className="font-display text-4xl text-foreground sm:text-5xl">
            Notre <span className="italic text-foreground/60">menu</span>
          </h2>
        </div>
        <MenuContent />
      </section>

      {/* ===== Commander en ligne ===== */}
      <section className="border-t border-border bg-muted/40 px-4 pb-16 sm:px-6 lg:pb-20">
        <div className="mx-auto max-w-3xl">
          <a
            href="https://app.fritzy.be/restaurant/91c0bf4f-a5ed-4fd6-ad34-aa48f28e2e84?source=website-restaurants"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 text-center transition-all hover:border-foreground/30 sm:flex-row sm:text-left"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-foreground text-background">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl text-foreground">Commander en ligne</h3>
              <p className="mt-1 text-muted-foreground">
                Vous préférez commander depuis votre canapé ? Retrouvez-nous sur Fritzy pour une commande simple et rapide.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-bold text-background transition-transform group-hover:scale-105">
              Commander <ExternalLink className="h-4 w-4" />
            </span>
          </a>
        </div>
      </section>

      {/* ===== Avis clients ===== */}
      <section id="avis" className="relative isolate scroll-mt-20 border-t border-border bg-muted/40 px-4 py-16 sm:px-6 lg:py-20">
        {/* F&F en filigrane sur tout le fond */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-center bg-no-repeat opacity-[0.08]"
          style={{ backgroundImage: `url(${ffMark})`, backgroundSize: "min(52%, 400px)" }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-ink/80">Témoignages</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
              Ce que disent nos <span className="italic text-ink/80">clients</span>
            </h2>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3">
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
                className="relative rounded-3xl border border-border bg-card p-8 transition-all hover:border-foreground/25"
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
      <section id="infos" className="scroll-mt-20 bg-background px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tout ce qu'il faut savoir</p>
            <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
              Infos <span className="italic text-foreground/60">pratiques</span>
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            {/* Adresse */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-4 rounded-3xl bg-card p-6 ring-1 ring-border transition-colors hover:ring-foreground/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">Adresse</h3>
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

            {/* Téléphone */}
            <a
              href="tel:069212655"
              className="group flex h-full flex-col gap-4 rounded-3xl bg-card p-6 ring-1 ring-border transition-colors hover:ring-foreground/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">Téléphone</h3>
                <p className="mt-1 text-2xl font-extrabold text-foreground">069 21 26 55</p>
                <p className="mt-1 text-sm text-muted-foreground">Appeler pour commander ou réserver</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-foreground group-hover:underline">
                Appeler <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          {/* Horaires + Carte */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-card ring-1 ring-border">
              <div className="flex items-center gap-3 border-b border-border bg-muted px-6 py-4">
                <Clock className="h-5 w-5 text-foreground" />
                <h3 className="font-display text-foreground">Horaires d'ouverture</h3>
              </div>
              <div className="divide-y divide-border px-6 py-2">
                {schedule.map((item) => (
                  <div key={item.day} className="flex items-center justify-between py-3">
                    <span className={item.closed ? "italic text-muted-foreground" : "font-medium text-foreground"}>
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

        </div>
      </section>

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
