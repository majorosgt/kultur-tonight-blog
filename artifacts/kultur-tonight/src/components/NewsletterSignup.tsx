import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useLocation } from "wouter";
import { detectLocale } from "@/lib/i18n";

interface NewsletterSignupProps {
  variant?: "early-access" | "weekly-guide";
}

const copy = {
  en: {
    label:       "Weekly Guide",
    title:       "Get the Weekly Geneva Culture Guide",
    body:        "A curated selection of theatre, concerts, exhibitions and last-minute cultural experiences — delivered to your inbox every week.",
    emailPlaceholder: "Your email address",
    submitBtn:   "Get the Weekly Guide",
    disclaimer:  "No spam. Just culture. Unsubscribe at any time.",
  },
  fr: {
    label:       "Guide Hebdomadaire",
    title:       "Recevez le guide culturel hebdomadaire de Genève",
    body:        "Une sélection de théâtres, concerts, expositions et expériences culturelles de dernière minute — envoyée chaque semaine dans votre boîte mail.",
    emailPlaceholder: "Votre adresse e-mail",
    submitBtn:   "Recevoir le guide",
    disclaimer:  "Pas de spam. Juste la culture. Désinscription à tout moment.",
  },
};

export function NewsletterSignup({ variant = "weekly-guide" }: NewsletterSignupProps) {
  const [location] = useLocation();
  const locale = detectLocale(location);
  const t = copy[locale];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to Brevo / main KulturTonight newsletter list
    // Hidden fields below carry: source, campaign, city, language, signup_page
  };

  return (
    <section
      id="weekly-guide"
      className="relative py-24 overflow-hidden bg-[#0D1424]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/6 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-gold-gradient" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans">
              {t.label}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 leading-tight">
            {t.title}
          </h3>
          <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {t.body}
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md"
            onSubmit={handleSubmit}
          >
            {/* ── Hidden metadata for Brevo / database integration ── */}
            <input type="hidden" name="source"    value="seo_microsite" />
            <input type="hidden" name="campaign"  value="weekly_geneva_guide" />
            <input type="hidden" name="city"      value="geneva" />
            <input type="hidden" name="language"  value={locale} />
            <input
              type="hidden"
              name="signup_page"
              value={typeof window !== "undefined" ? window.location.href : ""}
            />

            <Input
              type="email"
              placeholder={t.emailPlaceholder}
              className="bg-[#080C18]/60 border-border text-foreground placeholder:text-muted-foreground/60 rounded-none h-12 focus-visible:ring-primary focus-visible:ring-1 flex-1"
              required
              data-testid="input-email-newsletter"
            />
            <Button
              type="submit"
              className="bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-sans uppercase tracking-widest text-xs h-12 px-8 whitespace-nowrap"
              data-testid="button-newsletter-submit"
            >
              {t.submitBtn}
            </Button>
          </form>
          <p className="text-[10px] text-muted-foreground/60 font-sans mt-4 uppercase tracking-widest">
            {t.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
