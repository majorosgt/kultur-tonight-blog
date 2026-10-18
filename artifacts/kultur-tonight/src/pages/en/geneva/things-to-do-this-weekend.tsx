import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { EventCard } from "@/components/EventCard";
import { VenueCard } from "@/components/VenueCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { isPastEvent } from "@/lib/event-status";
import { events } from "@/content/events";
import { venues } from "@/content/venues";

export default function ThingsToDoPage() {
  useSEO({
    title: "Things to Do in Geneva This Weekend | KulturTonight",
    description: "Discover the best cultural events, theatre, and concerts happening in Geneva this weekend. Curated by KulturTonight.",
    ogTitle: "Things to Do in Geneva This Weekend",
    ogDescription: "A curated guide to the best cultural events in Geneva this weekend.",
    canonical: "https://kulturtonight.ch/en/geneva/things-to-do-this-weekend",
  });

  // Weekend window: Saturday 24 and Sunday 25 October 2026 (Europe/Zurich).
  const weekendEvents = events.filter((e) => e.startDate.slice(0, 10) >= "2026-10-24" && e.startDate.slice(0, 10) <= "2026-10-25" && !isPastEvent(e));
  const weekendVenues = venues.slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-24">

        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Geneva", href: "/en/geneva" },
              { label: "This Weekend" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Things to Do in Geneva This Weekend
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Saturday 24 and Sunday 25 October. Saturday has the final of the 32nd Mondial d'Impro at the BFM at 20:00, Rounhaa at the Alhambra, the Chicago Underground Duo at the AMR at 21:00, and JetLag Gang at PTR from 23:00. Sunday, Ton Koopman conducts Beethoven's Ninth at Victoria Hall at 17:00, and Boudchart plays the BFM at 19:00. Clocks go back one hour in the early hours of Sunday.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Only shows with a published listing are on the cards. Price is shown only when the source gives one. The live last-minute list is on KulturTonight.
            </p>
          </div>

          <SectionHeading
            title="This Weekend's Highlights"
            subtitle="Exceptional performances selected from Geneva's finest stages."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {weekendEvents.map((event) => (
              <div key={event.slug} data-testid={`card-event-${event.slug}`}>
                <EventCard event={event} />
              </div>
            ))}
          </div>

          
          <SectionHeading title="Festivals through 1 November" subtitle="Festivals opening before 1 November, beyond this weekend." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {events.filter((event) => event.category === "festivals" && !isPastEvent(event) && event.startDate.slice(0, 10) <= "2026-11-01").map((event) => (
              <div key={event.slug}><EventCard event={event} /></div>
            ))}
          </div>
<SectionHeading
            title="Top Venues This Weekend"
            subtitle="The stages hosting Geneva's most memorable moments."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {weekendVenues.map((venue) => (
              <div key={venue.slug} data-testid={`card-venue-${venue.slug}`}>
                <VenueCard venue={venue} />
              </div>
            ))}
          </div>
        </div>

        <CTASection
          title="Don't Miss a Single Show"
          subtitle="Get the Weekly Guide and receive curated last-minute tickets every weekend."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          secondaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#weekly-guide" }}
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
