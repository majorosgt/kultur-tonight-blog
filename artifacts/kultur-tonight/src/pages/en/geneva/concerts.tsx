import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { EventCard } from "@/components/EventCard";
import { VenueCard } from "@/components/VenueCard";
import { GuideCard } from "@/components/GuideCard";
import { CategoryNav } from "@/components/CategoryNav";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { events } from "@/content/events";
import { venues } from "@/content/venues";
import { guides } from "@/content/guides";

const categories = [
  { label: "All Geneva", href: "/en/geneva" },
  { label: "This Weekend", href: "/en/geneva/things-to-do-this-weekend" },
  { label: "Theatre", href: "/en/geneva/theatre" },
  { label: "Concerts", href: "/en/geneva/concerts", active: true },
  { label: "Family", href: "/en/geneva/family-events" },
  { label: "Venues", href: "/en/geneva/venues" },
];

export default function ConcertsPage() {
  useSEO({
    title: "Concerts in Geneva | Live Music & Classical | KulturTonight",
    description: "Discover the best live concerts in Geneva — from orchestral masterpieces at Victoria Hall to intimate jazz nights at AMR.",
    ogTitle: "Concerts in Geneva | KulturTonight",
    ogDescription: "The finest live music in Geneva, from classical symphonies to late-night jazz.",
    canonical: "https://kulturtonight.ch/en/geneva/concerts",
  });

  const concertEvents = events.filter((e) => e.category === "concerts" || e.category === "jazz");
  const concertVenues = venues.filter((v) => v.type === "concert-hall" || v.type === "jazz" || v.type === "multi-venue");
  const concertGuides = guides.filter((g) => g.category === "concerts");

  return (
    <>
      <Header />
      <main className="pt-24">
        <CategoryNav categories={categories} />

        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Geneva", href: "/en/geneva" },
              { label: "Concerts" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Concerts in Geneva
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Music in Geneva is not just heard; it is felt. The city's acoustic spaces are designed to elevate every note, creating transcendent experiences for audiences from first-time listeners to seasoned concertgoers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From symphonic masterpieces at the legendary Victoria Hall to the rhythmic soul of AMR Jazz Club, Geneva's concert landscape is diverse and deeply enriching.
            </p>
          </div>

          <SectionHeading
            title="Upcoming Concerts"
            subtitle="Musical experiences across every genre — classical, jazz, contemporary, and beyond."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {concertEvents.map((event) => (
              <div key={event.slug} data-testid={`card-event-${event.slug}`}>
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <SectionHeading
            title="Concert Venues"
            subtitle="The acoustic temples of Geneva's musical life."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {concertVenues.map((venue) => (
              <div key={venue.slug} data-testid={`card-venue-${venue.slug}`}>
                <VenueCard venue={venue} />
              </div>
            ))}
          </div>

          {concertGuides.length > 0 && (
            <>
              <SectionHeading title="Concert Guides" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                {concertGuides.map((guide) => (
                  <div key={guide.slug} data-testid={`card-guide-${guide.slug}`}>
                    <GuideCard guide={guide} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <CTASection
          title="Hear Geneva at its Finest"
          subtitle="Get the Weekly Guide and never miss a transcendent musical evening in the city again."
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
