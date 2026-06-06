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
  { label: "Concerts", href: "/en/geneva/concerts" },
  { label: "Family", href: "/en/geneva/family-events", active: true },
  { label: "Venues", href: "/en/geneva/venues" },
];

export default function FamilyEventsPage() {
  useSEO({
    title: "Family-Friendly Cultural Events in Geneva | KulturTonight",
    description: "Discover the best family-friendly cultural activities, theatre, and concerts in Geneva. Perfect for weekends with children.",
    ogTitle: "Family Cultural Events in Geneva | KulturTonight",
    ogDescription: "Inspiring cultural experiences for the whole family in Geneva — theatre, concerts, and interactive events.",
    canonical: "https://kulturtonight.com/en/geneva/family-events",
  });

  const familyEvents = events.filter((e) => e.category === "family");
  const familyGuides = guides.filter((g) => g.category === "family");
  const familyVenues = venues.filter((v) => v.type === "concert-hall" || v.type === "theatre").slice(0, 3);

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
              { label: "Family Events" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Family-Friendly Cultural Events
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Cultivating a love for the arts begins early. Geneva offers a wealth of cultural activities designed specifically for younger audiences and families — events crafted to be engaging, educational, and above all, magical.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From matinee orchestral concerts to interactive theatre performances, these experiences will spark artistic curiosity in your children and create lasting family memories.
            </p>
          </div>

          {familyEvents.length > 0 ? (
            <>
              <SectionHeading
                title="Family Events This Season"
                subtitle="Cultural experiences designed to delight children and adults alike."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                {familyEvents.map((event) => (
                  <div key={event.slug} data-testid={`card-event-${event.slug}`}>
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="py-16 text-center text-muted-foreground mb-16">
              <p className="text-lg font-serif">No family events found. Check back soon.</p>
            </div>
          )}

          <SectionHeading
            title="Family-Friendly Venues"
            subtitle="These venues host Geneva's best programmes for children and families."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {familyVenues.map((venue) => (
              <div key={venue.slug} data-testid={`card-venue-${venue.slug}`}>
                <VenueCard venue={venue} />
              </div>
            ))}
          </div>

          {familyGuides.length > 0 && (
            <>
              <SectionHeading title="Family Culture Guides" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                {familyGuides.map((guide) => (
                  <div key={guide.slug} data-testid={`card-guide-${guide.slug}`}>
                    <GuideCard guide={guide} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <CTASection
          title="Plan the Perfect Family Cultural Outing"
          subtitle="Get our weekly Geneva Culture Guide — curated family event picks, delivered every Thursday."
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
