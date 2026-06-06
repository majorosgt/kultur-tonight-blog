import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";

export default function BlogGenevaThisWeekPage() {
  useSEO({
    title: "This Week in Geneva — Cultural Events & Picks | KulturTonight",
    description: "The best cultural events, performances, and exhibitions happening in Geneva this week — curated by the KulturTonight editorial team.",
    canonical: "https://kulturtonight.com/en/blog/geneva/this-week",
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
              { label: "This Week" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              This Week in Geneva
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The KulturTonight team's picks for the most compelling cultural events happening in Geneva this week — theatre, concerts, exhibitions, and more.
            </p>
          </div>

          <div className="max-w-2xl py-16 border-t border-border/30">
            <div className="w-6 h-[1px] bg-gold-gradient mb-6" />
            <p className="font-serif text-xl text-foreground mb-3">Weekly picks coming soon.</p>
            <p className="text-muted-foreground font-sans">
              Subscribe to the Weekly Guide and receive our curated selection directly in your inbox every Thursday.
            </p>
          </div>
        </div>

        <CTASection
          title="Never Miss a Cultural Moment"
          subtitle="Our editors curate the best events in Geneva every week. Get it in your inbox every Thursday."
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
