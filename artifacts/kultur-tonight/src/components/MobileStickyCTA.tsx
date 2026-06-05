import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      // Hide if near bottom to not overlap footer
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      const threshold = 300; // pixels from bottom
      
      if (documentHeight - scrollPosition < threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/90 backdrop-blur-md border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          <Button className="w-full bg-gold-gradient text-black font-serif font-bold text-lg h-14 rounded-none border-none">
            Join Early Access
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
