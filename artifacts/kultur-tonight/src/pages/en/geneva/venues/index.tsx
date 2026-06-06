import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { VenueCard } from "@/components/VenueCard";
import { CategoryNav } from "@/components/CategoryNav";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { venues } from "@/content/venues";

const categories = [
  { label: "All Geneva", href: "/en/geneva" },
  { label: "This Weekend", href: "/en/geneva/things-to-do-this-weekend" },
  { label: "Theatre", href: "/en/geneva/theatre" },
  { label: "Concerts", href: "/en/geneva/concerts" },
  { label: "Family", href: "/en/geneva/family-events" },
  { label: "Venues", href: "/en/geneva/venues", active: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function VenuesListPage() {
  useSEO({
    title: "Cultural Venues in Geneva | Theatres & Concert Halls | KulturTonight",
    description: "Explore Geneva's finest cultural venues — from the Grand Théâtre to intimate jazz clubs. Find events and plan your visit.",
    ogTitle: "Cultural Venues in Geneva | KulturTonight",
    ogDescription: "Discover the stages, concert halls, and clubs that define Geneva's cultural identity.",
    canonical: "https://kulturtonight.com/en/geneva/venues",
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <CategoryNav categories={categories} />

        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Geneva", href: "/en/geneva" },
              { label: "Venues" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Geneva's Cultural Venues
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Geneva's performance spaces are architectural and cultural treasures in themselves. Each venue carries centuries of artistic heritage, offering audiences not just a performance but a complete aesthetic experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the baroque splendour of Victoria Hall to the intimate underground atmosphere of AMR Jazz Club — these are the spaces where Geneva's soul is expressed.
            </p>
          </div>

          <SectionHeading
            title="All Venues"
            subtitle="Geneva's principal stages and performance spaces — from the grandest to the most intimate."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {venues.map((venue) => (
              <motion.div key={venue.slug} variants={itemVariants} data-testid={`card-venue-${venue.slug}`}>
                <VenueCard venue={venue} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Discover Geneva's Stages"
          subtitle="Join KulturTonight and get first access to last-minute tickets at all of Geneva's premier venues."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          secondaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#weekly-guide" }}
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
