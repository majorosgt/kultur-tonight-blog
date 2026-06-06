import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeHero } from "@/components/HomeHero";
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
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
        <HomeHero />

        {/* Featured Events */}
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
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {featuredEvents.map((event) => (
                <motion.div key={event.slug} variants={itemVariants} data-testid={`card-event-${event.slug}`}>
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA 1 — after events */}
        <CTASection
          variant="hero"
          title="The curtain rises in two hours. Are you in?"
          subtitle="KulturTonight surfaces last-minute seats to Geneva's most coveted performances — often just hours before the curtain rises. Never miss a masterpiece again."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          secondaryCta={{ text: "Browse Tonight's Events", href: "/en/geneva/events" }}
        />

        {/* Featured Venues */}
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
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {featuredVenues.map((venue) => (
                <motion.div key={venue.slug} variants={itemVariants} data-testid={`card-venue-${venue.slug}`}>
                  <VenueCard venue={venue} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA 2 — after venues */}
        <CTASection
          variant="mid"
          title="Every Friday morning, 1,200 culturally curious Genevans open this email."
          subtitle="The weekly Geneva Culture Guide — the finest events, described with the care they deserve. For those who live culture, not just consume it."
          primaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#weekly-guide" }}
        />

        {/* Featured Guides */}
        <section className="py-24 bg-background" data-testid="featured-guides">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Geneva Cultural Guides"
              subtitle="In-depth guides to help you discover the city's rich artistic tapestry."
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {guides.map((guide) => (
                <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                  <GuideCard guide={guide} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter signup */}
        <div id="weekly-guide">
          <NewsletterSignup variant="weekly-guide" />
        </div>

        {/* CTA 3 — footer-cta before Footer */}
        <CTASection
          variant="footer-cta"
          title="Geneva's most sought-after evenings, reserved for those who knew first."
          subtitle="A curated selection of theatre, concerts, exhibitions and last-minute cultural experiences — delivered to your inbox every week."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          secondaryCta={{ text: "Explore Geneva", href: "/en/geneva" }}
        />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
