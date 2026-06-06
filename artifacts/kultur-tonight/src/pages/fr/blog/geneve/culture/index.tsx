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
import { blogCultureFr } from "@/content/blog-culture.fr";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FrBlogGenevaCulturePage() {
  useSEO({
    title: "Culture Genevoise — Essais et Réflexions | KulturTonight",
    description: "Essais, réflexions et lectures approfondies sur la vie culturelle genevoise — les idées, traditions et conversations qui façonnent l'identité artistique de la ville.",
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
              { label: "Culture" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Culture
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Essais et réflexions sur la vie culturelle genevoise — les idées, traditions et conversations qui animent la scène artistique de la ville.
            </p>
          </div>

          <SectionHeading
            title="Essais Culturels"
            subtitle={`${blogCultureFr.length} lectures approfondies sur l'identité culturelle genevoise.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogCultureFr.map((article) => (
              <motion.div key={article.slug} variants={itemVariants} data-testid={`card-blog-${article.slug}`}>
                <BlogCard article={article} href={`/fr/blog/geneve/culture/${article.slug}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="La Culture, Livrée Chaque Semaine"
          subtitle="Abonnez-vous au guide hebdomadaire et recevez notre guide culturel genevois chaque jeudi."
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
