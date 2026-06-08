import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { blogThisWeekend } from "@/content/blog-this-weekend";

export default function BlogGenevaThisWeekendDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogThisWeekend.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
            <Link href="/en/blog/geneva/this-weekend" className="text-primary hover:underline">
              Back to This Weekend
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
    ogUrl: `https://kulturtonight.ch/en/blog/geneva/this-weekend/${article.slug}`,
    ogImage: article.image,
    twitterCard: "summary_large_image",
    twitterImage: article.image,
    canonical: `https://kulturtonight.ch/en/blog/geneva/this-weekend/${article.slug}`,
    jsonLd: blogArticleSchema(article, `/en/blog/geneva/this-weekend/${article.slug}`),
  });

  const related = blogThisWeekend.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/en" },
          { label: "Blog", href: "/en/blog" },
          { label: "Geneva", href: "/en/blog/geneva" },
          { label: "This Weekend", href: "/en/blog/geneva/this-weekend" },
          { label: article.title },
        ]}
        categoryLabel="This Weekend"
        backHref="/en/blog/geneva/this-weekend"
        backLabel="Back to This Weekend"
        related={related}
        relatedHref={(s) => `/en/blog/geneva/this-weekend/${s}`}
        relatedTitle="More Weekend Picks"
        relatedSubtitle="More of the best cultural experiences for your Geneva weekend."
        ctaTitle="Discover Tonight in Geneva"
        ctaSubtitle="Find the best cultural events happening in Geneva right now."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
