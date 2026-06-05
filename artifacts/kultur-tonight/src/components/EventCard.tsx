import { Link, useLocation } from "wouter";
import { Event } from "../content/events";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { detectLocale, localizeCategory } from "@/lib/i18n";

/* ─── Unsplash photos by category ─────────────────────────────────────── */
const categoryPhotos: Record<string, string> = {
  theatre:
    "https://images.unsplash.com/photo-1503095396549-807759245b35?q=70&w=640&auto=format&fit=crop",
  opera:
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=70&w=640&auto=format&fit=crop",
  concerts:
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=70&w=640&auto=format&fit=crop",
  jazz:
    "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=70&w=640&auto=format&fit=crop",
  family:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=70&w=640&auto=format&fit=crop",
  dance:
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=70&w=640&auto=format&fit=crop",
  classical:
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=70&w=640&auto=format&fit=crop",
};

/* ─── Gradient overlays per category ─────────────────────────────────── */
const categoryOverlay: Record<string, string> = {
  theatre:  "from-[#2D0714]/90 via-[#1A0510]/60 to-transparent",
  opera:    "from-[#2D0714]/90 via-[#1A0510]/60 to-transparent",
  concerts: "from-[#080C18]/90 via-[#0a1535]/60 to-transparent",
  jazz:     "from-[#080C18]/90 via-[#0a1a10]/60 to-transparent",
  family:   "from-[#080C18]/90 via-[#0a1524]/60 to-transparent",
  dance:    "from-[#180a28]/90 via-[#120720]/60 to-transparent",
  classical:"from-[#1a1000]/90 via-[#120c00]/60 to-transparent",
};

function getPhoto(category: string): string {
  const key = category.toLowerCase();
  return (
    Object.entries(categoryPhotos).find(([k]) => key.includes(k))?.[1] ??
    categoryPhotos.concerts
  );
}
function getOverlay(category: string): string {
  const key = category.toLowerCase();
  return (
    Object.entries(categoryOverlay).find(([k]) => key.includes(k))?.[1] ??
    categoryOverlay.concerts
  );
}

export function EventCard({ event }: { event: Event }) {
  const [location] = useLocation();
  const locale = detectLocale(location);

  const eventPath =
    locale === "fr"
      ? `/fr/geneve/evenements/${event.slug}`
      : `/en/geneva/events/${event.slug}`;

  const city          = locale === "fr" ? "Genève" : "Geneva";
  const ticketsLabel  = locale === "fr" ? "Billets" : "Tickets";
  const displayCat    = localizeCategory(event.category, locale);
  const photo         = getPhoto(event.category);
  const overlay       = getOverlay(event.category);

  const altText =
    locale === "fr"
      ? `${event.title} — ${displayCat} au ${event.venue.name}, Genève`
      : `${event.title} — ${displayCat} at ${event.venue.name}, Geneva`;

  return (
    <Link href={eventPath} className="group block h-full" data-testid={`link-event-${event.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-card border border-card-border h-full overflow-hidden flex flex-col relative"
      >
        {/* ── Image / visual area ─────────────────────────────────────── */}
        <div className="aspect-[3/4] w-full relative overflow-hidden flex-shrink-0">
          <img
            src={photo}
            alt={altText}
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-[1.03] transition-all duration-700"
            loading="lazy"
            decoding="async"
          />
          {/* gradient bottom-to-top */}
          <div className={`absolute inset-0 bg-gradient-to-t ${overlay}`} />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

          {/* Category tag — top left */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center gap-1 text-[9px] font-sans uppercase tracking-[0.22em] text-primary bg-[#080C18]/80 backdrop-blur-sm border border-primary/25 px-2.5 py-1.5 leading-none">
              {displayCat}
            </span>
          </div>

          {/* Date badge — top right (Calendar icon) */}
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 text-[9px] font-sans uppercase tracking-[0.15em] text-foreground/90 bg-[#080C18]/80 backdrop-blur-sm border border-border/50 px-2.5 py-1.5 leading-none">
              <Calendar size={9} className="text-primary flex-shrink-0" aria-hidden="true" />
              {event.date}
            </span>
          </div>

          {/* Price chip — bottom right */}
          <div className="absolute bottom-3.5 right-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 bg-[#080C18]/85 backdrop-blur-sm border border-primary/20 px-2.5 py-1.5">
              <Ticket size={9} className="text-primary flex-shrink-0" aria-hidden="true" />
              <span className="text-[10px] font-sans text-primary font-semibold leading-none">{event.price}</span>
            </span>
          </div>

          {/* Time — bottom left */}
          <div className="absolute bottom-3.5 left-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 bg-[#080C18]/80 backdrop-blur-sm border border-border/40 px-2.5 py-1.5">
              <Clock size={9} className="text-foreground/60 flex-shrink-0" aria-hidden="true" />
              <span className="text-[10px] font-sans uppercase tracking-wider text-foreground/80 leading-none">{event.time}</span>
            </span>
          </div>

          {/* Decorative gold arc */}
          <svg
            className="absolute top-0 right-0 w-20 h-20 opacity-[0.08] group-hover:opacity-[0.16] transition-opacity duration-500 pointer-events-none"
            viewBox="0 0 80 80"
            fill="none"
            aria-hidden="true"
          >
            <path d="M80 0 Q48 32 80 80" stroke="url(#evGold)" strokeWidth="1" />
            <defs>
              <linearGradient id="evGold" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#B8861F" /><stop offset="1" stopColor="#F5C842" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ── Content area ─────────────────────────────────────────────── */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="font-serif text-[17px] text-foreground font-medium mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
            {event.title}
          </h3>

          {/* Short description */}
          <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-grow leading-relaxed font-sans">
            {event.shortDescription}
          </p>

          {/* Footer row — venue + city + CTA */}
          <div className="mt-auto border-t border-border/30 pt-3.5 space-y-2">
            <div className="flex items-start gap-1.5">
              <MapPin size={10} className="text-muted-foreground/70 flex-shrink-0 mt-[3px]" aria-hidden="true" />
              <div className="min-w-0">
                <span className="block text-[10px] text-muted-foreground uppercase tracking-wider truncate font-sans leading-tight">
                  {event.venue.name}
                </span>
                <span className="block text-[9px] text-muted-foreground/50 uppercase tracking-widest font-sans leading-tight mt-0.5">
                  {city}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-5 h-[1px] bg-primary/30 group-hover:w-8 transition-all duration-300" />
              <span className="text-[10px] text-primary uppercase tracking-widest font-sans flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                {ticketsLabel}
                <span className="text-sm leading-none">→</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom gold line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
}
