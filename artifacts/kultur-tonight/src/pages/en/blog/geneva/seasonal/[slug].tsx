import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { blogSeasonal } from "@/content/blog-seasonal";

export default function BlogGenevaSeasonalDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogSeasonal.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
            <Link href="/en/blog/geneva/seasonal" className="text-primary hover:underline">
              Back to Seasonal Guides
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
    canonical: `https://kulturtonight.ch/en/blog/geneva/seasonal/${article.slug}`,
    noindex: true,
    jsonLd: blogArticleSchema(article, `/en/blog/geneva/seasonal/${article.slug}`),
  });

  const related = blogSeasonal.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/en" },
          { label: "Blog", href: "/en/blog" },
          { label: "Geneva", href: "/en/blog/geneva" },
          { label: "Seasonal Guides", href: "/en/blog/geneva/seasonal" },
          { label: article.title },
        ]}
        categoryLabel="Seasonal"
        backHref="/en/blog/geneva/seasonal"
        backLabel="Back to Seasonal Guides"
        related={related}
        relatedHref={(s) => `/en/blog/geneva/seasonal/${s}`}
        relatedTitle="More Seasonal Guides"
        relatedSubtitle="Continue planning your cultural year in Geneva."
        ctaTitle="Discover Tonight in Geneva"
        ctaSubtitle="Find the best cultural events happening in Geneva right now."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
