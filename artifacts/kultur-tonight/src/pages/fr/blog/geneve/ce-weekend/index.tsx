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
import { blogThisWeekendFr } from "@/content/blog-this-weekend.fr";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FrBlogGenevaCeWeekendPage() {
  useSEO({
    title: "Que Faire à Genève ce Week-end — Sorties Culturelles | KulturTonight",
    description: "Le meilleur du théâtre, de l'opéra, des concerts et des événements culturels à Genève ce week-end. Sélectionné par l'équipe éditoriale de KulturTonight.",
    canonical: "https://kulturtonight.ch/fr/blog/geneve/ce-weekend",
    alternates: buildAlternatesFr("/fr/blog/geneve/ce-weekend"),
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
              { label: "Ce Week-end" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Ce Week-end à Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Profitez pleinement de votre week-end genevois — nos éditeurs sélectionnent les meilleures expériences culturelles pour votre samedi et dimanche.
            </p>
          </div>

          <SectionHeading
            title="Sélection Week-end"
            subtitle={`${blogThisWeekendFr.length} expériences culturelles choisies pour votre week-end.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogThisWeekendFr.map((article) => (
              <motion.div key={article.slug} variants={itemVariants} data-testid={`card-blog-${article.slug}`}>
                <BlogCard article={article} href={`/fr/blog/geneve/ce-weekend/${article.slug}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Planifiez Votre Week-end Culturel"
          subtitle="Abonnez-vous au guide hebdomadaire et recevez nos sélections week-end chaque jeudi."
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
