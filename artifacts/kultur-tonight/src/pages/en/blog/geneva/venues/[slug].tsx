import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogArticleSchema } from "@/lib/schema";
import { blogVenues } from "@/content/blog-venues";

export default function BlogGenevaVenuesDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogVenues.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
            <Link href="/en/blog/geneva/venues" className="text-primary hover:underline">
              Back to Venue Spotlights
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
    ogUrl: `https://kulturtonight.ch/en/blog/geneva/venues/${article.slug}`,
    ogImage: article.image,
    twitterCard: "summary_large_image",
    twitterImage: article.image,
    canonical: `https://kulturtonight.ch/en/blog/geneva/venues/${article.slug}`,
    jsonLd: blogArticleSchema(article, `/en/blog/geneva/venues/${article.slug}`),
  });

  const related = blogVenues.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <BlogArticleLayout
        article={article}
        breadcrumbs={[
          { label: "KulturTonight", href: "/en" },
          { label: "Geneva", href: "/en/blog/geneva" },
          { label: "Venue Spotlights", href: "/en/blog/geneva/venues" },
          { label: article.title },
        ]}
        categoryLabel="Venue Spotlight"
        backHref="/en/blog/geneva/venues"
        backLabel="Back to Venue Spotlights"
        related={related}
        relatedHref={(s) => `/en/blog/geneva/venues/${s}`}
        relatedTitle="More Venue Portraits"
        relatedSubtitle="Continue exploring Geneva's iconic cultural spaces."
        ctaTitle="Discover Tonight in Geneva"
        ctaSubtitle="Find the best cultural events happening in Geneva right now."
      />
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
