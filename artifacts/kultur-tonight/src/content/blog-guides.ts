export interface BlogArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: "guides" | "venues" | "this-week" | "this-weekend" | "events" | "seasonal" | "culture" | "family";
  city: "geneva";
  lang: "en" | "fr";
  date: string;
  readTime: number;
  image: string;
  body: string;
  ctaText: string;
  ctaUrl: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
}

export const blogGuides: BlogArticle[] = [
  {
    slug: "geneva-essential-cultural-institutions",
    title: "Geneva's Essential Cultural Institutions",
    subtitle: "The venues, companies, and organisations that define the city's artistic identity",
    category: "guides",
    city: "geneva",
    lang: "en",
    date: "2026-05-20",
    readTime: 8,
    image: "/assets/hero/geneva-evening-theatre.png",
    body: "To understand Geneva's cultural life, you must first understand its institutions. The Grand Théâtre de Genève — founded in 1879 and rebuilt after a catastrophic fire in 1951 — remains the undisputed centrepiece of the city's performing arts, presenting some of the world's finest opera, ballet, and orchestral concerts in a setting of extraordinary grandeur. To attend a première there is to participate in a tradition that stretches back generations, one that the city takes seriously as both civic duty and personal pleasure.\n\nBeyond the Grand Théâtre, Geneva's cultural ecosystem is remarkable for its diversity and depth. The Orchestre de la Suisse Romande, based at the Victoria Hall, brings world-class symphonic programming to audiences throughout the year. The Théâtre de Carouge — Atelier de Genève — occupies a singular position between classical rigour and contemporary experimentation, its cramped, intimate stage producing performances of astonishing power. The Centre d'Art Contemporain and the MAMCO (Musée d'Art Moderne et Contemporain) anchor Geneva's visual arts offer, while the Musée d'Ethnographie and the Musée d'Art et d'Histoire provide essential historical context.\n\nWhat makes Geneva's cultural landscape exceptional is not simply the quality of any single institution, but the proximity and interaction between them. On any given evening, you might find yourself moving from a pre-concert lecture at the Victoria Hall to a late supper at a restaurant in Carouge where the theatre's cast has been known to gather. The city's smallness — its great virtue — means that culture here is never merely observed; it is participated in.",
    ctaText: "See tonight's events in Geneva →",
    ctaUrl: "https://kulturtonight.ch/en/geneva/",
    seoTitle: "Geneva's Essential Cultural Institutions — A Guide | KulturTonight",
    seoDescription: "The Grand Théâtre, Victoria Hall, Théâtre de Carouge and more — your guide to the institutions that define Geneva's extraordinary cultural life.",
    ogTitle: "Geneva's Essential Cultural Institutions",
    ogDescription: "A guide to the venues, companies, and organisations that define Geneva's artistic identity.",
  },
  {
    slug: "how-to-navigate-genevas-theatre-season",
    title: "How to Navigate Geneva's Theatre Season",
    subtitle: "From subscription packages to last-minute tickets — everything a serious theatre-goer needs to know",
    category: "guides",
    city: "geneva",
    lang: "en",
    date: "2026-04-10",
    readTime: 6,
    image: "/assets/hero/geneva-evening-theatre.png",
    body: "Geneva's theatre season runs from September through June, and for those who want to experience it seriously, advance planning is essential. The Grand Théâtre de Genève releases its season programme in the spring, and premium seats for major productions — particularly the opera — can sell out within days of going on sale. The theatre offers several subscription formulas that provide both cost savings and priority access; for regular attendees, this is by far the most reliable way to secure the best positions in the house.\n\nFor contemporary theatre, the Théâtre de Carouge offers some of the most adventurous programming in the city. Its seasons tend to feature fewer, more intensively produced shows, which means that individual productions run for longer and tickets are often easier to obtain — though the most talked-about evenings will still require booking ahead. The theatre's Monday-night 'Carte Blanche' series, in which a single artist or company presents work in progress, represents some of the most exciting theatre Geneva produces.\n\nLast-minute access is, contrary to popular belief, genuinely possible in Geneva. Both major houses maintain day-of-performance ticket releases at reduced prices for students and under-30s. The Grand Théâtre's 'Dernière Minute' offer, available from one hour before curtain, has introduced thousands of younger Genevans to opera and dance who might otherwise never have entered the building. It is, in our view, one of the best-kept secrets in the city's cultural life.",
    ctaText: "See tonight's events in Geneva →",
    ctaUrl: "https://kulturtonight.ch/en/geneva/",
    seoTitle: "How to Navigate Geneva's Theatre Season | KulturTonight",
    seoDescription: "Subscriptions, last-minute tickets, and insider tips for making the most of Geneva's extraordinary theatre season.",
    ogTitle: "How to Navigate Geneva's Theatre Season",
    ogDescription: "From subscription packages to last-minute tickets — everything a serious theatre-goer needs to know.",
  },
  {
    slug: "first-timers-guide-geneva-concert-scene",
    title: "A First-Timer's Guide to Geneva's Concert Scene",
    subtitle: "Where to sit, what to wear, and how to find the most compelling music in the city",
    category: "guides",
    city: "geneva",
    lang: "en",
    date: "2026-03-15",
    readTime: 5,
    image: "/assets/hero/geneva-evening-theatre.png",
    body: "The Victoria Hall, Geneva's principal concert venue, is among the finest acoustic spaces in Europe. Built in 1894 and donated to the city by an English merchant named Daniel Fitzgerald Packenham Barton, it was designed with the express intention of giving Geneva a concert hall worthy of the great capital cities. It has succeeded. The acoustics in the stalls are extraordinary — the relationship between performer and listener is unusually intimate for a hall of its size, and the quality of sound from every seat is remarkably consistent.\n\nFor those new to classical concerts in Geneva, a few practical notes. Dress code is generally smart-casual to formal, though the city has become somewhat more relaxed about this over the past decade — you will not be turned away for wearing dark jeans and a blazer, but you will feel underdressed beside the audience members who have arrived in evening wear. Doors typically open thirty minutes before the performance. Mobile phones must be completely switched off, not silenced: the Swiss take this seriously.\n\nBeyond the Victoria Hall, Geneva's concert life encompasses an extraordinary range of genres and venues. The AMR (Association pour la Musique Improvisée à Genève) runs a programme of jazz and improvised music that is genuinely world-class — artists who play Carnegie Hall in the evening have been known to perform at the AMR for an audience of two hundred the following week. The Cave 12 hosts experimental electronic music. The Alhambra presents popular concerts in a magnificent historic setting. Whatever kind of music moves you, Geneva has a venue and a programme that will match it.",
    ctaText: "See tonight's events in Geneva →",
    ctaUrl: "https://kulturtonight.ch/en/geneva/",
    seoTitle: "A First-Timer's Guide to Geneva's Concert Scene | KulturTonight",
    seoDescription: "Victoria Hall, AMR, Alhambra — everything you need to know to experience Geneva's concert scene for the first time.",
    ogTitle: "A First-Timer's Guide to Geneva's Concert Scene",
    ogDescription: "Where to sit, what to wear, and how to find the most compelling music in the city.",
  },
];
