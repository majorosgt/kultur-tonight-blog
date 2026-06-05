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
import { eventSchema } from "@/lib/schema";
import { buildAlternatesFr } from "@/lib/i18n";
import { eventsFr } from "@/content/events.fr";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FrEventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = eventsFr.find((e) => e.slug === slug);

  if (!event) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Événement introuvable</h1>
            <Link href="/fr/geneve/evenements" className="text-primary hover:underline">
              Retour à tous les événements
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  useSEO({
    title: event.seoTitle,
    description: event.seoDescription,
    ogTitle: event.ogTitle,
    ogDescription: event.ogDescription,
    canonical: `https://kulturtonight.com/fr/geneve/evenements/${event.slug}`,
    alternates: buildAlternatesFr(`/fr/geneve/evenements/${event.slug}`),
    jsonLd: eventSchema(event),
  });

  const relatedEvents = eventsFr
    .filter((e) => e.slug !== event.slug && (e.category === event.category || e.venue.slug === event.venue.slug))
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Genève", href: "/fr/geneve" },
              { label: "Événements", href: "/fr/geneve/evenements" },
              { label: event.title },
            ]}
          />
        </div>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="bg-transparent text-primary border-primary/30 uppercase tracking-widest text-[10px] font-sans rounded-none"
                >
                  {event.category}
                </Badge>
              </div>

              <div className="w-12 h-1 bg-gold-gradient mb-6" />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-6 mb-10 text-sm text-muted-foreground font-sans">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                  {event.date} — {event.time}
                </span>
                <Link
                  href={`/fr/geneve/lieux/${event.venue.slug}`}
                  className="flex items-center gap-2 text-primary hover:underline underline-offset-4"
                  data-testid="link-event-venue"
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  {event.venue.name}
                </Link>
                <span className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-primary" aria-hidden="true" />
                  {event.price}
                </span>
              </div>

              <div className="aspect-[16/7] w-full bg-gradient-to-br from-secondary via-[#1a0a14] to-background mb-10 relative overflow-hidden border border-border/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm italic font-sans">{event.image}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>

              <p className="text-xl text-foreground/90 leading-relaxed mb-6 font-sans">
                {event.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button
                  size="lg"
                  className="bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-serif tracking-wide px-8 h-14"
                  data-testid="button-get-tickets"
                >
                  Rejoindre l'accès anticipé pour les billets
                </Button>
                <Link
                  href="/fr/geneve/evenements"
                  className="text-sm text-muted-foreground hover:text-primary underline-offset-4 self-center"
                  data-testid="link-back-events"
                >
                  ← Retour à tous les événements
                </Link>
              </div>
            </div>
          </div>
        </section>

        {relatedEvents.length > 0 && (
          <section className="py-16 border-t border-border/30">
            <div className="container mx-auto px-4 md:px-6">
              <SectionHeading
                title="Vous Pourriez Aussi Apprécier"
                subtitle="D'autres spectacles à ne pas manquer."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedEvents.map((e) => (
                  <div key={e.slug} data-testid={`card-event-${e.slug}`}>
                    <EventCard event={e} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection
          title="Billets de Dernière Minute"
          subtitle="Rejoignez l'accès anticipé KulturTonight et ne manquez plus jamais un événement culturel à Genève."
          primaryCta={{ text: "Rejoindre l'accès anticipé KulturTonight", href: "#newsletter" }}
          secondaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#newsletter" }}
        />

        <div id="newsletter">
          <NewsletterSignup variant="early-access" />
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
