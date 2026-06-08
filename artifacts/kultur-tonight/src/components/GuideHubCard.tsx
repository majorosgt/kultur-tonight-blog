import { Link } from "wouter";

export interface GuideHubCardData {
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export function GuideHubCard({ label, title, description, cta, href }: GuideHubCardData) {
  return (
    <Link
      href={href}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E1C570]/60"
      data-testid={`guide-card-${href}`}
    >
      <article
        className="h-full flex flex-col p-7 border border-[#E1C570]/15 transition-all duration-300 group-hover:border-[#E1C570]/45 group-hover:-translate-y-1"
        style={{ backgroundColor: "#0F1A2E", borderTop: "3px solid #E1C570" }}
      >
        <span
          className="text-[11px] uppercase tracking-[0.22em] font-sans mb-4"
          style={{ color: "#E1C570" }}
        >
          {label}
        </span>
        <h3
          className="font-serif text-xl md:text-[1.4rem] leading-snug mb-3"
          style={{ color: "#F8F5F0" }}
        >
          {title}
        </h3>
        <p
          className="font-serif text-[15px] leading-relaxed mb-6"
          style={{ color: "rgba(248,245,240,0.74)" }}
        >
          {description}
        </p>
        <span
          className="mt-auto inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans transition-all duration-300 group-hover:gap-2.5"
          style={{ color: "#E1C570" }}
        >
          {cta}
        </span>
      </article>
    </Link>
  );
}
