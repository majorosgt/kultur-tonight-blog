import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Geneva", href: "/en/geneva" },
    { label: "Events", href: "/en/geneva/events" },
    { label: "Venues", href: "/en/geneva/venues" },
    { label: "Blog", href: "/en/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#080C18]/90 backdrop-blur-xl border-b border-border py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/en" className="flex items-center gap-2 group relative">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground transition-colors relative z-10">
            KulturTonight
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-gradient transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
              }`}></span>
            </Link>
          ))}
          <div className="w-px h-4 bg-border mx-2"></div>
          <Link href="/en" className="text-xs font-sans tracking-widest uppercase text-foreground hover:text-primary transition-colors">
            EN
          </Link>
          <Button className="bg-gold-gradient text-black hover:opacity-90 border-none rounded-none font-sans font-medium tracking-widest uppercase text-xs px-6 py-5 relative overflow-hidden group">
            <span className="relative z-10">Early Access</span>
            <div className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
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
                  Join Early Access
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
