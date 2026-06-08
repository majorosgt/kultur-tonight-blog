import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { detectLocale, switchLocale } from "@/lib/i18n";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  const locale = detectLocale(location);
  const isOnBlog = location.includes("/blog/");

  const scrollToNewsletter = () => {
    const el = document.getElementById("weekly-guide");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(e.target as Node)) {
        setCityDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks =
    locale === "fr"
      ? [
          { label: "Guides",          href: "/fr/blog/geneve/guides" },
          { label: "Sorties",         href: "/fr/geneve/evenements" },
          { label: "Lieux",           href: "/fr/geneve/lieux" },
          { label: "Histoire locale", href: "/fr/blog/geneve/culture" },
          { label: "Blog",            href: "/fr/blog/geneve" },
        ]
      : [
          { label: "Guides",        href: "/en/blog/geneva/guides" },
          { label: "Things to Do",  href: "/en/geneva/events" },
          { label: "Venues",        href: "/en/geneva/venues" },
          { label: "Local History", href: "/en/blog/geneva/culture" },
          { label: "Blog",          href: "/en/blog/geneva" },
        ];

  const blogNavLinks =
    locale === "fr"
      ? [
          { label: "Guides",         href: "/fr/blog/geneve/guides" },
          { label: "Lieux",          href: "/fr/blog/geneve/lieux" },
          { label: "Cette Semaine",  href: "/fr/blog/geneve/cette-semaine" },
          { label: "Saisonnier",     href: "/fr/blog/geneve/saisonnier" },
          { label: "Culture",        href: "/fr/blog/geneve/culture" },
        ]
      : [
          { label: "Guides",       href: "/en/blog/geneva/guides" },
          { label: "Venues",       href: "/en/blog/geneva/venues" },
          { label: "This Week",    href: "/en/blog/geneva/this-week" },
          { label: "Seasonal",     href: "/en/blog/geneva/seasonal" },
          { label: "Culture",      href: "/en/blog/geneva/culture" },
        ];

  const earlyAccessLabel = locale === "fr" ? "Recevoir le guide" : "Get the Weekly Guide";
  const joinLabel        = locale === "fr" ? "Recevoir le guide hebdomadaire" : "Get the Weekly Guide";
  const tonightLabel     = locale === "fr" ? "Événements ce soir →" : "Tonight's Events →";
  const tonightHref      = "https://www.kulturtonight.ch/fr";
  const blogHref         = locale === "fr" ? "/fr/blog/geneve" : "/en/blog/geneva";
  const cityHref         = locale === "fr" ? "/fr/geneve" : "/en/geneva";
  const cultureGuideLabel = locale === "fr" ? "Guide culturel de Genève" : "Geneva Culture Guide";

  const enPath = switchLocale(location, "en");
  const frPath = switchLocale(location, "fr");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#080C18]/90 backdrop-blur-xl border-b border-border py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo + city selector + descriptor */}
        <div className="flex items-center gap-3">
          <Link
            href={locale === "fr" ? "/fr" : "/en"}
            className="flex items-center gap-3 group relative"
            aria-label="KulturTonight — home"
          >
            <img
              src="/assets/logo-mark.svg"
              alt="KulturTonight theater arch mark"
              width={28}
              height={28}
              className="flex-shrink-0 transition-opacity duration-300 group-hover:opacity-80"
            />
            <span className="font-serif text-xl font-bold tracking-tight text-foreground transition-colors relative z-10">
              KulturTonight
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-gradient transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* City selector */}
          <div ref={cityDropdownRef} className="relative hidden md:block">
            <button
              onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 border border-border/40 hover:border-border/70"
              aria-label="Select city"
              aria-expanded={cityDropdownOpen}
            >
              <MapPin className="w-3 h-3" style={{ color: "#E1C570" }} />
              <span>Geneva</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${cityDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {cityDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-44 bg-[#080C18]/95 backdrop-blur-xl border border-border/50 shadow-xl z-50"
                >
                  <Link
                    href={cityHref}
                    onClick={() => setCityDropdownOpen(false)}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-sans tracking-widest uppercase text-primary border-b border-border/30 hover:bg-white/5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-gradient inline-block" />
                    Geneva
                  </Link>
                  <button
                    disabled
                    className="w-full flex items-center justify-between gap-2 px-4 py-2.5 text-xs font-sans tracking-widest uppercase text-muted-foreground/40 cursor-not-allowed"
                  >
                    <span>Zurich</span>
                    <span className="text-[10px] tracking-normal normal-case opacity-60">Coming soon</span>
                  </button>
                  <button
                    disabled
                    className="w-full flex items-center justify-between gap-2 px-4 py-2.5 text-xs font-sans tracking-widest uppercase text-muted-foreground/40 cursor-not-allowed"
                  >
                    <span>Lausanne</span>
                    <span className="text-[10px] tracking-normal normal-case opacity-60">Coming soon</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Descriptor — hidden on mobile, links to blog/geneva */}
          <span className="hidden xl:flex items-center gap-3">
            <span className="w-px h-4 bg-border/60" aria-hidden="true" />
            <Link
              href={blogHref}
              className="text-[11px] uppercase tracking-[0.22em] font-sans hover:opacity-100 transition-opacity"
              style={{ color: "#E1C570", opacity: 0.85 }}
            >
              {cultureGuideLabel}
            </Link>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-xs font-sans tracking-widest uppercase transition-colors group py-1 ${
                location.startsWith(link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-gold-gradient transition-all duration-300 ${
                location.startsWith(link.href) ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}

          {/* Divider */}
          <div className="w-px h-4 bg-border mx-0.5" />

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-xs font-sans tracking-widest uppercase" aria-label="Language switcher">
            <Link
              href={enPath}
              className={`px-1.5 py-0.5 transition-colors duration-200 ${
                locale === "en"
                  ? "text-primary border-b border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={locale === "en" ? "true" : undefined}
            >
              EN
            </Link>
            <span className="text-border/70">|</span>
            <Link
              href={frPath}
              className={`px-1.5 py-0.5 transition-colors duration-200 ${
                locale === "fr"
                  ? "text-primary border-b border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={locale === "fr" ? "true" : undefined}
            >
              FR
            </Link>
          </div>

          {/* Tonight's Events — external homepage */}
          <a
            href={tonightHref}
            className="flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase font-medium px-4 py-2 bg-gold-gradient text-black hover:opacity-90 transition-opacity"
            data-testid="button-tonight-events"
          >
            {tonightLabel}
          </a>

          {/* Weekly guide CTA — scrolls to newsletter */}
          <Button
            onClick={scrollToNewsletter}
            className="bg-transparent text-foreground border border-border/60 hover:border-primary/60 hover:text-primary rounded-none font-sans font-medium tracking-widest uppercase text-xs px-4 py-5"
            data-testid="button-early-access-header"
          >
            <span className="relative z-10">{earlyAccessLabel}</span>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          data-testid="button-mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={28} className="text-primary" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Blog sub-nav — shown only on /blog/ routes */}
      <AnimatePresence>
        {isOnBlog && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden md:block border-t border-border/20 bg-[#080C18]/60 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 md:px-6 flex items-center gap-8 py-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-muted-foreground/50 mr-2">
                {locale === "fr" ? "Blog" : "Blog"}
              </span>
              {blogNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-sans tracking-widest uppercase transition-colors group py-1 ${
                    location.startsWith(link.href) ? "text-primary" : "text-muted-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-gold-gradient transition-all duration-300 ${
                    location.startsWith(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#080C18]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center px-8"
          >
            {/* Mobile logo */}
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <img
                src="/assets/logo-mark.svg"
                alt="KulturTonight theater arch mark"
                width={24}
                height={24}
              />
              <span className="font-serif text-lg font-bold text-foreground">KulturTonight</span>
            </div>

            {/* Mobile language switcher */}
            <div className="absolute top-7 right-16 flex items-center gap-2 text-xs font-sans tracking-widest uppercase">
              <Link
                href={enPath}
                onClick={() => setMobileMenuOpen(false)}
                className={locale === "en" ? "text-primary" : "text-muted-foreground"}
              >
                EN
              </Link>
              <span className="text-border/70">|</span>
              <Link
                href={frPath}
                onClick={() => setMobileMenuOpen(false)}
                className={locale === "fr" ? "text-primary" : "text-muted-foreground"}
              >
                FR
              </Link>
            </div>

            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
              {/* City indicator on mobile */}
              <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-muted-foreground pb-2 border-b border-border/30">
                <MapPin className="w-3 h-3" style={{ color: "#E1C570" }} />
                <span>Geneva</span>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-4xl font-serif py-4 border-b border-border ${
                      location.startsWith(link.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4 flex flex-col gap-3"
              >
                <a
                  href={tonightHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gold-gradient text-black font-sans text-sm font-medium tracking-widest uppercase h-12"
                >
                  {tonightLabel}
                </a>
                <Button
                  className="w-full bg-transparent text-foreground border border-border/60 rounded-none font-serif text-lg h-12"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(scrollToNewsletter, 300);
                  }}
                >
                  {joinLabel}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
