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
import { blogThisWeekFr } from "@/content/blog-this-week.fr";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FrBlogGenEvaCetteSemainePage() {
  useSEO({
    title: "Que Faire à Genève Cette Semaine — Sélection Culturelle | KulturTonight",
    description: "Le meilleur du théâtre, de l'opéra, des concerts et des événements culturels à Genève cette semaine. Sélection hebdomadaire par l'équipe éditoriale de KulturTonight.",
    canonical: "https://kulturtonight.ch/fr/blog/geneve/cette-semaine",
    alternates: buildAlternatesFr("/fr/blog/geneve/cette-semaine"),
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
              { label: "Cette Semaine" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Cette Semaine à Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Les sélections de nos éditeurs pour les expériences culturelles les plus captivantes à Genève cette semaine — théâtre, opéra, jazz et plus encore.
            </p>
          </div>

          <SectionHeading
            title="Sélection de la Semaine"
            subtitle={`${blogThisWeekFr.length} expériences culturelles incontournables cette semaine.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogThisWeekFr.map((article) => (
              <motion.div key={article.slug} variants={itemVariants} data-testid={`card-blog-${article.slug}`}>
                <BlogCard article={article} href={`/fr/blog/geneve/cette-semaine/${article.slug}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Ne Manquez Plus Aucune Soirée"
          subtitle="Abonnez-vous au guide hebdomadaire et recevez les meilleures sorties culturelles de Genève chaque jeudi."
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
