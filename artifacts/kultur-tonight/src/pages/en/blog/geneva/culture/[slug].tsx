import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { blogCulture } from "@/content/blog-culture";

export default function BlogGenevaCultureDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogCulture.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
            <Link href="/en/blog/geneva/culture" className="text-primary hover:underline">
              Back to Culture
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
    canonical: `https://kulturtonight.com/en/blog/geneva/culture/${article.slug}`,
    noindex: true,
    jsonLd: blogArticleSchema(article, `/en/blog/geneva/culture/${article.slug}`),
  });

  const related = blogCulture.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/en" },
          { label: "Blog", href: "/en/blog" },
          { label: "Geneva", href: "/en/blog/geneva" },
          { label: "Culture", href: "/en/blog/geneva/culture" },
          { label: article.title },
        ]}
        categoryLabel="Culture"
        backHref="/en/blog/geneva/culture"
        backLabel="Back to Culture"
        related={related}
        relatedHref={(s) => `/en/blog/geneva/culture/${s}`}
        relatedTitle="More Cultural Essays"
        relatedSubtitle="Continue exploring Geneva's cultural identity."
        ctaTitle="Discover Tonight in Geneva"
        ctaSubtitle="Find the best cultural events happening in Geneva right now."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
