import { Link } from "wouter";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface Category {
  label: string;
  href: string;
  active?: boolean;
}

export function CategoryNav({ categories }: { categories: Category[] }) {
  return (
    <div className="w-full border-y border-border bg-background/50 backdrop-blur-sm sticky top-[72px] z-40">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-8 py-4">
            {categories.map((category) => (
              <Link
                key={category.label}
                href={category.href}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary ${
                  category.active 
                    ? "text-primary border-b border-primary pb-1" 
                    : "text-muted-foreground"
                }`}
              >
                {category.label}
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      </div>
    </div>
  );
}
