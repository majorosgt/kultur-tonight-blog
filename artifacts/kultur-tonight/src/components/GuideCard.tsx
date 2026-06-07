import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { detectLocale } from "@/lib/i18n";

// Accepts both the legacy Guide type and the new BlogGuide type
interface GuideCardData {
  slug: string
  title: string
  subtitle?: string
  excerpt?: string
  image?: string
  category: string
  readTime: string | number
}

const categoryPhotos: Record<string, string> = {
  weekend: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=70&w=800&auto=format&fit=crop",
  theatre: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=70&w=800&auto=format&fit=crop",
  "théâtre": "https://images.unsplash.com/photo-1503095396549-807759245b35?q=70&w=800&auto=format&fit=crop",
  concerts: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=70&w=800&auto=format&fit=crop",
  family: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=70&w=800&auto=format&fit=crop",
  famille: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=70&w=800&auto=format&fit=crop",
  "week-end": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=70&w=800&auto=format&fit=crop",
};

const DEFAULT_PHOTO = "https://images.unsplash.com/photo-1507676184212-d0330a151f96?q=70&w=800&auto=format&fit=crop";

function getGuidePhoto(category: string): string {
  const key = category.toLowerCase();
  return Object.entries(categoryPhotos).find(([k]) => key.includes(k))?.[1] ?? DEFAULT_PHOTO;
}

export function GuideCard({ guide }: { guide: GuideCardData }) {
  const [location] = useLocation();
  const locale = detectLocale(location);

  const guidePath =
    locale === "fr"
      ? `/fr/blog/geneve/guides/${guide.slug}`
      : `/en/blog/geneva/guides/${guide.slug}`;

  const readLabel = locale === "fr" ? "Lire le guide" : "Read guide";
  const byLabel = "KulturTonight";
  const readTimeLabel =
    locale === "fr"
      ? `${guide.readTime} min de lecture`
      : `${guide.readTime} min read`;

  return (
    <Link href={guidePath} className="group block h-full" data-testid={`link-guide-${guide.slug}`}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-card border border-card-border h-full flex flex-col overflow-hidden relative"
      >
        <div className="h-[2px] w-full bg-gold-gradient origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-500 flex-shrink-0" />

        <div className="aspect-[16/9] w-full relative overflow-hidden bg-[#0D1424] flex-shrink-0">
          <img
            src={guide.image || getGuidePhoto(guide.category)}
            alt={`${guide.title} — Geneva cultural guide`}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-[1.04] transition-all duration-700"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1424]/60 via-transparent to-[#080C18]/70" />

          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
            <span className="text-[9px] font-sans uppercase tracking-[0.22em] text-primary bg-[#080C18]/80 backdrop-blur-sm border border-primary/20 px-2.5 py-1.5 leading-none">
              Guide
            </span>
            <span className="text-[9px] font-sans uppercase tracking-wider text-muted-foreground/80 bg-[#080C18]/70 backdrop-blur-sm border border-border/40 px-2.5 py-1.5 leading-none">
              {readTimeLabel}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-serif text-xl text-foreground font-medium mb-2.5 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
            {guide.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-sans flex-grow mb-5">
            {guide.subtitle || guide.excerpt || ""}
          </p>

          <div className="mt-auto border-t border-border/30 pt-3.5 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest font-sans">
              {byLabel} Editorial
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-primary uppercase tracking-widest font-sans group-hover:gap-2.5 transition-all duration-300">
              {readLabel}
              <span className="text-sm leading-none">→</span>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
