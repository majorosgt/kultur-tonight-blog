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
import { buildAlternatesFr } from "@/lib/i18n";
import { venuesFr } from "@/content/venues.fr";
import { eventsFr } from "@/content/events.fr";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Users } from "lucide-react";

export default function FrVenueDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const venue = venuesFr.find((v) => v.slug === slug);

  if (!venue) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Lieu introuvable</h1>
            <Link href="/fr/geneve/lieux" className="text-primary hover:underline">
              Retour à tous les lieux
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedEvents = eventsFr.filter((e) => e.venue.slug === venue.slug);
  const paragraphs = venue.description.split("\n\n").filter(Boolean);

  useSEO({
    title: venue.seoTitle,
    description: venue.seoDescription,
    ogTitle: venue.ogTitle,
    ogDescription: venue.ogDescription,
    canonical: `https://kulturtonight.com/fr/geneve/lieux/${venue.slug}`,
    alternates: buildAlternatesFr(`/fr/geneve/lieux/${venue.slug}`),
    jsonLd: venueSchema(venue),
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
              { label: "Lieux", href: "/fr/geneve/lieux" },
              { label: venue.name },
            ]}
          />
        </div>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <div className="flex items-start gap-4 mb-4">
                <Badge
                  variant="outline"
                  className="bg-transparent text-primary border-primary/30 uppercase tracking-widest text-[10px] font-sans rounded-none mt-2"
                >
                  {venue.type.replace(/-/g, " ")}
                </Badge>
              </div>

              <div className="w-12 h-1 bg-gold-gradient mb-6" />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">
                {venue.name}
              </h1>

              <div className="flex flex-wrap gap-6 mb-12 text-sm text-muted-foreground font-sans">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                  {venue.address}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" aria-hidden="true" />
                  Capacité : {venue.capacity.toLocaleString("fr-CH")}
                </span>
                <a
                  href={venue.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                  data-testid="link-venue-website"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Site officiel
                </a>
              </div>

              <div className="space-y-6 mb-16">
                {paragraphs.map((para, i) => (
                  <p key={i} className="text-lg text-foreground/80 leading-relaxed font-sans">
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {relatedEvents.length > 0 && (
          <section className="py-16 border-t border-border/30">
            <div className="container mx-auto px-4 md:px-6">
              <SectionHeading
                title={`Prochainement à ${venue.name}`}
                subtitle="Les événements à venir dans ce lieu — ne les manquez pas."
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
            href="/fr/geneve/lieux"
            className="text-sm text-primary hover:underline underline-offset-4"
            data-testid="link-back-venues"
          >
            ← Retour à tous les lieux
          </Link>
        </div>

        <CTASection
          title={`Billets pour ${venue.name}`}
          subtitle="Recevez les meilleurs événements culturels des scènes les plus emblématiques de Genève, chaque semaine dans votre boîte mail."
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
