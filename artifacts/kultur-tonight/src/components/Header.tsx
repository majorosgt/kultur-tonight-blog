import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { detectLocale, switchLocale } from "@/lib/i18n";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locale = detectLocale(location);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks =
    locale === "fr"
      ? [
          { label: "Genève",      href: "/fr/geneve" },
          { label: "Événements",  href: "/fr/geneve/evenements" },
          { label: "Lieux",       href: "/fr/geneve/lieux" },
          { label: "Blog",        href: "/fr/blog" },
        ]
      : [
          { label: "Geneva",  href: "/en/geneva" },
          { label: "Events",  href: "/en/geneva/events" },
          { label: "Venues",  href: "/en/geneva/venues" },
          { label: "Blog",    href: "/en/blog" },
        ];

  const earlyAccessLabel = locale === "fr" ? "Recevoir le guide" : "Get the Weekly Guide";
  const joinLabel        = locale === "fr" ? "Recevoir le guide hebdomadaire" : "Get the Weekly Guide";

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
        {/* Logo + descriptor */}
        <div className="flex items-center gap-4">
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
          {/* Descriptor — hidden on mobile */}
          <span className="hidden lg:flex items-center gap-3">
            <span className="w-px h-4 bg-border/60" aria-hidden="true" />
            <span
              className="text-[11px] uppercase tracking-[0.22em] font-sans"
              style={{ color: "#E1C570", opacity: 0.85 }}
            >
              {locale === "fr" ? "Guide culturel de Genève" : "Geneva Culture Guide"}
            </span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
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
          <div className="w-px h-4 bg-border mx-1" />

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

          <Button
            className="bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-sans font-medium tracking-widest uppercase text-xs px-6 py-5 relative overflow-hidden group"
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
                className="pt-8"
              >
                <Button className="w-full bg-gold-gradient text-black border-none rounded-none font-serif text-xl h-14">
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
