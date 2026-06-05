export interface Venue {
  slug: string;
  name: string;
  type: string;
  address: string;
  description: string;
  capacity: number;
  website: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  schemaType: "MusicVenue" | "PerformingArtsTheater";
}

export const venues: Venue[] = [
  {
    slug: "grand-theatre-de-geneve",
    name: "Grand Théâtre de Genève",
    type: "theatre",
    address: "Place Neuve 5, 1204 Genève",
    description: "The Grand Théâtre de Genève is Geneva's premier opera house, presenting world-class opera, ballet, and recitals. With its stunning historic architecture and opulent interiors, it provides a majestic setting for the performing arts.\n\nRenowned for its exceptional acoustics and grand productions, it remains the cultural heartbeat of the city.",
    capacity: 1500,
    website: "https://www.gtg.ch",
    seoTitle: "Grand Théâtre de Genève | KulturTonight",
    seoDescription: "Discover performances at the Grand Théâtre de Genève, the city's iconic opera house.",
    ogTitle: "Grand Théâtre de Genève",
    ogDescription: "Geneva's premier opera house.",
    schemaType: "PerformingArtsTheater"
  },
  {
    slug: "victoria-hall",
    name: "Victoria Hall",
    type: "concert-hall",
    address: "Rue du Général-Dufour 14, 1204 Genève",
    description: "Built in 1894, Victoria Hall is celebrated globally for its magnificent acoustics and breathtaking neo-baroque interior. It serves as the principal venue for classical music in Geneva.\n\nThe hall's ornate golden details and historic charm make every concert an unforgettable cinematic experience.",
    capacity: 1600,
    website: "https://www.ville-ge.ch/culture/victoria_hall",
    seoTitle: "Victoria Hall Geneva | Classical Concerts",
    seoDescription: "Experience the world's finest classical music at Victoria Hall in Geneva.",
    ogTitle: "Victoria Hall Geneva",
    ogDescription: "Geneva's historic concert hall renowned for its acoustics.",
    schemaType: "MusicVenue"
  },
  {
    slug: "theatre-du-leman",
    name: "Théâtre du Léman",
    type: "theatre",
    address: "Quai du Mont-Blanc 19, 1201 Genève",
    description: "Situated along the pristine shores of Lake Geneva, Théâtre du Léman is a modern venue hosting a diverse array of shows, from contemporary theatre to international ballet companies.\n\nIts spacious auditorium guarantees excellent views, making it a favorite for major touring productions.",
    capacity: 1300,
    website: "https://www.theatreduleman.com",
    seoTitle: "Théâtre du Léman | Shows & Performances",
    seoDescription: "Find upcoming shows and events at Théâtre du Léman in Geneva.",
    ogTitle: "Théâtre du Léman",
    ogDescription: "Modern theatre by the lake hosting diverse international shows.",
    schemaType: "PerformingArtsTheater"
  },
  {
    slug: "alhambra",
    name: "Alhambra Geneva",
    type: "multi-venue",
    address: "Rue de la Rôtisserie 10, 1204 Genève",
    description: "The Alhambra is a beautifully restored 1920s venue that seamlessly blends historical character with modern technical capabilities. It hosts an eclectic mix of contemporary music, rock, and alternative performances.\n\nThe venue's intimate scale and vibrant atmosphere create a unique connection between the artists and the audience.",
    capacity: 750,
    website: "https://www.geneve.ch/fr/alhambra",
    seoTitle: "Alhambra Geneva | Concerts & Events",
    seoDescription: "Discover contemporary music and events at the historic Alhambra venue in Geneva.",
    ogTitle: "Alhambra Geneva",
    ogDescription: "A historic 1920s venue hosting contemporary music and events.",
    schemaType: "MusicVenue"
  },
  {
    slug: "amr-jazz-club",
    name: "AMR Jazz Club",
    type: "jazz",
    address: "Rue des Alpes 10, 1201 Genève",
    description: "The AMR (Association pour l'Encouragement de la Musique Improvisée) is the soul of Geneva's jazz scene. It offers an authentic, underground club experience dedicated to jazz and improvised music.\n\nWith nightly performances featuring both local talents and international jazz legends, it is the perfect spot for late-night cultural discovery.",
    capacity: 150,
    website: "https://www.amr-geneve.ch",
    seoTitle: "AMR Jazz Club Geneva | Live Jazz",
    seoDescription: "Experience live jazz at AMR Jazz Club, Geneva's premier venue for improvised music.",
    ogTitle: "AMR Jazz Club Geneva",
    ogDescription: "The heart of Geneva's jazz scene.",
    schemaType: "MusicVenue"
  }
];
