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

const cultureGuides = guidesFr.filter((g) => g.category?.toLowerCase().includes("culture") || g.category?.toLowerCase().includes("essai") || g.category?.toLowerCase().includes("context"));
const displayGuides = cultureGuides.length > 0 ? cultureGuides : guidesFr.slice(0, 6);

export default function FrBlogGenevaCulturePage() {
  useSEO({
    title: "Culture & Contexte — Essais sur les Arts Genevois | KulturTonight",
    description: "Essais, analyses et mise en contexte sur l'identité artistique de Genève — des grandes institutions aux mouvements culturels émergents qui façonnent la ville.",
    canonical: "https://kulturtonight.com/fr/blog/geneve/culture",
    alternates: buildAlternatesFr("/fr/blog/geneve/culture"),
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
              { label: "Culture & Contexte" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Culture & Contexte</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Essais et analyses sur l'identité culturelle de Genève — ce qui rend la scène artistique de cette ville unique, et comment elle s'inscrit dans la conversation culturelle européenne.</p>
          </div>
          <SectionHeading title="Essais Culturels" subtitle="Comprendre l'âme artistique de Genève." />
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {displayGuides.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <CTASection
          title="Plongez au Cœur de la Culture Genevoise"
          subtitle="Abonnez-vous au guide hebdomadaire pour des essais culturels et analyses, livrés chaque jeudi."
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
