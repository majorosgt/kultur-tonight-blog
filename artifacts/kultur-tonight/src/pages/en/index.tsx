import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { EventCard } from "@/components/EventCard";
import { VenueCard } from "@/components/VenueCard";
import { GuideCard } from "@/components/GuideCard";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { events } from "@/content/events";
import { venues } from "@/content/venues";
import { guides } from "@/content/guides";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EnHomePage() {
  useSEO({
    title: "KulturTonight | Geneva's Premium Cultural Discovery Platform",
    description: "Discover the best theatre, concerts, and cultural events in Geneva. Last-minute tickets and curated guides for culturally curious explorers.",
    ogTitle: "KulturTonight | Geneva Cultural Events & Tickets",
    ogDescription: "Your premium guide to Geneva's cultural scene — theatre, concerts, opera, jazz. Never miss a great performance.",
    canonical: "https://kulturtonight.com/en",
  });

  const featuredEvents = events.slice(0, 4);
  const featuredVenues = venues.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Geneva's Cultural Scene, Curated"
          subtitle="Discover exceptional theatre, concerts, and last-minute tickets to Geneva's most sought-after performances."
          ctaText="Join KulturTonight Early Access"
          ctaHref="#newsletter"
          secondaryCtaText="Explore Geneva Events"
          secondaryCtaHref="/en/geneva"
        />

        <section className="py-24 bg-background" data-testid="featured-events">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="This Weekend in Geneva"
              subtitle="Handpicked cultural events happening right now — from opera to intimate jazz."
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {featuredEvents.map((event) => (
                <motion.div key={event.slug} variants={itemVariants} data-testid={`card-event-${event.slug}`}>
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection
          title="Never Miss a Masterpiece"
          subtitle="KulturTonight connects you with last-minute seats to Geneva's most coveted performances — often just hours before the curtain rises."
          primaryCta={{ text: "Join KulturTonight Early Access", href: "#newsletter" }}
          secondaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#newsletter" }}
        />

        <section className="py-24 bg-background" data-testid="featured-venues">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Geneva's Iconic Venues"
              subtitle="From a 19th-century concert hall to intimate jazz clubs — the spaces that define Geneva's cultural identity."
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {featuredVenues.map((venue) => (
                <motion.div key={venue.slug} variants={itemVariants} data-testid={`card-venue-${venue.slug}`}>
                  <VenueCard venue={venue} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 border-t border-border/30" data-testid="featured-guides">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Geneva Cultural Guides"
              subtitle="In-depth guides to help you discover the city's rich artistic tapestry."
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {guides.map((guide) => (
                <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                  <GuideCard guide={guide} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div id="newsletter">
          <NewsletterSignup variant="early-access" />
          <NewsletterSignup variant="weekly-guide" />
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
