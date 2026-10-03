import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";

const rooms = [
  { name: "Grand Théâtre de Genève", note: "Dernière Minute, en général une heure avant le lever de rideau.", href: "/fr/geneve/lieux/grand-theatre-de-geneve" },
  { name: "Victoria Hall", note: "Une petite allocation le jour même, quand l'OSR est dans la salle.", href: "/fr/geneve/lieux/victoria-hall" },
  { name: "Alhambra", note: "L'étape moyenne des tournées.", href: "/fr/geneve/lieux/alhambra" },
  { name: "Arena Genève", note: "La grande salle, quand une tournée est en ville.", href: "/fr/geneve/lieux/arena-geneve" },
  { name: "AMR Jazz Club", note: "Vente à la porte, et la salle est petite.", href: "/fr/geneve/lieux/amr-jazz-club" },
  { name: "Chat Noir", note: "Carouge, tard, cabaret et concert.", href: "/fr/geneve/lieux/chat-noir" },
];

export default function CeSoirPage() {
  useSEO({
    title: "Ce soir à Genève | Culture dernière minute | KulturTonight",
    description: "Ce qui se joue à Genève ce soir : places de dernière minute au Grand Théâtre, au Victoria Hall, à l'Alhambra, à l'Arena, à l'AMR et au Chat Noir. La liste vivante est sur KulturTonight.",
    ogTitle: "Ce soir à Genève | KulturTonight",
    ogDescription: "Les places du jour à Genève. La liste vivante est sur KulturTonight.",
    canonical: "https://blog.kulturtonight.ch/fr/geneve/ce-soir",
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs items={[{ label: "KulturTonight", href: "/fr" }, { label: "Genève", href: "/fr/geneve" }, { label: "Ce soir" }]} />
          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <p className="text-xs uppercase tracking-widest text-[#E1C570] mb-4">Ce soir, pas ce week-end</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Ce soir à Genève</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Cette page n'invente pas un programme. Un spectacle est « ce soir » seulement s'il est encore à l'affiche. KulturTonight sort une sélection de places dernière minute à 21 h. Le guide du week-end sert à prévoir. Ici, c'est pour la soirée déjà commencée.
            </p>
            <a href="https://www.kulturtonight.ch/fr" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-[#E1C570] hover:gap-3 transition-all duration-300">
              Voir les événements de ce soir →
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
