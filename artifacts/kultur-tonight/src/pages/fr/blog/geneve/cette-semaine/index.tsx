import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";

export default function FrBlogGenEvaCetteSemainePage() {
  useSEO({
    title: "Cette Semaine à Genève — Événements Culturels | KulturTonight",
    description: "Les meilleurs événements culturels de la semaine à Genève — sélectionnés par l'équipe éditoriale de KulturTonight.",
    canonical: "https://kulturtonight.com/fr/blog/geneve/cette-semaine",
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
              { label: "Blog", href: "/fr/blog" },
              { label: "Genève", href: "/fr/blog/geneve" },
              { label: "Cette Semaine" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Cette Semaine à Genève</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Les coups de cœur de l'équipe KulturTonight pour les événements culturels les plus marquants de la semaine à Genève — théâtre, concerts, expositions et plus.</p>
          </div>
          <div className="max-w-2xl py-16 border-t border-border/30">
            <div className="w-6 h-[1px] bg-gold-gradient mb-6" />
            <p className="font-serif text-xl text-foreground mb-3">Sélections hebdomadaires à venir.</p>
            <p className="text-muted-foreground font-sans">Abonnez-vous au guide hebdomadaire et recevez notre sélection directement dans votre boîte mail chaque jeudi.</p>
          </div>
        </div>
        <CTASection
          title="Ne Manquez Aucun Moment Culturel"
          subtitle="Nos éditeurs sélectionnent les meilleurs événements de Genève chaque semaine. Recevez-les chaque jeudi."
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
