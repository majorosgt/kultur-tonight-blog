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

  {
    slug: "electron-modeselektor-alhambra",
    title: "Electron: Modeselektor Classics",
    category: "concerts",
    venue: { name: "Alhambra", slug: "alhambra" },
    date: "Tuesday 6 October",
    time: "19:00",
    startDate: "2026-10-06T19:00:00+02:00",
    price: "",
    priceRange: "",
    shortDescription: "Tuesday 6 October, 19:00, Alhambra. Modeselektor Classics Live, with Noria Lilt.",
    description: "Eventfrog lists Electron: Modeselektor Classics Live + Noria Lilt at the Alhambra on Tuesday 6 October 2026 at 19:00. The listing consulted did not publish a price.",
    image: "concerts",
    seoTitle: "Modeselektor Classics at Alhambra, Geneva",
    seoDescription: "Electron festival: Modeselektor Classics Live at the Alhambra, Tuesday 6 October 2026 at 19:00.",
    ogTitle: "Modeselektor Classics | Alhambra",
    ogDescription: "Tuesday 6 October, 19:00, Alhambra."
  },
  {
    slug: "danyl-usine",
    title: "Danyl",
    category: "concerts",
    venue: { name: "L'Usine", slug: "usine" },
    date: "Thursday 8 October",
    time: "20:00",
    startDate: "2026-10-08T20:00:00+02:00",
    price: "",
    priceRange: "",
    shortDescription: "Thursday 8 October, 20:00, Le Rez at L'Usine.",
    description: "Eventfrog lists Danyl at Le Rez, L'Usine, on Thursday 8 October 2026 at 20:00. The listing consulted did not publish a price.",
    image: "concerts",
    seoTitle: "Danyl at L'Usine, Geneva",
    seoDescription: "Danyl at L'Usine, Thursday 8 October 2026 at 20:00.",
    ogTitle: "Danyl | L'Usine",
    ogDescription: "Thursday 8 October, 20:00, L'Usine."
  },
  {
    slug: "octobre-rose-victoria-hall",
    title: "Concert Octobre Rose",
    category: "concerts",
    venue: { name: "Victoria Hall", slug: "victoria-hall" },
    date: "Sunday 11 October",
    time: "17:00",
    startDate: "2026-10-11T17:00:00+02:00",
    price: "",
    priceRange: "",
    shortDescription: "Sunday 11 October, 17:00, Victoria Hall. Listed by the City of Geneva box office.",
    description: "The City of Geneva cultural box office lists Concert Octobre Rose at Victoria Hall on Sunday 11 October 2026 at 17:00. The listing consulted did not publish a price.",
    image: "concerts",
    seoTitle: "Concert Octobre Rose at Victoria Hall, Geneva",
    seoDescription: "Concert Octobre Rose at Victoria Hall, Sunday 11 October 2026 at 17:00.",
    ogTitle: "Concert Octobre Rose | Victoria Hall",
    ogDescription: "Sunday 11 October, 17:00, Victoria Hall."
  },
  {
    slug: "yaima-alhambra",
    title: "YAIMA Autumn Tour",
    category: "concerts",
    venue: { name: "Alhambra", slug: "alhambra" },
    date: "Sunday 11 October",
    time: "19:30",
    startDate: "2026-10-11T19:30:00+02:00",
    price: "",
    priceRange: "",
    shortDescription: "Sunday 11 October, 19:30, Alhambra.",
    description: "Eventfrog lists YAIMA Autumn Tour 2026 at the Alhambra on Sunday 11 October 2026 at 19:30. The listing consulted did not publish a price.",
    image: "concerts",
    seoTitle: "YAIMA at Alhambra, Geneva",
    seoDescription: "YAIMA Autumn Tour at the Alhambra, Sunday 11 October 2026 at 19:30.",
    ogTitle: "YAIMA | Alhambra",
    ogDescription: "Sunday 11 October, 19:30, Alhambra."
  }

];
