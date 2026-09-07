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
            <span className="font-display text-lg font-extrabold uppercase tracking-wide text-mustard">
              Frites & Frangins
            </span>
          </a>
          <div className="hidden items-center gap-6 font-display text-sm font-bold uppercase tracking-wider text-ink-foreground/80 md:flex">
            <a href="#incontournables" className="transition-colors hover:text-mustard">Incontournables</a>
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
      <header className="overflow-hidden bg-mustard">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-mustard">
              <Star className="h-3.5 w-3.5 fill-current" />
              4,3/5 — 130 avis Google
            </span>
            <h1 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Frites & Frangins
            </h1>
            <p className="mt-4 max-w-md text-lg font-semibold text-ink/80">
              La vraie frite belge, entre frangins. Cornets croustillants, burgers smashés et sauces maison, en plein cœur de Tournai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-mustard transition-transform hover:scale-105 active:scale-95"
              >
                Voir le menu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-mustard"
              >
                <MapPin className="h-4 w-4" />
                Trouver la friterie
              </a>
            </div>
          </div>

          <div className="relative order-1 flex justify-center lg:order-2">
            <img
              src={heroFood}
              alt="Cornet de frites belges à la mayonnaise et burger au cheddar fondant"
              className="w-full max-w-md drop-shadow-2xl lg:max-w-lg"
              width={1400}
              height={1000}
              fetchPriority="high"
            />
            <div className="absolute bottom-2 right-2 flex h-24 w-24 -rotate-6 items-center justify-center rounded-full bg-ink text-center shadow-xl sm:bottom-6 sm:right-6 sm:h-28 sm:w-28">
              <p className="font-display text-mustard">
                <span className="block text-[10px] font-bold uppercase leading-tight">Cornets</span>
                <span className="block text-xl font-extrabold leading-tight sm:text-2xl">dès 3,50€</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Nos incontournables ===== */}
      <section id="incontournables" className="scroll-mt-20 bg-background px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sélectionnés pour vous</p>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-foreground sm:text-5xl">
              Nos <span className="italic text-mustard">incontournables</span>
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {incontournables.map((item) => (
              <article
                key={item.name}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-52 items-center justify-center bg-muted p-4">
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
                <div className="flex flex-1 items-center justify-between gap-3 p-5">
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

      {/* ===== Accès rapide ===== */}
      <section className="bg-ink px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl font-extrabold uppercase text-mustard sm:text-4xl">
            Vous cherchez <span className="italic text-ink-foreground">quoi</span> ?
          </h2>
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            <Link
              to="/menu"
              className="group flex h-full flex-col rounded-3xl bg-ink-foreground/5 p-6 ring-1 ring-mustard/20 transition-colors hover:bg-ink-foreground/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mustard/15 text-mustard">
                <Utensils className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase text-mustard">Notre menu</h3>
              <p className="mt-2 text-sm text-ink-foreground/70">
                Frites fraîches, burgers, snacks et sauces maison — toute la carte, avec les prix.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-mustard group-hover:underline">
                Voir le menu <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <a
              href="tel:069212655"
              className="group flex h-full flex-col rounded-3xl bg-ink-foreground/5 p-6 ring-1 ring-mustard/20 transition-colors hover:bg-ink-foreground/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mustard/15 text-mustard">
                <Phone className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase text-mustard">Commander</h3>
              <p className="mt-2 text-sm text-ink-foreground/70">
                Sur place, à emporter ou en livraison. Un coup de fil et c'est prêt en quelques minutes.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-mustard group-hover:underline">
                069 21 26 55 <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#infos"
              className="group flex h-full flex-col rounded-3xl bg-ink-foreground/5 p-6 ring-1 ring-mustard/20 transition-colors hover:bg-ink-foreground/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mustard/15 text-mustard">
                <MapPin className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase text-mustard">Nous trouver</h3>
              <p className="mt-2 text-sm text-ink-foreground/70">
                Chaussée de Douai 850, 7504 Tournai. Horaires, accès et itinéraire.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-mustard group-hover:underline">
                Voir les infos <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== Infos pratiques ===== */}
      <section id="infos" className="scroll-mt-20 bg-background px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tout ce qu'il faut savoir</p>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-foreground sm:text-5xl">
              Infos <span className="italic text-mustard">pratiques</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Adresse */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-colors hover:ring-mustard"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Adresse</h3>
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
              className="group flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-colors hover:ring-mustard"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Téléphone</h3>
                <p className="mt-1 text-2xl font-extrabold text-foreground">069 21 26 55</p>
                <p className="mt-1 text-sm text-muted-foreground">Appeler pour commander ou réserver</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-mustard group-hover:underline">
                Appeler <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            {/* Services */}
            <div className="flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard text-ink">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Service</h3>
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
                <h3 className="font-display font-bold text-ink">Horaires d'ouverture</h3>
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
