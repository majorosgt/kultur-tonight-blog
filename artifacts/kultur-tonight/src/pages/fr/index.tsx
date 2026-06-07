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
    gradient: "linear-gradient(135deg, #1a0a02 0%, #3d1f00 100%)",
  },
  {
    icon: Mail,
    label: "GUIDE HEBDOMADAIRE",
    headline: "La Sélection du Vendredi",
    description: "La meilleure semaine culturelle genevoise, chaque vendredi matin",
    cta: "Recevoir le guide hebdomadaire →",
    href: "#weekly-guide",
    external: false,
    gradient: "linear-gradient(135deg, #020a1a 0%, #003d3d 100%)",
  },
  {
    icon: BookOpen,
    label: "ÉDITORIAL",
    headline: "Guides Culturels Genève",
    description: "Portraits de lieux, guides de la ville et sélections hebdomadaires",
    cta: "Lire le blog →",
    href: "https://blog.kulturtonight.ch/en/geneva/",
    external: true,
    gradient: "linear-gradient(135deg, #020a02 0%, #0d3d1a 100%)",
  },
  {
    icon: MapPin,
    label: "LIEUX",
    headline: "Les Scènes Iconiques de Genève",
    description: "Du Victoria Hall à l'AMR Jazz Club — les lieux qui définissent la ville",
    cta: "Explorer les lieux →",
    href: "/fr/geneve/lieux/",
    external: false,
    gradient: "linear-gradient(135deg, #0a0214 0%, #1f003d 100%)",
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
        <section className="bg-background" style={{ padding: "80px 0" }} data-testid="direction-boxes">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center" style={{ marginBottom: "48px" }}>
              <h2
                className="text-foreground"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                Où voulez-vous aller ce soir ?
              </h2>
              <div style={{ width: "60px", height: "2px", background: "#E1C570", margin: "0 auto" }} />
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 lg:grid-cols-4"
              style={{ gap: "1px" }}
            >
              {directionBoxes.map((box) => {
                const Icon = box.icon;
                const card = (
                  <div
                    className="group relative overflow-hidden flex flex-col transition-all duration-300 hover:[filter:brightness(1.15)] cursor-pointer h-full"
                    style={{
                      minHeight: "380px",
                      backgroundColor: "#080C18",
                      borderTop: "3px solid #E1C570",
                      borderLeft: "1px solid rgba(255,255,255,0.06)",
                      borderRight: "1px solid rgba(255,255,255,0.06)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Gradient image area with icon */}
                    <div
                      className="relative flex items-center justify-center flex-shrink-0"
                      style={{ height: "220px", background: box.gradient }}
                    >
                      <Icon size={48} style={{ color: "#E1C570", opacity: 0.8 }} />
                    </div>

                    {/* Content area */}
                    <div className="flex flex-col flex-grow" style={{ padding: "28px" }}>
                      <p style={{ color: "#E1C570", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, fontFamily: "Inter, sans-serif", marginBottom: "10px" }}>
                        {box.label}
                      </p>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "28px",
                          color: "white",
                          fontWeight: 400,
                          lineHeight: 1.2,
                          marginTop: "0",
                          marginBottom: "12px",
                        }}
                      >
                        {box.headline}
                      </h3>
                      <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, flexGrow: 1, fontFamily: "Inter, sans-serif" }}>
                        {box.description}
                      </p>
                      <div style={{ marginTop: "20px" }}>
                        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "16px" }}>
                          <span style={{ color: "#E1C570", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "Inter, sans-serif" }}>
                            {box.cta}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover gold left border */}
                    <div
                      className="absolute left-0 top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ width: "3px", backgroundColor: "#E1C570" }}
                    />
                  </div>
                );

                return (
                  <motion.div key={box.label} variants={itemVariants}>
                    {box.external ? (
                      <a href={box.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {card}
                      </a>
                    ) : box.href.startsWith("#") ? (
                      <a href={box.href} className="block h-full">
                        {card}
                      </a>
                    ) : (
                      <Link href={box.href} className="block h-full">
                        {card}
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
