import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { detectLocale } from "@/lib/i18n";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();
  const locale = detectLocale(location);

  const label = locale === "fr" ? "Recevoir le guide hebdomadaire" : "Get the Weekly Guide";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      const nearBottom = documentHeight - scrollPosition < 320;
      const pastThreshold = window.scrollY > 400;
      setIsVisible(pastThreshold && !nearBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 pt-3 bg-gradient-to-t from-[#080C18] to-transparent pointer-events-none"
        >
          <Button
            className="w-full bg-gold-gradient text-black font-serif text-base font-bold h-14 rounded-none border-none pointer-events-auto shadow-[0_-8px_30px_rgba(232,184,75,0.15)]"
            onClick={() => {
              document.getElementById("weekly-guide")?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-mobile-sticky-cta"
          >
            {label}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
