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
  { label: "Concerts",    href: "/fr/geneve/concerts" },
  { label: "Famille",     href: "/fr/geneve/sorties-en-famille", active: true },
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

export default function FrFamilyEventsPage() {
  const familyEvents = eventsFr.filter((e) => e.category === "family");

  useSEO({
    title: "Sorties en Famille à Genève | Culture pour Tous | KulturTonight",
    description: "Découvrez les meilleures sorties culturelles en famille à Genève — spectacles, concerts et événements pour les enfants et les parents.",
    ogTitle: "Sorties en Famille à Genève | KulturTonight",
    ogDescription: "Art et spectacles inspirants pour toute la famille à Genève.",
    canonical: "https://kulturtonight.ch/fr/geneve/sorties-en-famille",
    alternates: buildAlternatesFr("/fr/geneve/sorties-en-famille"),
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
              { label: "Sorties en famille" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Sorties en Famille à Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Des expériences culturelles magiques pour toute la famille — concerts, spectacles et représentations conçus pour éveiller la curiosité artistique des plus jeunes.
            </p>
          </div>

          <SectionHeading
            title="Événements Famille"
            subtitle={`${familyEvents.length} événement${familyEvents.length !== 1 ? "s" : ""} pour la famille`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {familyEvents.map((event) => (
              <motion.div key={event.slug} variants={itemVariants} data-testid={`card-event-${event.slug}`}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="La culture pour toute la famille"
          subtitle="Rejoignez KulturTonight et ne manquez plus aucune sortie culturelle en famille à Genève."
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
