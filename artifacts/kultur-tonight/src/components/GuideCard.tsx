import { Link } from "wouter";
import { Guide } from "../content/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/en/blog/${guide.slug}`} className="group block h-full">
      <div className="bg-transparent border-none h-full flex flex-col group-hover:opacity-90 transition-opacity">
        <div className="aspect-[16/9] w-full relative overflow-hidden mb-6 bg-secondary border border-border/50">
          {/* Gradient placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f1c] to-secondary opacity-60" />
          <div className="absolute inset-0 border border-primary/10 scale-[0.95] transition-transform duration-500 group-hover:scale-100" />
        </div>
        
        <div className="flex items-center gap-3 text-[10px] text-primary mb-3 font-sans uppercase tracking-widest">
          <span>{guide.category}</span>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <span className="text-muted-foreground">{guide.readTime}</span>
        </div>
        
        <h3 className="font-serif text-2xl text-foreground font-semibold mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {guide.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-sans mb-4 flex-grow">
          {guide.excerpt}
        </p>
        
        <div className="mt-auto">
          <span className="text-xs text-foreground uppercase tracking-wider border-b border-primary pb-1 group-hover:border-transparent transition-colors">
            Read Article
          </span>
        </div>
      </div>
    </Link>
  );
}
