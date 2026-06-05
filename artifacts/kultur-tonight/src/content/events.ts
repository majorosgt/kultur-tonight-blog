export interface Event {
  slug: string;
  title: string;
  category: string;
  venue: { name: string; slug: string };
  date: string;
  time: string;
  price: string;
  priceRange: string;
  description: string;
  shortDescription: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
}

export const events: Event[] = [
  {
    slug: "swan-lake-grand-theatre",
    title: "Swan Lake",
    category: "opera",
    venue: { name: "Grand Théâtre de Genève", slug: "grand-theatre-de-geneve" },
    date: "This Weekend",
    time: "20:00",
    price: "From CHF 45",
    priceRange: "45-180",
    shortDescription: "A mesmerizing new production of Tchaikovsky's masterpiece.",
    description: "Experience the timeless tragedy and breathtaking beauty of Swan Lake. This stunning new production at the Grand Théâtre features world-class choreography and a magnificent orchestral performance. Prepare to be enchanted by the tragic love story of Prince Siegfried and the Swan Princess Odette.",
    image: "dramatic ballet dancers on stage with atmospheric lighting",
    seoTitle: "Swan Lake at Grand Théâtre de Genève",
    seoDescription: "Get tickets for Swan Lake at Grand Théâtre de Genève. A breathtaking ballet performance this weekend.",
    ogTitle: "Swan Lake Ballet | Geneva",
    ogDescription: "A mesmerizing new production of Tchaikovsky's masterpiece."
  },
  {
    slug: "mahler-symphony-9",
    title: "Mahler's Symphony No. 9",
    category: "concerts",
    venue: { name: "Victoria Hall", slug: "victoria-hall" },
    date: "This Weekend",
    time: "19:30",
    price: "From CHF 30",
    priceRange: "30-120",
    shortDescription: "The Orchestre de la Suisse Romande performs Mahler's final completed symphony.",
    description: "Join the Orchestre de la Suisse Romande for an emotionally charged evening performing Gustav Mahler's Symphony No. 9. Within the acoustically perfect walls of Victoria Hall, the orchestra will navigate the complex, haunting, and ultimately transcendent journey of Mahler's profound farewell to the world.",
    image: "orchestra playing in a golden historic concert hall",
    seoTitle: "Mahler Symphony No. 9 | Victoria Hall Geneva",
    seoDescription: "Experience Mahler's Symphony No. 9 performed by the Orchestre de la Suisse Romande at Victoria Hall.",
    ogTitle: "Mahler's Symphony No. 9",
    ogDescription: "The OSR performs Mahler's emotionally charged final symphony."
  },
  {
    slug: "contemporary-jazz-quartet",
    title: "Midnight Jazz: The Elias Quartet",
    category: "jazz",
    venue: { name: "AMR Jazz Club", slug: "amr-jazz-club" },
    date: "Next Weekend",
    time: "21:30",
    price: "From CHF 25",
    priceRange: "25-40",
    shortDescription: "Late-night improvised jazz in Geneva's most intimate club.",
    description: "Step into the smoky, intimate atmosphere of AMR Jazz Club for a late-night session with The Elias Quartet. Known for their spontaneous improvisations and deep rhythmic grooves, this performance promises an unforgettable journey into modern jazz.",
    image: "jazz musician playing saxophone in a dark moody club",
    seoTitle: "Midnight Jazz: The Elias Quartet | AMR Geneva",
    seoDescription: "Catch The Elias Quartet performing live at AMR Jazz Club in Geneva.",
    ogTitle: "Midnight Jazz at AMR",
    ogDescription: "Late-night improvised jazz in Geneva's most intimate club."
  },
  {
    slug: "hamlet-modern",
    title: "Hamlet: A Modern Interpretation",
    category: "theatre",
    venue: { name: "Théâtre du Léman", slug: "theatre-du-leman" },
    date: "This Weekend",
    time: "20:00",
    price: "From CHF 50",
    priceRange: "50-140",
    shortDescription: "Shakespeare's classic reimagined for the modern era.",
    description: "A bold, visually striking modern adaptation of William Shakespeare's Hamlet. Staged at the Théâtre du Léman, this production strips away the traditional period costumes to explore the psychological depth of the Prince of Denmark in a stark, contemporary setting.",
    image: "dramatic theatrical lighting on a lone actor on a modern stage",
    seoTitle: "Hamlet: Modern Interpretation | Théâtre du Léman",
    seoDescription: "A bold new production of Shakespeare's Hamlet in Geneva.",
    ogTitle: "Hamlet: A Modern Interpretation",
    ogDescription: "Shakespeare's classic reimagined for the modern era."
  },
  {
    slug: "indie-rock-alhambra",
    title: "Echoes of Tomorrow: Indie Fest",
    category: "concerts",
    venue: { name: "Alhambra Geneva", slug: "alhambra" },
    date: "Next Weekend",
    time: "19:00",
    price: "From CHF 35",
    priceRange: "35-65",
    shortDescription: "A showcase of Europe's rising indie rock bands.",
    description: "The historic Alhambra opens its doors to the vanguard of European indie rock. Echoes of Tomorrow is a mini-festival featuring three rising bands. Expect high energy, distorted guitars, and an electric atmosphere in this beautifully restored venue.",
    image: "indie rock band performing live with purple stage lights",
    seoTitle: "Indie Rock Fest | Alhambra Geneva",
    seoDescription: "Discover rising indie rock bands at the Alhambra venue in Geneva.",
    ogTitle: "Echoes of Tomorrow: Indie Fest",
    ogDescription: "A showcase of Europe's rising indie rock bands."
  },
  {
    slug: "peter-and-the-wolf-family",
    title: "Peter and the Wolf (Family Matinee)",
    category: "family",
    venue: { name: "Victoria Hall", slug: "victoria-hall" },
    date: "This Weekend",
    time: "14:00",
    price: "From CHF 15",
    priceRange: "15-45",
    shortDescription: "Prokofiev's enchanting musical tale for children.",
    description: "Introduce your children to the magic of the orchestra with Sergei Prokofiev's Peter and the Wolf. This special family matinee at Victoria Hall features a dynamic narrator and engaging visual projections, making the classic musical fairy tale accessible and thrilling for all ages.",
    image: "children watching an orchestra performance with wonder",
    seoTitle: "Peter and the Wolf Family Concert | Geneva",
    seoDescription: "A special family matinee concert of Peter and the Wolf at Victoria Hall.",
    ogTitle: "Peter and the Wolf",
    ogDescription: "Prokofiev's enchanting musical tale for children."
  },
  {
    slug: "mozart-requiem",
    title: "Mozart's Requiem",
    category: "concerts",
    venue: { name: "Grand Théâtre de Genève", slug: "grand-theatre-de-geneve" },
    date: "Next Weekend",
    time: "20:30",
    price: "From CHF 60",
    priceRange: "60-200",
    shortDescription: "A powerful choral performance of Mozart's unfinished masterpiece.",
    description: "Experience the profound intensity of Mozart's Requiem. A massed choir and international soloists join forces to deliver a spine-tingling performance of one of classical music's most mysterious and deeply moving works.",
    image: "choir singing dramatically in an opera house",
    seoTitle: "Mozart's Requiem | Grand Théâtre de Genève",
    seoDescription: "A powerful performance of Mozart's Requiem at the Grand Théâtre.",
    ogTitle: "Mozart's Requiem",
    ogDescription: "A powerful choral performance of Mozart's unfinished masterpiece."
  },
  {
    slug: "the-illusionist",
    title: "The Illusionist",
    category: "theatre",
    venue: { name: "Théâtre du Léman", slug: "theatre-du-leman" },
    date: "Next Weekend",
    time: "19:30",
    price: "From CHF 40",
    priceRange: "40-110",
    shortDescription: "Mind-bending magic and theatrical storytelling.",
    description: "Blurring the lines between theatre and grand illusion, this captivating show will leave you questioning reality. 'The Illusionist' combines masterful sleight of hand with a compelling narrative about mystery, deception, and the art of seeing.",
    image: "magician performing a grand illusion on a dark stage",
    seoTitle: "The Illusionist | Theatre Show in Geneva",
    seoDescription: "A mind-bending theatrical magic show at Théâtre du Léman.",
    ogTitle: "The Illusionist",
    ogDescription: "Mind-bending magic and theatrical storytelling."
  }
];
