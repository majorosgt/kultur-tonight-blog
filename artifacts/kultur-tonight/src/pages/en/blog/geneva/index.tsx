import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { GuideCard } from "@/components/GuideCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogGuides } from "@/content/blog-guides";

const categories = [
  { slug: "guides",       label: "Evergreen Guides",    desc: "Timeless cultural guides to Geneva's arts scene." },
  { slug: "venues",       label: "Venue Spotlights",    desc: "Deep dives into Geneva's most iconic cultural venues." },
  { slug: "this-week",    label: "This Week",           desc: "The best cultural events happening this week." },
  { slug: "this-weekend", label: "This Weekend",        desc: "A curated weekend programme for the culturally curious." },
  { slug: "events",       label: "Event Features",      desc: "Long-reads on standout performances and exhibitions." },
  { slug: "seasonal",     label: "Seasonal Guides",     desc: "What to see and do in Geneva, season by season." },
  { slug: "culture",      label: "Culture & Context",   desc: "Essays on Geneva's artistic identity and cultural life." },
  { slug: "family",       label: "Family Culture",      desc: "Cultural experiences designed for families in Geneva." },
];

const featuredGuides = blogGuides.slice(0, 3);

export default function BlogGenevaPage() {
  useSEO({
    title: "Geneva Blog — Cultural Guides & Articles | KulturTonight",
    description: "The complete KulturTonight editorial hub for Geneva — evergreen guides, venue spotlights, weekly picks, seasonal content, and cultural essays.",
    canonical: "https://kulturtonight.ch/en/blog/geneva",
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Blog", href: "/en/blog" },
              { label: "Geneva" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Geneva Editorial
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything we write about Geneva's cultural life — from timeless guides and venue portraits to weekly picks and seasonal round-ups.
            </p>
          </div>

          {/* Featured guides */}
          <div className="mb-20">
            <div className="flex items-end justify-between mb-8">
              <SectionHeading
                title="Featured Guides"
                subtitle="In-depth reading for the culturally curious."
              />
              <Link
                href="/en/blog/geneva/guides"
                className="text-sm text-primary hover:underline underline-offset-4 font-sans whitespace-nowrap ml-4"
              >
                See all guides →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredGuides.map((guide) => (
                <div key={guide.slug} data-testid={`card-guide-${guide.slug}`}>
                  <GuideCard guide={guide} />
                </div>
              ))}
            </div>
          </div>

          <SectionHeading title="Editorial Sections" subtitle="Browse all eight content categories." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/en/blog/geneva/${cat.slug}`}
                className="group block p-6 border border-border/40 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-6 h-[1px] bg-gold-gradient mb-4 group-hover:w-10 transition-all duration-300" />
                <p className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {cat.label}
                </p>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <CTASection
          title="Culture, Curated Weekly"
          subtitle="Our editorial team selects the best events and cultural moments in Geneva every Thursday."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          secondaryCta={{ text: "Get the weekly Geneva Culture Guide", href: "#weekly-guide" }}
        />

        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
