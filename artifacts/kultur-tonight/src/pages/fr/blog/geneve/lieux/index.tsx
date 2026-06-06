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

const lieuGuides = guidesFr.filter((g) => g.category?.toLowerCase().includes("lieu") || g.category?.toLowerCase().includes("salle") || g.category?.toLowerCase().includes("venue"));
const displayGuides = lieuGuides.length > 0 ? lieuGuides : guidesFr.slice(0, 6);

export default function FrBlogGenevaLieuxPage() {
  useSEO({
    title: "Lieux Culturels de Genève — Portraits & Reportages | KulturTonight",
    description: "Portraits approfondis des lieux culturels les plus emblématiques de Genève — des théâtres historiques aux salles de concert contemporaines.",
    canonical: "https://kulturtonight.com/fr/blog/geneve/lieux",
    alternates: buildAlternatesFr("/fr/blog/geneve/lieux"),
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
              { label: "Lieux Incontournables" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Lieux Incontournables</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Portraits des théâtres, salles de concert, galeries et espaces culturels qui définissent la scène artistique genevoise.</p>
          </div>
          <SectionHeading title="Portraits de Lieux" subtitle="Les espaces derrière les expériences." />
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {displayGuides.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <CTASection
          title="Découvrez les Lieux Culturels de Genève"
          subtitle="Abonnez-vous au guide hebdomadaire pour des recommandations de lieux chaque jeudi."
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
