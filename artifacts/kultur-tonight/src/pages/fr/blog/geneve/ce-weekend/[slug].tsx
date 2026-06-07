import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { buildAlternatesFr } from "@/lib/i18n";
import { blogThisWeekendFr } from "@/content/blog-this-weekend.fr";

export default function FrBlogGenevaCeWeekendDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogThisWeekendFr.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article introuvable</h1>
            <Link href="/fr/blog/geneve/ce-weekend" className="text-primary hover:underline">
              Retour à Ce Week-end
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
    canonical: `https://kulturtonight.ch/fr/blog/geneve/ce-weekend/${article.slug}`,
    noindex: true,
    alternates: buildAlternatesFr(`/fr/blog/geneve/ce-weekend/${article.slug}`),
    jsonLd: blogArticleSchema(article, `/fr/blog/geneve/ce-weekend/${article.slug}`),
  });

  const related = blogThisWeekendFr.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/fr" },
          { label: "Blog", href: "/fr/blog" },
          { label: "Genève", href: "/fr/blog/geneve" },
          { label: "Ce Week-end", href: "/fr/blog/geneve/ce-weekend" },
          { label: article.title },
        ]}
        categoryLabel="Ce Week-end"
        backHref="/fr/blog/geneve/ce-weekend"
        backLabel="Retour à Ce Week-end"
        related={related}
        relatedHref={(s) => `/fr/blog/geneve/ce-weekend/${s}`}
        relatedTitle="Plus de Sélections Week-end"
        relatedSubtitle="D'autres meilleures expériences culturelles pour votre week-end genevois."
        ctaTitle="Découvrez Genève ce Soir"
        ctaSubtitle="Trouvez les meilleurs événements culturels à Genève en ce moment."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
