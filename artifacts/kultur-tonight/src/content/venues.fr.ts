import type { Venue } from "./venues";

export const venuesFr: Venue[] = [
  {
    slug: "grand-theatre-de-geneve",
    name: "Grand Théâtre de Genève",
    type: "theatre",
    address: "Place Neuve 5, 1204 Genève",
    description: "Le Grand Théâtre de Genève est l'opéra phare de la ville, proposant opéra, ballet et récitals de renommée mondiale. Son architecture historique somptueuse et ses intérieurs opulents offrent un cadre majestueux pour les arts du spectacle.\n\nRenommé pour son acoustique exceptionnelle et ses grandes productions, il demeure le cœur culturel battant de la cité.",
    capacity: 1500,
    website: "https://www.gtg.ch",
    seoTitle: "Grand Théâtre de Genève | KulturTonight",
    seoDescription: "Découvrez les spectacles au Grand Théâtre de Genève, l'emblématique opéra de la ville.",
    ogTitle: "Grand Théâtre de Genève",
    ogDescription: "L'opéra incontournable de Genève.",
    schemaType: "PerformingArtsTheater"
  },
  {
    slug: "victoria-hall",
    name: "Victoria Hall",
    type: "concert-hall",
    address: "Rue du Général-Dufour 14, 1204 Genève",
    description: "Construit en 1894, le Victoria Hall est reconnu mondialement pour son acoustique exceptionnelle et son intérieur néo-baroque époustouflant. Il est la salle principale de la musique classique à Genève.\n\nLes dorures ornementales et le charme historique de la salle font de chaque concert une expérience cinématographique inoubliable.",
    capacity: 1600,
    website: "https://www.ville-ge.ch/culture/victoria_hall",
    seoTitle: "Victoria Hall Genève | Concerts Classiques | KulturTonight",
    seoDescription: "Vivez les plus grands concerts de musique classique au Victoria Hall de Genève.",
    ogTitle: "Victoria Hall Genève",
    ogDescription: "La salle de concert historique de Genève, réputée pour son acoustique.",
    schemaType: "MusicVenue"
  },
  {
    slug: "theatre-du-leman",
    name: "Théâtre du Léman",
    type: "theatre",
    address: "Quai du Mont-Blanc 19, 1201 Genève",
    description: "Situé sur les rives cristallines du lac Léman, le Théâtre du Léman est une salle moderne accueillant une programmation variée, du théâtre contemporain aux grandes compagnies de ballet internationales.\n\nSon auditorium spacieux garantit une visibilité parfaite, en faisant une scène de prédilection pour les grandes tournées.",
    capacity: 1300,
    website: "https://www.theatreduleman.com",
    seoTitle: "Théâtre du Léman | Spectacles & Représentations | KulturTonight",
    seoDescription: "Retrouvez les prochains spectacles et événements au Théâtre du Léman de Genève.",
    ogTitle: "Théâtre du Léman",
    ogDescription: "Théâtre moderne au bord du lac, accueillant des spectacles internationaux variés.",
    schemaType: "PerformingArtsTheater"
  },
  {
    slug: "alhambra",
    name: "Alhambra Geneva",
    type: "concert-hall",
    address: "Rue de la Rôtisserie 10, 1204 Genève",
    description: "L'Alhambra est une salle de concert historique au cœur de Genève, proposant une programmation musicale éclectique allant du rock alternatif à l'électro en passant par le jazz.\n\nSon atmosphère unique et son histoire centenaire en font l'un des lieux les plus emblématiques de la scène musicale genevoise.",
    capacity: 1000,
    website: "https://www.alhambra-geneve.ch",
    seoTitle: "Alhambra Genève | Concerts & Événements | KulturTonight",
    seoDescription: "Découvrez les concerts et événements à l'Alhambra, la salle emblématique de Genève.",
    ogTitle: "Alhambra Genève",
    ogDescription: "L'une des salles de concert les plus emblématiques de Genève.",
    schemaType: "MusicVenue"
  },
  {
    slug: "amr-jazz-club",
    name: "AMR Jazz Club",
    type: "jazz-club",
    address: "Rue des Alpes 10, 1201 Genève",
    description: "L'AMR (Association pour l'encouragement de la Musique Improvisée) est le temple genevois du jazz et des musiques improvisées. Dans cette salle intime, chaque performance est une rencontre unique entre musiciens et public.\n\nDepuis des décennies, l'AMR soutient et diffuse les talents locaux et internationaux, faisant de Genève une capitale européenne du jazz.",
    capacity: 200,
    website: "https://www.amr-geneve.ch",
    seoTitle: "AMR Jazz Club Genève | Jazz & Musiques Improvisées | KulturTonight",
    seoDescription: "Découvrez le jazz et les musiques improvisées à l'AMR Jazz Club de Genève.",
    ogTitle: "AMR Jazz Club Genève",
    ogDescription: "Le temple genevois du jazz et des musiques improvisées.",
    schemaType: "MusicVenue"
  }
];
