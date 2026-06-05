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
import { buildAlternatesFr } from "@/lib/i18n";
import { eventsFr } from "@/content/events.fr";
import { venuesFr } from "@/content/venues.fr";
import { guidesFr } from "@/content/guides.fr";

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FrHomePage() {
  useSEO({
    title: "KulturTonight | La Plateforme Premium de Découverte Culturelle à Genève",
    description: "Découvrez les meilleurs spectacles de théâtre, concerts et événements culturels à Genève. Billets de dernière minute et guides curatés pour les curieux de culture.",
    ogTitle: "KulturTonight | Événements Culturels à Genève",
    ogDescription: "Votre guide premium de la scène culturelle genevoise — théâtre, concerts, opéra, jazz. Ne manquez jamais un grand spectacle.",
    canonical: "https://kulturtonight.com/fr",
    alternates: buildAlternatesFr("/fr"),
  });

  const featuredEvents = eventsFr.slice(0, 4);
  const featuredVenues = venuesFr.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <Hero
          title="La Scène Culturelle Genevoise, Curatée"
          subtitle="Découvrez des spectacles de théâtre, concerts exceptionnels et billets de dernière minute pour les représentations les plus convoitées de Genève."
          ctaText="Rejoindre l'accès anticipé KulturTonight"
          ctaHref="#newsletter"
          secondaryCtaText="Explorer les événements genevois"
          secondaryCtaHref="/fr/geneve"
          imageAlt="Intérieur d'une grande salle de concert dorée avec une architecture somptueuse"
        />

        {/* Featured Events */}
        <section className="py-24 bg-background" data-testid="featured-events">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Ce Week-end à Genève"
              subtitle="Les événements culturels les plus attendus en ce moment — de l'opéra au jazz intime."
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

        <CTASection
          variant="hero"
          title="Le rideau se lève dans deux heures. Vous venez ?"
          subtitle="KulturTonight révèle les places de dernière minute pour les spectacles les plus convoités de Genève — souvent quelques heures seulement avant le lever de rideau. Ne manquez plus jamais un chef-d'œuvre."
          primaryCta={{ text: "Rejoindre l'accès anticipé KulturTonight", href: "#newsletter" }}
          secondaryCta={{ text: "Les événements de ce soir", href: "/fr/geneve/evenements" }}
        />

        {/* Featured Venues */}
        <section className="py-24 bg-background" data-testid="featured-venues">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Les Lieux Emblématiques de Genève"
              subtitle="D'une salle de concert du XIXe siècle aux clubs de jazz intimistes — les espaces qui définissent l'identité culturelle genevoise."
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

        <CTASection
          variant="mid"
          title="Chaque vendredi matin, 1 200 Genevois passionnés de culture ouvrent cet e-mail."
          subtitle="Le guide culturel hebdomadaire de Genève — les meilleurs événements, décrits avec le soin qu'ils méritent. Pour ceux qui vivent la culture, pas seulement qui la consomment."
          primaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#weekly-guide" }}
        />

        {/* Featured Guides */}
        <section className="py-24 bg-background" data-testid="featured-guides">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Guides Culturels de Genève"
              subtitle="Des guides approfondis pour vous aider à découvrir la riche tapisserie artistique de la ville."
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {guidesFr.map((guide) => (
                <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                  <GuideCard guide={guide} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div id="newsletter">
          <NewsletterSignup variant="early-access" />
        </div>
        <div id="weekly-guide">
          <NewsletterSignup variant="weekly-guide" />
        </div>

        <CTASection
          variant="footer-cta"
          title="Les soirées les plus convoitées de Genève, réservées à ceux qui savaient en premier."
          subtitle="Devenez un initié KulturTonight. Accès anticipé exclusif aux billets de dernière minute, guides hebdomadaires curatés et une place au premier rang des plus beaux moments culturels de la ville."
          primaryCta={{ text: "Rejoindre l'accès anticipé KulturTonight", href: "#newsletter" }}
          secondaryCta={{ text: "Explorer Genève", href: "/fr/geneve" }}
        />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
