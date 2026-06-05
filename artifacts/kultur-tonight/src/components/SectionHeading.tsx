interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
}

export function SectionHeading({ title, subtitle, accent = true }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {accent && (
        <div className="w-12 h-1 bg-gold-gradient mb-6" />
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl font-sans text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
