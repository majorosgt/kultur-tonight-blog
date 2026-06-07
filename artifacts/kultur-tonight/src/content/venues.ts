export interface Venue {
  slug: string
  name: string
  type: string
  address: string
  city: string
  country: string
  capacity: number
  description: string
  longDescription: string
  image: string
  website: string
  categories: string[]
  featured: boolean
}

export const venues: Venue[] = [
  {
    slug: 'grand-theatre-de-geneve',
    name: 'Grand Théâtre de Genève',
    type: 'Opera House',
    address: 'Place Neuve 5',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 1500,
    description: "Geneva's premier opera house, presenting world-class opera, ballet, and dance.",
    longDescription: "Standing at the heart of Place Neuve since 1879, the Grand Théâtre de Genève is Switzerland's most important opera house. Home to its own ensemble, it produces world-class opera, ballet, and contemporary dance with a programme that balances the canonical repertoire with bold new commissions. The building itself — neo-baroque, gold and crimson inside — is an event before the curtain rises.",
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80',
    website: 'https://www.gtg.ch',
    categories: ['opera', 'ballet', 'dance', 'theatre'],
    featured: true
  },
  {
    slug: 'victoria-hall',
    name: 'Victoria Hall',
    type: 'Concert Hall',
    address: 'Rue du Général-Dufour 14',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 1600,
    description: 'Home of the Orchestre de la Suisse Romande, celebrated globally for its magnificent acoustics.',
    longDescription: "Built in 1894 and gifted to the city by a British diplomat, Victoria Hall is one of Europe's finest concert halls — celebrated as much for its breathtaking neo-baroque interior as for its extraordinary acoustics. It is the permanent home of the Orchestre de la Suisse Romande, and its stage has welcomed the greatest names in classical music for over a century. An evening here is not just a concert — it is Geneva at its most refined.",
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
    website: 'https://www.ville-geneve.ch/victoria-hall',
    categories: ['classical', 'concerts'],
    featured: true
  },
  {
    slug: 'theatre-du-leman',
    name: 'Théâtre du Léman',
    type: 'Theatre',
    address: 'Quai du Mont-Blanc 19',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 1300,
    description: "A modern lakeside venue hosting Geneva's biggest theatre productions and musicals.",
    longDescription: "Situated along the shores of Lake Geneva with the Alps as its backdrop, Théâtre du Léman is the city's largest commercial stage. Since opening in 1991, it has hosted the biggest French-language theatre productions, musicals, and touring spectaculars that Geneva sees each season. The auditorium is modern and comfortable, the programming ambitious — from Molière to contemporary dance companies passing through on European tour.",
    image: '/assets/venues/theatre-du-leman.jpg',
    website: 'https://www.theatreduleman.ch',
    categories: ['theatre', 'musical', 'dance'],
    featured: true
  },
  {
    slug: 'comedie-de-geneve',
    name: 'Comédie de Genève',
    type: 'Theatre',
    address: 'Bd des Philosophes 6',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 500,
    description: "Geneva's leading contemporary theatre, connected to Europe's most important dramatic networks.",
    longDescription: "The Comédie de Genève occupies a beautifully restored early-20th-century building in the Plainpalais district and functions as one of Switzerland's most intellectually serious theatre institutions. Its programming favours contemporary European dramaturgy — often in co-production with theatres in Paris, Brussels, and Berlin. If you want to understand where theatre is going, not just where it has been, the Comédie is where Geneva looks first.",
    image: '/assets/venues/comedie-de-geneve.jpg',
    website: 'https://www.comedie.ch',
    categories: ['theatre', 'contemporary'],
    featured: true
  },
  {
    slug: 'batiment-des-forces-motrices',
    name: 'Bâtiment des Forces Motrices',
    type: 'Multi-purpose',
    address: 'Place des Volontaires 2',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 600,
    description: 'A magnificent 19th-century industrial building with exceptional acoustics and a unique atmosphere.',
    longDescription: "Few concert venues in Europe have the atmosphere of the Bâtiment des Forces Motrices. Built in 1886 as a hydraulic pumping station, its soaring iron-and-glass interior was repurposed as a performance space in the 1990s — and the transformation is extraordinary. The acoustics are exceptional, the sight lines intimate despite the scale, and the sense of occasion is unlike anywhere else in Geneva. Opera, chamber music, and experimental performance all find a natural home here.",
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
    website: 'https://www.bfm.ch',
    categories: ['opera', 'classical', 'contemporary'],
    featured: true
  },
  {
    slug: 'theatre-de-carouge',
    name: 'Théâtre de Carouge',
    type: 'Theatre',
    address: 'Rue Ancienne 57',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 300,
    description: "One of Geneva's most beloved theatres, rooted in the bohemian spirit of the Carouge district.",
    longDescription: "Carouge has always been Geneva's other city — more Italian, more relaxed, more itself. The Théâtre de Carouge reflects that character perfectly. Founded in 1958, it is one of the oldest continuously operating theatres in the region, with a loyal audience and a programming philosophy that prizes quality French-language theatre above trend-following. The building is intimate, the welcome warm, and the standard consistently high.",
    image: '/assets/venues/theatre-de-carouge.jpg',
    website: 'https://www.theatredecarouge.ch',
    categories: ['theatre'],
    featured: false
  },
  {
    slug: 'amr-jazz-club',
    name: 'AMR Jazz Club',
    type: 'Jazz Club',
    address: 'Rue des Alpes 10',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 200,
    description: "The beating heart of Geneva's jazz scene — intimate, authentic, and alive every night.",
    longDescription: "The Association pour l'encouragement de la Musique Improvisée has been the engine of Geneva's jazz life since 1973. The AMR Jazz Club is its live venue — small enough that you can feel the musicians breathe, large enough to draw international names alongside the city's own extraordinary improvisers. The programming covers the full spectrum from straight-ahead bebop to free improvisation and world jazz. There is no better place in Switzerland to spend a Tuesday night.",
    image: '/assets/venues/amr-jazz-club.jpg',
    website: 'https://www.amr-geneve.ch',
    categories: ['jazz', 'world-music', 'improvisation'],
    featured: true
  },
  {
    slug: 'theatre-du-galpon',
    name: 'Théâtre du Galpon',
    type: 'Independent Theatre',
    address: 'Rue du Vieux-Billard 25',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 150,
    description: "Geneva's most important independent experimental stage — brave, uncompromising, essential.",
    longDescription: "Le Galpon occupies a converted warehouse on the edge of the Plainpalais district and has been Geneva's most important independent theatre laboratory for decades. The programming is deliberately challenging — physical theatre, new writing, interdisciplinary performance — and the space transforms completely from production to production. If the Grand Théâtre represents Geneva's cultural establishment, Le Galpon is its conscience.",
    image: '/assets/venues/galpon.jpg',
    website: 'https://www.galpon.ch',
    categories: ['theatre', 'experimental', 'contemporary'],
    featured: false
  },
  {
    slug: 'salle-centrale-de-la-madeleine',
    name: 'Salle Centrale de la Madeleine',
    type: 'Concert Hall',
    address: 'Place de la Madeleine 1',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 300,
    description: 'A historic downtown hall renowned for chamber music and intimate classical performances.',
    longDescription: "Tucked behind the Place de la Madeleine in the heart of Geneva's old town, the Salle Centrale is one of the city's most cherished intimate venues. Its warm acoustics make it ideal for chamber music, song recitals, and small ensemble concerts — the kind of performances where you hear every breath and every nuance. The hall has been a cornerstone of Geneva's chamber music life for generations, and its programme remains one of the most carefully curated in the city.",
    image: '/assets/venues/salle-madeleine.jpg',
    website: 'https://www.sallecentrale.ch',
    categories: ['classical', 'chamber-music'],
    featured: false
  },
  {
    slug: 'alhambra',
    name: 'Alhambra',
    type: 'Concert Hall',
    address: "Rue de la Rôtisserie 10",
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 900,
    description: "Geneva's largest standalone concert venue, hosting mainstream, pop, rock, and world music.",
    longDescription: "The Alhambra is Geneva's premier mid-size concert hall — large enough to attract major touring acts, intimate enough that no seat feels far from the stage. Built in the early 20th century and elegantly restored, it hosts an eclectic programme spanning pop, rock, world music, and crossover classical. For artists touring between Paris and Zurich, the Alhambra is the natural Geneva stop — which means the city regularly gets access to acts it would otherwise miss.",
    image: '/assets/venues/alhambra.jpg',
    website: 'https://www.alhambra-geneve.ch',
    categories: ['concerts', 'pop', 'rock', 'world-music'],
    featured: false
  }
]
