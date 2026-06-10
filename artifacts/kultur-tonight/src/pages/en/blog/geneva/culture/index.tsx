import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";
import { blogCulture } from "@/content/blog-culture";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function BlogGenevaCulturePage() {
  useSEO({
    title: "Geneva Culture — Essays and Reflections | KulturTonight",
    description: "Essays, reflections, and long reads on Geneva's cultural life — the ideas, traditions, and conversations that shape the city's artistic identity.",
    canonical: "https://kulturtonight.ch/en/blog/geneva/culture",
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="w-full overflow-hidden">
          <img
            src="/assets/hero/local-stories.png"
            alt="Geneva old town street at dusk, warm golden light"
            className="w-full h-[280px] md:h-[420px] lg:h-[500px] object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "KulturTonight", href: "/en" },
              { label: "Geneva", href: "/en/blog/geneva" },
              { label: "Local Stories" },
            ]}
          />

          <div className="max-w-3xl mt-8 mb-16">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Local Stories
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stories, essays and reflections on the people, places and culture that make Geneva worth knowing.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-[1px] bg-gold-gradient" />
              <div className="w-1 h-1 rounded-full bg-primary/60" />
            </div>
            <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed max-w-xl">
              Stories from the city — one to start, more on the way.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {blogCulture.map((article) => (
              <motion.div key={article.slug} variants={itemVariants} data-testid={`card-blog-${article.slug}`}>
                <BlogCard article={article} href={`/en/blog/geneva/culture/${article.slug}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTASection
          title="Culture, Delivered Weekly"
          subtitle="Subscribe to the Weekly Guide and receive our curated Geneva Culture Guide every Thursday."
          primaryCta={{ text: "Get the Weekly Guide", href: "#weekly-guide" }}
          secondaryCta={{ text: "Tonight's Events →", href: "https://kulturtonight.ch/en/geneva/" }}
        />
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
