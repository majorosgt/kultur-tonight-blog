import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideHubCard, type GuideHubCardData } from "@/components/GuideHubCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";

const guideCards: GuideHubCardData[] = [
  {
    label: "Ce week-end",
    title: "Que faire à Genève ce week-end",
    description:
      "Une sélection d'idées culturelles pour le week-end — théâtre, expositions, concerts, sorties en famille et lieux où prendre le temps.",
    cta: "EXPLORER →",
    href: "/fr/blog/geneve/ce-weekend",
  },
  {
    label: "Idées gratuites",
    title: "Sorties culturelles gratuites à Genève",
    description:
      "Art public, promenades historiques, musées, musique en plein air et lieux culturels à découvrir sans forcément réserver.",
    cta: "EXPLORER →",
    href: "/fr/blog/geneve/culture",
  },
  {
    label: "Musées",
    title: "Les meilleurs musées de Genève",
    description:
      "Art, histoire, science, culture internationale — les musées genevois racontent la ville sous plusieurs angles.",
    cta: "EXPLORER →",
    href: "/fr/blog/geneve/guides",
  },
  {
    label: "Théâtre",
    title: "Les meilleurs théâtres de Genève",
    description:
      "Du Grand Théâtre aux scènes plus intimes, un guide pour comprendre où le théâtre genevois prend vie.",
    cta: "EXPLORER →",
    href: "/fr/geneve/theatre",
  },
  {
    label: "Musique classique",
    title: "Musique classique à Genève",
    description:
      "Orchestres, récitals, musique de chambre et grandes salles — les lieux où écouter Genève autrement.",
    cta: "EXPLORER →",
    href: "/fr/geneve/concerts",
  },
  {
    label: "En famille",
    title: "Sorties culturelles en famille",
    description:
      "Musées, spectacles, ateliers et idées douces pour éveiller la curiosité des enfants sans compliquer la journée.",
    cta: "EXPLORER →",
    href: "/fr/blog/geneve/famille",
  },
  {
    label: "Saisons",
    title: "Le calendrier culturel de Genève",
    description:
      "Festivals d'été, traditions d'hiver, expositions de printemps et soirées d'automne — les temps forts culturels de l'année.",
    cta: "EXPLORER →",
    href: "/fr/blog/geneve/saisonnier",
  },
  {
    label: "Jour de pluie",
    title: "Idées culturelles quand il pleut à Genève",
    description:
      "Musées, salles, galeries et refuges culturels pour les week-ends humides et les soirées spontanées.",
    cta: "EXPLORER →",
    href: "/fr/blog/geneve/guides",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Quelles sont les meilleures sorties culturelles à Genève ?",
    answer:
      "Genève se prête particulièrement bien aux sorties qui mêlent lieux, quartiers et atmosphère. Le Grand Théâtre, Victoria Hall, les musées, les scènes indépendantes, les festivals saisonniers et les promenades culturelles offrent une belle première approche.",
  },
  {
    question: "Que faire à Genève ce week-end ?",
    answer:
      "Un week-end à Genève peut commencer par une exposition, se poursuivre par un concert, une pièce de théâtre ou une promenade dans la vieille ville ou à Carouge. Les guides KulturTonight privilégient les idées choisies plutôt que les listes interminables.",
  },
  {
    question: "Existe-t-il des activités culturelles gratuites à Genève ?",
    answer:
      "Oui. Genève propose de l'art public, des promenades historiques, certains moments de musées, des concerts en plein air et des découvertes de quartier accessibles sans billet. Les meilleures idées changent souvent avec la saison.",
  },
  {
    question: "Que faire à Genève quand il pleut ?",
    answer:
      "Les musées, théâtres, salles de concert, galeries et passages couverts sont les meilleurs points de départ. Les quartiers autour du Grand Théâtre, de Victoria Hall et des grands musées permettent de composer facilement une sortie culturelle à l'abri.",
  },
  {
    question: "Où trouver des sorties culturelles en famille à Genève ?",
    answer:
      "Les familles peuvent explorer des musées, ateliers créatifs, spectacles jeune public, festivals saisonniers et promenades culturelles courtes. Les meilleures sorties sont souvent simples, sensorielles et faciles à combiner avec une pause au bord du lac ou dans un café.",
  },
];

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FrEventsListPage() {
  useSEO({
    title: "Que faire à Genève : culture, sorties et idées locales | KulturTonight",
    description:
      "Le guide culturel de Genève — théâtres, musées, musique classique, idées en famille, temps forts saisonniers et sorties gratuites à découvrir toute l'année.",
    ogTitle: "Que faire à Genève : culture, sorties et idées locales",
    ogDescription:
      "Des guides choisis pour vos sorties culturelles à Genève — lieux, musées, musique, idées en famille et temps forts de la saison.",
    ogUrl: "https://kulturtonight.ch/fr/geneve/evenements",
    canonical: "https://kulturtonight.ch/fr/geneve/evenements",
    alternates: buildAlternatesFr("/fr/geneve/evenements"),
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="w-full overflow-hidden">
          <img
            src="/assets/hero/things-to-do.png"
            alt="Soirée culturelle genevoise sur la promenade du lac au crépuscule"
            className="w-full h-[280px] md:h-[420px] lg:h-[500px] object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/fr" },
              { label: "Genève", href: "/fr/geneve" },
              { label: "Que faire" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-14">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-[1.08]">
              Que faire à Genève : culture, sorties et idées locales
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "rgba(248,245,240,0.82)" }}>
              Genève se découvre mieux quand on prend le temps de regarder au-delà des évidences. Théâtres, musées,
              salles de concert, scènes indépendantes, idées en famille, promenades culturelles et lieux discrets
              composent une ville plus riche qu'elle n'en a l'air. Cette page rassemble des guides choisis pour savoir
              où aller, quoi explorer et comment ressentir la ville autrement.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
              Explorer Genève selon l'envie du moment
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
          >
            {guideCards.map((card) => (
              <motion.div key={card.title} variants={itemVariants} className="h-full">
                <GuideHubCard {...card} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <FaqSection title="Questions fréquentes sur la culture à Genève" items={faqItems} />

        <CTASection
          title="Recevoir le guide culturel de Genève"
          subtitle="Une sélection culturelle concise — idées du week-end, lieux à découvrir, histoires locales et inspirations pour mieux vivre Genève."
          primaryCta={{ text: "Recevoir le guide", href: "#weekly-guide" }}
        />

        <section className="bg-background border-b border-border text-center" style={{ paddingTop: "44px", paddingBottom: "56px" }}>
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-4">
              Pour certaines offres culturelles et un accès anticipé, découvrez KulturTonight.
            </p>
            <a
              href="https://www.kulturtonight.ch/fr"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-[#E1C570] hover:gap-3 transition-all duration-300"
              data-testid="link-club-bridge"
            >
              Découvrir KulturTonight Club →
            </a>
          </div>
        </section>

        <div id="newsletter">
          <NewsletterSignup variant="weekly-guide" />
        </div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
