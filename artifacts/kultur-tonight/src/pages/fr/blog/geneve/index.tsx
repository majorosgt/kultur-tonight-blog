import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";

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

export default function FrBlogGenevePage() {
  useSEO({
    title: "Blog Genève — Guides Culturels & Articles | KulturTonight",
    description: "Le hub éditorial complet de KulturTonight pour Genève — guides intemporels, portraits de lieux, sélections hebdomadaires, contenus saisonniers et essais culturels.",
    canonical: "https://kulturtonight.ch/fr/blog/geneve",
    alternates: buildAlternatesFr("/fr/blog/geneve"),
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="w-full overflow-hidden">
          <img
            src="/assets/hero/culture-guide.png"
            alt="Intérieur de théâtre genevois orné avec éclairage doré spectaculaire"
            className="w-full h-[280px] md:h-[420px] lg:h-[500px] object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Genève" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Guide Culturel — Genève
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tout ce que nous écrivons sur la vie culturelle genevoise — guides intemporels, portraits de lieux, sélections de la semaine et bilans saisonniers.
            </p>
          </div>

          <SectionHeading title="Que souhaitez-vous découvrir ?" subtitle="Huit façons d'explorer la vie culturelle de Genève" />

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
        </div>

        <CTASection
          title="La Culture, Curatée Chaque Semaine"
          subtitle="Notre équipe éditoriale sélectionne les meilleurs événements et moments culturels genevois chaque jeudi."
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
