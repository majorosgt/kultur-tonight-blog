import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EventCard } from "@/components/EventCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { events } from "@/content/events";
import { isPastEvent } from "@/lib/event-status";

export default function EventsArchivePage() {
  useSEO({
    title: "Past cultural events in Geneva | KulturTonight",
    description: "Archive of cultural events in Geneva. Listings stay online after the date, with the day in the title.",
    canonical: "https://blog.kulturtonight.ch/en/geneva/events/archive",
  });
  const past = events.filter(isPastEvent).sort((a, b) => b.startDate.localeCompare(a.startDate));
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs items={[{ label: "KulturTonight", href: "/en" }, { label: "Geneva", href: "/en/geneva" }, { label: "Events", href: "/en/geneva/events" }, { label: "Archive" }]} />
          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Past events in Geneva</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">These performances have already taken place. The page stays, with the date in the title. Tonight and this weekend only list what is still ahead.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {past.map((event) => <div key={event.slug}><EventCard event={event} /></div>)}
          </div>
          {past.length === 0 && <p className="text-muted-foreground mb-16">Nothing has passed yet. Tonight's listings move here the day after the performance.</p>}
        </div>
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
