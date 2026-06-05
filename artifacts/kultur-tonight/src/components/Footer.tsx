import { Link } from "wouter";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050810] relative">
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-20" />

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-10">
        {/* Wordmark + tagline */}
        <div className="mb-14 pb-12 border-b border-border/40">
          <Link href="/en" className="inline-block mb-3 group">
            <span className="font-serif text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              KulturTonight
            </span>
          </Link>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-sans mt-1">
            Geneva's cultural compass
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Explore Geneva */}
          <div>
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans mb-5">
              Explore Geneva
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Theatre", href: "/en/geneva/theatre" },
                { label: "Concerts", href: "/en/geneva/concerts" },
                { label: "Family Events", href: "/en/geneva/family-events" },
                { label: "This Weekend", href: "/en/geneva/things-to-do-this-weekend" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Venues & Events */}
          <div>
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans mb-5">
              Venues & Events
            </h4>
            <ul className="space-y-3">
              {[
                { label: "All Venues", href: "/en/geneva/venues" },
                { label: "All Events", href: "/en/geneva/events" },
                { label: "Geneva Guide", href: "/en/geneva" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial */}
          <div>
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans mb-5">
              Editorial
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Culture Blog", href: "/en/blog" },
                { label: "City Guides", href: "/en/blog#guides" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-primary font-sans mb-5">
              Connect
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Early Access", href: "#newsletter" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/60 font-sans uppercase tracking-widest">
            &copy; {new Date().getFullYear()} KulturTonight. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[10px] text-muted-foreground/60 hover:text-foreground transition-colors font-sans uppercase tracking-widest"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
