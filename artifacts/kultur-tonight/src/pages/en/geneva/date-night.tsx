import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";

const pairs = [
  { title: "One symphony, one drink", text: "Victoria Hall, then nowhere far. The OSR's home is the cleanest two-seat evening in the city.", href: "/en/geneva/venues/victoria-hall", place: "Victoria Hall" },
  { title: "The industrial room", text: "Bâtiment des Forces Motrices, when the programme is opera or chamber. The building does half the work.", href: "/en/geneva/venues/batiment-des-forces-motrices", place: "BFM" },
  { title: "Late, in Carouge", text: "Chat Noir. A table, a cabaret or a band, and no need to invent a restaurant crawl.", href: "/en/geneva/venues/chat-noir", place: "Chat Noir" },
  { title: "Thursday, then a room", text: "Musée d'Art et d'Histoire is open until 21:00 on Thursday. Pair it with a small stage, not a second museum.", href: "/en/geneva/venues/musee-art-et-histoire", place: "MAH" },
];

export default function DateNightPage() {
  useSEO({
    title: "A Date Night in Geneva | Two Seats, One Evening | KulturTonight",
    description: "Geneva date nights that are a performance, not a lake walk: Victoria Hall, the BFM, Chat Noir in Carouge, and Thursday at the Musée d'Art et d'Histoire.",
    ogTitle: "A Date Night in Geneva | KulturTonight",
    ogDescription: "Two seats, one evening. Halls, not a romance guide.",
    canonical: "https://blog.kulturtonight.ch/en/geneva/date-night",
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs items={[{ label: "KulturTonight", href: "/en" }, { label: "Geneva", href: "/en/geneva" }, { label: "Date night" }]} />
          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <p className="text-xs uppercase tracking-widest text-[#E1C570] mb-4">Two seats</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">A date night in Geneva</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Not a walk around the lake. Two tickets, one room, and a drink if the evening still has room for it. The live seats are on KulturTonight. These are the addresses that hold that kind of night.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {pairs.map((pair) => (
              <a key={pair.href} href={pair.href} className="block border border-border p-6 hover:border-[#E1C570] transition-colors">
                <p className="text-xs uppercase tracking-widest text-[#E1C570] mb-3">{pair.place}</p>
                <h2 className="font-serif text-2xl text-foreground mb-2">{pair.title}</h2>
                <p className="text-muted-foreground">{pair.text}</p>
              </a>
            ))}
          </div>
          <a href="https://www.kulturtonight.ch/en" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-[#E1C570] hover:gap-3 transition-all duration-300 mb-20">
            See tonight's events →
          </a>
        </div>
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
