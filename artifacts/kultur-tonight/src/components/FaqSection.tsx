export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="bg-background border-t border-border" style={{ paddingTop: "88px", paddingBottom: "88px" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-1 bg-gold-gradient mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-10">
            {title}
          </h2>
          <dl className="divide-y divide-border/70">
            {items.map((item, i) => (
              <div key={i} className="py-7 first:pt-0" data-testid={`faq-item-${i}`}>
                <dt className="font-serif text-lg md:text-xl text-foreground leading-snug mb-3">
                  {item.question}
                </dt>
                <dd
                  className="font-serif text-[15px] md:text-base leading-relaxed"
                  style={{ color: "rgba(248,245,240,0.74)" }}
                >
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
