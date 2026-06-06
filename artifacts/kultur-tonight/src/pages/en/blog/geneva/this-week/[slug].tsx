import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { blogThisWeek } from "@/content/blog-this-week";

export default function BlogGenevaThisWeekDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogThisWeek.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
            <Link href="/en/blog/geneva/this-week" className="text-primary hover:underline">
              Back to This Week
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
    canonical: `https://kulturtonight.com/en/blog/geneva/this-week/${article.slug}`,
    noindex: true,
    jsonLd: blogArticleSchema(article, `/en/blog/geneva/this-week/${article.slug}`),
  });

  const related = blogThisWeek.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/en" },
          { label: "Blog", href: "/en/blog" },
          { label: "Geneva", href: "/en/blog/geneva" },
          { label: "This Week", href: "/en/blog/geneva/this-week" },
          { label: article.title },
        ]}
        categoryLabel="This Week"
        backHref="/en/blog/geneva/this-week"
        backLabel="Back to This Week"
        related={related}
        relatedHref={(s) => `/en/blog/geneva/this-week/${s}`}
        relatedTitle="More This Week"
        relatedSubtitle="More of Geneva's best cultural picks this week."
        ctaTitle="Discover Tonight in Geneva"
        ctaSubtitle="Find the best cultural events happening in Geneva right now."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
