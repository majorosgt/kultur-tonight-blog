import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";

export default function FrBlogGenevaSaisonnierPage() {
  useSEO({
    title: "Guides Saisonniers Culturels de Genève | KulturTonight",
    description: "Quoi voir et faire à Genève, au fil des saisons — les meilleurs événements culturels, festivals et expériences artistiques tout au long de l'année.",
    canonical: "https://kulturtonight.com/fr/blog/geneve/saisonnier",
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
              { label: "Blog", href: "/fr/blog" },
              { label: "Genève", href: "/fr/blog/geneve" },
              { label: "Guides Saisonniers" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Guides Saisonniers</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Le calendrier culturel genevois évolue avec les saisons. Des festivals d'été aux premières d'opéra hivernales — nos guides saisonniers vous aident à planifier à l'avance.</p>
          </div>
          <div className="max-w-2xl py-16 border-t border-border/30">
            <div className="w-6 h-[1px] bg-gold-gradient mb-6" />
            <p className="font-serif text-xl text-foreground mb-3">Contenus saisonniers à venir.</p>
            <p className="text-muted-foreground font-sans">Abonnez-vous au guide hebdomadaire et soyez le premier à recevoir nos bilans culturels saisonniers.</p>
          </div>
        </div>
        <CTASection
          title="Gardez une Longueur d'Avance sur la Saison"
          subtitle="Nos guides saisonniers vous aident à planifier les meilleures expériences culturelles à Genève tout au long de l'année."
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
