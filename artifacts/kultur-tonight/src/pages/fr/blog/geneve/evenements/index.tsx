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

const eventGuides = guidesFr.filter((g) => g.category?.toLowerCase().includes("event") || g.category?.toLowerCase().includes("concert") || g.category?.toLowerCase().includes("théâtre") || g.category?.toLowerCase().includes("theatre"));
const displayGuides = eventGuides.length > 0 ? eventGuides : guidesFr.slice(0, 6);

export default function FrBlogGenevaEvenementsPage() {
  useSEO({
    title: "Articles Événements — Spectacles & Expositions à Genève | KulturTonight",
    description: "Grands reportages et articles de fond sur les spectacles, expositions et événements culturels marquants à Genève.",
    canonical: "https://kulturtonight.com/fr/blog/geneve/evenements",
    alternates: buildAlternatesFr("/fr/blog/geneve/evenements"),
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
              { label: "Articles Événements" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Articles Événements</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Grands reportages et articles de fond sur les spectacles, expositions et événements culturels qui marquent le calendrier artistique genevois.</p>
          </div>
          <SectionHeading title="Articles à la Une" subtitle="Éditorial approfondi sur les moments culturels forts de Genève." />
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {displayGuides.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <CTASection
          title="Ne Manquez Aucun Moment Culturel"
          subtitle="Abonnez-vous au guide hebdomadaire pour les meilleurs articles et sélections événements chaque jeudi."
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
