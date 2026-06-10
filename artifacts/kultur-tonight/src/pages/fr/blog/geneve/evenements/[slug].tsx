import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { buildAlternatesFr } from "@/lib/i18n";
import { blogEventsFr } from "@/content/blog-events.fr";

export default function FrBlogGenevaEvenementsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogEventsFr.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article introuvable</h1>
            <Link href="/fr/blog/geneve/evenements" className="text-primary hover:underline">
              Retour aux Événements
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  useSEO({
    title: article.seoTitle,
    description: article.seoDescription,
    ogTitle: article.ogTitle,
    ogDescription: article.ogDescription,
    ogUrl: `https://kulturtonight.ch/fr/blog/geneve/evenements/${article.slug}`,
    ogImage: article.image,
    twitterCard: "summary_large_image",
    twitterImage: article.image,
    canonical: `https://kulturtonight.ch/fr/blog/geneve/evenements/${article.slug}`,
    alternates: buildAlternatesFr(`/fr/blog/geneve/evenements/${article.slug}`),
    jsonLd: blogArticleSchema(article, `/fr/blog/geneve/evenements/${article.slug}`),
  });

  const related = blogEventsFr.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/fr" },
          { label: "Genève", href: "/fr/blog/geneve" },
          { label: "Événements", href: "/fr/blog/geneve/evenements" },
          { label: article.title },
        ]}
        categoryLabel="Événements"
        backHref="/fr/blog/geneve/evenements"
        backLabel="Retour aux Événements"
        related={related}
        relatedHref={(s) => `/fr/blog/geneve/evenements/${s}`}
        relatedTitle="Plus de Couvertures d'Événements"
        relatedSubtitle="Continuez à explorer l'agenda culturel genevois."
        ctaTitle="Découvrez Genève ce Soir"
        ctaSubtitle="Trouvez les meilleurs événements culturels à Genève en ce moment."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
