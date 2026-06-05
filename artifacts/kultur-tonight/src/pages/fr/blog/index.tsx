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
import { buildAlternatesFr } from "@/lib/i18n";
import { guidesFr } from "@/content/guides.fr";

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FrBlogPage() {
  useSEO({
    title: "Blog Culturel de Genève | Guides & Articles | KulturTonight",
    description: "Guides culturels approfondis sur Genève — théâtre, concerts, sorties en famille et plus. Écrits par des passionnés de culture.",
    ogTitle: "KulturTonight Blog | Guides Culturels Genève",
    ogDescription: "Guides experts sur la culture genevoise — découvrez l'âme artistique de la ville à travers notre contenu éditorial.",
    canonical: "https://kulturtonight.com/fr/blog",
    alternates: buildAlternatesFr("/fr/blog"),
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Blog" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Blog Culturel de Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Guides approfondis, essais éditoriaux et chroniques culturelles signés par les plus grands passionnés des arts genevois.
            </p>
          </div>

          <SectionHeading
            title="Guides Culturels"
            subtitle={`${guidesFr.length} lectures essentielles pour le curieux de culture genevois.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {guidesFr.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="La Culture, Curatée Chaque Semaine"
          subtitle="Rejoignez l'accès anticipé KulturTonight et recevez notre guide culturel hebdomadaire de Genève — les meilleurs événements et articles, livrés chaque jeudi."
          primaryCta={{ text: "Rejoindre l'accès anticipé KulturTonight", href: "#newsletter" }}
          secondaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#newsletter" }}
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
