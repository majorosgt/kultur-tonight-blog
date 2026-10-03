import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EventCard } from "@/components/EventCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { eventsFr } from "@/content/events.fr";
import { isPastEvent } from "@/lib/event-status";

export default function FrEventsArchivePage() {
  useSEO({
    title: "Événements culturels passés à Genève | KulturTonight",
    description: "Archives des événements culturels à Genève. La page reste en ligne après la date, avec le jour dans le titre.",
    canonical: "https://blog.kulturtonight.ch/fr/geneve/evenements/archives",
  });
  const past = eventsFr.filter(isPastEvent).sort((a, b) => b.startDate.localeCompare(a.startDate));
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs items={[{ label: "KulturTonight", href: "/fr" }, { label: "Genève", href: "/fr/geneve" }, { label: "Événements", href: "/fr/geneve/evenements" }, { label: "Archives" }]} />
          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Événements passés à Genève</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Ces spectacles ont déjà eu lieu. La page reste, avec la date dans le titre. Ce soir et ce week-end ne listent que ce qui est encore à venir.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {past.map((event) => <div key={event.slug}><EventCard event={event} /></div>)}
          </div>
          {past.length === 0 && <p className="text-muted-foreground mb-16">Rien n'est encore passé. Les affiches de ce soir arrivent ici le lendemain.</p>}
        </div>
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
