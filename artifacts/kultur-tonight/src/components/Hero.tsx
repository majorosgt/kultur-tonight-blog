import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "./ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageHint?: string; // e.g. for generating/placing an image
}

export function Hero({ title, subtitle, ctaText, ctaHref, secondaryCtaText, secondaryCtaHref, imageHint }: HeroProps) {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1729]/80 via-[#3B0A1E]/80 to-[#0F1729] z-10" />
        {/* We would use an actual image here if available, matching the hint */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507676184212-d0330a151f96?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-foreground/80 font-sans max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="w-full sm:w-auto bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-serif tracking-wide px-8 h-14 text-lg">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
            
            {secondaryCtaText && secondaryCtaHref && (
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-none border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-serif tracking-wide px-8 h-14 text-lg">
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
}
