import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { EventCard } from "@/components/EventCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { venueSchema } from "@/lib/schema";
import { buildAlternates } from "@/lib/i18n";
import { venues } from "@/content/venues";
import { events } from "@/content/events";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Users } from "lucide-react";

export default function VenueDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const venue = venues.find((v) => v.slug === slug);

  if (!venue) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Venue Not Found</h1>
            <Link href="/en/geneva/venues" className="text-primary hover:underline" onClick={() => window.scrollTo(0, 0)}>
              Back to all venues
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedEvents = events.filter((e) => e.venue.slug === venue.slug);

  useSEO({
    title: `${venue.name} — Geneva Cultural Venue | KulturTonight`,
    description: venue.description,
    ogTitle: `${venue.name} | KulturTonight Geneva`,
    ogDescription: venue.description,
    canonical: `https://kulturtonight.ch/en/geneva/venues/${venue.slug}`,
    alternates: buildAlternates(`/en/geneva/venues/${venue.slug}`),
    jsonLd: venueSchema(venue, `/en/geneva/venues/${venue.slug}`),
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Geneva", href: "/en/geneva" },
              { label: "Venues", href: "/en/geneva/venues" },
              { label: venue.name },
            ]}
          />
        </div>

        {/* Header */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <div className="flex items-start gap-4 mb-4">
                <Badge
                  variant="outline"
                  className="bg-transparent text-primary border-primary/30 uppercase tracking-widest text-[10px] font-sans rounded-none mt-2"
                >
                  {venue.type.replace("-", " ")}
                </Badge>
              </div>

              <div className="w-12 h-1 bg-gold-gradient mb-6" />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">
                {venue.name}
              </h1>

              <div className="flex flex-wrap gap-6 mb-12 text-sm text-muted-foreground font-sans">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {venue.address}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Capacity: {venue.capacity.toLocaleString()}
                </span>
                <a
                  href={venue.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                  data-testid="link-venue-website"
                >
                  <ExternalLink className="w-4 h-4" />
                  Official Website
                </a>
              </div>

              {/* Long description */}
              <div className="space-y-6 mb-16">
                <p className="text-lg text-foreground/80 leading-relaxed font-sans">
                  {venue.longDescription}
                </p>
              </div>

              {/* History */}
              <div className="mb-12">
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "24px",
                    color: "#E1C570",
                    fontWeight: 400,
                    marginBottom: "16px",
                  }}
                >
                  History
                </h2>
                <p className="text-base text-foreground/75 leading-relaxed font-sans">
                  {venue.history}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-16">
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "24px",
                    color: "#E1C570",
                    fontWeight: 400,
                    marginBottom: "16px",
                  }}
                >
                  What makes it exceptional
                </h2>
                <ul className="space-y-3">
                  {venue.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-base text-foreground/75 leading-relaxed">
                      <span style={{ color: "#E1C570", flexShrink: 0, marginTop: "2px" }}>•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {relatedEvents.length > 0 && (
          <section className="py-16 border-t border-border/30">
            <div className="container mx-auto px-4 md:px-6">
              <SectionHeading
                title={`Upcoming at ${venue.name}`}
                subtitle="Events taking place at this venue — don't miss them."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {relatedEvents.map((event) => (
                  <div key={event.slug} data-testid={`card-event-${event.slug}`}>
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="container mx-auto px-4 md:px-6 pb-8">
          <Link
            href="/en/geneva/venues"
            className="text-sm text-primary hover:underline underline-offset-4"
            data-testid="link-back-venues"
            onClick={() => window.scrollTo(0, 0)}
          >
            ← Back to all venues
          </Link>
        </div>

        <CTASection
          title={`Last-minute seats at ${venue.name} — released at 21:00 for KulturTonight members.`}
          subtitle=""
          primaryCta={{ text: "See tonight's availability →", href: "https://kulturtonight.ch/en/geneva/events/", target: "_blank", rel: "noopener noreferrer" }}
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
