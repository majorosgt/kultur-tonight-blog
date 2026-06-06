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
import { blogThisWeek } from "@/content/blog-this-week";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function BlogGenevaThisWeekPage() {
  useSEO({
    title: "What's On in Geneva This Week — Cultural Picks | KulturTonight",
    description: "The best theatre, opera, concerts, and cultural events in Geneva this week. Updated weekly by the KulturTonight editorial team.",
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
              Our editors' picks for the most compelling cultural experiences in Geneva this week — theatre, opera, jazz, and more.
            </p>
          </div>

          <SectionHeading
            title="This Week's Picks"
            subtitle={`${blogThisWeek.length} essential cultural experiences not to miss.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogThisWeek.map((article) => (
              <motion.div key={article.slug} variants={itemVariants} data-testid={`card-blog-${article.slug}`}>
                <BlogCard article={article} href={`/en/blog/geneva/this-week/${article.slug}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Never Miss a Night Out"
          subtitle="Subscribe to the Weekly Guide and get Geneva's best cultural picks delivered every Thursday."
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
