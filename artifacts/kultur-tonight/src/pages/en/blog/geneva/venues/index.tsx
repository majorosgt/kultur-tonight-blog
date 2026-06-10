import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogVenues } from "@/content/blog-venues";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function BlogGenevaVenuesPage() {
  useSEO({
    title: "Geneva Venue Spotlights — Cultural Places to Know | KulturTonight",
    description: "In-depth portraits of Geneva's most iconic cultural venues — Victoria Hall, Grand Théâtre, AMR Jazz Club, Théâtre du Léman and more.",
    canonical: "https://kulturtonight.ch/en/blog/geneva/venues",
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
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

          <SectionHeading
            title="Venue Portraits"
            subtitle={`${blogVenues.length} in-depth portraits of Geneva's cultural spaces.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogVenues.map((article) => (
              <motion.div key={article.slug} variants={itemVariants} data-testid={`card-blog-${article.slug}`}>
                <BlogCard article={article} href={`/en/blog/geneva/venues/${article.slug}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Discover Geneva's Cultural Venues"
          subtitle="Subscribe to the Weekly Guide for insider picks and venue recommendations every Thursday."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          secondaryCta={{ text: "Tonight's Events →", href: "https://kulturtonight.ch/en/geneva/" }}
        />
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
