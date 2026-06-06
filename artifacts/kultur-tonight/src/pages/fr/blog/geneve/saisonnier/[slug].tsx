import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";

export default function FrBlogGenevaSaisonnierDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  useSEO({
    title: `${slug?.replace(/-/g, " ")} — Guide Saisonnier Genève | KulturTonight`,
    description: "Un guide saisonnier culturel pour Genève.",
    canonical: `https://kulturtonight.com/fr/blog/geneve/saisonnier/${slug}`,
    alternates: buildAlternatesFr(`/fr/blog/geneve/saisonnier/${slug}`),
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
              { label: "Guides Saisonniers", href: "/fr/blog/geneve/saisonnier" },
              { label: slug ?? "" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 capitalize">{slug?.replace(/-/g, " ")}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Ce guide saisonnier n'est pas encore disponible. Abonnez-vous pour le recevoir dès sa publication.</p>
          </div>
          <Link href="/fr/blog/geneve/saisonnier" className="text-sm text-primary hover:underline underline-offset-4">← Retour aux Guides Saisonniers</Link>
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
