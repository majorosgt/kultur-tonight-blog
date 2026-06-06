import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";

export default function FrBlogGenevaCetteSemaineDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  useSEO({
    title: `Cette Semaine à Genève — ${slug} | KulturTonight`,
    description: "Une sélection curatée des meilleurs événements culturels de la semaine à Genève.",
    canonical: `https://kulturtonight.com/fr/blog/geneve/cette-semaine/${slug}`,
    alternates: buildAlternatesFr(`/fr/blog/geneve/cette-semaine/${slug}`),
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
              { label: "Cette Semaine", href: "/fr/blog/geneve/cette-semaine" },
              { label: slug ?? "" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 capitalize">{slug?.replace(/-/g, " ")}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Cette édition hebdomadaire n'est pas encore disponible. Abonnez-vous pour recevoir les prochaines éditions dans votre boîte mail.</p>
          </div>
          <Link href="/fr/blog/geneve/cette-semaine" className="text-sm text-primary hover:underline underline-offset-4">← Retour à Cette Semaine</Link>
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
