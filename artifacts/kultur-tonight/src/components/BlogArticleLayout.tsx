import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BlogCard } from "@/components/BlogCard";
import type { BlogArticle } from "@/content/blog-guides";

const HERO_PHOTOS: Record<string, string> = {
  guides:        "https://images.unsplash.com/photo-1507676184212-d0330a151f96?q=80&w=1600&auto=format&fit=crop",
  venues:        "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1600&auto=format&fit=crop",
  "this-week":   "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1600&auto=format&fit=crop",
  "this-weekend":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
  events:        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
  seasonal:      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop",
  culture:       "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1600&auto=format&fit=crop",
  family:        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
};

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BlogArticleLayoutProps {
  article: BlogArticle;
  breadcrumbs: BreadcrumbItem[];
  categoryLabel: string;
  backHref: string;
  backLabel: string;
  related: BlogArticle[];
  relatedHref: (slug: string) => string;
  relatedTitle: string;
  relatedSubtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
}

function formatDate(iso: string, locale: "en" | "fr"): string {
  try {
    return new Date(iso).toLocaleDateString(locale === "fr" ? "fr-CH" : "en-GB", {
      year: "numeric", month: "long", day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function BlogArticleLayout({
  article,
  breadcrumbs,
  categoryLabel,
  backHref,
  backLabel,
  related,
  relatedHref,
  relatedTitle,
  relatedSubtitle,
  ctaTitle,
  ctaSubtitle,
}: BlogArticleLayoutProps) {
  const locale = article.lang as "en" | "fr";
  const byLabel = locale === "fr" ? "Par KulturTonight" : "By KulturTonight";
  const publishedLabel = locale === "fr" ? "Publié par" : "Published by";
  const editorial = locale === "fr" ? "KulturTonight Éditorial" : "KulturTonight Editorial";
  const minLabel = locale === "fr" ? "min de lecture" : "min read";

  const heroPhoto = HERO_PHOTOS[article.category] ?? HERO_PHOTOS.guides;
  const paragraphs = article.body.split("\n\n").filter(Boolean);

  return (
    <main className="pt-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero image — full width */}
      <div className="w-full aspect-[21/9] relative overflow-hidden bg-[#0D1424]">
        <img
          src={heroPhoto}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Article */}
      <article className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Category badge */}
            <div className="mb-4">
              <Badge
                variant="outline"
                className="bg-transparent text-primary border-primary/30 uppercase tracking-widest text-[10px] font-sans rounded-none"
              >
                {categoryLabel}
              </Badge>
            </div>

            {/* Gold accent */}
            <div className="w-12 h-1 bg-gold-gradient mb-6" />

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm text-muted-foreground font-sans">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {formatDate(article.date, locale)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {article.readTime} {minLabel}
              </span>
              <span className="text-foreground/60">{byLabel}</span>
            </div>

            {/* Subtitle — italic lede */}
            <p className="text-xl text-foreground/90 leading-relaxed mb-10 font-serif italic border-l-2 border-primary pl-6">
              {article.subtitle}
            </p>

            {/* Body */}
            <div className="prose prose-invert max-w-none">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                  className="text-lg text-foreground/80 leading-relaxed mb-6 font-sans"
                >
                  {para.trim()}
                </motion.p>
              ))}
            </div>

            {/* Article footer */}
            <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{publishedLabel}</p>
                <p className="font-serif text-foreground">{editorial}</p>
              </div>
              <Link href={backHref} className="text-sm text-primary hover:underline underline-offset-4">
                ← {backLabel}
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* CTA block — external link to kulturtonight.ch */}
      <section className="py-16 bg-[#080C18] border-y border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-12 h-[1px] bg-primary/50 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4 leading-tight">
              {ctaTitle}
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8 leading-relaxed">
              {ctaSubtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-sans uppercase tracking-widest text-sm px-10 h-14"
            >
              <a href={article.ctaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                {article.ctaText}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title={relatedTitle} subtitle={relatedSubtitle} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {related.map((rel) => (
                <BlogCard key={rel.slug} article={rel} href={relatedHref(rel.slug)} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterSignup variant="weekly-guide" />
    </main>
  );
}
