import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface NewsletterSignupProps {
  variant?: "early-access" | "weekly-guide";
}

export function NewsletterSignup({ variant = "early-access" }: NewsletterSignupProps) {
  const heading = variant === "early-access" 
    ? "Join KulturTonight Early Access" 
    : "Get the weekly Geneva Culture Guide";
    
  const subtext = variant === "early-access"
    ? "Be the first to secure last-minute tickets to Geneva's most sought-after cultural events."
    : "Curated recommendations for the culturally curious, delivered every Thursday.";

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto bg-card border border-card-border p-8 md:p-12 text-center rounded-none shadow-xl relative overflow-hidden">
          {/* Subtle gold glow inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gold-gradient opacity-50 blur-xl" />
          
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            {heading}
          </h3>
          <p className="text-muted-foreground mb-8">
            {subtext}
          </p>
          
          {/* TODO: Replace with Brevo API integration */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-background border-border text-foreground rounded-none h-12 focus-visible:ring-primary"
              required
            />
            <Button type="submit" className="bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-serif tracking-wide h-12 px-6 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your inbox. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
