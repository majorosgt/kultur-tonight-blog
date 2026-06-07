import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { buildAlternatesFr } from "@/lib/i18n";
import { blogVenuesFr } from "@/content/blog-venues.fr";

export default function FrBlogGenevaLieuxDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogVenuesFr.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article introuvable</h1>
            <Link href="/fr/blog/geneve/lieux" className="text-primary hover:underline">
              Retour aux Portraits de Lieux
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
    canonical: `https://kulturtonight.ch/fr/blog/geneve/lieux/${article.slug}`,
    noindex: true,
    alternates: buildAlternatesFr(`/fr/blog/geneve/lieux/${article.slug}`),
    jsonLd: blogArticleSchema(article, `/fr/blog/geneve/lieux/${article.slug}`),
  });

  const related = blogVenuesFr.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/fr" },
          { label: "Blog", href: "/fr/blog" },
          { label: "Genève", href: "/fr/blog/geneve" },
          { label: "Portraits de Lieux", href: "/fr/blog/geneve/lieux" },
          { label: article.title },
        ]}
        categoryLabel="Portrait de Lieu"
        backHref="/fr/blog/geneve/lieux"
        backLabel="Retour aux Portraits de Lieux"
        related={related}
        relatedHref={(s) => `/fr/blog/geneve/lieux/${s}`}
        relatedTitle="Plus de Portraits de Lieux"
        relatedSubtitle="Continuez à explorer les espaces culturels genevois."
        ctaTitle="Découvrez Genève ce Soir"
        ctaSubtitle="Trouvez les meilleurs événements culturels à Genève en ce moment."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
