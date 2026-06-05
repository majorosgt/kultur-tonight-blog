import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  /** Unsplash or absolute URL for the hero background photo */
  imageSrc?: string;
  /** Accessible description of the hero image */
  imageAlt?: string;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2400&auto=format&fit=crop";

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "Grand concert hall interior with golden architecture and dramatic lighting",
}: HeroProps) {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#2D0714]">
      {/* Hero photography — layered behind gradient */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
        loading="eager"
        fetchPriority="high"
      />

      {/* Burgundy-to-black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D0714]/85 via-[#1A0510]/80 to-[#080C18]" />

      {/* Noise texture */}
      <div className="noise-overlay" />

      <div className="container relative z-20 mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-8xl font-serif font-medium text-foreground leading-[1.1] tracking-tight mb-8 drop-shadow-2xl">
            {title}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="w-32 h-[1px] bg-gold-gradient mb-8 origin-center"
          />

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-serif max-w-2xl mx-auto leading-relaxed mb-12">
            {subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-sans uppercase tracking-widest text-sm px-10 h-14 relative overflow-hidden group"
              data-testid="button-hero-primary-cta"
            >
              <Link href={ctaHref}>
                <span className="relative z-10">{ctaText}</span>
              </Link>
            </Button>

            {secondaryCtaText && secondaryCtaHref && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-none border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-sans uppercase tracking-widest text-sm px-10 h-14 backdrop-blur-sm transition-all duration-300"
                data-testid="button-hero-secondary-cta"
              >
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary/70 w-5 h-5" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </div>
  );
}
