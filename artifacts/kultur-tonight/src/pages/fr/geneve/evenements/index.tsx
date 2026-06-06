import { useState } from "react";
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

const navCategories = [
  { label: "Tout Genève",  href: "/fr/geneve" },
  { label: "Ce Week-end", href: "/fr/geneve/que-faire-ce-weekend" },
  { label: "Théâtre",     href: "/fr/geneve/theatre" },
  { label: "Concerts",    href: "/fr/geneve/concerts" },
  { label: "Famille",     href: "/fr/geneve/sorties-en-famille" },
  { label: "Lieux",       href: "/fr/geneve/lieux" },
];

const filterCategories = ["Tous", "opéra", "concerts", "théâtre", "jazz", "famille"];
const filterToSlug: Record<string, string> = {
  "Tous": "All",
  "opéra": "opera",
  "concerts": "concerts",
  "théâtre": "theatre",
  "jazz": "jazz",
  "famille": "family",
};

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FrEventsListPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  useSEO({
    title: "Tous les Événements Culturels à Genève | KulturTonight",
    description: "Retrouvez tous les événements culturels à Genève — théâtre, opéra, concerts, jazz et représentations familiales. Curatés par KulturTonight.",
    ogTitle: "Événements Culturels à Genève | KulturTonight",
    ogDescription: "Le programme complet des événements culturels à Genève en ce moment.",
    canonical: "https://kulturtonight.com/fr/geneve/evenements",
    alternates: buildAlternatesFr("/fr/geneve/evenements"),
  });

  const slugFilter = filterToSlug[activeFilter] ?? activeFilter;
  const filtered =
    activeFilter === "Tous"
      ? eventsFr
      : eventsFr.filter((e) => e.category === slugFilter);

  return (
    <>
      <Header />
      <main className="pt-24">
        <CategoryNav categories={navCategories} />

        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Genève", href: "/fr/geneve" },
              { label: "Événements" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Événements Culturels à Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Le programme complet des événements culturels à Genève — théâtre, opéra, concerts, jazz et représentations familiales.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-widest font-sans border transition-colors rounded-none ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
                data-testid={`filter-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <SectionHeading
            title={activeFilter === "Tous" ? "Tous les Événements" : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}`}
            subtitle={`${filtered.length} événement${filtered.length !== 1 ? "s" : ""} trouvé${filtered.length !== 1 ? "s" : ""}`}
          />

          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {filtered.map((event) => (
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
