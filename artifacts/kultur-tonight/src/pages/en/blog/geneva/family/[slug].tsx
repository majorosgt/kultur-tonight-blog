import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { blogFamily } from "@/content/blog-family";

export default function BlogGenevaFamilyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogFamily.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
            <Link href="/en/blog/geneva/family" className="text-primary hover:underline">
              Back to Family
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
    ogUrl: `https://kulturtonight.ch/en/blog/geneva/family/${article.slug}`,
    ogImage: article.image,
    twitterCard: "summary_large_image",
    twitterImage: article.image,
    canonical: `https://kulturtonight.ch/en/blog/geneva/family/${article.slug}`,
    jsonLd: blogArticleSchema(article, `/en/blog/geneva/family/${article.slug}`),
  });

  const related = blogFamily.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/en" },
          { label: "Geneva", href: "/en/blog/geneva" },
          { label: "Family", href: "/en/blog/geneva/family" },
          { label: article.title },
        ]}
        categoryLabel="Family"
        backHref="/en/blog/geneva/family"
        backLabel="Back to Family"
        related={related}
        relatedHref={(s) => `/en/blog/geneva/family/${s}`}
        relatedTitle="More Family Guides"
        relatedSubtitle="More of the best cultural experiences for families in Geneva."
        ctaTitle="Discover Tonight in Geneva"
        ctaSubtitle="Find the best cultural events happening in Geneva right now."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
