import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";

export default function FrBlogGenevaCeWeekendPage() {
  useSEO({
    title: "Ce Weekend à Genève — Programme Culturel | KulturTonight",
    description: "Les meilleurs événements culturels à découvrir ce weekend à Genève — théâtre, concerts, expositions, sorties en famille et coups de cœur de dernière minute.",
    canonical: "https://kulturtonight.com/fr/blog/geneve/ce-weekend",
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
              { label: "Ce Weekend" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Ce Weekend à Genève</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Un programme de weekend curatée — les événements culturels, spectacles et expositions à ne pas manquer ce weekend à Genève.</p>
          </div>
          <div className="max-w-2xl py-16 border-t border-border/30">
            <div className="w-6 h-[1px] bg-gold-gradient mb-6" />
            <p className="font-serif text-xl text-foreground mb-3">Sélections du weekend à venir.</p>
            <p className="text-muted-foreground font-sans">Abonnez-vous au guide hebdomadaire et recevez notre programme du weekend directement dans votre boîte mail.</p>
          </div>
        </div>
        <CTASection
          title="Planifiez le Weekend Culturel Parfait"
          subtitle="Chaque jeudi, nous envoyons un programme de weekend curatée avec les meilleurs événements à Genève."
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
