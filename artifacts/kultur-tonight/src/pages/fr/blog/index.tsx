import { motion } from "framer-motion";
import { Link } from "wouter";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categories = [
  { slug: "guides",         label: "Guides Culturels",          desc: "Des guides intemporels sur la scène artistique genevoise." },
  { slug: "lieux",          label: "Lieux Incontournables",     desc: "Portraits des espaces culturels les plus emblématiques de Genève." },
  { slug: "cette-semaine",  label: "Cette Semaine",             desc: "Les meilleurs événements culturels cette semaine à Genève." },
  { slug: "ce-weekend",     label: "Ce Weekend",                desc: "Un programme de weekend curatée pour les curieux de culture." },
  { slug: "evenements",     label: "Articles Événements",       desc: "Grands reportages sur les spectacles et expositions marquants." },
  { slug: "saisonnier",     label: "Guides Saisonniers",        desc: "Quoi voir et faire à Genève, au fil des saisons." },
  { slug: "culture",        label: "Culture & Contexte",        desc: "Essais sur l'identité artistique et la vie culturelle genevoise." },
  { slug: "famille",        label: "Culture en Famille",        desc: "Des expériences culturelles pensées pour les familles genevoises." },
];

export default function FrBlogPage() {
  useSEO({
    title: "Blog Culturel de Genève | Guides & Articles | KulturTonight",
    description: "Guides culturels approfondis sur Genève — théâtre, concerts, sorties en famille et plus. Écrits par des passionnés de culture.",
    ogTitle: "KulturTonight Blog | Guides Culturels Genève",
    ogDescription: "Guides experts sur la culture genevoise — découvrez l'âme artistique de la ville à travers notre contenu éditorial.",
    canonical: "https://kulturtonight.ch/fr/blog",
    alternates: buildAlternatesFr("/fr/blog"),
  });

  const featured = guidesFr.slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Blog" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Blog Culturel de Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Guides approfondis, essais éditoriaux et chroniques culturelles signés par les plus grands passionnés des arts genevois.
            </p>
          </div>

          {/* Category hub */}
          <SectionHeading title="Rubriques Éditoriales" subtitle="Huit sections, une seule ville culturelle." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/fr/blog/geneve/${cat.slug}`}
                className="group block p-6 border border-border/40 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-6 h-[1px] bg-gold-gradient mb-4 group-hover:w-10 transition-all duration-300" />
                <p className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {cat.label}
                </p>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>

          {/* Featured articles */}
          <SectionHeading
            title="Guides à la Une"
            subtitle={`${guidesFr.length} lectures essentielles pour le curieux de culture genevois.`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {featured.map((guide) => (
              <motion.div key={guide.slug} variants={itemVariants} data-testid={`card-guide-${guide.slug}`}>
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="La Culture, Curatée Chaque Semaine"
          subtitle="Une sélection de théâtres, concerts, expositions et expériences culturelles de dernière minute — envoyée chaque semaine dans votre boîte mail."
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
