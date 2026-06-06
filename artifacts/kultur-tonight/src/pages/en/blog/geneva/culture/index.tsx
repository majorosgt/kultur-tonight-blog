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

const cultureGuides = guides.filter((g) => g.category?.toLowerCase().includes("culture") || g.category?.toLowerCase().includes("essay") || g.category?.toLowerCase().includes("context"));
const displayGuides = cultureGuides.length > 0 ? cultureGuides : guides.slice(0, 6);

export default function BlogGenevaCulturePage() {
  useSEO({
    title: "Culture & Context — Geneva Arts Essays | KulturTonight",
    description: "Essays, analysis, and cultural context on Geneva's artistic identity — from its world-class institutions to the grassroots cultural movements shaping the city.",
    canonical: "https://kulturtonight.com/en/blog/geneva/culture",
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
              { label: "Culture & Context" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Culture & Context
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Essays and analysis on Geneva's cultural identity — what makes this city's arts scene unique, and how it fits into the broader European cultural conversation.
            </p>
          </div>

          <SectionHeading title="Cultural Essays" subtitle="Understanding Geneva's artistic soul." />

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
        </div>

        <CTASection
          title="Go Deeper into Geneva's Culture"
          subtitle="Subscribe to the Weekly Guide for editorial essays and cultural context, delivered every Thursday."
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
