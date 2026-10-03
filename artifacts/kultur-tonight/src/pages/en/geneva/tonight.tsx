import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";

const rooms = [
  { name: "Grand Théâtre de Genève", note: "Dernière Minute, usually the hour before curtain.", href: "/en/geneva/venues/grand-theatre-de-geneve" },
  { name: "Victoria Hall", note: "A small same-day allocation when the OSR is in the hall.", href: "/en/geneva/venues/victoria-hall" },
  { name: "Alhambra", note: "The mid-size stop for touring concerts.", href: "/en/geneva/venues/alhambra" },
  { name: "Arena Genève", note: "The large hall, when a tour is in town.", href: "/en/geneva/venues/arena-geneve" },
  { name: "AMR Jazz Club", note: "Door sales, and the room is small.", href: "/en/geneva/venues/amr-jazz-club" },
  { name: "Chat Noir", note: "Carouge, late, cabaret and a band.", href: "/en/geneva/venues/chat-noir" },
];

export default function TonightPage() {
  useSEO({
    title: "Tonight in Geneva | Last-Minute Culture | KulturTonight",
    description: "What is on in Geneva tonight: last-minute seats at the Grand Théâtre, Victoria Hall, Alhambra, Arena Genève, AMR and Chat Noir. The live list is on KulturTonight.",
    ogTitle: "Tonight in Geneva | KulturTonight",
    ogDescription: "Same-day cultural seats in Geneva. The live list opens on KulturTonight.",
    canonical: "https://blog.kulturtonight.ch/en/geneva/tonight",
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs items={[{ label: "KulturTonight", href: "/en" }, { label: "Geneva", href: "/en/geneva" }, { label: "Tonight" }]} />
          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <p className="text-xs uppercase tracking-widest text-[#E1C570] mb-4">Tonight, not this weekend</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Tonight in Geneva</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              This page does not invent a programme. A show is tonight only if the venue still has it on the board. KulturTonight releases selected last-minute seats at 21:00. The weekend guide is for planning. This is for the evening you are already in.
            </p>
            <a href="https://www.kulturtonight.ch/en" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-[#E1C570] hover:gap-3 transition-all duration-300">
              See tonight's events →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            {rooms.map((room) => (
              <a key={room.href} href={room.href} className="block border border-border p-6 hover:border-[#E1C570] transition-colors">
                <h2 className="font-serif text-2xl text-foreground mb-2">{room.name}</h2>
                <p className="text-muted-foreground">{room.note}</p>
              </a>
            ))}
          </div>
        </div>
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
