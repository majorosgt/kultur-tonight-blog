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
import { blogSeasonalFr } from "@/content/blog-seasonal.fr";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FrBlogGenevaSaisonnierPage() {
  useSEO({
    title: "Guides Culturels Saisonniers de Genève | KulturTonight",
    description: "Ce qu'il faut voir et faire à Genève au fil des saisons — les meilleurs événements culturels, festivals et expériences tout au long de l'année.",
    canonical: "https://kulturtonight.ch/fr/blog/geneve/saisonnier",
    alternates: buildAlternatesFr("/fr/blog/geneve/saisonnier"),
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
              { label: "Guides Saisonniers" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Guides Saisonniers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              L'agenda culturel genevois se transforme au fil des saisons. Des festivals d'été aux premières d'opéra hivernales — nos guides saisonniers vous aident à planifier à l'avance.
            </p>
          </div>

          <SectionHeading
            title="Par Saison"
            subtitle={`${blogSeasonalFr.length} guides saisonniers sur l'année culturelle genevoise.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogSeasonalFr.map((article) => (
              <motion.div key={article.slug} variants={itemVariants} data-testid={`card-blog-${article.slug}`}>
                <BlogCard article={article} href={`/fr/blog/geneve/saisonnier/${article.slug}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Restez en Avance sur les Saisons"
          subtitle="Nos guides saisonniers vous aident à planifier les meilleures expériences culturelles à Genève tout au long de l'année."
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
