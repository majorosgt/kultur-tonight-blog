// Build: June 8, 2026
import { motion } from "framer-motion";
import { Link } from "wouter";
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
    label: "WEEKEND IDEAS",
    headline: "Things to Do This Weekend",
    description: "Curated cultural ideas for the weekend — exhibitions, concerts, theatre, family outings and places worth lingering in.",
    cta: "Explore weekend ideas →",
    href: "/en/geneva/things-to-do-this-weekend",
    external: false,
    imageBg: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80')",
  },
  {
    label: "GUIDES",
    headline: "Geneva Cultural Guides",
    description: "Editorial guides to the city's theatres, museums, music venues, neighbourhoods and cultural rhythms.",
    cta: "Read the guides →",
    href: "/en/blog/geneva/guides",
    external: false,
    imageBg: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1562329265-95a6d7a83440?fm=jpg&q=80&w=800&auto=format&fit=crop')",
  },
  {
    label: "LOCAL HISTORY",
    headline: "Historic & Hidden Geneva",
    description: "Stories, places and cultural corners that reveal the city beyond the obvious landmarks.",
    cta: "Discover local stories →",
    href: "/en/blog/geneva/culture",
    external: false,
    imageBg: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?fm=jpg&q=80&w=800&auto=format&fit=crop')",
  },
  {
    label: "VENUES",
    headline: "Iconic Cultural Venues",
    description: "From historic concert halls to independent stages, explore the places that shape Geneva's cultural life.",
    cta: "Explore venues →",
    href: "/en/geneva/venues",
    external: false,
    imageBg: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1778975144936-dce6d71e29fa?fm=jpg&q=80&w=800&auto=format&fit=crop')",
  },
];

export default function EnHomePage() {
  useSEO({
    title: "KulturTonight | Geneva Cultural Discovery & Last-Minute Tickets",
    description: "Discover theatre, concerts, opera and jazz in Geneva. Last-minute seats at –50% for KulturTonight members. Nightly drops at 21:00.",
    ogTitle: "KulturTonight | Geneva Cultural Events & Tickets",
    ogDescription: "Your premium guide to Geneva's cultural scene — theatre, concerts, opera, jazz. Never miss a great performance.",
    ogUrl: "https://kulturtonight.ch/en",
    ogImage: "https://kulturtonight.ch/opengraph.jpg",
    twitterCard: "summary_large_image",
    twitterImage: "https://kulturtonight.ch/opengraph.jpg",
    canonical: "https://kulturtonight.ch/en",
    alternates: [
      { lang: "en", url: "https://kulturtonight.ch/en" },
      { lang: "fr", url: "https://kulturtonight.ch/fr" },
      { lang: "x-default", url: "https://kulturtonight.ch/en" },
    ],
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
        <section className="bg-background" style={{ padding: "80px 0" }} data-testid="direction-boxes">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center" style={{ marginBottom: "48px" }}>
              <h2
                className="text-foreground"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                What would you like to discover in Geneva?
              </h2>
              <div style={{ width: "60px", height: "2px", background: "#E1C570", margin: "0 auto" }} />
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 lg:grid-cols-4"
              style={{ gap: "16px" }}
            >
              {directionBoxes.map((box) => {
                const card = (
                  <div
                    className="group relative overflow-hidden flex flex-col cursor-pointer h-full"
                    style={{
                      minHeight: "420px",
                      backgroundColor: "#080C18",
                      borderTop: "3px solid #E1C570",
                      borderLeft: "1px solid rgba(255,255,255,0.06)",
                      borderRight: "1px solid rgba(255,255,255,0.06)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Image area */}
                    <div
                      className="direction-box-image relative flex-shrink-0 group-hover:[filter:brightness(1.15)] transition-[filter] duration-300"
                      style={{
                        height: "220px",
                        background: box.imageBg,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Content area */}
                    <div className="flex flex-col flex-grow" style={{ padding: "24px" }}>
                      <p style={{ color: "#E1C570", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, fontFamily: "Inter, sans-serif", marginBottom: "10px" }}>
                        {box.label}
                      </p>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(22px, 2vw, 28px)",
                          color: "white",
                          fontWeight: 400,
                          lineHeight: 1.2,
                          marginTop: "0",
                          marginBottom: "12px",
                        }}
                      >
                        {box.headline}
                      </h3>
                      <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, flexGrow: 1, fontFamily: "Inter, sans-serif" }}>
                        {box.description}
                      </p>
                      <div style={{ marginTop: "20px" }}>
                        <div style={{ borderTop: "1px solid rgba(255,215,0,0.2)", paddingTop: "16px" }}>
                          <span style={{ color: "#E1C570", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "Inter, sans-serif" }}>
                            {box.cta}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover gold left border */}
                    <div
                      className="absolute left-0 top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ width: "3px", backgroundColor: "#E1C570" }}
                    />
                  </div>
                );

                return (
                  <motion.div key={box.label} variants={itemVariants}>
                    {box.external ? (
                      <a href={box.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {card}
                      </a>
                    ) : box.href.startsWith("#") ? (
                      <a href={box.href} className="block h-full">
                        {card}
                      </a>
                    ) : (
                      <Link href={box.href} className="block h-full">
                        {card}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA — culture guide */}
        <CTASection
          variant="hero"
          title="Your guide to Geneva's cultural scene."
          subtitle="From iconic venues to weekend ideas — explore the stories, places and performances that define culture in Geneva."
          primaryCta={{ text: "Explore Geneva Guides", href: "https://www.kulturtonight.ch/en", target: "_blank", rel: "noopener noreferrer" }}
          secondaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          bgStyle={{
            background: "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Featured Venues */}
        <section className="bg-background" style={{ paddingTop: "100px", paddingBottom: "96px" }} data-testid="featured-venues">
          <div className="container mx-auto px-4 md:px-6">
            <div className="venues-heading-wrap">
              <SectionHeading
                title="Geneva's Iconic Venues"
                subtitle="From a 19th-century concert hall to intimate jazz clubs — the spaces that define Geneva's cultural identity."
                subtitleStyle={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', whiteSpace: 'normal' }}
                centered
              />
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {featuredVenues.map((venue) => (
                <motion.div key={venue.slug} variants={itemVariants} data-testid={`card-venue-${venue.slug}`}>
                  <div className="compact-venue h-full">
                    <VenueCard venue={venue} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center" style={{ marginTop: "24px" }}>
              <Link
                href="/en/geneva/venues/"
                style={{ color: "#E1C570", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                Explore all Geneva venues →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA — newsletter tease */}
        <CTASection
          variant="mid"
          title="Every Friday morning, 1,200 culturally curious Genevans open this email."
          subtitle="The weekly Geneva Culture Guide — the finest events, described with the care they deserve. For those who live culture, not just consume it."
          primaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#weekly-guide" }}
          bgStyle={{
            background: "linear-gradient(rgba(10,8,20,0.88), rgba(10,8,20,0.88)), url('https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
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
