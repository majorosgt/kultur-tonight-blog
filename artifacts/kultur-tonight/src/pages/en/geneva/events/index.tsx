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
import { events } from "@/content/events";

const navCategories = [
  { label: "All Geneva", href: "/en/geneva" },
  { label: "This Weekend", href: "/en/geneva/things-to-do-this-weekend" },
  { label: "Theatre", href: "/en/geneva/theatre" },
  { label: "Concerts", href: "/en/geneva/concerts" },
  { label: "Family", href: "/en/geneva/family-events" },
  { label: "Venues", href: "/en/geneva/venues" },
];

const filterCategories = ["All", "opera", "concerts", "theatre", "jazz", "family"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function EventsListPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  useSEO({
    title: "All Cultural Events in Geneva | KulturTonight",
    description: "Browse all cultural events in Geneva — theatre, opera, concerts, jazz, and family performances. Curated by KulturTonight.",
    ogTitle: "Cultural Events in Geneva | KulturTonight",
    ogDescription: "The complete guide to cultural events happening in Geneva right now.",
    canonical: "https://kulturtonight.com/en/geneva/events",
  });

  const filtered = activeFilter === "All"
    ? events
    : events.filter((e) => e.category === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-24">
        <CategoryNav categories={navCategories} />

        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Geneva", href: "/en/geneva" },
              { label: "Events" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Cultural Events in Geneva
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The complete programme of cultural events happening in Geneva — theatre, opera, concerts, jazz, and family performances.
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
            title={activeFilter === "All" ? "All Events" : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Events`}
            subtitle={`${filtered.length} event${filtered.length !== 1 ? "s" : ""} found`}
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
          title="Never Miss a Cultural Event"
          subtitle="Join KulturTonight Early Access and receive last-minute ticket alerts for Geneva's finest cultural events."
          primaryCta={{ text: "Join KulturTonight Early Access", href: "#newsletter" }}
          secondaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#newsletter" }}
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
