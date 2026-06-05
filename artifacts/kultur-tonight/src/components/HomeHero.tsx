import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { detectLocale } from "@/lib/i18n";

/* ─── Locale content ──────────────────────────────────────────────────── */
const copy = {
  en: {
    eyebrow:    "Geneva Cultural Discovery",
    headline:   "Culture brings\npeople together",
    sub:        "Discover curated cultural experiences in Geneva — from theatre and concerts to exceptional venues and unforgettable evenings.",
    primaryCta: { text: "Discover Events",       href: "/en/geneva/events" },
    secondary:  { text: "Join Early Access",      href: "#newsletter" },
    categories: ["Theatre", "Concerts", "Exhibitions", "Dance"],
    valuePoints:[
      { title: "Curated events",             desc: "Handpicked by Geneva insiders" },
      { title: "Exceptional venues",          desc: "The city's most iconic stages"  },
      { title: "Shared cultural moments",    desc: "Evenings you'll never forget"   },
    ],
    imageAlt: "A couple by Lake Geneva at dusk, the Jet d'Eau and grand theatre visible in the background",
  },
  fr: {
    eyebrow:    "Guide culturel de Genève",
    headline:   "La culture nous\nrapproche",
    sub:        "Découvrez des expériences culturelles sélectionnées à Genève — théâtre, concerts, lieux d'exception et soirées inoubliables.",
    primaryCta: { text: "Découvrir les événements",         href: "/fr/geneve/evenements" },
    secondary:  { text: "Rejoindre l'accès anticipé",       href: "#newsletter" },
    categories: ["Théâtre", "Concerts", "Expositions", "Danse"],
    valuePoints:[
      { title: "Événements sélectionnés",     desc: "Choisis par des initiés genevois" },
      { title: "Lieux d'exception",            desc: "Les plus grandes scènes de la ville" },
      { title: "Moments culturels partagés",  desc: "Des soirées inoubliables"           },
    ],
    imageAlt: "Un couple au bord du lac Léman au crépuscule, avec le Jet d'Eau et un grand théâtre en arrière-plan",
  },
} as const;

/* ─── Category icon SVGs (inline, brand-neutral) ─────────────────────── */
const categoryIcons: Record<string, React.ReactElement> = {
  "Theatre":     <MaskIcon />,
  "Théâtre":     <MaskIcon />,
  "Concerts":    <MusicIcon />,
  "Exhibitions": <FrameIcon />,
  "Expositions": <FrameIcon />,
  "Dance":       <DanceIcon />,
  "Danse":       <DanceIcon />,
};

function MaskIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <path d="M4 5 Q4 14 10 14 Q16 14 16 5 Q12 3 10 3 Q8 3 4 5Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      <circle cx="7.5" cy="8" r="1" fill="currentColor"/>
      <circle cx="12.5" cy="8" r="1" fill="currentColor"/>
    </svg>
  );
}
function MusicIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <path d="M8 15V5l9-2v10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
      <circle cx="5.5" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="14.5" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}
function FrameIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="5.5" y="5.5" width="9" height="9" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1.5"/>
    </svg>
  );
}
function DanceIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <circle cx="10" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M10 5.5 L8 9 L5.5 11M10 5.5 L12 9 L14.5 11M8 9 L7 14 L9.5 16M12 9 L13 14 L10.5 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Gold arch icon (from brand) ────────────────────────────────────── */
function GoldArch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id="vGold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#B8861F"/><stop offset="0.5" stopColor="#E8B84B"/><stop offset="1" stopColor="#F5C842"/>
        </linearGradient>
      </defs>
      <path d="M3 21 L3 12 C3 7 7 4 12 4 C17 4 21 7 21 12 L21 21" stroke="url(#vGold)" strokeWidth="1.4" fill="none" strokeLinecap="square"/>
      <line x1="1.5" y1="21" x2="22.5" y2="21" stroke="url(#vGold)" strokeWidth="1.4" strokeLinecap="square"/>
      <path d="M12 10 L12.7 12.2 L15 12.2 L13.2 13.5 L13.9 15.7 L12 14.4 L10.1 15.7 L10.8 13.5 L9 12.2 L11.3 12.2Z" fill="url(#vGold)"/>
    </svg>
  );
}

/* ─── Component ───────────────────────────────────────────────────────── */
export function HomeHero() {
  const [location] = useLocation();
  const locale  = detectLocale(location);
  const c       = copy[locale];

  const lines = c.headline.split("\n");

  return (
    <section
      className="relative w-full overflow-hidden bg-[#080C18]"
      style={{ minHeight: "100dvh" }}
      aria-label={locale === "fr" ? "Section héro" : "Hero section"}
    >
      {/* ── Background image ─────────────────────────────────────────── */}
      <img
        src="/assets/hero/geneva-evening-theatre.png"
        alt={c.imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        style={{ objectPosition: "65% center" }}
      />

      {/* Desktop gradient — heavy left, transparent right-center */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(8,12,24,0.97) 0%, rgba(8,12,24,0.88) 30%, rgba(8,12,24,0.60) 55%, rgba(8,12,24,0.18) 75%, rgba(8,12,24,0.10) 100%)",
        }}
      />
      {/* Mobile gradient — dark overall */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,12,24,0.90) 0%, rgba(8,12,24,0.75) 50%, rgba(8,12,24,0.95) 100%)",
        }}
      />
      {/* Universal bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080C18] to-transparent" />
      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* ── Content grid ────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center md:items-stretch min-h-[100dvh] py-28 md:py-0 gap-10 md:gap-0">

        {/* ── Left column ─────────────────────────────────────────── */}
        <div className="w-full md:w-[55%] flex flex-col justify-center md:pr-12 lg:pr-20">

          {/* Logo mark + eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <img
              src="/assets/logo-mark.svg"
              alt="KulturTonight"
              width={28}
              height={28}
              className="flex-shrink-0 opacity-90"
            />
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-sans">
              {c.eyebrow}
            </span>
          </motion.div>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="w-14 h-[1px] bg-gold-gradient origin-left mb-8"
          />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
            className="font-serif text-[clamp(2.6rem,6vw,5rem)] text-foreground font-medium leading-[1.08] tracking-tight mb-6"
          >
            {lines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-lg mb-10"
          >
            {c.sub}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link
              href={c.primaryCta.href}
              className="inline-flex items-center justify-center h-13 px-8 bg-gold-gradient text-black font-sans uppercase tracking-widest text-[11px] hover:opacity-90 transition-opacity duration-200 relative overflow-hidden"
              style={{ height: "52px" }}
              data-testid="button-hero-primary-cta"
            >
              {c.primaryCta.text}
            </Link>
            <Link
              href={c.secondary.href}
              className="inline-flex items-center justify-center h-13 px-8 border border-primary/50 text-primary font-sans uppercase tracking-widest text-[11px] hover:bg-primary/10 transition-colors duration-200 backdrop-blur-sm"
              style={{ height: "52px" }}
              data-testid="button-hero-secondary-cta"
            >
              {c.secondary.text}
            </Link>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-wrap gap-2.5"
          >
            {c.categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-foreground/70 border border-border/50 px-3 py-2 font-sans backdrop-blur-sm bg-[#080C18]/30 hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-default"
              >
                <span className="text-primary/70">
                  {categoryIcons[cat] ?? <MaskIcon />}
                </span>
                {cat}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right column — value points ──────────────────────────── */}
        <div className="w-full md:w-[45%] flex flex-col justify-end md:justify-center md:items-end md:pl-8 lg:pl-16 pb-0 md:pb-16">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
            className="flex flex-col gap-6 md:max-w-[280px] w-full"
          >
            {c.valuePoints.map((vp, i) => (
              <motion.div
                key={vp.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + i * 0.15, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <GoldArch />
                <div>
                  <p className="font-serif text-[15px] text-foreground font-medium leading-snug mb-0.5">
                    {vp.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">
                    {vp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-primary/50 font-sans">
          {locale === "fr" ? "Défiler" : "Scroll"}
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4 text-primary/50" fill="none" aria-hidden="true">
            <path d="M3 6 L8 11 L13 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
