import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, ArrowLeft, ShoppingBag, Truck } from "lucide-react";

import { MenuContent } from "@/components/menu-content";
import logoAsset from "@/assets/frites-frangins-logo.jpg";
import { FRITZY_URL } from "@/lib/links";

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

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Frites+%26+Frangins+Chauss%C3%A9e+de+Douai+850+Tournai";

function Menu() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== Navbar ===== */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset}
              alt="Logo Frites & Frangins"
              className="h-10 w-10 shrink-0 rounded-lg object-cover"
              width={80}
              height={80}
            />
            <span className="truncate font-display text-lg text-foreground">
              Frites & Frangins
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/25 px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Accueil
            </Link>
            <Link
              to="/food-truck"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background transition-transform hover:scale-105 active:scale-95"
            >
              <Truck className="h-3.5 w-3.5" />
              Food-Truck
            </Link>
            <a
              href={FRITZY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background transition-transform active:scale-95"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Commander
            </a>
          </div>
        </div>
      </nav>

      {/* ===== En-tête ===== */}
      <header className="border-b border-border px-4 pb-6 pt-12 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sur place · À emporter · Livraison</p>
        <h1 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">
          La carte
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          Choisissez une catégorie pour découvrir nos produits et leurs prix.
        </p>
      </header>

      <main className="px-4 py-12 sm:px-6">
        <MenuContent />
      </main>

      {/* ===== Footer ===== */}
      <footer className="border-t border-border px-6 pb-28 pt-12 text-center text-muted-foreground">
        <img
          src={logoAsset}
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
        <Link
          to="/mentions-legales"
          className="mt-3 inline-block text-xs opacity-50 transition-opacity hover:opacity-100 hover:underline"
        >
          Mentions légales
        </Link>
      </footer>

      {/* ===== Barre d'action sticky ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background via-background/95 to-transparent p-4">
        <div className="mx-auto flex max-w-3xl gap-3">
          <a
            href="tel:069212655"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-foreground py-4 font-display text-sm text-background shadow-lg transition-transform active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Appeler
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-card py-4 font-display text-sm text-foreground ring-1 ring-border backdrop-blur transition-transform active:scale-95"
          >
            <MapPin className="h-4 w-4" />
            Itinéraire
          </a>
        </div>
      </div>

      <div className="h-24 bg-background" />
    </div>
  );
}
