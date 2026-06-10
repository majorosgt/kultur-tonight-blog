import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { blogEvents } from "@/content/blog-events";

export default function BlogGenevaEventArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogEvents.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
            <Link href="/en/blog/geneva/events" className="text-primary hover:underline">
              Back to Events
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
    ogUrl: `https://kulturtonight.ch/en/blog/geneva/events/${article.slug}`,
    ogImage: article.image,
    twitterCard: "summary_large_image",
    twitterImage: article.image,
    canonical: `https://kulturtonight.ch/en/blog/geneva/events/${article.slug}`,
    jsonLd: blogArticleSchema(article, `/en/blog/geneva/events/${article.slug}`),
  });

  const related = blogEvents.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/en" },
          { label: "Geneva", href: "/en/blog/geneva" },
          { label: "Events", href: "/en/blog/geneva/events" },
          { label: article.title },
        ]}
        categoryLabel="Events"
        backHref="/en/blog/geneva/events"
        backLabel="Back to Events"
        related={related}
        relatedHref={(s) => `/en/blog/geneva/events/${s}`}
        relatedTitle="More Event Coverage"
        relatedSubtitle="Continue exploring Geneva's cultural calendar."
        ctaTitle="Discover Tonight in Geneva"
        ctaSubtitle="Find the best cultural events happening in Geneva right now."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
