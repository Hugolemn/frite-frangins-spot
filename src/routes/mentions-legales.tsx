import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

import logoAsset from "@/assets/frites-frangins-logo.jpg.asset.json";

export const Route = createFileRoute("/mentions-legales")({
  component: MentionsLegales,
  head: () => ({
    meta: [
      { title: "Mentions légales — Frites & Frangins, Tournai" },
      {
        name: "description",
        content:
          "Mentions légales du site Frites & Frangins : éditeur, contact, hébergement et données personnelles.",
      },
      { property: "og:title", content: "Mentions légales — Frites & Frangins" },
      {
        property: "og:description",
        content: "Éditeur, contact, hébergement et données personnelles du site Frites & Frangins.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mentions-legales" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
});

const SECTION = "mt-10 first:mt-0";
const H2 = "font-display text-2xl text-foreground";
const P = "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base";

function ToComplete({ label }: { label: string }) {
  return (
    <span className="whitespace-nowrap rounded-md bg-muted px-1.5 py-0.5 text-xs font-bold uppercase tracking-wide text-foreground/60">
      {label}
    </span>
  );
}

function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== Navbar ===== */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Frites & Frangins"
              className="h-10 w-10 shrink-0 rounded-lg object-cover"
              width={80}
              height={80}
            />
            <span className="truncate font-display text-lg text-foreground">
              Frites &amp; Frangins
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/25 px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour à l'accueil
          </Link>
        </div>
      </nav>

      {/* ===== Contenu ===== */}
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <header className="text-center">
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">Mentions légales</h1>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Informations relatives au site fritesetfrangins (frites-frangins-spot.lovable.app) et à
            l'activité Frites &amp; Frangins.
          </p>
        </header>

        <div className="mt-12 space-y-10">
          <section className={SECTION}>
            <h2 className={H2}>1. Éditeur du site</h2>
            <div className={P}>
              <p>
                <strong className="text-foreground">Frites et Frangins SRL</strong>
                <br />
                Chaussée de Douai 850 — 7504 Tournai, Belgique
              </p>
              <p className="mt-3">
                Forme juridique : société à responsabilité limitée (SRL)
                <br />
                Gérants : Stéphane Deprekel &amp; Thomas Planchon
                <br />
                Numéro de TVA : BE 1034415621
                <br />
                Numéro d'entreprise (BCE) : <ToComplete label="à compléter" />{" "}
                <span className="whitespace-nowrap text-muted-foreground/70">(BE 0xxx.xxx.xxx)</span>

              </p>
            </div>
          </section>


          <section className={SECTION}>
            <h2 className={H2}>2. Responsable de la publication</h2>
            <div className={P}>
              <p>
                Responsables : Stéphane Deprekel et Thomas Planchon, en leur qualité de gérants de
                Frites et Frangins SRL
                <br />

                Contact direct :{" "}
                <a href="tel:069212655" className="font-medium text-foreground underline underline-offset-2">
                  069 21 26 55
                </a>{" "}
                —{" "}
                <a
                  href="mailto:fritesetfrangins@gmail.com"
                  className="font-medium text-foreground underline underline-offset-2 [overflow-wrap:anywhere]"
                >
                  fritesetfrangins@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>3. Contact</h2>
            <ul className={`${P} space-y-2`}>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-foreground/70" />
                <a href="tel:069212655" className="text-foreground underline underline-offset-2">
                  069 21 26 55
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-foreground/70" />
                <a
                  href="mailto:fritesetfrangins@gmail.com"
                  className="text-foreground underline underline-offset-2 [overflow-wrap:anywhere]"
                >
                  fritesetfrangins@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-foreground/70" />
                <span>Chaussée de Douai 850, 7504 Tournai</span>
              </li>
            </ul>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>4. Hébergement</h2>
            <p className={P}>
              Ce site est hébergé sur l'infrastructure Lovable Cloud (Supabase / Amazon Web
              Services), avec hébergement et stockage des données au sein de l'Union européenne
              lorsque cela est applicable.
            </p>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>5. Propriété intellectuelle</h2>
            <p className={P}>
              L'ensemble des contenus de ce site (textes, photographies, logo, nom commercial
              « Frites &amp; Frangins ») est la propriété de l'éditeur, sauf mention contraire. Toute
              reproduction, représentation ou utilisation, totale ou partielle, sans autorisation
              écrite préalable est interdite.
            </p>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>6. Commandes et responsabilité des prestataires</h2>
            <p className={P}>
              Les commandes en ligne sont traitées via la plateforme tierce Fritzy (app.fritzy.be).
              Les prix, disponibilités et conditions affichés sur cette plateforme relèvent de son
              usage. Le food-truck intervient sur base d'un devis préalablement accepté.
            </p>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>7. Données personnelles</h2>
            <p className={P}>
              Ce site vitrine ne collecte pas de données personnelles par lui-même : il n'y a ni
              formulaire d'inscription, ni compte utilisateur, ni suivi publicitaire. La carte
              Google Maps intégrée peut déposer des cookies propres à Google ; l'utilisation de
              Fritzy pour les commandes est soumise à la politique de confidentialité de cette
              plateforme.
            </p>
            <p className={P}>
              Pour toute question relative à vos données :{" "}
              <a
                href="mailto:fritesetfrangins@gmail.com"
                className="font-medium text-foreground underline underline-offset-2 [overflow-wrap:anywhere]"
              >
                fritesetfrangins@gmail.com
              </a>
              .
            </p>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>8. Droit applicable et litiges</h2>
            <p className={P}>
              Ce site est soumis au droit belge. En cas de litige, une solution à l'amiable sera
              recherchée en priorité. À défaut, le consommateur peut faire appel au Médiateur fédéral
              (rue du Congrès 12-14, 1000 Bruxelles — ombudsman@mediateurfederal.be) ou saisir les
              tribunaux compétents.
            </p>
          </section>
        </div>

        <p className="mt-14 text-center text-xs text-muted-foreground">
          Dernière mise à jour : octobre 2026
        </p>
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
          <p className="mt-4 font-display text-xl text-foreground">Frites &amp; Frangins</p>
          <p className="mt-2 text-sm">Chaussée de Douai 850, 7504 Tournai</p>
          <p className="mt-1 text-sm">Tél. 069 21 26 55</p>
          <p className="mt-6 text-xs uppercase tracking-widest opacity-50">
            © {new Date().getFullYear()} Frites &amp; Frangins — Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}
