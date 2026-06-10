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
import { buildAlternatesFr } from "@/lib/i18n";
import { eventsFr } from "@/content/events.fr";
import { venuesFr } from "@/content/venues.fr";

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FrGenevePage() {
  useSEO({
    title: "Événements Culturels à Genève | KulturTonight",
    description: "Explorez la scène culturelle genevoise. Théâtre, concerts, opéra, jazz et plus — curatés pour les curieux de culture.",
    ogTitle: "Genève Culturelle | KulturTonight",
    ogDescription: "Votre porte d'entrée vers le cœur culturel de Genève — événements, lieux et guides.",
    canonical: "https://kulturtonight.ch/fr/geneve",
    alternates: buildAlternatesFr("/fr/geneve"),
  });

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Découvrir la Genève Culturelle"
          subtitle="Du Grand Théâtre aux clubs de jazz intimistes — l'âme artistique de Genève, à portée de main."
          ctaText="Recevoir le guide hebdomadaire"
          ctaHref="#newsletter"
          secondaryCtaText="Tous les événements"
          secondaryCtaHref="/fr/geneve/evenements"
          imageAlt="Salle de concert genevoise illuminée aux dorures somptueuses"
        />


        <div className="container mx-auto px-4 md:px-6 pt-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Genève" },
            ]}
          />
        </div>

        <section className="py-24 bg-background" data-testid="featured-events">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Ce Week-end à Genève"
              subtitle="Les événements culturels les plus attendus — de l'opéra au jazz intime."
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {eventsFr.slice(0, 4).map((event) => (
                <motion.div key={event.slug} variants={itemVariants} data-testid={`card-event-${event.slug}`}>
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection
          title="Guide Culturel Hebdomadaire"
          subtitle="Rejoignez KulturTonight et recevez en premier les alertes billets de dernière minute pour les meilleurs spectacles de Genève."
          primaryCta={{ text: "Recevoir le guide hebdomadaire", href: "#weekly-guide" }}
          secondaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#weekly-guide" }}
        />

        <section className="py-24 bg-background" data-testid="featured-venues">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Les Lieux Culturels Emblématiques"
              subtitle="Des salles historiques aux clubs intimistes — les espaces qui définissent l'âme culturelle de Genève."
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {venuesFr.slice(0, 3).map((venue) => (
                <motion.div key={venue.slug} variants={itemVariants} data-testid={`card-venue-${venue.slug}`}>
                  <VenueCard venue={venue} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div id="newsletter">
          <NewsletterSignup variant="weekly-guide" />
        </div>
        <div id="weekly-guide">
          <NewsletterSignup variant="weekly-guide" />
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
