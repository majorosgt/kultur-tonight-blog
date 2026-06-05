import { Link, useLocation } from "wouter";
import { Venue } from "../content/venues";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import { detectLocale } from "@/lib/i18n";

/* ─── Venue-specific Unsplash photos ───────────────────────────────────── */
const venuePhotos: Record<string, string> = {
  "grand-theatre-de-geneve":
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=70&w=800&auto=format&fit=crop",
  "victoria-hall":
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=70&w=800&auto=format&fit=crop",
  "theatre-du-leman":
    "https://images.unsplash.com/photo-1503095396549-807759245b35?q=70&w=800&auto=format&fit=crop",
  "alhambra":
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=70&w=800&auto=format&fit=crop",
  "amr-jazz-club":
    "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=70&w=800&auto=format&fit=crop",
};

/* Fallback photo by venue type */
const typePhotos: Record<string, string> = {
  theatre:
    "https://images.unsplash.com/photo-1503095396549-807759245b35?q=70&w=800&auto=format&fit=crop",
  "concert-hall":
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=70&w=800&auto=format&fit=crop",
  jazz:
    "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=70&w=800&auto=format&fit=crop",
  "multi-venue":
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=70&w=800&auto=format&fit=crop",
};

function getVenuePhoto(venue: Venue): string {
  return (
    venuePhotos[venue.slug] ??
    typePhotos[venue.type] ??
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=70&w=800&auto=format&fit=crop"
  );
}

/* ─── Alt text ────────────────────────────────────────────────────────── */
const venueAltEn: Record<string, string> = {
  "grand-theatre-de-geneve": "Interior of the Grand Théâtre de Genève with golden opera house architecture",
  "victoria-hall":           "Victoria Hall concert hall interior with ornate neo-baroque golden details",
  "theatre-du-leman":        "Théâtre du Léman modern stage with dramatic theatrical lighting",
  "alhambra":                "Alhambra concert venue interior with audience and stage lighting",
  "amr-jazz-club":           "AMR Jazz Club intimate performance with saxophone player on stage",
};
const venueAltFr: Record<string, string> = {
  "grand-theatre-de-geneve": "Intérieur du Grand Théâtre de Genève avec son architecture dorée d'opéra",
  "victoria-hall":           "Salle du Victoria Hall avec ses ornements néo-baroques dorés",
  "theatre-du-leman":        "Scène moderne du Théâtre du Léman avec un éclairage dramatique",
  "alhambra":                "Intérieur de l'Alhambra avec le public et les lumières de scène",
  "amr-jazz-club":           "L'AMR Jazz Club avec un saxophoniste sur scène dans une atmosphère intime",
};

export function VenueCard({ venue }: { venue: Venue }) {
  const [location] = useLocation();
  const locale = detectLocale(location);

  const venuePath =
    locale === "fr"
      ? `/fr/geneve/lieux/${venue.slug}`
      : `/en/geneva/venues/${venue.slug}`;

  const city         = locale === "fr" ? "Genève, Suisse" : "Geneva, Switzerland";
  const exploreLabel = locale === "fr" ? "Explorer le lieu" : "Explore venue";
  const seatsLabel   = locale === "fr" ? "Places" : "Seats";

  const photo   = getVenuePhoto(venue);
  const altText = locale === "fr"
    ? (venueAltFr[venue.slug] ?? `${venue.name} — salle de spectacle à Genève`)
    : (venueAltEn[venue.slug] ?? `${venue.name} — cultural venue in Geneva`);

  return (
    <Link href={venuePath} className="group block h-full" data-testid={`link-venue-${venue.slug}`}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-card border border-card-border h-full flex flex-col relative overflow-hidden"
      >

        {/* ── Venue image ─────────────────────────────────────────────── */}
        <div className="aspect-[3/2] w-full relative overflow-hidden flex-shrink-0">
          <img
            src={photo}
            alt={altText}
            className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-65 group-hover:scale-[1.04] transition-all duration-700"
            loading="lazy"
            decoding="async"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          {/* Venue type badge — bottom left */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-flex text-[9px] font-sans uppercase tracking-[0.22em] text-primary/90 bg-[#080C18]/80 backdrop-blur-sm border border-primary/20 px-2.5 py-1.5 leading-none">
              {venue.type.replace(/-/g, " ")}
            </span>
          </div>

          {/* Capacity chip — bottom right */}
          <div className="absolute bottom-3 right-3 z-10">
            <span className="inline-flex items-center gap-1.5 bg-[#080C18]/80 backdrop-blur-sm border border-border/40 px-2.5 py-1.5">
              <Users size={9} className="text-muted-foreground/70 flex-shrink-0" aria-hidden="true" />
              <span className="text-[9px] font-sans text-muted-foreground/90 uppercase tracking-wider leading-none">
                {Number(venue.capacity).toLocaleString()}
              </span>
            </span>
          </div>

          {/* Decorative gold arc */}
          <svg
            className="absolute top-0 right-0 w-32 h-32 opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-700 pointer-events-none"
            viewBox="0 0 128 128"
            fill="none"
            aria-hidden="true"
          >
            <path d="M128 0 Q64 64 128 128" stroke="url(#vcGold)" strokeWidth="1.2" />
            <circle cx="108" cy="20" r="36" stroke="url(#vcGold)" strokeWidth="0.5" fill="none" />
            <defs>
              <linearGradient id="vcGold" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#B8861F" /><stop offset="1" stopColor="#F5C842" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ── Content ────────────────────────────────────────────────── */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Name */}
          <h3 className="font-serif text-xl text-foreground font-medium leading-snug mb-1 group-hover:text-primary transition-colors duration-300">
            {venue.name}
          </h3>

          {/* City + Address */}
          <div className="flex items-center gap-1.5 mb-3">
            <MapPin size={9} className="text-muted-foreground/60 flex-shrink-0" aria-hidden="true" />
            <span className="text-[10px] text-muted-foreground/70 uppercase tracking-wider font-sans">
              {city}
            </span>
            <span className="text-border/60 mx-1">·</span>
            <span className="text-[10px] text-muted-foreground/50 font-sans truncate">{venue.address.split(",")[0]}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground/65 line-clamp-2 leading-relaxed font-sans flex-grow mb-4">
            {venue.description.split("\n")[0]}
          </p>

          {/* Footer */}
          <div className="border-t border-border/30 pt-3.5 flex items-center justify-between mt-auto">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-[1px] bg-primary/30 group-hover:w-7 transition-all duration-300" />
              <span className="text-[9px] text-muted-foreground/50 uppercase tracking-widest font-sans">
                {seatsLabel} {Number(venue.capacity).toLocaleString()}
              </span>
            </div>
            <span className="text-[10px] text-primary uppercase tracking-widest font-sans flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
              {exploreLabel}
              <span className="text-sm leading-none">→</span>
            </span>
          </div>
        </div>

        {/* Bottom gold hover line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
}
