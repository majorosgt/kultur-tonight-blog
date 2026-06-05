import { Link, useLocation } from "wouter";
import { Instagram, Facebook } from "lucide-react";
import { detectLocale } from "@/lib/i18n";

export function Footer() {
  const [location] = useLocation();
  const locale = detectLocale(location);

  const isFr = locale === "fr";

  const homeHref     = isFr ? "/fr" : "/en";
  const tagline      = isFr ? "La boussole culturelle de Genève" : "Geneva's cultural compass";
  const copyright    = isFr ? "Tous droits réservés." : "All rights reserved.";
  const privacy      = isFr ? "Politique de confidentialité" : "Privacy Policy";
  const terms        = isFr ? "Conditions d'utilisation" : "Terms of Service";

  const col1Heading  = isFr ? "Explorer Genève" : "Explore Geneva";
  const col2Heading  = isFr ? "Lieux & Événements" : "Venues & Events";
  const col3Heading  = isFr ? "Éditorial" : "Editorial";
  const col4Heading  = isFr ? "Contact" : "Connect";

  const col1Links = isFr
    ? [
        { label: "Théâtre",             href: "/fr/geneve/theatre" },
        { label: "Concerts",            href: "/fr/geneve/concerts" },
        { label: "Sorties en famille",  href: "/fr/geneve/sorties-en-famille" },
        { label: "Ce week-end",         href: "/fr/geneve/que-faire-ce-weekend" },
      ]
    : [
        { label: "Theatre",      href: "/en/geneva/theatre" },
        { label: "Concerts",     href: "/en/geneva/concerts" },
        { label: "Family Events",href: "/en/geneva/family-events" },
        { label: "This Weekend", href: "/en/geneva/things-to-do-this-weekend" },
      ];

  const col2Links = isFr
    ? [
        { label: "Tous les lieux",      href: "/fr/geneve/lieux" },
        { label: "Tous les événements", href: "/fr/geneve/evenements" },
        { label: "Guide de Genève",     href: "/fr/geneve" },
      ]
    : [
        { label: "All Venues",   href: "/en/geneva/venues" },
        { label: "All Events",   href: "/en/geneva/events" },
        { label: "Geneva Guide", href: "/en/geneva" },
      ];

  const col3Links = isFr
    ? [
        { label: "Blog culturel", href: "/fr/blog" },
        { label: "Guides ville",  href: "/fr/blog" },
      ]
    : [
        { label: "Culture Blog",  href: "/en/blog" },
        { label: "City Guides",   href: "/en/blog" },
      ];

  const col4Links = isFr
    ? [
        { label: "À propos",      href: "#" },
        { label: "Contact",       href: "#" },
        { label: "Accès anticipé",href: "#newsletter" },
      ]
    : [
        { label: "About",         href: "#" },
        { label: "Contact",       href: "#" },
        { label: "Early Access",  href: "#newsletter" },
      ];

  const igLabel = isFr ? "KulturTonight sur Instagram" : "KulturTonight on Instagram";
  const fbLabel = isFr ? "KulturTonight sur Facebook"  : "KulturTonight on Facebook";

  return (
    <footer className="bg-[#050810] relative">
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-20" />

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-10">

        {/* ── Logo + tagline ─────────────────────────────────────────── */}
        <div className="mb-14 pb-12 border-b border-border/40">
          <Link href={homeHref} className="inline-flex items-center gap-0 mb-3 group" aria-label="KulturTonight — accueil">
            <img
              src="/assets/logo-full.svg"
              alt="KulturTonight"
              width={220}
              height={38}
              className="h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </Link>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-sans mt-2 ml-[52px]">
            {tagline}
          </p>
        </div>

        {/* ── Link columns ───────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {[
            { heading: col1Heading, links: col1Links },
            { heading: col2Heading, links: col2Links },
            { heading: col3Heading, links: col3Links },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect column */}
          <div>
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans mb-5">
              {col4Heading}
            </h4>
            <ul className="space-y-3 mb-6">
              {col4Links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: igLabel },
                { Icon: Facebook,  label: fbLabel },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                >
                  <Icon size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────── */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/60 font-sans uppercase tracking-widest">
            &copy; {new Date().getFullYear()} KulturTonight. {copyright}
          </p>
          <div className="flex gap-6">
            {[
              { label: privacy, href: "#" },
              { label: terms,   href: "#" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[10px] text-muted-foreground/60 hover:text-foreground transition-colors font-sans uppercase tracking-widest"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
