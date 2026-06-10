import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";
import { blogEventsFr } from "@/content/blog-events.fr";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FrBlogGenevaEvenementsPage() {
  useSEO({
    title: "Événements Culturels à Genève — Couverture Approfondie | KulturTonight",
    description: "Couverture approfondie des événements culturels les plus significatifs de Genève — premières, festivals et soirées marquantes au Grand Théâtre, Victoria Hall et au-delà.",
    canonical: "https://kulturtonight.ch/fr/blog/geneve/evenements",
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
              { label: "Genève", href: "/fr/blog/geneve" },
              { label: "Événements" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Événements Culturels à Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Couverture approfondie des premières, festivals et moments culturels marquants à Genève — tout ce qu'il faut savoir avant d'y aller.
            </p>
          </div>

          <SectionHeading
            title="Couverture Événementielle"
            subtitle={`${blogEventsFr.length} articles sur les événements culturels les plus significatifs de Genève.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogEventsFr.map((article) => (
              <motion.div key={article.slug} variants={itemVariants} data-testid={`card-blog-${article.slug}`}>
                <BlogCard article={article} href={`/fr/blog/geneve/evenements/${article.slug}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Restez en Avance sur l'Agenda Culturel Genevois"
          subtitle="Abonnez-vous au guide hebdomadaire et ne manquez plus aucun événement culturel significatif à Genève."
          primaryCta={{ text: "Recevoir le guide hebdomadaire", href: "#weekly-guide" }}
          secondaryCta={{ text: "Événements ce soir →", href: "https://kulturtonight.ch/fr/geneve/" }}
        />
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
