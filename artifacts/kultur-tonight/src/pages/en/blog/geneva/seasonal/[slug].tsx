import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";

export default function BlogGenevaSeasonalDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  useSEO({
    title: `${slug?.replace(/-/g, " ")} — Seasonal Guide Geneva | KulturTonight`,
    description: "A seasonal cultural guide for Geneva.",
    canonical: `https://kulturtonight.com/en/blog/geneva/seasonal/${slug}`,
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
              { label: "Seasonal Guides", href: "/en/blog/geneva/seasonal" },
              { label: slug ?? "" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 capitalize">
              {slug?.replace(/-/g, " ")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This seasonal guide is not yet available. Subscribe to receive it when published.
            </p>
          </div>
          <Link href="/en/blog/geneva/seasonal" className="text-sm text-primary hover:underline underline-offset-4">← Back to Seasonal Guides</Link>
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
