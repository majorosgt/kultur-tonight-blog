import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface NewsletterSignupProps {
  variant?: "early-access" | "weekly-guide";
}

export function NewsletterSignup({ variant = "early-access" }: NewsletterSignupProps) {
  const isEarlyAccess = variant === "early-access";

  return (
    <section
      id={isEarlyAccess ? "newsletter" : "weekly-guide"}
      className={`relative py-24 overflow-hidden ${isEarlyAccess ? "bg-[#1A0510]" : "bg-[#0D1424]"}`}
    >
      {/* Gold atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/6 blur-[100px] rounded-full pointer-events-none" />
      {/* Top/bottom gold lines */}
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
          {/* Accent bar */}
          <div className={`flex items-center gap-4 mb-6 ${isEarlyAccess ? "justify-center" : ""}`}>
            <div className="w-8 h-[1px] bg-gold-gradient" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans">
              {isEarlyAccess ? "Early Access" : "Weekly Guide"}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 leading-tight">
            {isEarlyAccess
              ? "Your seat is waiting."
              : "Geneva's cultural week,\ncurated for you."}
          </h3>
          <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            {isEarlyAccess
              ? "Join 1,200 Geneva culture lovers who never miss a great night out. Last-minute seats to theatre, opera, and jazz — delivered before anyone else knows they exist."
              : "Every Thursday morning, the week's finest cultural events — handpicked and described with the care they deserve. For the culturally curious."}
          </p>

          {/* TODO: Replace with Brevo API integration */}
          <form
            className={`flex flex-col sm:flex-row gap-3 ${isEarlyAccess ? "max-w-md mx-auto" : "max-w-md"}`}
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-[#080C18]/60 border-border text-foreground placeholder:text-muted-foreground/60 rounded-none h-12 focus-visible:ring-primary focus-visible:ring-1 flex-1"
              required
              data-testid="input-email-newsletter"
            />
            <Button
              type="submit"
              className="bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-sans uppercase tracking-widest text-xs h-12 px-8 whitespace-nowrap"
              data-testid="button-newsletter-submit"
            >
              {isEarlyAccess ? "Join Now" : "Subscribe"}
            </Button>
          </form>
          <p className="text-[10px] text-muted-foreground/60 font-sans mt-4 uppercase tracking-widest">
            No spam. Just culture. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
