import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";

export default function BlogGenevaThisWeekendPage() {
  useSEO({
    title: "This Weekend in Geneva — Cultural Programme | KulturTonight",
    description: "The best cultural events to attend in Geneva this weekend — theatre, concerts, exhibitions, family activities and last-minute picks.",
    canonical: "https://kulturtonight.com/en/blog/geneva/this-weekend",
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
              { label: "This Weekend" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              This Weekend in Geneva
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A curated weekend programme — the cultural events, performances, and exhibitions worth making time for this weekend in Geneva.
            </p>
          </div>

          <div className="max-w-2xl py-16 border-t border-border/30">
            <div className="w-6 h-[1px] bg-gold-gradient mb-6" />
            <p className="font-serif text-xl text-foreground mb-3">Weekend picks coming soon.</p>
            <p className="text-muted-foreground font-sans">
              Subscribe to the Weekly Guide and receive our curated weekend programme directly in your inbox.
            </p>
          </div>
        </div>

        <CTASection
          title="Plan the Perfect Cultural Weekend"
          subtitle="Every Thursday, we send a curated weekend programme with the best events in Geneva."
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
