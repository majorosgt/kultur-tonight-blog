import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { GuideCard } from "@/components/GuideCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { guides } from "@/content/guides";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export default function BlogGenevaCultureDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
            <Link href="/en/blog/geneva/culture" className="text-primary hover:underline">Back to Culture & Context</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  useSEO({
    title: guide.seoTitle,
    description: guide.seoDescription,
    ogTitle: guide.ogTitle,
    ogDescription: guide.ogDescription,
    canonical: `https://kulturtonight.com/en/blog/geneva/culture/${guide.slug}`,
    jsonLd: articleSchema(guide),
  });

  const paragraphs = guide.body.split("\n\n").filter(Boolean);
  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Blog", href: "/en/blog" },
              { label: "Geneva", href: "/en/blog/geneva" },
              { label: "Culture & Context", href: "/en/blog/geneva/culture" },
              { label: guide.title },
            ]}
          />
        </div>
        <article className="py-12 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="mb-4"><Badge variant="outline" className="bg-transparent text-primary border-primary/30 uppercase tracking-widest text-[10px] font-sans rounded-none">Culture & Context</Badge></div>
              <div className="w-12 h-1 bg-gold-gradient mb-6" />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8 leading-tight">{guide.title}</h1>
              <div className="flex flex-wrap gap-6 mb-10 text-sm text-muted-foreground font-sans">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" />{new Date(guide.publishedAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{guide.readTime}</span>
                <span className="text-foreground/60">By KulturTonight</span>
              </div>
              <div className="aspect-[16/7] w-full bg-gradient-to-br from-secondary via-[#1a0a14] to-background mb-12 border border-border/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <p className="text-xl text-foreground/90 leading-relaxed mb-10 font-serif italic border-l-2 border-primary pl-6">{guide.excerpt}</p>
              <div className="prose prose-invert max-w-none">
                {paragraphs.map((para, i) => <p key={i} className="text-lg text-foreground/80 leading-relaxed mb-6 font-sans">{para.trim()}</p>)}
              </div>
              <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div><p className="text-sm text-muted-foreground mb-1">Published by</p><p className="font-serif text-foreground">KulturTonight Editorial</p></div>
                <Link href="/en/blog/geneva/culture" className="text-sm text-primary hover:underline underline-offset-4">← Back to Culture & Context</Link>
              </div>
            </div>
          </div>
        </article>
        {related.length > 0 && (
          <section className="py-16 border-t border-border/30">
            <div className="container mx-auto px-4 md:px-6">
              <SectionHeading title="More Reads" subtitle="Continue exploring Geneva's cultural landscape." />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {related.map((g) => <div key={g.slug}><GuideCard guide={g} /></div>)}
              </div>
            </div>
          </section>
        )}
        <CTASection
          title="Culture, Delivered Weekly"
          subtitle="Subscribe and receive our curated Geneva Culture Guide every Thursday."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          secondaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#weekly-guide" }}
        />
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
