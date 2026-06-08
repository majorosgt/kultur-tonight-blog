// Last updated: June 8, 2026
import { motion } from "framer-motion";
import { Link } from "wouter";
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
    label: "IDÉES DU WEEK-END",
    headline: "Que faire ce week-end",
    description: "Des idées culturelles choisies pour le week-end — expositions, concerts, théâtre, sorties en famille et lieux où prendre le temps.",
    cta: "Explorer les idées →",
    href: "/fr/geneve/que-faire-ce-weekend",
    external: false,
    imageBg: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80')",
  },
  {
    label: "GUIDES",
    headline: "Guides culturels de Genève",
    description: "Des guides éditoriaux pour découvrir les théâtres, musées, salles de concert, quartiers et rythmes culturels de la ville.",
    cta: "Lire les guides →",
    href: "/fr/blog/geneve/guides",
    external: false,
    imageBg: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1562329265-95a6d7a83440?fm=jpg&q=80&w=800&auto=format&fit=crop')",
  },
  {
    label: "HISTOIRE LOCALE",
    headline: "Genève historique et cachée",
    description: "Des histoires, des lieux et des recoins culturels pour regarder Genève au-delà des évidences.",
    cta: "Découvrir les histoires →",
    href: "/fr/blog/geneve/culture",
    external: false,
    imageBg: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?fm=jpg&q=80&w=800&auto=format&fit=crop')",
  },
  {
    label: "LIEUX CULTURELS",
    headline: "Lieux culturels emblématiques",
    description: "Des grandes salles historiques aux scènes indépendantes, explorez les lieux qui façonnent la vie culturelle genevoise.",
    cta: "Explorer les lieux →",
    href: "/fr/geneve/lieux",
    external: false,
    imageBg: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1778975144936-dce6d71e29fa?fm=jpg&q=80&w=800&auto=format&fit=crop')",
  },
];

export default function FrHomePage() {
  useSEO({
    title: "Guide culturel de Genève | KulturTonight",
    description: "Découvrez les meilleures idées de sorties, les lieux culturels, les histoires locales et les inspirations du week-end à Genève — théâtre, concerts, musées et plus encore.",
    ogTitle: "Guide culturel de Genève | KulturTonight",
    ogDescription: "Votre guide premium de la scène culturelle genevoise — les meilleures sorties, lieux culturels, histoires locales et idées du week-end.",
    ogUrl: "https://kulturtonight.ch/fr",
    ogImage: "https://kulturtonight.ch/opengraph.jpg",
    twitterCard: "summary_large_image",
    twitterImage: "https://kulturtonight.ch/opengraph.jpg",
    canonical: "https://kulturtonight.ch/fr",
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
                Que voulez-vous découvrir à Genève ?
              </h2>
              <div style={{ width: "60px", height: "2px", background: "#E1C570", margin: "0 auto" }} />
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 lg:grid-cols-4"
              style={{ gap: "16px" }}
            >
              {directionBoxes.map((box) => {
                const card = (
                  <div
                    className="group relative overflow-hidden flex flex-col cursor-pointer h-full"
                    style={{
                      minHeight: "420px",
                      backgroundColor: "#080C18",
                      borderTop: "3px solid #E1C570",
                      borderLeft: "1px solid rgba(255,255,255,0.06)",
                      borderRight: "1px solid rgba(255,255,255,0.06)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Image area */}
                    <div
                      className="direction-box-image relative flex-shrink-0 group-hover:[filter:brightness(1.15)] transition-[filter] duration-300"
                      style={{
                        height: "220px",
                        background: box.imageBg,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Content area */}
                    <div className="flex flex-col flex-grow" style={{ padding: "24px" }}>
                      <p style={{ color: "#E1C570", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, fontFamily: "Inter, sans-serif", marginBottom: "10px" }}>
                        {box.label}
                      </p>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(22px, 2vw, 28px)",
                          color: "white",
                          fontWeight: 400,
                          lineHeight: 1.2,
                          marginTop: "0",
                          marginBottom: "12px",
                        }}
                      >
                        {box.headline}
                      </h3>
                      <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, flexGrow: 1, fontFamily: "Inter, sans-serif" }}>
                        {box.description}
                      </p>
                      <div style={{ marginTop: "20px" }}>
                        <div style={{ borderTop: "1px solid rgba(255,215,0,0.2)", paddingTop: "16px" }}>
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

        {/* CTA — culture guide */}
        <CTASection
          variant="hero"
          title="Votre guide de la vie culturelle genevoise."
          subtitle="Des lieux emblématiques aux idées du week-end — explorez les histoires, les endroits et les spectacles qui font la culture à Genève."
          primaryCta={{ text: "Explorer les guides de Genève", href: "https://www.kulturtonight.ch/fr", target: "_blank", rel: "noopener noreferrer" }}
          secondaryCta={{ text: "Recevoir le guide hebdomadaire", href: "#weekly-guide" }}
          bgStyle={{
            background: "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Featured Venues */}
        <section className="bg-background" style={{ paddingTop: "100px", paddingBottom: "96px" }} data-testid="featured-venues">
          <div className="container mx-auto px-4 md:px-6">
            <div className="venues-heading-wrap">
              <SectionHeading
                title="Les Lieux Emblématiques de Genève"
                subtitle="D'une salle de concert du XIXe siècle aux clubs de jazz intimistes — les lieux qui définissent l'identité culturelle de Genève."
                subtitleStyle={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', whiteSpace: 'normal' }}
                centered
              />
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {featuredVenues.map((venue) => (
                <motion.div key={venue.slug} variants={itemVariants} data-testid={`card-venue-${venue.slug}`}>
                  <div className="compact-venue h-full">
                    <VenueCard venue={venue} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center" style={{ marginTop: "24px" }}>
              <Link
                href="/fr/geneve/lieux/"
                style={{ color: "#E1C570", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                Explorer tous les lieux genevois →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA — newsletter tease */}
        <CTASection
          variant="mid"
          title="Chaque vendredi matin, 1 200 Genevois passionnés de culture ouvrent cet e-mail."
          subtitle="Le guide culturel hebdomadaire de Genève — les meilleurs événements, décrits avec le soin qu'ils méritent. Pour ceux qui vivent la culture, pas seulement qui la consomment."
          primaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#weekly-guide" }}
          bgStyle={{
            background: "linear-gradient(rgba(10,8,20,0.88), rgba(10,8,20,0.88)), url('https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
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
