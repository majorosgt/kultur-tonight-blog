import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { GuideCard } from "@/components/GuideCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogGuidesFr } from "@/content/blog-guides.fr";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

function renderBody(body: string) {
  const blocks = body.split("\n\n").filter(Boolean);
  return blocks.map((block, i) => {
    const trimmed = block.trim();

    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(22px, 3vw, 28px)",
            color: "#E1C570",
            fontWeight: 400,
            marginTop: "2.5rem",
            marginBottom: "1rem",
            lineHeight: 1.3,
          }}
        >
          {trimmed.replace(/^## /, "")}
        </h2>
      );
    }

    if (trimmed.startsWith("*") && trimmed.endsWith("*")) {
      return (
        <p key={i} className="text-base text-foreground/60 leading-relaxed font-sans italic border-l-2 border-primary/30 pl-4 my-4">
          {trimmed.slice(1, -1)}
        </p>
      );
    }

    if (trimmed.startsWith("**")) {
      const parts = trimmed.split(/\*\*(.+?)\*\*/g);
      return (
        <p key={i} className="text-lg text-foreground/80 leading-relaxed font-sans mb-4">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part
          )}
        </p>
      );
    }

    return (
      <p key={i} className="text-lg text-foreground/80 leading-relaxed font-sans mb-4">
        {trimmed}
      </p>
    );
  });
}

export default function FrBlogGenevaGuideArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = blogGuidesFr.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article introuvable</h1>
            <Link href="/fr/blog/geneve/guides" className="text-primary hover:underline">
              Retour aux guides
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const frToEnSlug: Record<string, string> = {
    "meilleurs-theatres-geneve": "best-theatres-geneva",
    "billets-theatre-pas-cher-geneve": "how-to-get-cheap-theatre-tickets-geneva",
    "musique-classique-geneve-guide": "classical-music-geneva-complete-guide",
    "scene-jazz-geneve-guide": "geneva-jazz-scene-complete-guide",
    "que-faire-geneve-ce-weekend": "things-to-do-geneva-this-weekend",
    "meilleur-opera-geneve": "best-opera-in-geneva",
    "meilleures-salles-musique-live-geneve": "best-live-music-venues-geneva",
    "sorties-culturelles-famille-geneve": "family-cultural-events-geneva",
  };
  const enSlug = frToEnSlug[slug] ?? slug;

  useSEO({
    title: guide.metaTitle ?? guide.title,
    description: guide.metaDescription ?? guide.subtitle,
    canonical: `https://kulturtonight.ch/fr/blog/geneve/guides/${guide.slug}`,
    alternates: [
      { lang: "en", url: `https://kulturtonight.ch/en/blog/geneva/guides/${enSlug}` },
      { lang: "fr", url: `https://kulturtonight.ch/fr/blog/geneve/guides/${slug}` },
      { lang: "x-default", url: `https://kulturtonight.ch/en/blog/geneva/guides/${enSlug}` },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.metaDescription ?? guide.subtitle,
      image: guide.image,
      datePublished: guide.date,
      dateModified: guide.date,
      author: {
        "@type": "Organization",
        name: "KulturTonight Éditorial",
        url: "https://kulturtonight.ch",
      },
      publisher: {
        "@type": "Organization",
        name: "KulturTonight",
        url: "https://kulturtonight.ch",
      },
      url: `https://kulturtonight.ch/fr/blog/geneve/guides/${guide.slug}`,
      inLanguage: "fr",
      about: {
        "@type": "City",
        name: "Genève",
        containedInPlace: {
          "@type": "Country",
          name: "Suisse",
        },
      },
    },
  });

  const related = blogGuidesFr.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Blog", href: "/fr/blog" },
              { label: "Genève", href: "/fr/blog/geneve" },
              { label: "Guides", href: "/fr/blog/geneve/guides" },
              { label: guide.title },
            ]}
          />
        </div>

        {/* Hero image */}
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <article className="py-12 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="mb-4 flex items-center gap-3">
                <Badge variant="outline" className="bg-transparent text-primary border-primary/30 uppercase tracking-widest text-[10px] font-sans rounded-none">
                  Guide
                </Badge>
              </div>
              <div className="w-12 h-1 bg-gold-gradient mb-6" />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
                {guide.title}
              </h1>
              <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
                {guide.subtitle}
              </p>
              <div className="flex flex-wrap gap-6 mb-12 text-sm text-muted-foreground font-sans">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {new Date(guide.date).toLocaleDateString("fr-CH", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {guide.readTime} min de lecture
                </span>
                <span className="text-foreground/60">Par KulturTonight</span>
              </div>

              {/* Body */}
              <div className="mb-16">
                {renderBody(guide.body)}
              </div>

              {/* CTA block */}
              <div
                className="border border-primary/30 p-8 mb-12 text-center"
                style={{ background: "rgba(225,197,112,0.05)" }}
              >
                <a
                  href={guide.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-black bg-gold-gradient px-8 py-4 hover:opacity-90 transition-opacity"
                  data-testid="link-guide-cta"
                >
                  {guide.ctaText}
                </a>
              </div>

              <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Publié par</p>
                  <p className="font-serif text-foreground">KulturTonight Éditorial</p>
                </div>
                <Link href="/fr/blog/geneve/guides" className="text-sm text-primary hover:underline underline-offset-4">
                  ← Retour aux guides
                </Link>
              </div>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="py-16 border-t border-border/30">
            <div className="container mx-auto px-4 md:px-6">
              <SectionHeading title="Autres guides culturels" subtitle="Continuez à explorer la vie culturelle genevoise." />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {related.map((g) => <div key={g.slug}><GuideCard guide={g} /></div>)}
              </div>
            </div>
          </section>
        )}

        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
