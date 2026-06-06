import { Link } from "wouter";
import { motion } from "framer-motion";
import type { BlogArticle } from "@/content/blog-guides";

const CATEGORY_PHOTOS: Record<string, string> = {
  guides:       "https://images.unsplash.com/photo-1507676184212-d0330a151f96?q=70&w=800&auto=format&fit=crop",
  venues:       "https://images.unsplash.com/photo-1503095396549-807759245b35?q=70&w=800&auto=format&fit=crop",
  "this-week":  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=70&w=800&auto=format&fit=crop",
  "this-weekend":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=70&w=800&auto=format&fit=crop",
  events:       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=70&w=800&auto=format&fit=crop",
  seasonal:     "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=70&w=800&auto=format&fit=crop",
  culture:      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=70&w=800&auto=format&fit=crop",
  family:       "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=70&w=800&auto=format&fit=crop",
};

const CATEGORY_LABELS: Record<string, string> = {
  guides:        "Guide",
  venues:        "Venue",
  "this-week":   "This Week",
  "this-weekend":"This Weekend",
  events:        "Events",
  seasonal:      "Seasonal",
  culture:       "Culture",
  family:        "Family",
};

function formatDate(iso: string, locale: string): string {
  try {
    return new Date(iso).toLocaleDateString(locale === "fr" ? "fr-CH" : "en-GB", {
      year: "numeric", month: "long", day: "numeric",
    });
  } catch {
    return iso;
  }
}

interface BlogCardProps {
  article: BlogArticle;
  href: string;
}

export function BlogCard({ article, href }: BlogCardProps) {
  const photo = CATEGORY_PHOTOS[article.category] ?? CATEGORY_PHOTOS.guides;
  const categoryLabel = CATEGORY_LABELS[article.category] ?? article.category;
  const locale = article.lang;
  const readLabel = locale === "fr" ? "Lire →" : "Read →";
  const minLabel  = locale === "fr" ? "min" : "min";

  return (
    <Link href={href} className="group block h-full" data-testid={`link-blog-${article.slug}`}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-card border border-card-border h-full flex flex-col overflow-hidden relative"
      >
        {/* Gold top bar */}
        <div className="h-[2px] w-full bg-gold-gradient origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-500 flex-shrink-0" />

        {/* Image */}
        <div className="aspect-[16/9] w-full relative overflow-hidden bg-[#0D1424] flex-shrink-0">
          <img
            src={photo}
            alt={`${article.title} — KulturTonight`}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-[1.04] transition-all duration-700"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1424]/80 via-[#1A0510]/40 to-[#080C18]/80" />

          {/* Badges */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
            <span className="text-[9px] font-sans uppercase tracking-[0.22em] text-primary bg-[#080C18]/80 backdrop-blur-sm border border-primary/20 px-2.5 py-1.5 leading-none">
              {categoryLabel}
            </span>
            <span className="text-[9px] font-sans uppercase tracking-wider text-muted-foreground/80 bg-[#080C18]/70 backdrop-blur-sm border border-border/40 px-2.5 py-1.5 leading-none">
              {article.readTime} {minLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-serif text-xl text-foreground font-medium mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
            {article.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-sans flex-grow mb-4">
            {article.subtitle}
          </p>

          <div className="mt-auto border-t border-border/30 pt-3.5 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest font-sans">
              {formatDate(article.date, locale)}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-primary uppercase tracking-widest font-sans group-hover:gap-2.5 transition-all duration-300">
              {readLabel}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
