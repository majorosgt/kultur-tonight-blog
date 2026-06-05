import { Link } from "wouter";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { motion } from "framer-motion";

interface Category {
  label: string;
  href: string;
  active?: boolean;
}

export function CategoryNav({ categories }: { categories: Category[] }) {
  return (
    <div className="w-full border-b border-border bg-[#080C18]/80 backdrop-blur-md sticky top-[72px] z-40">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max gap-1 py-3">
            {categories.map((category, i) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={category.href}>
                  <span
                    className={`inline-block text-[10px] uppercase tracking-[0.2em] font-sans px-4 py-2 transition-all duration-200 cursor-pointer ${
                      category.active
                        ? "bg-gold-gradient text-black"
                        : "text-muted-foreground border border-border hover:text-primary hover:border-primary/30"
                    }`}
                  >
                    {category.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      </div>
    </div>
  );
}
