import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { buildAlternatesFr } from "@/lib/i18n";
import { blogSeasonalFr } from "@/content/blog-seasonal.fr";

export default function FrBlogGenevaSaisonnierDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogSeasonalFr.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article introuvable</h1>
            <Link href="/fr/blog/geneve/saisonnier" className="text-primary hover:underline">
              Retour aux Guides Saisonniers
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
    canonical: `https://kulturtonight.ch/fr/blog/geneve/saisonnier/${article.slug}`,
    alternates: buildAlternatesFr(`/fr/blog/geneve/saisonnier/${article.slug}`),
    jsonLd: blogArticleSchema(article, `/fr/blog/geneve/saisonnier/${article.slug}`),
  });

  const related = blogSeasonalFr.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/fr" },
          { label: "Blog", href: "/fr/blog" },
          { label: "Genève", href: "/fr/blog/geneve" },
          { label: "Guides Saisonniers", href: "/fr/blog/geneve/saisonnier" },
          { label: article.title },
        ]}
        categoryLabel="Saisonnier"
        backHref="/fr/blog/geneve/saisonnier"
        backLabel="Retour aux Guides Saisonniers"
        related={related}
        relatedHref={(s) => `/fr/blog/geneve/saisonnier/${s}`}
        relatedTitle="Plus de Guides Saisonniers"
        relatedSubtitle="Continuez à planifier votre année culturelle à Genève."
        ctaTitle="Découvrez Genève ce Soir"
        ctaSubtitle="Trouvez les meilleurs événements culturels à Genève en ce moment."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
