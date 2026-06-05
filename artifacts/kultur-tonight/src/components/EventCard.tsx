import { Link } from "wouter";
import { Event } from "../content/events";
import { motion } from "framer-motion";

const categoryGradients: Record<string, string> = {
  theatre: "from-[#2D0714] via-[#1A0510] to-[#080C18]",
  opera: "from-[#2D0714] via-[#1A0510] to-[#080C18]",
  concerts: "from-[#0D1424] via-[#0a1535] to-[#080C18]",
  jazz: "from-[#0a1a10] via-[#071510] to-[#080C18]",
  family: "from-[#0a1524] via-[#0d1a2e] to-[#080C18]",
  dance: "from-[#180a28] via-[#120720] to-[#080C18]",
  classical: "from-[#1a1000] via-[#120c00] to-[#080C18]",
};

const getCategoryGradient = (category: string): string => {
  const key = category.toLowerCase();
  for (const [k, v] of Object.entries(categoryGradients)) {
    if (key.includes(k)) return v;
  }
  return "from-[#0D1424] to-[#080C18]";
};

export function EventCard({ event }: { event: Event }) {
  const gradient = getCategoryGradient(event.category);

  return (
    <Link href={`/en/geneva/events/${event.slug}`} className="group block h-full" data-testid={`link-event-${event.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="bg-card border border-card-border h-full overflow-hidden flex flex-col relative"
        style={{ boxShadow: "0 0 0 0 rgba(232,184,75,0)" }}
      >
        {/* Image area — portrait ratio */}
        <div className="aspect-[3/4] w-full relative overflow-hidden bg-muted flex-shrink-0">
          <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-primary bg-[#080C18]/80 backdrop-blur-sm border border-primary/20 px-3 py-1.5">
              {event.category}
            </span>
          </div>

          {/* Price */}
          <div className="absolute bottom-4 right-4 z-10">
            <span className="text-sm font-sans text-gold-gradient font-medium bg-[#080C18]/80 backdrop-blur-sm px-2 py-1 border border-primary/20">
              {event.price}
            </span>
          </div>

          {/* Date chip */}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="text-[10px] font-sans uppercase tracking-wider text-foreground/80 bg-[#080C18]/80 backdrop-blur-sm px-2 py-1 border border-border">
              {event.date}
            </span>
          </div>

          {/* Decorative gold arc */}
          <svg className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500" viewBox="0 0 100 100" fill="none">
            <path d="M100 0 Q60 40 100 100" stroke="url(#goldArc)" strokeWidth="1" />
            <defs>
              <linearGradient id="goldArc" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#B8861F" />
                <stop offset="1" stopColor="#F5C842" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-[9px] text-muted-foreground mb-3 font-sans uppercase tracking-widest">
            <span>{event.time}</span>
          </div>

          <h3 className="font-serif text-lg text-foreground font-medium mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
            {event.title}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-grow leading-relaxed font-sans">
            {event.shortDescription}
          </p>

          <div className="mt-auto border-t border-border/40 pt-4 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider truncate pr-4 font-sans">
              {event.venue.name}
            </span>
            <span className="text-primary text-xs uppercase tracking-widest font-sans group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1 whitespace-nowrap">
              Tickets <span className="text-base leading-none">→</span>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
