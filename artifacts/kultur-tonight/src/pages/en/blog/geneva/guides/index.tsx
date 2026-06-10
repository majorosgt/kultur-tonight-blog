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
import { blogGuides } from "@/content/blog-guides";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function BlogGenevaGuidesPage() {
  useSEO({
    title: "Geneva Cultural Guides | KulturTonight Blog",
    description: "In-depth guides to theatre, classical music, jazz, and cultural life in Geneva — written by cultural insiders.",
    canonical: "https://kulturtonight.ch/en/blog/geneva/guides",
    alternates: [
      { lang: "en", url: "https://kulturtonight.ch/en/blog/geneva/guides" },
      { lang: "fr", url: "https://kulturtonight.ch/fr/blog/geneve/guides" },
      { lang: "x-default", url: "https://kulturtonight.ch/en/blog/geneva/guides" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Geneva Cultural Guides",
      description: "In-depth guides to theatre, classical music, jazz, and cultural life in Geneva.",
      url: "https://kulturtonight.ch/en/blog/geneva/guides",
      publisher: {
        "@type": "Organization",
        name: "KulturTonight",
        url: "https://kulturtonight.ch",
      },
    },
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
              { label: "Guides" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Geneva Cultural Guides
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In-depth guides to Geneva's cultural scene — written by insiders, for those who care about quality.
            </p>
          </div>

          <SectionHeading
            title="All Guides"
            subtitle={`${blogGuides.length} essential reads for the culturally curious.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogGuides.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Culture, Delivered Weekly"
          subtitle="Subscribe to the Weekly Guide and get the best of Geneva's cultural scene every Thursday."
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
