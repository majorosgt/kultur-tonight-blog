import { Link } from "wouter";
import { motion } from "framer-motion";
import { Guide } from "../content/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/en/blog/${guide.slug}`} className="group block h-full" data-testid={`link-guide-${guide.slug}`}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="bg-card border border-card-border h-full flex flex-col overflow-hidden relative"
      >
        {/* Gold top bar */}
        <div className="h-[3px] w-full bg-gold-gradient origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-500" />

        {/* Image placeholder */}
        <div className="aspect-[16/9] w-full relative overflow-hidden bg-[#0D1424] flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1424] via-[#1A0510]/50 to-[#080C18]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none">
              <circle cx="50" cy="50" r="40" stroke="url(#gcGold)" strokeWidth="0.5" />
              <path d="M10 50 Q50 10 90 50 Q50 90 10 50Z" stroke="url(#gcGold)" strokeWidth="0.5" fill="none" />
              <defs>
                <linearGradient id="gcGold" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#B8861F" />
                  <stop offset="1" stopColor="#F5C842" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          {/* Meta */}
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest mb-4 font-sans">
            <span className="text-primary">{guide.category}</span>
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            <span className="text-muted-foreground">{guide.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl text-foreground font-medium mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
            {guide.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-sans flex-grow mb-5">
            {guide.excerpt}
          </p>

          {/* CTA */}
          <div className="mt-auto flex items-center gap-2">
            <span className="text-[10px] text-foreground/60 uppercase tracking-widest font-sans group-hover:text-primary transition-colors duration-300">
              Read Guide
            </span>
            <span className="text-primary text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
