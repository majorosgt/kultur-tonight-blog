import { motion } from "framer-motion";
import { Link } from "wouter";
import { Ticket, Mail, BookOpen, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeHero } from "@/components/HomeHero";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { VenueCard } from "@/components/VenueCard";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";
import { venuesFr } from "../../content/venues.fr";

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const directionBoxes = [
  {
    icon: Ticket,
    label: "CE SOIR",
    headline: "Ce soir à Genève",
    description: "Opéra, jazz, théâtre — dernières places à 21h00",
    cta: "Voir les événements ce soir →",
    href: "https://kulturtonight.ch/en/geneva/events/",
    external: true,
  },
  {
    icon: Mail,
    label: "GUIDE HEBDOMADAIRE",
    headline: "La Sélection du Vendredi",
    description: "La meilleure semaine culturelle genevoise, chaque vendredi matin",
    cta: "Recevoir le guide hebdomadaire →",
    href: "#weekly-guide",
    external: false,
  },
  {
    icon: BookOpen,
    label: "ÉDITORIAL",
    headline: "Guides Culturels Genève",
    description: "Portraits de lieux, guides de la ville et sélections hebdomadaires",
    cta: "Lire le blog →",
    href: "https://blog.kulturtonight.ch/en/geneva/",
    external: true,
  },
  {
    icon: MapPin,
    label: "LIEUX",
    headline: "Les Scènes Iconiques de Genève",
    description: "Du Victoria Hall à l'AMR Jazz Club — les lieux qui définissent la ville",
    cta: "Explorer les lieux →",
    href: "/fr/geneve/lieux/",
    external: false,
  },
];

export default function FrHomePage() {
  useSEO({
    title: "KulturTonight | La Plateforme Premium de Découverte Culturelle à Genève",
    description: "Découvrez les meilleurs spectacles de théâtre, concerts et événements culturels à Genève. Billets de dernière minute et guides curatés pour les curieux de culture.",
    ogTitle: "KulturTonight | Événements Culturels à Genève",
    ogDescription: "Votre guide premium de la scène culturelle genevoise — théâtre, concerts, opéra, jazz. Ne manquez jamais un grand spectacle.",
    canonical: "https://kulturtonight.com/fr",
    alternates: buildAlternatesFr("/fr"),
  });

  const featuredVenues = venuesFr.filter(v =>
    ['victoria-hall', 'grand-theatre-de-geneve', 'batiment-des-forces-motrices'].includes(v.slug)
  );

  return (
    <>
      <Header />
      <main>
        <HomeHero />

        {/* Direction Boxes */}
        <section className="py-20 bg-background" data-testid="direction-boxes">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Où voulez-vous aller ce soir ?
              </h2>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {directionBoxes.map((box) => {
                const Icon = box.icon;
                const inner = (
                  <div
                    className="group h-full flex flex-col gap-4 p-6 bg-card rounded-sm transition-colors hover:bg-muted cursor-pointer"
                    style={{ borderTop: "2px solid #E1C570" }}
                  >
                    <Icon size={22} style={{ color: "#E1C570" }} />
                    <p
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: "#E1C570" }}
                    >
                      {box.label}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-foreground leading-snug">
                      {box.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {box.description}
                    </p>
                    <span className="text-sm font-medium text-foreground group-hover:underline">
                      {box.cta}
                    </span>
                  </div>
                );

                return (
                  <motion.div key={box.label} variants={itemVariants}>
                    {box.external ? (
                      <a href={box.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {inner}
                      </a>
                    ) : box.href.startsWith("#") ? (
                      <a href={box.href} className="block h-full">
                        {inner}
                      </a>
                    ) : (
                      <Link href={box.href} className="block h-full">
                        {inner}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA — rideau */}
        <CTASection
          variant="hero"
          title="Le rideau se lève dans deux heures. Vous venez ?"
          subtitle="KulturTonight révèle les places de dernière minute pour les spectacles les plus convoités de Genève — souvent quelques heures seulement avant le lever de rideau. Ne manquez plus jamais un chef-d'œuvre."
          primaryCta={{ text: "Recevoir le guide hebdomadaire", href: "#weekly-guide" }}
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

        {/* CTA — newsletter tease */}
        <CTASection
          variant="mid"
          title="Chaque vendredi matin, 1 200 Genevois passionnés de culture ouvrent cet e-mail."
          subtitle="Le guide culturel hebdomadaire de Genève — les meilleurs événements, décrits avec le soin qu'ils méritent. Pour ceux qui vivent la culture, pas seulement qui la consomment."
          primaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#weekly-guide" }}
        />

        {/* Newsletter signup */}
        <div id="weekly-guide">
          <NewsletterSignup variant="weekly-guide" />
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
