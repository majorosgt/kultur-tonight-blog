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
    earlyAccessLabel:  "Early Access",
    weeklyGuideLabel:  "Weekly Guide",
    earlyAccessTitle:  "Your seat is waiting.",
    weeklyGuideTitle:  "Geneva's cultural week,\ncurated for you.",
    earlyAccessBody:   "Join 1,200 Geneva culture lovers who never miss a great night out. Last-minute seats to theatre, opera, and jazz — delivered before anyone else knows they exist.",
    weeklyGuideBody:   "Every Thursday morning, the week's finest cultural events — handpicked and described with the care they deserve. For the culturally curious.",
    emailPlaceholder:  "Your email address",
    joinBtn:           "Join Now",
    subscribeBtn:      "Subscribe",
    disclaimer:        "No spam. Just culture. Unsubscribe at any time.",
  },
  fr: {
    earlyAccessLabel:  "Accès Anticipé",
    weeklyGuideLabel:  "Guide Hebdo",
    earlyAccessTitle:  "Votre place vous attend.",
    weeklyGuideTitle:  "La semaine culturelle genevoise,\ncuratée pour vous.",
    earlyAccessBody:   "Rejoignez 1 200 amateurs de culture genevoise qui ne manquent jamais une belle soirée. Places de dernière minute pour le théâtre, l'opéra et le jazz — avant tout le monde.",
    weeklyGuideBody:   "Chaque jeudi matin, les meilleurs événements culturels de la semaine — sélectionnés et décrits avec soin. Pour les curieux de culture.",
    emailPlaceholder:  "Votre adresse e-mail",
    joinBtn:           "S'inscrire",
    subscribeBtn:      "S'abonner",
    disclaimer:        "Pas de spam. Juste la culture. Désinscription à tout moment.",
  },
};

export function NewsletterSignup({ variant = "early-access" }: NewsletterSignupProps) {
  const [location] = useLocation();
  const locale = detectLocale(location);
  const t = copy[locale];
  const isEarlyAccess = variant === "early-access";

  return (
    <section
      id={isEarlyAccess ? "newsletter" : "weekly-guide"}
      className={`relative py-24 overflow-hidden ${isEarlyAccess ? "bg-[#1A0510]" : "bg-[#0D1424]"}`}
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
          className={`mx-auto ${isEarlyAccess ? "max-w-3xl text-center" : "max-w-2xl"}`}
        >
          <div className={`flex items-center gap-4 mb-6 ${isEarlyAccess ? "justify-center" : ""}`}>
            <div className="w-8 h-[1px] bg-gold-gradient" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans">
              {isEarlyAccess ? t.earlyAccessLabel : t.weeklyGuideLabel}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 leading-tight whitespace-pre-line">
            {isEarlyAccess ? t.earlyAccessTitle : t.weeklyGuideTitle}
          </h3>
          <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            {isEarlyAccess ? t.earlyAccessBody : t.weeklyGuideBody}
          </p>

          <form
            className={`flex flex-col sm:flex-row gap-3 ${isEarlyAccess ? "max-w-md mx-auto" : "max-w-md"}`}
            onSubmit={(e) => e.preventDefault()}
          >
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
              {isEarlyAccess ? t.joinBtn : t.subscribeBtn}
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
