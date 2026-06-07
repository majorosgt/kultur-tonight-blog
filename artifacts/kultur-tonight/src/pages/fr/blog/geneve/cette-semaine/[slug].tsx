import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { buildAlternatesFr } from "@/lib/i18n";
import { blogThisWeekFr } from "@/content/blog-this-week.fr";

export default function FrBlogGenevaCetteSemaineDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogThisWeekFr.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article introuvable</h1>
            <Link href="/fr/blog/geneve/cette-semaine" className="text-primary hover:underline">
              Retour à Cette Semaine
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
    canonical: `https://kulturtonight.ch/fr/blog/geneve/cette-semaine/${article.slug}`,
    noindex: true,
    alternates: buildAlternatesFr(`/fr/blog/geneve/cette-semaine/${article.slug}`),
    jsonLd: blogArticleSchema(article, `/fr/blog/geneve/cette-semaine/${article.slug}`),
  });

  const related = blogThisWeekFr.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/fr" },
          { label: "Blog", href: "/fr/blog" },
          { label: "Genève", href: "/fr/blog/geneve" },
          { label: "Cette Semaine", href: "/fr/blog/geneve/cette-semaine" },
          { label: article.title },
        ]}
        categoryLabel="Cette Semaine"
        backHref="/fr/blog/geneve/cette-semaine"
        backLabel="Retour à Cette Semaine"
        related={related}
        relatedHref={(s) => `/fr/blog/geneve/cette-semaine/${s}`}
        relatedTitle="Plus de Sélections de la Semaine"
        relatedSubtitle="D'autres sorties culturelles à ne pas manquer à Genève."
        ctaTitle="Découvrez Genève ce Soir"
        ctaSubtitle="Trouvez les meilleurs événements culturels à Genève en ce moment."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
