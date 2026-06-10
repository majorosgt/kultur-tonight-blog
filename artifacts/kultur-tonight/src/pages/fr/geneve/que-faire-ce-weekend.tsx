import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { EventCard } from "@/components/EventCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";
import { eventsFr } from "@/content/events.fr";

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FrThingsToDoPage() {
  const weekendEvents = eventsFr.filter((e) => e.date === "Ce week-end");

  useSEO({
    title: "Que Faire à Genève ce Week-end | KulturTonight",
    description: "Découvrez les meilleurs événements culturels, spectacles et concerts à Genève ce week-end. Curatés par KulturTonight.",
    ogTitle: "Que Faire à Genève ce Week-end | KulturTonight",
    ogDescription: "Les meilleures sorties culturelles à Genève ce week-end — théâtre, opéra, concerts et plus.",
    canonical: "https://kulturtonight.ch/fr/geneve/que-faire-ce-weekend",
    alternates: buildAlternatesFr("/fr/geneve/que-faire-ce-weekend"),
  });

  return (
    <>
      <Header />
      <main className="pt-24">

        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Genève", href: "/fr/geneve" },
              { label: "Que faire ce week-end" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Que Faire à Genève ce Week-end
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Les meilleures sorties culturelles à Genève ce week-end — spectacles à ne pas manquer, sélectionnés avec soin par nos experts.
            </p>
          </div>

          <SectionHeading
            title="Les Événements du Week-end"
            subtitle={`${weekendEvents.length} événement${weekendEvents.length !== 1 ? "s" : ""} sélectionné${weekendEvents.length !== 1 ? "s" : ""} ce week-end`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {weekendEvents.map((event) => (
              <motion.div key={event.slug} variants={itemVariants} data-testid={`card-event-${event.slug}`}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Ne manquez aucun événement culturel"
          subtitle="Une sélection de théâtres, concerts, expositions et expériences culturelles de dernière minute — envoyée chaque semaine dans votre boîte mail."
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
