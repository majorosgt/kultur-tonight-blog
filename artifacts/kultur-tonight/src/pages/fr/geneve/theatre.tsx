import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { EventCard } from "@/components/EventCard";
import { CategoryNav } from "@/components/CategoryNav";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";
import { eventsFr } from "@/content/events.fr";

const categories = [
  { label: "Tout Genève",  href: "/fr/geneve" },
  { label: "Ce Week-end", href: "/fr/geneve/que-faire-ce-weekend" },
  { label: "Théâtre",     href: "/fr/geneve/theatre", active: true },
  { label: "Concerts",    href: "/fr/geneve/concerts" },
  { label: "Famille",     href: "/fr/geneve/sorties-en-famille" },
  { label: "Lieux",       href: "/fr/geneve/lieux" },
];

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FrTheatrePage() {
  const theatreEvents = eventsFr.filter((e) => e.category === "theatre");

  useSEO({
    title: "Théâtre à Genève | Spectacles & Billets | KulturTonight",
    description: "Découvrez les meilleurs spectacles de théâtre à Genève. Productions contemporaines et classiques dans les plus grandes salles de la ville.",
    ogTitle: "Théâtre à Genève | KulturTonight",
    ogDescription: "Les meilleures pièces de théâtre à Genève — du Grand Théâtre aux scènes intimistes.",
    canonical: "https://kulturtonight.ch/fr/geneve/theatre",
    alternates: buildAlternatesFr("/fr/geneve/theatre"),
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
              { label: "Théâtre" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Théâtre à Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Des pièces contemporaines aux grandes productions classiques — la scène théâtrale genevoise dans toute sa splendeur.
            </p>
          </div>

          <SectionHeading
            title="Spectacles de Théâtre"
            subtitle={`${theatreEvents.length} spectacle${theatreEvents.length !== 1 ? "s" : ""} à l'affiche`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {theatreEvents.map((event) => (
              <motion.div key={event.slug} variants={itemVariants} data-testid={`card-event-${event.slug}`}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Billets de Théâtre de Dernière Minute"
          subtitle="Rejoignez KulturTonight et ne manquez jamais un spectacle à Genève."
          primaryCta={{ text: "Recevoir le guide hebdomadaire", href: "#weekly-guide" }}
          secondaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#weekly-guide" }}
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
