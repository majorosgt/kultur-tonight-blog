export interface Guide {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  publishedAt: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
}

export const guides: Guide[] = [
  {
    slug: "things-to-do-this-weekend",
    title: "Things to Do in Geneva This Weekend",
    category: "weekend",
    excerpt: "Discover the hidden gems and premier performances happening in Geneva this coming weekend.",
    body: "Geneva's cultural scene comes alive as the weekend approaches. From intimate jazz clubs to grand theatrical productions, the city offers an unparalleled array of artistic experiences.\n\nThis weekend, we highlight the most anticipated performances. Whether you are looking for a classical concert at Victoria Hall or an experimental play in the heart of Carouge, there is something to stir every soul.\n\nDon't miss the opportunity to explore these curated selections. Tickets for these events often sell out fast, so booking your evening early is highly recommended.",
    publishedAt: "2023-10-25",
    readTime: "4 min read",
    seoTitle: "Things to Do in Geneva This Weekend | KulturTonight",
    seoDescription: "Discover the best cultural events, theatre, and concerts happening in Geneva this weekend. Curated by KulturTonight.",
    ogTitle: "Things to Do in Geneva This Weekend",
    ogDescription: "A curated guide to the best cultural events in Geneva this weekend."
  },
  {
    slug: "best-theatres-geneva",
    title: "Best Theatres in Geneva",
    category: "theatre",
    excerpt: "A comprehensive guide to Geneva's most iconic and intimate theatrical venues.",
    body: "Geneva boasts a rich theatrical tradition, hosting venues that range from historic opera houses to avant-garde black box theatres.\n\nThe Grand Théâtre de Genève stands as a beacon of classical performance, while smaller venues like Théâtre de Carouge offer groundbreaking contemporary works. Each space provides a unique atmospheric experience that complements the art presented on stage.\n\nExplore our guide to the city's finest stages and plan your next dramatic outing.",
    publishedAt: "2023-10-20",
    readTime: "6 min read",
    seoTitle: "The Best Theatres in Geneva | A Cultural Guide",
    seoDescription: "Explore the top theatres in Geneva, from the Grand Théâtre to independent stages. Your guide to Geneva's theatre scene.",
    ogTitle: "Best Theatres in Geneva | KulturTonight",
    ogDescription: "Discover Geneva's most iconic and intimate theatrical venues."
  },
  {
    slug: "best-concerts-geneva",
    title: "Best Concerts in Geneva",
    category: "concerts",
    excerpt: "Where to find the most moving musical performances in the city.",
    body: "Music in Geneva is not just heard; it is felt. The city's acoustic spaces are designed to elevate every note, creating transcendent experiences for audiences.\n\nFrom symphonic masterpieces at Victoria Hall to the rhythmic heartbeats of AMR Jazz Club, Geneva's concert landscape is diverse and deeply enriching.\n\nStay tuned to our weekly updates to catch the world's most renowned musicians when they visit our beautiful city.",
    publishedAt: "2023-10-15",
    readTime: "5 min read",
    seoTitle: "Best Concerts in Geneva | Live Music Guide",
    seoDescription: "Find the best live music and concerts in Geneva. Symphonies, jazz, and contemporary performances.",
    ogTitle: "Best Concerts in Geneva",
    ogDescription: "Where to find the most moving musical performances in the city."
  },
  {
    slug: "family-cultural-activities",
    title: "Family-Friendly Cultural Activities in Geneva",
    category: "family",
    excerpt: "Inspiring art and performances suitable for the whole family.",
    body: "Cultivating a love for the arts begins early. Geneva offers a wealth of cultural activities designed specifically for younger audiences and families.\n\nInteractive museum exhibits, matinee theatre performances, and outdoor concerts provide perfect weekend outings. These events are crafted to be engaging, educational, and above all, magical.\n\nLet us help you plan a family weekend that will leave lasting memories and spark artistic curiosity in your children.",
    publishedAt: "2023-10-10",
    readTime: "4 min read",
    seoTitle: "Family-Friendly Cultural Activities in Geneva",
    seoDescription: "Discover the best family-friendly cultural activities, theatre, and concerts in Geneva. Perfect for weekends with kids.",
    ogTitle: "Family-Friendly Cultural Activities in Geneva",
    ogDescription: "Inspiring art and performances suitable for the whole family."
  },
  {
    slug: "last-minute-theatre-tickets",
    title: "Last-Minute Theatre Tickets in Geneva",
    category: "theatre",
    excerpt: "How to secure seats to sold-out shows at the final hour.",
    body: "Spontaneity often leads to the most memorable evenings. Finding last-minute tickets to Geneva's most coveted theatrical performances is an art in itself.\n\nThrough exclusive partnerships and a keen eye on box office releases, KulturTonight connects you with prime seats that become available just hours before the curtain rises.\n\nLearn the secrets of the spontaneous theatre-goer and never miss a masterpiece again.",
    publishedAt: "2023-10-05",
    readTime: "3 min read",
    seoTitle: "Last-Minute Theatre Tickets in Geneva | KulturTonight",
    seoDescription: "Find out how to secure last-minute theatre tickets to the best shows in Geneva.",
    ogTitle: "Last-Minute Theatre Tickets in Geneva",
    ogDescription: "How to secure seats to sold-out shows at the final hour."
  }
];
