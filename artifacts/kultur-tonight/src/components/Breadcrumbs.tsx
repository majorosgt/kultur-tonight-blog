import { Link } from "wouter";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": item.href ? `https://kulturtonight.ch${item.href}` : undefined,
      })),
    };

    let script = document.querySelector(`script[id="breadcrumb-json-ld"]`);
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("id", "breadcrumb-json-ld");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

    return () => {
      if (script) script.remove();
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-x-2 text-[10px] font-sans uppercase tracking-widest text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-x-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground/80" : ""}>{item.label}</span>
              )}

              {!isLast && (
                <span className="text-primary/40 text-xs">›</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
