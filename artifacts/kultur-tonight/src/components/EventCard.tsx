import { Link } from "wouter";
import { Event } from "../content/events";
import { Badge } from "./ui/badge";

export function EventCard({ event }: { event: Event }) {
  return (
    <Link href={`/en/geneva/events/${event.slug}`} className="group block h-full">
      <div className="bg-card border border-card-border h-full overflow-hidden hover-glow flex flex-col rounded-none relative">
        <div className="aspect-[4/3] w-full relative overflow-hidden bg-muted">
          {/* Gradient placeholder simulating image */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background opacity-80" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-md text-foreground border-primary/30 uppercase tracking-widest text-[10px] font-sans rounded-none">
              {event.category}
            </Badge>
          </div>
          
          <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 border border-border">
            <span className="font-serif text-primary text-sm">{event.price}</span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-sans uppercase tracking-wider">
            <span>{event.date}</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span>{event.time}</span>
          </div>
          
          <h3 className="font-serif text-xl text-foreground font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
            {event.shortDescription}
          </p>
          
          <div className="mt-auto border-t border-border/50 pt-4 flex items-center justify-between">
            <span className="text-xs text-foreground/80 truncate pr-4">
              {event.venue.name}
            </span>
            <span className="text-primary text-sm group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
