import { motion } from "framer-motion";
import { Link } from "wouter";
import { Ticket, Mail, BookOpen, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeHero } from "@/components/HomeHero";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { VenueCard } from "@/components/VenueCard";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { venues } from "../../content/venues";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const directionBoxes = [
  {
    icon: Ticket,
    label: "TONIGHT",
    headline: "Tonight in Geneva",
    description: "Opera, jazz, theatre — last seats released at 21:00",
    cta: "Browse tonight's events →",
    href: "https://kulturtonight.ch/en/geneva/events/",
    external: true,
  },
  {
    icon: Mail,
    label: "WEEKLY GUIDE",
    headline: "The Friday Edit",
    description: "Geneva's finest cultural week, curated every Friday morning",
    cta: "Get the weekly guide →",
    href: "#weekly-guide",
    external: false,
  },
  {
    icon: BookOpen,
    label: "EDITORIAL",
    headline: "Geneva Cultural Guides",
    description: "Venue spotlights, city guides, and weekly picks",
    cta: "Read the blog →",
    href: "https://blog.kulturtonight.ch/en/geneva/",
    external: true,
  },
  {
    icon: MapPin,
    label: "VENUES",
    headline: "Geneva's Iconic Stages",
    description: "From Victoria Hall to the AMR Jazz Club — the spaces that define the city",
    cta: "Explore venues →",
    href: "/en/geneva/venues/",
    external: false,
  },
];

export default function EnHomePage() {
  useSEO({
    title: "KulturTonight | Geneva's Premium Cultural Discovery Platform",
    description: "Discover the best theatre, concerts, and cultural events in Geneva. Last-minute tickets and curated guides for culturally curious explorers.",
    ogTitle: "KulturTonight | Geneva Cultural Events & Tickets",
    ogDescription: "Your premium guide to Geneva's cultural scene — theatre, concerts, opera, jazz. Never miss a great performance.",
    canonical: "https://kulturtonight.com/en",
  });

  const featuredVenues = venues.filter(v =>
    ['victoria-hall', 'grand-theatre-de-geneve', 'batiment-des-forces-motrices'].includes(v.slug)
  );

  return (
    <>
      <Header />
      <main>
        <HomeHero />

        {/* Direction Boxes */}
        <section className="py-20 bg-background" data-testid="direction-boxes">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Where would you like to go tonight?
              </h2>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {directionBoxes.map((box) => {
                const Icon = box.icon;
                const inner = (
                  <div
                    className="group h-full flex flex-col gap-4 p-6 bg-card rounded-sm transition-colors hover:bg-muted cursor-pointer"
                    style={{ borderTop: "2px solid #E1C570" }}
                  >
                    <Icon size={22} style={{ color: "#E1C570" }} />
                    <p
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: "#E1C570" }}
                    >
                      {box.label}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-foreground leading-snug">
                      {box.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {box.description}
                    </p>
                    <span className="text-sm font-medium text-foreground group-hover:underline">
                      {box.cta}
                    </span>
                  </div>
                );

                return (
                  <motion.div key={box.label} variants={itemVariants}>
                    {box.external ? (
                      <a href={box.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {inner}
                      </a>
                    ) : box.href.startsWith("#") ? (
                      <a href={box.href} className="block h-full">
                        {inner}
                      </a>
                    ) : (
                      <Link href={box.href} className="block h-full">
                        {inner}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA — curtain rises */}
        <CTASection
          variant="hero"
          title="The curtain rises in two hours. Are you in?"
          subtitle="KulturTonight surfaces last-minute seats to Geneva's most coveted performances — often just hours before the curtain rises. Never miss a masterpiece again."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          secondaryCta={{ text: "Browse Tonight's Events", href: "/en/geneva/events" }}
        />

        {/* Featured Venues */}
        <section className="py-24 bg-background" data-testid="featured-venues">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Geneva's Iconic Venues"
              subtitle="From a 19th-century concert hall to intimate jazz clubs — the spaces that define Geneva's cultural identity."
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {featuredVenues.map((venue) => (
                <motion.div key={venue.slug} variants={itemVariants} data-testid={`card-venue-${venue.slug}`}>
                  <VenueCard venue={venue} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA — newsletter tease */}
        <CTASection
          variant="mid"
          title="Every Friday morning, 1,200 culturally curious Genevans open this email."
          subtitle="The weekly Geneva Culture Guide — the finest events, described with the care they deserve. For those who live culture, not just consume it."
          primaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#weekly-guide" }}
        />

        {/* Newsletter signup */}
        <div id="weekly-guide">
          <NewsletterSignup variant="weekly-guide" />
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
