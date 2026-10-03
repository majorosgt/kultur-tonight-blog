export interface Event {
  slug: string;
  title: string;
  category: string;
  venue: { name: string; slug: string };
  date: string;
  time: string;
  startDate: string;
  endDate?: string;
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
    slug: "requiem-mozart-victoria-hall",
    title: "Mozart Requiem",
    category: "concerts",
    venue: { name: "Victoria Hall", slug: "victoria-hall" },
    date: "This Weekend",
    time: "19:30",
    startDate: "2026-10-03T19:30:00+02:00",
    price: "",
    priceRange: "",
    shortDescription: "Saturday 3 October, 19:30, Victoria Hall. Listed by the City of Geneva box office.",
    description: "The City of Geneva cultural box office lists Mozart's Requiem at Victoria Hall on Saturday 3 October 2026 at 19:30. The listing consulted did not publish a price, so none is shown here.",
    image: "concerts",
    seoTitle: "Mozart Requiem at Victoria Hall, Geneva",
    seoDescription: "Mozart Requiem at Victoria Hall, Saturday 3 October 2026 at 19:30. Listed by the City of Geneva box office.",
    ogTitle: "Mozart Requiem | Victoria Hall",
    ogDescription: "Saturday 3 October, 19:30, Victoria Hall."
  },
  {
    slug: "colonie-de-vacances-usine",
    title: "La Colonie de Vacances",
    category: "concerts",
    venue: { name: "L'Usine", slug: "usine" },
    date: "This Weekend",
    time: "20:00",
    startDate: "2026-10-03T20:00:00+02:00",
    price: "",
    priceRange: "",
    shortDescription: "Saturday 3 October, 20:00, Le Rez at L'Usine.",
    description: "Eventfrog lists La Colonie de Vacances at Le Rez, L'Usine, on Saturday 3 October 2026 at 20:00. The listing consulted did not publish a price.",
    image: "concerts",
    seoTitle: "La Colonie de Vacances at L'Usine, Geneva",
    seoDescription: "La Colonie de Vacances at L'Usine, Saturday 3 October 2026 at 20:00.",
    ogTitle: "La Colonie de Vacances | L'Usine",
    ogDescription: "Saturday 3 October, 20:00, L'Usine."
  },
  {
    slug: "osr-horizons-finlandais",
    title: "OSR: Horizons finlandais",
    category: "concerts",
    venue: { name: "Victoria Hall", slug: "victoria-hall" },
    date: "Thursday 8 October",
    time: "19:30",
    startDate: "2026-10-08T19:30:00+02:00",
    price: "",
    priceRange: "",
    shortDescription: "Thursday 8 October, 19:30. Eva Ollikainen conducts Saariaho, Sibelius and Tchaikovsky.",
    description: "The Orchestre de la Suisse Romande lists Horizons finlandais at Victoria Hall on Thursday 8 October 2026 at 19:30, conducted by Eva Ollikainen, with Anu Komsi and Lionel Cottet. Works by Saariaho, Sibelius and Tchaikovsky. Price was not on the listing consulted.",
    image: "concerts",
    seoTitle: "OSR Horizons finlandais at Victoria Hall, Geneva",
    seoDescription: "OSR at Victoria Hall, Thursday 8 October 2026 at 19:30. Saariaho, Sibelius, Tchaikovsky.",
    ogTitle: "OSR Horizons finlandais",
    ogDescription: "Thursday 8 October, 19:30, Victoria Hall."
  },
  {
    slug: "hommage-pavarotti-victoria-hall",
    title: "Hommage à Pavarotti",
    category: "opera",
    venue: { name: "Victoria Hall", slug: "victoria-hall" },
    date: "Saturday 10 October",
    time: "20:00",
    startDate: "2026-10-10T20:00:00+02:00",
    price: "From CHF 109.55",
    priceRange: "109-109",
    shortDescription: "Saturday 10 October, 20:00, Victoria Hall. From CHF 109.55.",
    description: "Ticketcorner lists Hommage à Pavarotti at Victoria Hall on Saturday 10 October 2026 at 20:00, from CHF 109.55. This is not the weekend of 3 October.",
    image: "opera",
    seoTitle: "Hommage à Pavarotti at Victoria Hall, Geneva",
    seoDescription: "Hommage à Pavarotti, Victoria Hall, Saturday 10 October 2026 at 20:00, from CHF 109.55.",
    ogTitle: "Hommage à Pavarotti | Victoria Hall",
    ogDescription: "10 October, 20:00, from CHF 109.55."
  }
];
