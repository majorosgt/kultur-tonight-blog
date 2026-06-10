import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { EventCard } from "@/components/EventCard";
import { VenueCard } from "@/components/VenueCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { events } from "@/content/events";
import { venues } from "@/content/venues";

export default function GenevaPage() {
  useSEO({
    title: "Cultural Events in Geneva | KulturTonight",
    description: "Explore Geneva's vibrant cultural scene. Theatre, concerts, opera, jazz and more — curated for the culturally curious.",
    ogTitle: "Cultural Geneva | KulturTonight",
    ogDescription: "Your gateway to Geneva's cultural heartbeat — events, venues, and guides.",
    canonical: "https://kulturtonight.ch/en/geneva",
  });

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Discover Cultural Geneva"
          subtitle="From the Grand Théâtre to intimate jazz clubs — Geneva's artistic soul, at your fingertips."
          ctaText="Get the Weekly Guide"
          ctaHref="#newsletter"
          secondaryCtaText="Browse All Events"
          secondaryCtaHref="/en/geneva/events"
        />


        <div className="container mx-auto px-4 md:px-6 pt-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Geneva" },
            ]}
          />
        </div>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mb-16">
              <div className="w-12 h-1 bg-gold-gradient mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Geneva's Cultural Scene
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Geneva is a city that takes culture seriously. Home to some of Europe's most prestigious performance venues, the city offers a cultural programme that rivals Paris and Vienna. From the grandeur of the Grand Théâtre to the underground soul of the AMR Jazz Club, the city's artistic heartbeat is constant and vital.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                KulturTonight is your inside guide to this world — bringing you the performances, venues, and last-minute tickets you need to experience Geneva at its most alive.
              </p>
            </div>

            <SectionHeading
              title="Events Happening in Geneva"
              subtitle="Curated performances across all disciplines — this weekend and beyond."
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {events.slice(0, 4).map((event) => (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  data-testid={`card-event-${event.slug}`}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>

            <SectionHeading
              title="Iconic Venues"
              subtitle="The stages that have shaped Geneva's cultural identity for generations."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue) => (
                <div key={venue.slug} data-testid={`card-venue-${venue.slug}`}>
                  <VenueCard venue={venue} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Your Cultural Guide to Geneva"
          subtitle="Get the Weekly Guide and be the first to discover last-minute tickets to the city's most sought-after performances."
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
