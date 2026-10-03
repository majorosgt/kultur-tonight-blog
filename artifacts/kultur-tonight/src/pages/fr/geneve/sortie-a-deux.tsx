import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { useSEO } from "@/lib/seo";

const pairs = [
  { title: "Une symphonie, un verre", text: "Victoria Hall, puis rien de loin. La maison de l'OSR est la soirée à deux la plus nette de la ville.", href: "/fr/geneve/lieux/victoria-hall", place: "Victoria Hall" },
  { title: "La salle industrielle", text: "Le Bâtiment des Forces Motrices, quand l'affiche est opéra ou musique de chambre. Le bâtiment fait la moitié du travail.", href: "/fr/geneve/lieux/batiment-des-forces-motrices", place: "BFM" },
  { title: "Tard, à Carouge", text: "Le Chat Noir. Une table, un cabaret ou un concert, sans inventer une tournée de restaurants.", href: "/fr/geneve/lieux/chat-noir", place: "Chat Noir" },
  { title: "Jeudi, puis une salle", text: "Le Musée d'art et d'histoire est ouvert jusqu'à 21 h le jeudi. À associer à une petite scène, pas à un second musée.", href: "/fr/geneve/lieux/musee-art-et-histoire", place: "MAH" },
];

export default function SortieADeuxPage() {
  useSEO({
    title: "Une sortie à deux à Genève | Deux places, une soirée | KulturTonight",
    description: "Une sortie à deux à Genève qui est un spectacle, pas une promenade au bord du lac : Victoria Hall, BFM, Chat Noir à Carouge, et le jeudi au Musée d'art et d'histoire.",
    ogTitle: "Une sortie à deux à Genève | KulturTonight",
    ogDescription: "Deux places, une soirée. Des salles, pas un guide romantique.",
    canonical: "https://blog.kulturtonight.ch/fr/geneve/sortie-a-deux",
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Breadcrumbs items={[{ label: "KulturTonight", href: "/fr" }, { label: "Genève", href: "/fr/geneve" }, { label: "Sortie à deux" }]} />
          <div className="max-w-3xl mt-8 mb-12">
            <div className="w-12 h-1 bg-gold-gradient mb-6" />
            <p className="text-xs uppercase tracking-widest text-[#E1C570] mb-4">Deux places</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Une sortie à deux à Genève</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pas une promenade autour du lac. Deux billets, une salle, et un verre si la soirée a encore de la place. Les places du jour sont sur KulturTonight. Voici les adresses qui tiennent ce genre de nuit.
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
          <a href="https://www.kulturtonight.ch/fr" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-[#E1C570] hover:gap-3 transition-all duration-300 mb-20">
            Voir les événements de ce soir →
          </a>
        </div>
        <NewsletterSignup variant="weekly-guide" />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
