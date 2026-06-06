import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { GuideCard } from "@/components/GuideCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { guides } from "@/content/guides";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const venueGuides = guides.filter((g) => g.category?.toLowerCase().includes("venue") || g.category?.toLowerCase().includes("place"));
const displayGuides = venueGuides.length > 0 ? venueGuides : guides.slice(0, 6);

export default function BlogGenevaVenuesPage() {
  useSEO({
    title: "Geneva Venue Spotlights — Cultural Places to Know | KulturTonight",
    description: "In-depth portraits of Geneva's most iconic cultural venues — from historic theatres to contemporary concert halls and independent arts spaces.",
    canonical: "https://kulturtonight.com/en/blog/geneva/venues",
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
              { label: "Venue Spotlights" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Venue Spotlights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deep dives into the theatres, concert halls, galleries, and cultural spaces that define Geneva's arts scene.
            </p>
          </div>

          <SectionHeading title="Venue Portraits" subtitle="The spaces behind the experiences." />

          {displayGuides.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
            >
              {displayGuides.map((guide) => (
                <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                  <GuideCard guide={guide} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-muted-foreground font-sans mb-16">Venue spotlight articles coming soon.</p>
          )}
        </div>

        <CTASection
          title="Discover Geneva's Cultural Venues"
          subtitle="Subscribe to the Weekly Guide for insider picks and venue recommendations every Thursday."
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
