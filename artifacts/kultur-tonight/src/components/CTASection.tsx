import { Link } from "wouter";
import { Button } from "./ui/button";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export function CTASection({ title, subtitle, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="py-24 bg-[#15050C] border-y border-border/40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button asChild size="lg" className="w-full sm:w-auto bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-serif tracking-wide px-8">
              <Link href={primaryCta.href}>{primaryCta.text}</Link>
            </Button>
            
            {secondaryCta && (
              <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto rounded-none text-foreground hover:text-primary hover:bg-transparent font-serif tracking-wide px-8">
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
