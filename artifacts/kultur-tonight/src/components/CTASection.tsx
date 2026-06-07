import type { CSSProperties } from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface CTASectionProps {
  variant?: "hero" | "mid" | "footer-cta";
  title: string;
  subtitle: string;
  primaryCta: { text: string; href: string; target?: string; rel?: string };
  secondaryCta?: { text: string; href: string };
  bgStyle?: CSSProperties;
}

export function CTASection({ variant = "mid", title, subtitle, primaryCta, secondaryCta, bgStyle }: CTASectionProps) {
  const getStyles = () => {
    switch (variant) {
      case "hero":
        return {
          bg: "bg-[#1A0510]",
          titleSize: "text-4xl md:text-5xl lg:text-6xl",
          container: "py-32",
        };
      case "footer-cta":
        return {
          bg: "bg-[#080C18]",
          titleSize: "text-5xl md:text-6xl lg:text-7xl",
          container: "py-40 relative overflow-hidden",
        };
      case "mid":
      default:
        return {
          bg: "bg-[#0D1424]",
          titleSize: "text-3xl md:text-4xl",
          container: "py-24",
        };
    }
  };

  const styles = getStyles();

  return (
    <section className={`${styles.container} ${styles.bg} border-y border-border relative`} style={bgStyle}>
      {variant === "footer-cta" && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="noise-overlay" />
        </>
      )}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8 flex flex-col items-center"
        >
          <div className="w-12 h-[1px] bg-primary/50 mb-4" />
          
          <h2 className={`${styles.titleSize} font-serif font-medium text-foreground leading-tight`}>
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground font-serif max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 w-full max-w-md mx-auto sm:max-w-none">
            <Button asChild size="lg" className="w-full sm:w-auto bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-sans uppercase tracking-widest text-sm px-10 h-14 relative overflow-hidden group">
              {primaryCta.target ? (
                <a href={primaryCta.href} target={primaryCta.target} rel={primaryCta.rel}>
                  <span className="relative z-10">{primaryCta.text}</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </a>
              ) : (
                <Link href={primaryCta.href}>
                  <span className="relative z-10">{primaryCta.text}</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </Link>
              )}
            </Button>
            
            {secondaryCta && (
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-none border-[#E1C570]/70 text-[#E1C570] hover:bg-[#E1C570]/10 hover:text-[#E1C570] font-sans uppercase tracking-widest text-sm px-10 h-14 backdrop-blur-sm transition-all duration-300">
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
