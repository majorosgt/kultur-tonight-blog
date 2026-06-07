import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/lib/seo";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactPage() {
  useSEO({
    title: "Contact KulturTonight — Get in Touch",
    description: "Contact the KulturTonight team — Geneva's cultural discovery platform for opera, theatre, jazz, and classical music.",
    canonical: "/en/contact",
    noindex: false,
    alternates: [
      { lang: "en", url: "https://kulturtonight.ch/en/contact" },
      { lang: "fr", url: "https://kulturtonight.ch/fr/contact" },
      { lang: "x-default", url: "https://kulturtonight.ch/en/contact" },
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
              Contact
            </p>

            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Get in Touch
            </h1>

            <p className="text-lg text-muted-foreground font-serif leading-relaxed mb-10">
              Questions, partnership enquiries, or editorial submissions — we'd love to hear from you.
            </p>

            <div className="border border-border/40 bg-card p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-gold-gradient" />
                <p className="text-[10px] uppercase tracking-[0.25em] font-sans text-primary">
                  Coming Soon
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-border/50 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-sans text-muted-foreground/60 mb-1">
                    Editorial & Partnerships
                  </p>
                  <p className="text-foreground/70 font-sans text-sm leading-relaxed">
                    Our contact form is coming soon. For urgent enquiries please reach us via our social channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/en/blog/geneva"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 bg-gold-gradient text-black font-sans text-xs font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Explore the Culture Guide
              </Link>
              <Link
                href="/en"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 border border-border/60 text-foreground font-sans text-xs font-medium tracking-widest uppercase hover:border-primary/60 hover:text-primary transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
