import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";

export default function BlogGenevaSeasonalPage() {
  useSEO({
    title: "Seasonal Cultural Guides for Geneva | KulturTonight",
    description: "What to see and do in Geneva, season by season — the best cultural events, festivals, and experiences throughout the year.",
    canonical: "https://kulturtonight.com/en/blog/geneva/seasonal",
  });

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
              { label: "Seasonal Guides" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Seasonal Guides
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Geneva's cultural calendar changes with the seasons. From summer festivals to winter opera premieres — our seasonal guides help you plan ahead.
            </p>
          </div>

          <div className="max-w-2xl py-16 border-t border-border/30">
            <div className="w-6 h-[1px] bg-gold-gradient mb-6" />
            <p className="font-serif text-xl text-foreground mb-3">Seasonal content coming soon.</p>
            <p className="text-muted-foreground font-sans">
              Subscribe to the Weekly Guide and be the first to receive our seasonal cultural round-ups.
            </p>
          </div>
        </div>

        <CTASection
          title="Stay Ahead of the Season"
          subtitle="Our seasonal guides help you plan the best cultural experiences in Geneva throughout the year."
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
