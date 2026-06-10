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
  const [weeklyHover, setWeeklyHover] = useState(false);

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
          { label: "Culture Guide",     href: "/fr/blog/geneve" },
          { label: "Sorties",           href: "/fr/geneve/evenements" },
          { label: "Lieux",             href: "/fr/geneve/lieux" },
          { label: "Histoires locales", href: "/fr/blog/geneve/culture" },
        ]
      : [
          { label: "Culture Guide", href: "/en/blog/geneva" },
          { label: "Things to Do",  href: "/en/geneva/events" },
          { label: "Venues",        href: "/en/geneva/venues" },
          { label: "Local Stories", href: "/en/blog/geneva/culture" },
        ];

  const earlyAccessLabel = locale === "fr" ? "Recevoir le guide" : "Get the Weekly Guide";
  const joinLabel        = locale === "fr" ? "Recevoir le guide hebdomadaire" : "Get the Weekly Guide";
  const tonightLabel     = locale === "fr" ? "Événements ce soir →" : "Tonight's Events →";
  const tonightHref      = "https://www.kulturtonight.ch/fr";
  const cityHref         = locale === "fr" ? "/fr/geneve" : "/en/geneva";

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
              src="/kulturtonight-logo.png"
              alt="KulturTonight"
              height={36}
              className="h-9 w-auto flex-shrink-0 transition-opacity duration-300 group-hover:opacity-80"
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
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative whitespace-nowrap text-xs font-sans tracking-widest uppercase transition-colors group py-1 ${
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

          {/* Tonight's Events — matches hero PRIMARY button */}
          <a
            href={tonightHref}
            className="relative inline-flex items-center justify-center px-8 font-sans uppercase tracking-widest text-[11px] hover:opacity-90 transition-opacity duration-200 overflow-hidden"
            style={{
              height: "52px",
              background:
                "linear-gradient(91.54deg, rgba(201,147,39,0.8) -14.78%, #E1C570 52.55%, rgba(201,163,39,0.8) 80.74%, rgba(201,134,39,0.8) 114.58%)",
              color: "#121212",
            }}
            data-testid="button-tonight-events"
          >
            {tonightLabel}
          </a>

          {/* Weekly guide CTA — matches hero SECONDARY button, with gold fill on hover */}
          <button
            onClick={scrollToNewsletter}
            onMouseEnter={() => setWeeklyHover(true)}
            onMouseLeave={() => setWeeklyHover(false)}
            className="relative inline-flex items-center justify-center px-8 font-sans uppercase tracking-widest text-[11px] transition-colors duration-200 backdrop-blur-sm"
            style={{
              height: "52px",
              border: "1px solid #E1C570",
              background: weeklyHover
                ? "linear-gradient(91.54deg, rgba(201,147,39,0.8) -14.78%, #E1C570 52.55%, rgba(201,163,39,0.8) 80.74%, rgba(201,134,39,0.8) 114.58%)"
                : "transparent",
              color: weeklyHover ? "#121212" : "#F8F5F0",
            }}
            data-testid="button-early-access-header"
          >
            <span className="relative z-10">{earlyAccessLabel}</span>
          </button>
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
                src="/kulturtonight-logo.png"
                alt="KulturTonight"
                height={32}
                className="h-8 w-auto"
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
