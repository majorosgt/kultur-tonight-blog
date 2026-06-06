import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { buildAlternatesFr } from "@/lib/i18n";

export default function FrBlogGenevaCeWeekendDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  useSEO({
    title: `Weekend à Genève — ${slug} | KulturTonight`,
    description: "Un programme culturel curatée pour le weekend à Genève.",
    canonical: `https://kulturtonight.com/fr/blog/geneve/ce-weekend/${slug}`,
    alternates: buildAlternatesFr(`/fr/blog/geneve/ce-weekend/${slug}`),
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
              { label: "Ce Weekend", href: "/fr/blog/geneve/ce-weekend" },
              { label: slug ?? "" },
            ]}
          />
          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 capitalize">{slug?.replace(/-/g, " ")}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Cette édition du weekend n'est pas encore disponible. Abonnez-vous pour recevoir les prochaines éditions.</p>
          </div>
          <Link href="/fr/blog/geneve/ce-weekend" className="text-sm text-primary hover:underline underline-offset-4">← Retour à Ce Weekend</Link>
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
