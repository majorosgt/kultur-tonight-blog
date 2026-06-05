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
  { label: "Théâtre",     href: "/fr/geneve/theatre" },
  { label: "Concerts",    href: "/fr/geneve/concerts", active: true },
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

export default function FrConcertsPage() {
  const concertEvents = eventsFr.filter((e) =>
    ["concerts", "jazz", "classical"].includes(e.category)
  );

  useSEO({
    title: "Concerts à Genève | Musique Live | KulturTonight",
    description: "Retrouvez les meilleurs concerts à Genève — classique, jazz, rock et musiques contemporaines dans les plus belles salles de la ville.",
    ogTitle: "Concerts à Genève | KulturTonight",
    ogDescription: "La musique live à Genève — symphonies, jazz et concerts contemporains.",
    canonical: "https://kulturtonight.com/fr/geneve/concerts",
    alternates: buildAlternatesFr("/fr/geneve/concerts"),
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
              { label: "Concerts" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Concerts à Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Des symphonies au Victoria Hall aux nuits de jazz à l'AMR — la musique live genevoise dans toute sa diversité.
            </p>
          </div>

          <SectionHeading
            title="Concerts & Musique Live"
            subtitle={`${concertEvents.length} concert${concertEvents.length !== 1 ? "s" : ""} à venir`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {concertEvents.map((event) => (
              <motion.div key={event.slug} variants={itemVariants} data-testid={`card-event-${event.slug}`}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Ne manquez plus aucun concert"
          subtitle="Rejoignez KulturTonight et recevez en premier les alertes billets pour les concerts les plus attendus de Genève."
          primaryCta={{ text: "Rejoindre l'accès anticipé KulturTonight", href: "#newsletter" }}
          secondaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#newsletter" }}
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
