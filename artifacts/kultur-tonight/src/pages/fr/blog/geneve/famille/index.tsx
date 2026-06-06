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

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const familleGuides = guidesFr.filter((g) => g.category?.toLowerCase().includes("famille") || g.category?.toLowerCase().includes("family") || g.category?.toLowerCase().includes("enfant"));
const displayGuides = familleGuides.length > 0 ? familleGuides : guidesFr.slice(0, 6);

export default function FrBlogGenevaFamillePage() {
  useSEO({
    title: "Culture en Famille à Genève — Sorties & Activités | KulturTonight",
    description: "Les meilleures expériences culturelles pour les familles à Genève — théâtre jeune public, concerts, visites de musées et événements culturels adaptés aux enfants.",
    canonical: "https://kulturtonight.com/fr/blog/geneve/famille",
    alternates: buildAlternatesFr("/fr/blog/geneve/famille"),
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Blog", href: "/fr/blog" },
              { label: "Genève", href: "/fr/blog/geneve" },
              { label: "Culture en Famille" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Culture en Famille à Genève</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Des expériences culturelles pensées pour les familles — initier les enfants au théâtre, à la musique et aux arts à travers les institutions de renommée mondiale de Genève.</p>
          </div>
          <SectionHeading title="Guides Famille" subtitle="Les meilleures expériences culturelles pour les familles à Genève." />
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {displayGuides.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <CTASection
          title="Événements Culturels en Famille, Chaque Semaine"
          subtitle="Abonnez-vous au guide hebdomadaire et ne manquez plus aucun événement culturel pour les familles à Genève."
          primaryCta={{ text: "Recevoir le guide hebdomadaire", href: "#weekly-guide" }}
          secondaryCta={{ text: "Recevoir le guide culturel de Genève chaque semaine", href: "#weekly-guide" }}
        />
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
