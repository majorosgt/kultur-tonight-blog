import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideHubCard, type GuideHubCardData } from "@/components/GuideHubCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternates } from "@/lib/i18n";

const guideCards: GuideHubCardData[] = [
  {
    label: "Weekend Guide",
    title: "Things to Do in Geneva This Weekend",
    description:
      "A curated guide to cultural ideas for the weekend — theatre, exhibitions, concerts, family outings and places worth lingering in.",
    cta: "Read guide →",
    href: "/en/blog/geneva/this-weekend",
  },
  {
    label: "Free Ideas",
    title: "Free Cultural Things to Do in Geneva",
    description:
      "Public art, museum moments, historic walks, open-air music and cultural places you can enjoy without planning too hard.",
    cta: "Explore ideas →",
    href: "/en/blog/geneva/culture",
  },
  {
    label: "Museums",
    title: "Best Museums in Geneva",
    description:
      "From art and history to science and international culture, Geneva's museums offer more than a rainy-day backup plan.",
    cta: "Read guide →",
    href: "/en/blog/geneva/guides",
  },
  {
    label: "Theatre",
    title: "Best Theatres in Geneva",
    description:
      "From the Grand Théâtre to intimate independent stages, discover where Geneva's theatre scene comes alive.",
    cta: "Read guide →",
    href: "/en/geneva/theatre",
  },
  {
    label: "Classical Music",
    title: "Classical Music in Geneva",
    description:
      "Where to hear orchestras, chamber music and recitals in some of the city's most atmospheric halls.",
    cta: "Read guide →",
    href: "/en/geneva/concerts",
  },
  {
    label: "Family Culture",
    title: "Family-Friendly Cultural Activities",
    description:
      "Museums, performances, workshops and gentle cultural outings designed for curious children and relaxed parents.",
    cta: "View recommendations →",
    href: "/en/blog/geneva/family",
  },
  {
    label: "Seasonal Guide",
    title: "Geneva Cultural Calendar by Season",
    description:
      "Summer festivals, winter traditions, spring exhibitions and autumn evenings — what to expect from Geneva's cultural year.",
    cta: "Explore the calendar →",
    href: "/en/blog/geneva/seasonal",
  },
  {
    label: "Rainy Day",
    title: "Rainy Day Cultural Ideas in Geneva",
    description:
      "Indoor places, quiet discoveries and cultural escapes for wet weekends, cold evenings and spontaneous city days.",
    cta: "Read guide →",
    href: "/en/blog/geneva/guides",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What are the best cultural things to do in Geneva?",
    answer:
      "Geneva is strongest when culture is approached as a mix of venues, neighbourhoods and moments. Start with the Grand Théâtre, Victoria Hall, the city's museums, independent theatres, lakeside walks, seasonal festivals and smaller local spaces that give the city its rhythm.",
  },
  {
    question: "What can I do in Geneva this weekend?",
    answer:
      "A good Geneva weekend can move from a museum visit to a concert, a theatre performance or a walk through the old town and Carouge. KulturTonight's guides highlight cultural ideas that feel curated rather than comprehensive.",
  },
  {
    question: "Are there free cultural activities in Geneva?",
    answer:
      "Yes. Geneva has public art, historic streets, free museum moments, cultural walks, open-air performances and neighbourhood discoveries that do not require a ticket. The best free ideas often depend on the season.",
  },
  {
    question: "What are the best cultural places to visit in Geneva when it rains?",
    answer:
      "Museums, concert halls, theatres, galleries and covered historic passages are the best rainy-day cultural options in Geneva. Victoria Hall, the Grand Théâtre area and several museum districts are especially useful starting points.",
  },
  {
    question: "Where can families find cultural activities in Geneva?",
    answer:
      "Families can explore museums, creative workshops, children's performances, seasonal festivals and calm cultural walks. The best options are usually short, sensory and easy to combine with a café, park or lakeside stop.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function EventsListPage() {
  useSEO({
    title: "Things to Do in Geneva: Cultural Events, Festivals & Local Ideas | KulturTonight",
    description:
      "Your evergreen guide to cultural things to do in Geneva — theatres, museums, classical music, family ideas, seasonal highlights and free cultural discoveries.",
    ogTitle: "Things to Do in Geneva: Cultural Events, Festivals & Local Ideas",
    ogDescription:
      "Curated guides to cultural things to do in Geneva — venues, museums, music, family ideas and seasonal highlights.",
    ogUrl: "https://kulturtonight.ch/en/geneva/events",
    canonical: "https://kulturtonight.ch/en/geneva/events",
    alternates: buildAlternates("/en/geneva/events"),
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
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
              { label: "Things to Do" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-14">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-[1.08]">
              Things to Do in Geneva: Cultural Events, Festivals &amp; Local Ideas
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "rgba(248,245,240,0.82)" }}>
              Geneva rewards curiosity. Beyond the lake and the old town, the city has theatres, museums, concert halls,
              independent stages, family-friendly places and quiet cultural corners worth discovering. Start here for
              curated ideas, local context and cultural guides that help you choose where to go next.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
              Explore Geneva by Mood, Moment and Curiosity
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
          >
            {guideCards.map((card) => (
              <motion.div key={card.title} variants={itemVariants} className="h-full">
                <GuideHubCard {...card} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <FaqSection title="Geneva Culture FAQ" items={faqItems} />

        <CTASection
          title="Get the Weekly Geneva Culture Guide"
          subtitle="A concise cultural edit for Geneva — weekend ideas, venue stories, local guides and the kind of discoveries that make the city feel alive."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
        />

        <section className="bg-background border-b border-border text-center" style={{ paddingTop: "44px", paddingBottom: "56px" }}>
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-4">
              For selected cultural offers and early access, visit KulturTonight.
            </p>
            <a
              href="https://www.kulturtonight.ch/en"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-[#E1C570] hover:gap-3 transition-all duration-300"
              data-testid="link-club-bridge"
            >
              Explore KulturTonight Club →
            </a>
          </div>
        </section>

        <div id="newsletter">
          <NewsletterSignup variant="weekly-guide" />
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
