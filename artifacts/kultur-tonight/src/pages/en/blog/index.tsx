import { motion } from "framer-motion";
import { Link } from "wouter";
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

const categories = [
  { slug: "guides",       label: "Evergreen Guides",        desc: "Timeless cultural guides to Geneva's arts scene." },
  { slug: "venues",       label: "Venue Spotlights",        desc: "Deep dives into Geneva's most iconic cultural venues." },
  { slug: "this-week",    label: "This Week in Geneva",     desc: "The best cultural events happening this week." },
  { slug: "this-weekend", label: "This Weekend",            desc: "A curated weekend programme for the culturally curious." },
  { slug: "events",       label: "Event Features",          desc: "Long-reads on standout performances and exhibitions." },
  { slug: "seasonal",     label: "Seasonal Guides",         desc: "What to see and do in Geneva, season by season." },
  { slug: "culture",      label: "Culture & Context",       desc: "Essays on Geneva's artistic identity and cultural life." },
  { slug: "family",       label: "Family Culture",          desc: "Cultural experiences designed for families in Geneva." },
];

export default function BlogPage() {
  useSEO({
    title: "Geneva Cultural Blog & Guides | KulturTonight",
    description: "In-depth cultural guides for Geneva — theatre, concerts, family events, and more. Written by passionate cultural insiders.",
    ogTitle: "KulturTonight Blog | Geneva Cultural Guides",
    ogDescription: "Expert cultural guides for Geneva — discover the city's artistic soul through our editorial content.",
    canonical: "https://kulturtonight.ch/en/blog",
  });

  const featured = guides.slice(0, 3);

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

          {/* Category hub */}
          <SectionHeading title="Browse by Category" subtitle="Eight editorial sections, one cultural city." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/en/blog/geneva/${cat.slug}`}
                className="group block p-6 border border-border/40 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-6 h-[1px] bg-gold-gradient mb-4 group-hover:w-10 transition-all duration-300" />
                <p className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {cat.label}
                </p>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>

          {/* Featured articles */}
          <SectionHeading
            title="Featured Guides"
            subtitle={`${guides.length} essential reads for the culturally curious Genevan.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {featured.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Culture, Curated Weekly"
          subtitle="Get the Weekly Guide and receive our weekly Geneva Culture Guide — the best events and editorial content, delivered every Thursday."
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
