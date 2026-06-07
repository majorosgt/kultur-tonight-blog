import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { buildAlternatesFr } from "@/lib/i18n";
import { blogFamilyFr } from "@/content/blog-family.fr";

export default function FrBlogGenevaFamilleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogFamilyFr.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article introuvable</h1>
            <Link href="/fr/blog/geneve/famille" className="text-primary hover:underline">
              Retour à En Famille
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
    canonical: `https://kulturtonight.ch/fr/blog/geneve/famille/${article.slug}`,
    noindex: true,
    alternates: buildAlternatesFr(`/fr/blog/geneve/famille/${article.slug}`),
    jsonLd: blogArticleSchema(article, `/fr/blog/geneve/famille/${article.slug}`),
  });

  const related = blogFamilyFr.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/fr" },
          { label: "Blog", href: "/fr/blog" },
          { label: "Genève", href: "/fr/blog/geneve" },
          { label: "En Famille", href: "/fr/blog/geneve/famille" },
          { label: article.title },
        ]}
        categoryLabel="En Famille"
        backHref="/fr/blog/geneve/famille"
        backLabel="Retour à En Famille"
        related={related}
        relatedHref={(s) => `/fr/blog/geneve/famille/${s}`}
        relatedTitle="Plus de Guides Famille"
        relatedSubtitle="D'autres meilleures expériences culturelles en famille à Genève."
        ctaTitle="Découvrez Genève ce Soir"
        ctaSubtitle="Trouvez les meilleurs événements culturels à Genève en ce moment."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
