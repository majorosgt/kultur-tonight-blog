import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { EventCard } from "@/components/EventCard";
import { VenueCard } from "@/components/VenueCard";
import { GuideCard } from "@/components/GuideCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { events } from "@/content/events";
import { venues } from "@/content/venues";
import { guides } from "@/content/guides";

export default function TheatrePage() {
  useSEO({
    title: "Theatre in Geneva | Best Performances & Tickets | KulturTonight",
    description: "Explore the best theatre performances in Geneva. From Shakespeare to contemporary drama — discover Geneva's thriving theatre scene.",
    ogTitle: "Theatre in Geneva | KulturTonight",
    ogDescription: "The best theatre performances and venues in Geneva, curated for passionate audiences.",
    canonical: "https://kulturtonight.ch/en/geneva/theatre",
  });

  const theatreEvents = events.filter((e) => e.category === "theatre" || e.category === "opera");
  const theatreVenues = venues.filter((v) => v.type === "theatre");
  const theatreGuides = guides.filter((g) => g.category === "theatre");

  return (
    <>
      <Header />
      <main className="pt-24">

        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Geneva", href: "/en/geneva" },
              { label: "Theatre" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Theatre in Geneva
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Geneva's theatrical tradition is among the most distinguished in Europe. The city hosts venues that range from the historic grandeur of the Grand Théâtre to bold contemporary stages that push the boundaries of performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you seek opera, classical drama, or experimental theatre, Geneva's stages offer something that will move, provoke, and inspire.
            </p>
          </div>

          <SectionHeading
            title="Current Theatre Productions"
            subtitle="The stage is set — these are the performances defining Geneva's theatre season."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {theatreEvents.map((event) => (
              <div key={event.slug} data-testid={`card-event-${event.slug}`}>
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <SectionHeading
            title="Geneva's Theatre Venues"
            subtitle="The spaces where dramatic art comes to life."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {theatreVenues.map((venue) => (
              <div key={venue.slug} data-testid={`card-venue-${venue.slug}`}>
                <VenueCard venue={venue} />
              </div>
            ))}
          </div>

          {theatreGuides.length > 0 && (
            <>
              <SectionHeading
                title="Theatre Guides"
                subtitle="Essential reading for anyone passionate about Geneva's stage."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                {theatreGuides.map((guide) => (
                  <div key={guide.slug} data-testid={`card-guide-${guide.slug}`}>
                    <GuideCard guide={guide} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <CTASection
          title="Last-Minute Theatre Tickets"
          subtitle="Join KulturTonight and access last-minute seats to Geneva's most sought-after theatrical productions."
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
