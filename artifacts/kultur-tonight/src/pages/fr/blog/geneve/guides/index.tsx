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

export default function FrBlogGenevaGuidesPage() {
  useSEO({
    title: "Guides Culturels Intemporels de Genève | KulturTonight",
    description: "Des guides intemporels sur les théâtres, salles de concert, galeries et institutions artistiques de Genève. À lire avant votre prochaine soirée culturelle.",
    canonical: "https://kulturtonight.com/fr/blog/geneve/guides",
    alternates: buildAlternatesFr("/fr/blog/geneve/guides"),
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
              { label: "Guides Culturels" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Guides Culturels</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Des guides intemporels sur la scène culturelle genevoise — aussi pertinents la saison prochaine qu'aujourd'hui.</p>
          </div>
          <SectionHeading title="Tous les Guides" subtitle={`${guidesFr.length} lectures essentielles pour le curieux de culture.`} />
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {guidesFr.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <CTASection
          title="La Culture, Livrée Chaque Semaine"
          subtitle="Abonnez-vous au guide hebdomadaire et recevez le meilleur de la scène culturelle genevoise chaque jeudi."
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
