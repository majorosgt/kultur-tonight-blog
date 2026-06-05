import { Link } from "wouter";
import { Venue } from "../content/venues";
import { motion } from "framer-motion";

export function VenueCard({ venue }: { venue: Venue }) {
  return (
    <Link href={`/en/geneva/venues/${venue.slug}`} className="group block h-full" data-testid={`link-venue-${venue.slug}`}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="bg-card border border-card-border h-full flex flex-col relative overflow-hidden"
        style={{}}
      >
        {/* Decorative gold arc — top right */}
        <svg className="absolute top-0 right-0 w-40 h-40 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-700 pointer-events-none" viewBox="0 0 160 160" fill="none">
          <path d="M160 0 Q80 80 160 160" stroke="url(#vGold)" strokeWidth="1.5" />
          <circle cx="140" cy="20" r="40" stroke="url(#vGold)" strokeWidth="0.5" fill="none" />
          <defs>
            <linearGradient id="vGold" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#B8861F" />
              <stop offset="1" stopColor="#F5C842" />
            </linearGradient>
          </defs>
        </svg>

        <div className="p-6 flex flex-col h-full relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-serif text-xl text-foreground font-medium leading-snug pr-4 group-hover:text-primary transition-colors duration-300">
              {venue.name}
            </h3>
            <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-primary/70 whitespace-nowrap pt-1 border border-primary/20 px-2 py-1 flex-shrink-0">
              {venue.type.replace(/-/g, " ")}
            </span>
          </div>

          {/* Address */}
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-sans mb-4">
            {venue.address}
          </p>

          {/* Description */}
          <p className="text-sm text-foreground/70 line-clamp-3 leading-relaxed font-sans flex-grow mb-4">
            {venue.description.split("\n")[0]}
          </p>

          {/* Footer */}
          <div className="border-t border-border/40 pt-4 flex items-center justify-between mt-auto">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-sans">
              Seats {Number(venue.capacity).toLocaleString()}
            </span>
            <span className="text-[10px] text-primary uppercase tracking-widest font-sans flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
              Explore venue <span className="text-sm leading-none">→</span>
            </span>
          </div>
        </div>

        {/* Bottom gold glow on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
}
