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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogPage() {
  useSEO({
    title: "Geneva Cultural Blog & Guides | KulturTonight",
    description: "In-depth cultural guides for Geneva — theatre, concerts, family events, and more. Written by passionate cultural insiders.",
    ogTitle: "KulturTonight Blog | Geneva Cultural Guides",
    ogDescription: "Expert cultural guides for Geneva — discover the city's artistic soul through our editorial content.",
    canonical: "https://kulturtonight.com/en/blog",
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Blog" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Geneva Cultural Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In-depth guides, editorial essays, and cultural dispatches from Geneva's most passionate arts insiders.
            </p>
          </div>

          <SectionHeading
            title="Cultural Guides"
            subtitle={`${guides.length} essential reads for the culturally curious Genevan.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {guides.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Culture, Curated Weekly"
          subtitle="Join KulturTonight Early Access and receive our weekly Geneva Culture Guide — the best events and editorial content, delivered every Thursday."
          primaryCta={{ text: "Join KulturTonight Early Access", href: "#newsletter" }}
          secondaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#newsletter" }}
        />

        <div id="newsletter">
          <NewsletterSignup variant="weekly-guide" />
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
