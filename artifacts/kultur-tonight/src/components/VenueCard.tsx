import { Link } from "wouter";
import { Venue } from "../content/venues";
import { Badge } from "./ui/badge";

export function VenueCard({ venue }: { venue: Venue }) {
  return (
    <Link href={`/en/geneva/venues/${venue.slug}`} className="group block h-full">
      <div className="bg-card border border-card-border h-full p-6 hover-glow flex flex-col rounded-none relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
        
        <div className="flex justify-between items-start mb-4 relative z-10">
          <h3 className="font-serif text-2xl text-foreground font-semibold line-clamp-2 pr-4 group-hover:text-primary transition-colors">
            {venue.name}
          </h3>
          <Badge variant="outline" className="bg-transparent text-primary border-primary/30 uppercase tracking-widest text-[10px] font-sans rounded-none whitespace-nowrap">
            {venue.type.replace('-', ' ')}
          </Badge>
        </div>
        
        <div className="space-y-4 flex-grow relative z-10">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-sans">
            {venue.address}
          </p>
          
          <p className="text-sm text-foreground/80 line-clamp-3 leading-relaxed">
            {venue.description.split('\n')[0]}
          </p>
        </div>
        
        <div className="mt-6 border-t border-border/50 pt-4 flex items-center justify-between relative z-10">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Capacity: {venue.capacity}
          </span>
          <span className="text-primary text-sm font-medium group-hover:underline underline-offset-4 decoration-primary/50">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
