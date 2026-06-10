import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
    canonical: "https://kulturtonight.ch/fr/blog/geneve/culture",
    alternates: buildAlternatesFr("/fr/blog/geneve/culture"),
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="w-full overflow-hidden">
          <img
            src="/assets/hero/local-stories.png"
            alt="Rue de la vieille ville de Genève au crépuscule, lumière dorée chaleureuse"
            className="w-full h-[280px] md:h-[420px] lg:h-[500px] object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Genève", href: "/fr/blog/geneve" },
              { label: "Histoires locales" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Histoires locales
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Récits, essais et réflexions sur les gens, les lieux et la culture qui font de Genève une ville unique.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-[1px] bg-gold-gradient" />
              <div className="w-1 h-1 rounded-full bg-primary/60" />
            </div>
            <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed max-w-xl">
              Des récits depuis la ville — un pour commencer, d'autres à venir.
            </p>
          </div>

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
