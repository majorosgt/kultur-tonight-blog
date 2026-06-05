import { Link } from "wouter";
import { Event } from "../content/events";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

const categoryGradients: Record<string, string> = {
  theatre: "from-[#2D0714] via-[#1A0510] to-[#080C18]",
  opera: "from-[#2D0714] via-[#1A0510] to-[#080C18]",
  concerts: "from-[#0D1424] via-[#0a1535] to-[#080C18]",
  jazz: "from-[#0a1a10] via-[#071510] to-[#080C18]",
  family: "from-[#0a1524] via-[#0d1a2e] to-[#080C18]",
  dance: "from-[#180a28] via-[#120720] to-[#080C18]",
  classical: "from-[#1a1000] via-[#120c00] to-[#080C18]",
};

const categoryImages: Record<string, string> = {
  theatre: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=60&w=600&auto=format&fit=crop",
  opera: "https://images.unsplash.com/photo-1507676184212-d0330a151f96?q=60&w=600&auto=format&fit=crop",
  concerts: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=60&w=600&auto=format&fit=crop",
  jazz: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=60&w=600&auto=format&fit=crop",
  family: "https://images.unsplash.com/photo-1597075095500-0c8b87b593fb?q=60&w=600&auto=format&fit=crop",
  dance: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=60&w=600&auto=format&fit=crop",
  classical: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=60&w=600&auto=format&fit=crop",
};

const getCategoryGradient = (category: string): string => {
  const key = category.toLowerCase();
  for (const [k, v] of Object.entries(categoryGradients)) {
    if (key.includes(k)) return v;
  }
  return "from-[#0D1424] to-[#080C18]";
};

const getCategoryImage = (category: string): string | undefined => {
  const key = category.toLowerCase();
  for (const [k, v] of Object.entries(categoryImages)) {
    if (key.includes(k)) return v;
  }
  return undefined;
};

export function EventCard({ event }: { event: Event }) {
  const gradient = getCategoryGradient(event.category);
  const photo = getCategoryImage(event.category);

  return (
    <Link
      href={`/en/geneva/events/${event.slug}`}
      className="group block h-full"
      data-testid={`link-event-${event.slug}`}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-card border border-card-border h-full overflow-hidden flex flex-col relative"
      >
        {/* Image / visual area — portrait ratio */}
        <div className="aspect-[3/4] w-full relative overflow-hidden bg-muted flex-shrink-0">
          {photo && (
            <img
              src={photo}
              alt={`${event.title} — ${event.category} event at ${event.venue.name}`}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              loading="lazy"
            />
          )}
          <div className={`absolute inset-0 bg-gradient-to-b ${gradient} ${photo ? "opacity-70" : ""}`} />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-primary bg-[#080C18]/80 backdrop-blur-sm border border-primary/20 px-3 py-1.5">
              {event.category}
            </span>
          </div>

          {/* Price chip */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 bg-[#080C18]/80 backdrop-blur-sm px-2 py-1 border border-primary/20">
            <Ticket size={10} className="text-primary flex-shrink-0" aria-hidden="true" />
            <span className="text-sm font-sans text-primary font-medium">{event.price}</span>
          </div>

          {/* Date chip */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-[#080C18]/80 backdrop-blur-sm px-2 py-1 border border-border">
            <Calendar size={10} className="text-foreground/60 flex-shrink-0" aria-hidden="true" />
            <span className="text-[10px] font-sans uppercase tracking-wider text-foreground/80">{event.date}</span>
          </div>

          {/* Decorative gold arc */}
          <svg
            className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
          >
            <path d="M100 0 Q60 40 100 100" stroke="url(#goldArcEC)" strokeWidth="1" />
            <defs>
              <linearGradient id="goldArcEC" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#B8861F" />
                <stop offset="1" stopColor="#F5C842" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Time row */}
          <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground mb-3 font-sans uppercase tracking-widest">
            <Clock size={10} aria-hidden="true" />
            <span>{event.time}</span>
          </div>

          <h3 className="font-serif text-lg text-foreground font-medium mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
            {event.title}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-grow leading-relaxed font-sans">
            {event.shortDescription}
          </p>

          {/* Footer row */}
          <div className="mt-auto border-t border-border/40 pt-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <MapPin size={10} className="text-muted-foreground flex-shrink-0" aria-hidden="true" />
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider truncate font-sans">
                {event.venue.name}
              </span>
            </div>
            <span className="text-primary text-xs uppercase tracking-widest font-sans group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1 whitespace-nowrap flex-shrink-0">
              Tickets <span className="text-base leading-none">→</span>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
