import { useState } from "react";
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
    label:            "Weekly Guide",
    title:            "Get the Weekly Geneva Culture Guide",
    body:             "A curated selection of theatre, concerts, exhibitions and last-minute cultural experiences — delivered to your inbox every week.",
    firstNameLabel:   "First name",
    firstNamePlaceholder: "Optional",
    emailPlaceholder: "Email address",
    langLabel:        "Preferred language",
    submitBtn:        "Get the Weekly Guide",
    successTitle:     "You're in.",
    successBody:      "Your first Geneva Culture Guide will arrive this week.",
    disclaimer:       "No spam. Just culture. Unsubscribe at any time.",
  },
  fr: {
    label:            "Guide Hebdomadaire",
    title:            "Recevez le guide culturel hebdomadaire de Genève",
    body:             "Une sélection de théâtres, concerts, expositions et expériences culturelles de dernière minute — envoyée chaque semaine dans votre boîte mail.",
    firstNameLabel:   "Prénom",
    firstNamePlaceholder: "Facultatif",
    emailPlaceholder: "Adresse e-mail",
    langLabel:        "Langue préférée",
    submitBtn:        "Recevoir le guide",
    successTitle:     "C'est noté.",
    successBody:      "Votre premier guide culturel de Genève arrive cette semaine.",
    disclaimer:       "Pas de spam. Juste la culture. Désinscription à tout moment.",
  },
};

/*
 * API endpoint is configured via the VITE_NEWSLETTER_API_URL environment variable.
 * Set it to your Brevo / KulturTonight API endpoint before going live.
 * Example:  VITE_NEWSLETTER_API_URL=https://api.kulturtonight.com/newsletter/subscribe
 *
 * The form POSTs a JSON body containing:
 *   { email, firstName, language, city,
 *     source, campaign, signup_page, referrer }
 *
 * No API keys are included in the frontend bundle.
 * Authentication must be handled server-side (proxy, backend, or Brevo webhook secret).
 */
const NEWSLETTER_API_URL = import.meta.env.VITE_NEWSLETTER_API_URL as string | undefined;

export function NewsletterSignup({ variant = "weekly-guide" }: NewsletterSignupProps) {
  const [location] = useLocation();
  const locale = detectLocale(location);
  const t = copy[locale];

  const [firstName, setFirstName] = useState("");
  const [email, setEmail]         = useState("");
  const [language, setLanguage]   = useState<"en" | "fr">(locale);
  const [status, setStatus]       = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg]   = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const payload = {
      /* ── Visible user fields ── */
      email:       email.trim(),
      firstName:   firstName.trim() || undefined,
      language,
      city:        "geneva",

      /* ── Hidden metadata ── */
      source:      "seo_microsite",
      campaign:    "weekly_geneva_guide",
      signup_page: typeof window !== "undefined" ? window.location.href : "",
      referrer:    typeof document !== "undefined" ? document.referrer : "",
    };

    if (!NEWSLETTER_API_URL) {
      /* Development fallback — log payload and show success */
      console.info("[NewsletterSignup] No VITE_NEWSLETTER_API_URL set. Payload:", payload);
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(NEWSLETTER_API_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch (err) {
      console.error("[NewsletterSignup] Submission error:", err);
      setErrorMsg(
        locale === "fr"
          ? "Une erreur est survenue. Veuillez réessayer."
          : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  };

  return (
    <section
      id="weekly-guide"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#0d1117", borderTop: "1px solid rgba(255,215,0,0.15)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/6 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-[560px]"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-gold-gradient" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans">
              {t.label}
            </span>
          </div>

          {/* Heading + body */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 leading-tight text-center">
            {t.title}
          </h3>
          <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-8 text-center">
            {t.body}
          </p>

          {/* ── Success state ── */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4 max-w-md"
            >
              <div className="w-8 h-[1px] bg-gold-gradient mt-3 flex-shrink-0" />
              <div>
                <p className="font-serif text-xl text-foreground font-medium mb-1">
                  {t.successTitle}
                </p>
                <p className="text-sm text-muted-foreground font-sans">
                  {t.successBody}
                </p>
              </div>
            </motion.div>
          ) : (
            <form
              className="flex flex-col gap-3 w-full"
              onSubmit={handleSubmit}
              data-testid="form-newsletter"
            >
              {/* Row 1: first name + email */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder={`${t.firstNameLabel} — ${t.firstNamePlaceholder}`}
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="bg-[#080C18]/60 border-border text-foreground placeholder:text-muted-foreground/50 rounded-none h-12 focus-visible:ring-primary focus-visible:ring-1 sm:w-40 flex-shrink-0"
                  autoComplete="given-name"
                  data-testid="input-firstname-newsletter"
                />
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-[#080C18]/60 border-border text-foreground placeholder:text-muted-foreground/60 rounded-none h-12 focus-visible:ring-primary focus-visible:ring-1 flex-1"
                  required
                  autoComplete="email"
                  data-testid="input-email-newsletter"
                />
              </div>

              {/* Row 2: language toggle */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-sans">
                  {t.langLabel}:
                </span>
                <div className="flex items-center gap-1 text-[11px] font-sans uppercase tracking-widest">
                  {(["en", "fr"] as const).map(lang => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setLanguage(lang)}
                      className="px-2.5 py-1 transition-colors duration-200"
                      style={{
                        color:        language === lang ? "#E1C570" : "rgba(248,245,240,0.4)",
                        borderBottom: language === lang ? "1px solid #E1C570" : "1px solid transparent",
                      }}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error message */}
              {status === "error" && errorMsg && (
                <p className="text-xs text-red-400 font-sans">{errorMsg}</p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-sans uppercase tracking-widest text-xs h-12 px-8 w-full sm:w-auto self-start disabled:opacity-60"
                data-testid="button-newsletter-submit"
              >
                {status === "loading"
                  ? (locale === "fr" ? "Envoi…" : "Sending…")
                  : t.submitBtn}
              </Button>

              <p className="text-[10px] text-muted-foreground/60 font-sans uppercase tracking-widest">
                {t.disclaimer}
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
