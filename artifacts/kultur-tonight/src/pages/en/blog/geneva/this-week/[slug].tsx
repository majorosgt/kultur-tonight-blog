import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";

export default function BlogGenevaThisWeekDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  useSEO({
    title: `This Week in Geneva — ${slug} | KulturTonight`,
    description: "A curated selection of the best cultural events in Geneva this week.",
    canonical: `https://kulturtonight.com/en/blog/geneva/this-week/${slug}`,
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
              { label: "This Week", href: "/en/blog/geneva/this-week" },
              { label: slug ?? "" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 capitalize">
              {slug?.replace(/-/g, " ")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This weekly edition is not yet available. Subscribe to receive future editions directly in your inbox.
            </p>
          </div>

          <Link href="/en/blog/geneva/this-week" className="text-sm text-primary hover:underline underline-offset-4">
            ← Back to This Week in Geneva
          </Link>
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
