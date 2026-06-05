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
import { buildAlternatesFr } from "@/lib/i18n";
import { venuesFr } from "@/content/venues.fr";

const categories = [
  { label: "Tout Genève",  href: "/fr/geneve" },
  { label: "Ce Week-end", href: "/fr/geneve/que-faire-ce-weekend" },
  { label: "Théâtre",     href: "/fr/geneve/theatre" },
  { label: "Concerts",    href: "/fr/geneve/concerts" },
  { label: "Famille",     href: "/fr/geneve/sorties-en-famille" },
  { label: "Lieux",       href: "/fr/geneve/lieux", active: true },
];

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FrVenuesListPage() {
  useSEO({
    title: "Lieux Culturels à Genève | Théâtres & Salles de Concert | KulturTonight",
    description: "Explorez les plus beaux lieux culturels de Genève — du Grand Théâtre aux clubs de jazz intimistes. Découvrez leur histoire et leur programmation.",
    ogTitle: "Lieux Culturels à Genève | KulturTonight",
    ogDescription: "Découvrez les scènes, salles de concert et clubs qui définissent l'identité culturelle de Genève.",
    canonical: "https://kulturtonight.com/fr/geneve/lieux",
    alternates: buildAlternatesFr("/fr/geneve/lieux"),
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <CategoryNav categories={categories} />

        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Genève", href: "/fr/geneve" },
              { label: "Lieux" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Les Lieux Culturels de Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Les salles de spectacle de Genève sont en elles-mêmes des trésors architecturaux et culturels. Chaque lieu porte des siècles d'héritage artistique, offrant au public non seulement un spectacle, mais une expérience esthétique complète.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              De la splendeur baroque du Victoria Hall à l'atmosphère souterraine et intimiste de l'AMR Jazz Club — voici les espaces où l'âme de Genève s'exprime.
            </p>
          </div>

          <SectionHeading
            title="Tous les Lieux"
            subtitle="Les principales scènes et salles de spectacle de Genève — des plus grandioses aux plus intimes."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {venuesFr.map((venue) => (
              <motion.div key={venue.slug} variants={itemVariants} data-testid={`card-venue-${venue.slug}`}>
                <VenueCard venue={venue} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Découvrez les Scènes de Genève"
          subtitle="Rejoignez KulturTonight et bénéficiez d'un accès prioritaire aux billets de dernière minute dans tous les grands lieux de Genève."
          primaryCta={{ text: "Rejoindre l'accès anticipé KulturTonight", href: "#newsletter" }}
          secondaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#newsletter" }}
        />

        <div id="newsletter">
          <NewsletterSignup variant="early-access" />
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
