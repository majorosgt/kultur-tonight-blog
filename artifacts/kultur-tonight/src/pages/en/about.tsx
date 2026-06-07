import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/lib/seo";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function AboutPage() {
  useSEO({
    title: "About KulturTonight — Geneva's Cultural Compass",
    description: "KulturTonight curates the finest opera, theatre, jazz, and classical music experiences in Geneva, Switzerland.",
    canonical: "/en/about",
    noindex: false,
    alternates: [
      { lang: "en", url: "https://kulturtonight.ch/en/about" },
      { lang: "fr", url: "https://kulturtonight.ch/fr/a-propos" },
      { lang: "x-default", url: "https://kulturtonight.ch/en/about" },
    ],
  });

  return (
    <div className="min-h-screen bg-[#080C18] text-foreground flex flex-col">
      <Header />

      <main className="flex-grow pt-36 pb-28">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="w-12 h-[1px] bg-gold-gradient mb-8" />

            <p className="text-[10px] uppercase tracking-[0.3em] font-sans text-primary mb-4">
              About
            </p>

            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Geneva's Cultural Compass
            </h1>

            <p className="text-lg text-muted-foreground font-serif leading-relaxed mb-10">
              KulturTonight is a premium cultural discovery platform for Geneva, Switzerland — curating the finest opera, theatre, jazz, classical music, and family experiences the city has to offer.
            </p>

            <div className="border border-border/40 bg-card p-8 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-gold-gradient" />
                <p className="text-[10px] uppercase tracking-[0.25em] font-sans text-primary">
                  Coming Soon
                </p>
              </div>
              <p className="text-foreground/70 font-sans text-sm leading-relaxed">
                Our full about page is on its way. In the meantime, explore Geneva's cultural programme or sign up for the weekly guide below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/en/blog/geneva"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 bg-gold-gradient text-black font-sans text-xs font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Explore the Culture Guide
              </Link>
              <Link
                href="/en/geneva/events"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 border border-border/60 text-foreground font-sans text-xs font-medium tracking-widest uppercase hover:border-primary/60 hover:text-primary transition-colors"
              >
                Browse Events
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
