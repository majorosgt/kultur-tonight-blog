import type { CSSProperties } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  subtitleStyle?: CSSProperties;
  accent?: boolean;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, subtitleStyle, accent = true, centered = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {accent && (
        <div className={`flex items-center gap-4 mb-5 ${centered ? "justify-center" : ""}`}>
          <div className="w-8 h-[1px] bg-gold-gradient" />
          <div className="w-1 h-1 rounded-full bg-primary/60" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed max-w-xl" style={subtitleStyle}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
