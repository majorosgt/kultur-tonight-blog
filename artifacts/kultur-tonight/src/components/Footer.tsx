import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0a0f1c] border-t border-border pt-16 pb-8 mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/en" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                KulturTonight
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Your premium guide to Geneva's cultural scene. Discover theatre, concerts, and art events you almost missed.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Geneva Guide</h4>
            <ul className="space-y-3">
              <li><Link href="/en/geneva/theatre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Theatre</Link></li>
              <li><Link href="/en/geneva/concerts" className="text-sm text-muted-foreground hover:text-primary transition-colors">Concerts</Link></li>
              <li><Link href="/en/geneva/family-events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Family Events</Link></li>
              <li><Link href="/en/geneva/venues" className="text-sm text-muted-foreground hover:text-primary transition-colors">Venues</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Discover</h4>
            <ul className="space-y-3">
              <li><Link href="/en/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Editorial Blog</Link></li>
              <li><Link href="/en/geneva/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Events</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} KulturTonight. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
