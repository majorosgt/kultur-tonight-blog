import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { GuideCard } from "@/components/GuideCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogGuidesFr } from "@/content/blog-guides.fr";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FrBlogGenevaGuidesPage() {
  useSEO({
    title: "Guides Culturels Genève | KulturTonight Blog",
    description: "Guides approfondis sur le théâtre, la musique classique, le jazz et la vie culturelle à Genève — par des amateurs de culture.",
    canonical: "https://kulturtonight.ch/fr/blog/geneve/guides",
    alternates: [
      { lang: "en", url: "https://kulturtonight.ch/en/blog/geneva/guides" },
      { lang: "fr", url: "https://kulturtonight.ch/fr/blog/geneve/guides" },
      { lang: "x-default", url: "https://kulturtonight.ch/en/blog/geneva/guides" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Guides Culturels Genève",
      description: "Guides approfondis sur le théâtre, la musique classique, le jazz et la vie culturelle à Genève.",
      url: "https://kulturtonight.ch/fr/blog/geneve/guides",
      publisher: {
        "@type": "Organization",
        name: "KulturTonight",
        url: "https://kulturtonight.ch",
      },
    },
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Genève", href: "/fr/blog/geneve" },
              { label: "Guides" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Guides Culturels Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Des guides approfondis sur la scène culturelle genevoise — écrits par des initiés, pour ceux qui exigent la qualité.
            </p>
          </div>

          <SectionHeading
            title="Tous les guides"
            subtitle={`${blogGuidesFr.length} lectures essentielles pour les curieux de culture.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogGuidesFr.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="La culture, chaque semaine"
          subtitle="Abonnez-vous au Guide hebdomadaire et recevez le meilleur de la scène culturelle genevoise chaque jeudi."
          primaryCta={{ text: "Recevoir le Guide hebdomadaire", href: "#weekly-guide" }}
          secondaryCta={{ text: "Recevoir le Guide culturel hebdomadaire de Genève", href: "#weekly-guide" }}
        />

        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
