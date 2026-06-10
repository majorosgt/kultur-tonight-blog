import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { buildAlternatesFr } from "@/lib/i18n";
import { blogCultureFr } from "@/content/blog-culture.fr";

export default function FrBlogGenevaCultureDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogCultureFr.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article introuvable</h1>
            <Link href="/fr/blog/geneve/culture" className="text-primary hover:underline">
              Retour à Culture
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
    ogUrl: `https://kulturtonight.ch/fr/blog/geneve/culture/${article.slug}`,
    ogImage: article.image,
    twitterCard: "summary_large_image",
    twitterImage: article.image,
    canonical: `https://kulturtonight.ch/fr/blog/geneve/culture/${article.slug}`,
    alternates: buildAlternatesFr(`/fr/blog/geneve/culture/${article.slug}`),
    jsonLd: blogArticleSchema(article, `/fr/blog/geneve/culture/${article.slug}`),
  });

  const related = blogCultureFr.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/fr" },
          { label: "Genève", href: "/fr/blog/geneve" },
          { label: "Histoires locales", href: "/fr/blog/geneve/culture" },
          { label: article.title },
        ]}
        categoryLabel="Histoires locales"
        backHref="/fr/blog/geneve/culture"
        backLabel="Retour à Culture"
        related={related}
        relatedHref={(s) => `/fr/blog/geneve/culture/${s}`}
        relatedTitle="Plus d'Essais Culturels"
        relatedSubtitle="Continuez à explorer l'identité culturelle genevoise."
        ctaTitle="Découvrez Genève ce Soir"
        ctaSubtitle="Trouvez les meilleurs événements culturels à Genève en ce moment."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
