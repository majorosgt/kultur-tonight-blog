export interface Venue {
  slug: string
  name: string
  type: string
  schemaType?: string
  address: string
  city: string
  country: string
  capacity: number
  description: string
  longDescription: string
  history: string
  highlights: string[]
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
    longDescription: "The Grand Théâtre de Genève stands at the very heart of the city's cultural life — a neo-baroque monument on Place Neuve that has been Geneva's operatic soul since 1879. Its stage has hosted the world's greatest voices and the conductors who have led its orchestra read like a history of 20th-century music. The building itself is an event: gold leaf, crimson velvet, and a chandelier that has witnessed over a century of opening nights. In 1951, a fire gutted the interior — the rebuilding took years, but the house that emerged was, if anything, more beautiful than before. Today the GTG produces eight to ten major productions per season, balancing the canonical repertoire with adventurous new commissions and co-productions with the world's leading opera houses. Its ballet company, the Ballet du Grand Théâtre, is one of the finest in Europe. An evening at the Grand Théâtre is not simply a night out — it is Geneva making the argument that it belongs among the great cultural capitals of the world.",
    history: "Founded in 1879, the Grand Théâtre de Genève was built to replace the earlier Théâtre de Genève which had burned down. The neo-baroque building was designed by architect Jacques-Elysée Goss. A second devastating fire in 1951 destroyed the interior, leading to a major reconstruction completed in 1962. The house has been continuously renovated since, with a landmark restoration in 1997 returning it to its full glory.",
    highlights: [
      "The 1951 fire and subsequent reconstruction is one of Geneva's great cultural stories",
      "Home to the Ballet du Grand Théâtre — one of Switzerland's finest dance companies",
      "Co-produces regularly with leading European opera houses",
      "The neo-baroque interior — gold leaf, crimson velvet — is one of the most beautiful in Switzerland",
      "One of only a handful of opera houses in the world with its own permanent ballet company"
    ],
    image: 'https://images.unsplash.com/photo-1580809361436-42a7ec204889?w=800&q=80',
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
    longDescription: "Victoria Hall is Geneva's cathedral of music — a neo-baroque concert hall built in 1894 and gifted to the city by Daniel Fitzgerald Packenham Barton, a British diplomat who fell in love with Geneva and wanted to leave it something permanent. That gift has proven to be one of the most generous in European cultural history. The hall's acoustics are the stuff of legend: warm, balanced, and precise in a way that modern concert halls spend hundreds of millions of euros trying to replicate. It is the permanent home of the Orchestre de la Suisse Romande, founded by Ernest Ansermet in 1918 and one of the great orchestras of the 20th century. The OSR's recordings here — of Stravinsky, of Ravel, of the French repertoire above all — defined how that music sounded for generations of listeners. Standing in Victoria Hall before a concert begins, Geneva feels like a city that has always understood what beauty is for.",
    history: "Victoria Hall was built between 1891 and 1894, funded entirely by British diplomat Daniel Fitzgerald Packenham Barton as a gift to the city of Geneva. The architect was John Camoletti. It became the permanent home of the Orchestre de la Suisse Romande when that ensemble was founded by Ernest Ansermet in 1918. The hall underwent major acoustic renovation in the 1990s and again in 2019, each time preserving its extraordinary sonic character.",
    highlights: [
      "The only major concert hall in Europe built as a private gift to a city",
      "Ernest Ansermet conducted the OSR here for over 50 years",
      "The OSR's recordings from Victoria Hall are considered among the finest in the French orchestral repertoire",
      "The hall's acoustics have been studied and admired by acoustic engineers worldwide",
      "A classified Swiss historic monument — the interior has been preserved almost unchanged since 1894"
    ],
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
    longDescription: "The Théâtre du Léman occupies one of the most privileged positions in Geneva — on the Quai du Mont-Blanc, with the lake stretching out in front and the Alps rising behind. Since opening in 1991, it has established itself as the city's primary stage for large-scale commercial theatre: French-language musicals, touring spectacular productions, and the comedy shows that fill 1,300 seats on a Tuesday night. Where the Grand Théâtre is Geneva's operatic conscience, the Théâtre du Léman is its living room — the place where the city goes for an evening that is ambitious but not austere, cultural but not academic. Its programming is deliberately broad, and the theatre has become particularly important for French-language performing arts in the region, hosting many productions that originate in Paris before touring Switzerland. The lakefront location makes it one of the most scenically situated theatres in Europe.",
    history: "The Théâtre du Léman opened in 1991, built to fill a gap in Geneva's cultural infrastructure — the city had world-class opera and classical music but lacked a large-scale commercial theatre. It was conceived as a space for French-language performing arts of all kinds, from classical theatre to contemporary dance to popular entertainment. The theatre has undergone technical upgrades in 2005 and 2018.",
    highlights: [
      "The only large-scale commercial theatre in Geneva, filling a crucial gap in the cultural landscape",
      "The lakefront location on Quai du Mont-Blanc is one of the most scenic of any theatre in Europe",
      "A key venue for Francophone performing arts between Paris and the rest of Switzerland",
      "Regularly hosts Swiss premieres of major French productions",
      "1,300 seats make it Geneva's second largest performing arts venue after Victoria Hall"
    ],
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80',
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
    longDescription: "The Comédie de Genève is where Geneva's theatre scene becomes serious — seriously adventurous, seriously European, seriously engaged with what theatre can do and who it is for. Housed in a beautifully restored early-20th-century building in the Plainpalais district, it functions as one of Switzerland's most intellectually rigorous theatre institutions. The programming favours contemporary European dramaturgy, often in co-production with theatres in Paris, Brussels, Berlin, and beyond. An evening at the Comédie is never passive — the work asks something of its audience, invites discomfort, and refuses easy resolution. For those who want theatre that matters, not just theatre that entertains, this is Geneva's essential address.",
    history: "The Comédie de Genève was founded in 1968 during the wave of theatrical renewal that swept Europe. It has been led by a succession of visionary artistic directors, each shaping the institution in their own image. The building on Boulevard des Philosophes was acquired and renovated in the 1980s. The theatre has maintained strong co-production relationships with leading European institutions throughout its history.",
    highlights: [
      "Founded in 1968 — over 55 years of commitment to serious contemporary theatre",
      "Regular co-productions with major European theatres including institutions in Paris, Brussels, and Berlin",
      "One of the most important platforms for contemporary Francophone dramaturgy in Switzerland",
      "The Plainpalais building is one of Geneva's finest examples of early 20th-century civic architecture",
      "Consistently programmes work that challenges, provokes, and expands the possibilities of theatre"
    ],
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80',
    website: 'https://www.comedie.ch',
    categories: ['theatre', 'contemporary'],
    featured: true
  },
  {
    slug: 'batiment-des-forces-motrices',
    name: 'Bâtiment des Forces Motrices',
    type: 'Concert Hall',
    address: 'Place des Volontaires 2',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 600,
    description: 'A magnificent 19th-century industrial building with exceptional acoustics and a unique atmosphere.',
    longDescription: "The Bâtiment des Forces Motrices is Geneva's most atmospheric performance space — a soaring iron-and-glass industrial building that was, until 1977, the hydraulic pumping station that supplied the city's water pressure. Built in 1886, the building's conversion into a cultural venue in the 1990s is one of the great adaptive reuse stories in European cultural history. The acoustics, shaped by the building's extraordinary volume and hard surfaces, are remarkable — warm and resonant in a way that purpose-built concert halls rarely achieve. The BFM regularly hosts opera productions, chamber concerts, and interdisciplinary performances that feel, in this building, uniquely possible. To attend an event at the BFM is to be reminded that the best cultural spaces are discovered, not designed.",
    history: "Built in 1886 as a hydraulic pumping station to provide water pressure for the city's public fountains and fire hydrants, the Bâtiment des Forces Motrices operated continuously until 1977. After years of discussions about its future, the building was classified as a historic monument and converted into a performance space in the early 1990s, opening as a cultural venue in 1994.",
    highlights: [
      "Originally a hydraulic pumping station built in 1886 — one of Europe's finest examples of industrial architecture",
      "The conversion from pumping station to concert hall is considered a model of adaptive reuse",
      "The acoustics are entirely natural — no electronic enhancement needed for acoustic music",
      "A classified Swiss historic monument, preserved almost entirely in its original form",
      "The only performance space in Geneva where the building itself is as compelling as the programme"
    ],
    image: 'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?w=800&q=80',
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
    longDescription: "Carouge is not quite Geneva — it was, until 1816, a separate city under Sardinian rule, and it has never quite forgotten that independence. The streets are wider, the cafés more relaxed, the atmosphere more Italian than Swiss. The Théâtre de Carouge reflects its neighbourhood perfectly: warm where the Grand Théâtre is grand, intimate where the Comédie is confrontational, and consistently excellent where others are merely ambitious. Founded in 1958, the theatre has been a cornerstone of French-language theatre in Switzerland for nearly seven decades. Its programming philosophy is deceptively simple: present the best plays, performed with the highest craft, for audiences who deserve to be treated as intelligent adults. The result is a theatre with one of the most loyal audiences in Geneva — people who have been coming for decades and bring their children and grandchildren.",
    history: "The Théâtre de Carouge was founded in 1958 by André Steiger, a director who established the company with a commitment to quality French-language theatre. The company found its permanent home in a converted building on the Rue Ancienne in the 1960s. Steiger led the theatre for over 30 years, establishing its distinctive character and loyal audience. The theatre was classified as a venue of cantonal cultural importance in the 1990s.",
    highlights: [
      "Founded in 1958 — one of the oldest continuously operating theatres in French-speaking Switzerland",
      "Located in Carouge, a former independent city with Italian roots and a distinct character from Geneva",
      "One of the most loyal and multigenerational audiences of any Swiss theatre",
      "The intimate 300-seat house creates an exceptional connection between performers and audience",
      "Classified as a venue of cantonal cultural importance by the Geneva authorities"
    ],
    image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&q=80',
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
    longDescription: "The AMR Jazz Club is the kind of place that cities lose and never quite replace — a venue so deeply embedded in the cultural fabric that its absence would leave a hole that no amount of new development could fill. Founded in 1973 by a group of musicians who wanted a space where improvised music could happen every night without commercial compromise, the AMR has been Geneva's jazz conscience for over fifty years. The Association pour l'encouragement de la Musique Improvisée is not just a club — it is a community, a school, and a philosophical commitment to the idea that improvised music matters. The venue itself is small enough that you can feel the musicians breathing. The programming spans the full spectrum of improvised music: straight-ahead bebop, free jazz, world music hybrids, and electroacoustic performance. There is no better place in Switzerland to spend a Wednesday night.",
    history: "The AMR was founded in 1973 by a collective of Geneva-based jazz musicians frustrated by the lack of dedicated venues for improvised music in the city. It began as a loosely organised collective before establishing its permanent venue on the Rue des Alpes in the late 1970s. The AMR has been a centre for jazz education as well as performance, running workshops and masterclasses alongside its concert programme for over five decades.",
    highlights: [
      "Founded in 1973 — over 50 years of uninterrupted commitment to improvised music",
      "Entirely musician-run — no corporate ownership, no commercial compromise in over 50 years",
      "Runs one of Switzerland's most respected jazz education programmes alongside its concert series",
      "The annual AMR Festival is one of the finest jazz festivals in the region",
      "Has hosted virtually every significant European jazz musician of the past five decades"
    ],
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80',
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
    longDescription: "Le Galpon is Geneva's theatre laboratory — the place where the city's most formally adventurous work is made, tested, and sometimes reinvented. Located in a converted warehouse on the edge of the Plainpalais district, it has been one of the most important independent theatre spaces in French-speaking Switzerland for decades. The programming is deliberately challenging — physical theatre, new writing, interdisciplinary performance, work that crosses the boundaries between theatre and dance, theatre and visual art, theatre and music. Every production reconfigures the space, so the experience of attending Le Galpon is never quite the same twice. If the Grand Théâtre represents Geneva's cultural establishment and the Comédie its intellectual conscience, Le Galpon is its nerve endings — the place where the city's cultural life is most alive to possibility.",
    history: "Le Galpon was established in the 1980s in a converted industrial space in the Plainpalais district, emerging from the independent theatre movement that swept European cities in the 1970s and 80s. The company has been led by a series of artistic directors, each bringing their own vision while maintaining the venue's commitment to formal experimentation and complete independence from institutional programming pressures.",
    highlights: [
      "One of the most important independent theatre venues in French-speaking Switzerland",
      "The space transforms completely for each production — no two visits are the same",
      "Entirely independent — committed to inviting the most interesting work wherever it comes from",
      "Runs a residency programme supporting emerging artists from across the Francophone world",
      "Has been a launching pad for many of the most significant Swiss theatre-makers of the past 30 years"
    ],
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80',
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
    longDescription: "Tucked behind the Place de la Madeleine in the heart of Geneva's old town, the Salle Centrale de la Madeleine is one of those venues that rewards those who know where to look. It is not famous in the way Victoria Hall is famous, and it does not announce itself on the tourist map — but for Geneva's chamber music lovers, it is sacred ground. The hall seats around 300, with a warmth of acoustic and a closeness of atmosphere that makes it ideal for string quartets, piano recitals, song cycles, and chamber ensembles. The artists who perform here are serious musicians who choose the Salle Centrale because of what it does for their sound. In a city full of grand gestures, the Salle Centrale de la Madeleine is a reminder that the most profound musical experiences are often the most intimate.",
    history: "The Salle Centrale de la Madeleine has been part of the Maison Centrale, a Protestant community centre, since the late 19th century. The building on the Place de la Madeleine has been a centre of Geneva civic and cultural life for over 120 years. The concert hall has hosted chamber music and recitals continuously since its opening, making it one of the longest-running concert venues in the city.",
    highlights: [
      "Over 120 years of continuous concert life in the heart of Geneva's old town",
      "Acoustic properties widely considered ideal for chamber music and solo recitals",
      "Part of the historic Maison Centrale — a centre of Geneva civic life since the 19th century",
      "The intimate scale creates a quality of listening rarely found in larger venues",
      "One of the few Geneva venues where the programme focuses exclusively on chamber and solo repertoire"
    ],
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
    website: 'https://www.sallecentrale.ch',
    categories: ['classical', 'chamber-music'],
    featured: false
  },
  {
    slug: 'alhambra',
    name: 'Alhambra',
    type: 'Concert Hall',
    address: 'Rue de la Rôtisserie 10',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 900,
    description: "Geneva's largest standalone concert venue, hosting mainstream, pop, rock, and world music.",
    longDescription: "The Alhambra occupies a special place in Geneva's cultural life: it is the city's great democratic stage, the venue where culture is offered to everyone. Built in the early 20th century in a Moorish-inspired style that gives the building its name, the Alhambra has spent over a century hosting the music that Geneva's population actually wants to hear. At 900 capacity, it sits in a sweet spot: large enough to attract major touring acts who might otherwise bypass Geneva between Paris and Zurich, intimate enough that no seat feels disconnected from the stage. The programming is deliberately eclectic — an autumn season might open with a West African musician, pass through a French chanson legend, and close with a jazz-classical crossover event. The Alhambra has always understood that culture is not a single thing.",
    history: "The Alhambra was built in the early 20th century in a Moorish architectural style, part of a fashion for orientalist architecture that swept European cities in the Belle Époque period. It has operated continuously as an entertainment venue for over a century, adapting its programming to successive generations of popular taste. The venue was renovated and repositioned as Geneva's primary mid-size concert hall in the 1990s.",
    highlights: [
      "Over 100 years of popular entertainment in a distinctive Moorish-inspired building",
      "The ideal capacity for touring acts — large enough to be viable, intimate enough to be special",
      "One of the most architecturally distinctive venue interiors in Switzerland",
      "Programmes across genres in a way that reflects the full diversity of Geneva's population",
      "A key stop on European touring circuits between Paris and Zurich"
    ],
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80',
    website: 'https://www.alhambra-geneve.ch',
    categories: ['concerts', 'pop', 'rock', 'world-music'],
    featured: false
  },
  {
    slug: 'arena-geneve',
    name: 'Arena Genève',
    type: 'Arena',
    address: 'Route des Batailleux 3, Le Grand-Saconnex',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 9500,
    description: "Geneva's large indoor arena, inside the Palexpo complex, for touring concerts, comedy and big spectacles.",
    longDescription: "Arena Genève is the room Geneva did not have until 1995: a hall large enough for the tours that used to skip the city between Paris, Lyon and Zurich. It sits inside Palexpo, in Le Grand-Saconnex, a short walk from the airport and the train station, which is exactly why the international circuit stops here. The hall opened on 1 November 1995 with Johnny Hallyday, after ten months of construction. Since then it has held the concerts, comedy nights and spectacles that need more than the Alhambra's 900 seats and do not belong in an opera house — Elton John, Céline Dion, Muse, Indochine, Gad Elmaleh, Notre-Dame de Paris, Cirque du Soleil, Disney on Ice. The configuration changes with the show. Fixed tiered seats number 3,537, the floor adds another 2,000 square metres, and a full standing concert can reach about 9,500. The venue's own figures put the annual audience near 250,000. An evening here is not intimate. It is Geneva at the scale of a European tour.",
    history: "Arena Genève, also known as the Geneva Arena and formerly the SEG Geneva Arena, opened on 1 November 1995 as part of the Palexpo complex in Le Grand-Saconnex. It was built in ten months to give the Lake Geneva region a hall on the scale of the larger European arenas. The opening concert was Johnny Hallyday. The building is owned by the Canton of Geneva, within the Palexpo site operated by Palexpo SA. The official history cites 2,175 performances and about 250,000 spectators a year.",
    highlights: [
      "Opened on 1 November 1995 with Johnny Hallyday, after ten months of construction",
      "Part of Palexpo in Le Grand-Saconnex, beside the airport and the station",
      "About 9,500 in concert configuration; 3,537 fixed seats plus a 2,000 m² floor",
      "The stop for tours that are too big for the Alhambra and wrong for the Grand Théâtre",
      "Concerts, comedy, musicals and ice shows — about 250,000 spectators a year"
    ],
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
    website: 'https://geneva-arena.ch',
    categories: ['concerts', 'pop', 'rock'],
    featured: true
  },
  {
    slug: 'theatre-saint-gervais',
    name: 'Théâtre Saint-Gervais',
    type: 'Theatre',
    address: 'Rue du Temple 5',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 160,
    description: "A nine-storey house for live arts near Cornavin, with two rooms and a programme that takes risks.",
    longDescription: "The Théâtre Saint-Gervais sits five minutes from Cornavin, in a 1960s building the city now calls the Maison Saint-Gervais. Nine floors hold rehearsals, installations, film and performance, not just a stage. There are two rooms, of 160 and 60 seats, which is the point: the house is built for a close public, not a crowd. The season runs to about thirty shows, a mix of repertoire, new writing, performance and comedy. Since 2018–19 it has been directed by Sandrine Kuster. An evening here is Geneva's live arts at the scale of a room, not a monument.",
    history: "The Ville de Genève describes the Maison Saint-Gervais as a 1960s building devoted to research, rehearsal, installation, performance, film and visual arts. The theatre has two performance rooms, of 160 and 60 seats. Sandrine Kuster has directed it since the 2018–19 season. The box office is at Rue du Temple 5.",
    highlights: [
      "Rue du Temple 5, five minutes from Cornavin",
      "Two rooms: 160 seats and 60 seats",
      "Nine floors for rehearsal, installation, film and performance",
      "About thirty shows a season, from repertoire to new writing",
      "Directed by Sandrine Kuster since 2018–19"
    ],
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80',
    website: 'https://saintgervais.ch',
    categories: ['theatre', 'contemporary', 'dance'],
    featured: true
  },
  {
    slug: 'theatre-am-stram-gram',
    name: 'Théâtre Am Stram Gram',
    type: 'Family Theatre',
    address: 'Route de Frontenex 56',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 337,
    description: "Geneva's theatre for children and young audiences, with a 337-seat hall and a smaller modular room.",
    longDescription: "Am Stram Gram is the house Geneva built for children and the adults who come with them. It stands on Route de Frontenex, in Eaux-Vives, a proper theatre rather than a classroom with a curtain. The main room, the Salle Dominique Catton & Nathalie Nath, holds 337 in a frontal setup and has a real stage. A second, modular room takes about 90. The programme runs from toddlers to teenagers, and some shows are marked for non-French speakers. A season pass exists. If the blog has a family section, this is the address that belongs at the top of it.",
    history: "The theatre publishes two rooms: the Salle Dominique Catton & Nathalie Nath, 337 seats in a frontal configuration, and a modular room of about 90. It produces and tours work for young audiences, with support from the City and Canton of Geneva. The box office is at Route de Frontenex 56.",
    highlights: [
      "Geneva's dedicated theatre for children and young audiences",
      "Main hall of 337 seats, named for Dominique Catton and Nathalie Nath",
      "A second modular room of about 90",
      "Route de Frontenex 56, Eaux-Vives",
      "Some shows are programmed for non-French speakers"
    ],
    image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&q=80',
    website: 'https://www.amstramgram.ch',
    categories: ['theatre', 'family'],
    featured: true
  },
  {
    slug: 'chat-noir',
    name: 'Chat Noir',
    type: 'Cabaret',
    address: 'Rue Vautier 13, Carouge',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 200,
    description: "Carouge's late room: a 200-capacity concert hall, a bar and a cabaret, open well past midnight.",
    longDescription: "The Chat Noir is not a concert hall that happens to have a bar. It is a Carouge night address — Rue Vautier 13 — where food, a cabaret and a band share the same evening. The concert room holds 200, a long hall on two levels, built to an acoustic plan, with a small rubber stage. Upstairs, the bar room holds 50 and stays semi-acoustic. The programme moves from funk and reggae to jazz, chanson and a queer cabaret. The kitchen runs until 23:00. On Friday and Saturday the bar stays open until 05:00. It is the late counterpart to the AMR: less a listening club, more a night out.",
    history: "The venue's own technical sheet lists a concert room of 200 and an upstairs bar of 50 seats. The address is Rue Vautier 13, 1227 Carouge. Geneva Tourism describes it as a stage, a bar, a restaurant and a nightclub, programmed across current music and used to develop emerging artists.",
    highlights: [
      "Rue Vautier 13, Carouge — not the Eaux-Vives club of the same reputation",
      "Concert room of 200, upstairs bar of 50",
      "Cabaret, concerts and a kitchen, in one address",
      "Bar open until 05:00 on Friday and Saturday",
      "A stage for emerging artists across jazz, chanson, funk and reggae"
    ],
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80',
    website: 'https://www.chatnoir.ch',
    categories: ['jazz', 'concerts', 'cabaret'],
    featured: true
  },
  {
    slug: 'usine',
    name: "L'Usine",
    type: 'Cultural Centre',
    address: 'Place des Volontaires 4',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 0,
    description: "Geneva's self-run cultural centre, in the former gold factory beside the BFM. Concerts, theatre, cinema, bars.",
    longDescription: "L'Usine is the building on Place des Volontaires that used to be the Usine genevoise de dégrossissage d'or. The city handed it to an association in 1989. That association now gathers about twenty collectives: concert rooms, a theatre, a cinema, bars and workshops, in one of the larger self-managed cultural centres in Europe. PTR, the Spoutnik cinema and the Théâtre de l'Usine share the address with the BFM next door. There is no single capacity, because there is no single room. An evening here is chosen from a board, not from one poster.",
    history: "The Ville de Genève records that the former Usine genevoise de dégrossissage d'or was assigned to the association in 1989. L'Usine groups about twenty collectives and associations, with concert rooms, a theatre, a cinema and workshops. The address is Place des Volontaires 4. Other tenants in the building include Post Tenebras Rock.",
    highlights: [
      "Place des Volontaires 4, beside the Bâtiment des Forces Motrices",
      "Former gold-roughing factory, assigned by the city in 1989",
      "About twenty self-run collectives under one roof",
      "Concerts, theatre, cinema and bars — not one hall",
      "One of the larger self-managed cultural centres in Europe, on the city's own account"
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    website: 'https://www.usine.ch',
    categories: ['concerts', 'theatre', 'contemporary'],
    featured: false
  },
  {
    slug: 'fonderie-kugler',
    name: 'Fonderie Kugler',
    type: 'Independent Venue',
    address: 'Rue de la Truite 4bis',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 0,
    description: "A 400 m² hall in the old Kugler tap factory at the Jonction, programmed by the artists who work there.",
    longDescription: "The Fonderie Kugler is the public room of the Usine Kugler, the old tap factory at the Pointe de la Jonction. Artists have occupied the building since 2009. The Fédération des artistes de Kugler groups eight associations and about 220 people across studios, sound, design and applied arts. The Fonderie itself is a 400 m² hall: new music, residencies, exhibitions, benefits, the odd all-night. It is not a civic theatre with a season brochure. It is a factory floor that stayed a workplace and opened the door.",
    history: "The Fondation pour la promotion de la culture et des arts lists the Usine Kugler as artist studios and public rooms in the former Kugler tap factory since 2009, run by the Fédération des artistes de Kugler. The Fonderie is described as a 400 m² hall. The address published by the venue is 4bis rue de la Truite, 1205 Genève.",
    highlights: [
      "4bis rue de la Truite, at the Pointe de la Jonction",
      "Former Kugler tap factory, artist-occupied since 2009",
      "A 400 m² hall, not a fixed-seat theatre",
      "Run by the Fédération des artistes de Kugler",
      "New music, residencies, exhibitions and late nights"
    ],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    website: 'https://usinekugler.ch',
    categories: ['concerts', 'contemporary'],
    featured: false
  },
  {
    slug: 'theatre-pitoeff',
    name: 'Théâtre Pitoëff',
    type: 'Theatre',
    address: 'Rue de Carouge 52',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 0,
    description: "A city rehearsal and performance room on the first floor of the Plainpalais town hall, open to Geneva companies.",
    longDescription: "The Théâtre Pitoëff is on the first floor of the Maison communale de Plainpalais, the building Joseph Marshall raised between 1907 and 1909 on Rue de Carouge. The city cultural service runs it. Since 2023 the room has been given over to research and development residencies for professional companies working in theatre and storytelling. The stalls and gallery date from rebuilds in 1926 and 1968. The seats still in place were installed in the early 1990s. It is a working room for Geneva companies, not a receiving house with a star season. The city does not publish a seat count, so none is shown here.",
    history: "The Ville de Genève places the theatre in the Maison communale de Plainpalais, built by Joseph Marshall between 1907 and 1909. Gallery and stall risers were added in 1926 and 1968. The current seats date from the early 1990s. Since 2023 the room hosts research and development residencies in theatre and storytelling. The address is Rue de Carouge 52.",
    highlights: [
      "First floor of the Plainpalais town hall, Rue de Carouge 52",
      "Building by Joseph Marshall, 1907–1909",
      "Run by the Ville de Genève cultural service",
      "Residencies for Geneva companies since 2023",
      "No published seat count — none is invented here"
    ],
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80',
    website: 'https://scenes-culturelles.geneve.ch/pitoeff/',
    categories: ['theatre', 'contemporary'],
    featured: false
  },
  {
    slug: 'cinemas-du-grutli',
    name: 'Cinémas du Grütli',
    type: 'Cinema',
    address: 'Rue du Général-Dufour 16',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 196,
    description: "Two art-house screens under the Maison des Arts du Grütli, a short walk from Victoria Hall.",
    longDescription: "The Cinémas du Grütli are the two screens in the basement of the Maison des Arts du Grütli, Rue du Général-Dufour 16, between Place Neuve and the Cirque tram stop. The Salle Michel Simon holds 196, plus one wheelchair space. The Salle Henri Langlois holds 59. Films run in the original language with French subtitles. A ticket is CHF 15, less with a student or CinéPass reduction. It is the cinema that belongs on a culture map next to the Grand Théâtre and Victoria Hall, not a multiplex.",
    history: "The Fondation des Cinémas du Grütli publishes two basement screens in the Maison des Arts du Grütli: Michel Simon, 196 seats, and Henri Langlois, 59 seats. The address is Rue du Général-Dufour 16. Screenings are in the original language, subtitled in French, with the support of the Ville de Genève.",
    highlights: [
      "Rue du Général-Dufour 16, beside Place Neuve",
      "Salle Michel Simon, 196 seats; Salle Henri Langlois, 59",
      "Original-language films with French subtitles",
      "Standard ticket CHF 15",
      "The art-house pair to Victoria Hall and the Grand Théâtre"
    ],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    website: 'https://www.cinemas-du-grutli.ch',
    categories: ['cinema'],
    featured: true
  },
  {
    slug: 'musee-art-et-histoire',
    name: "Musée d'Art et d'Histoire",
    type: 'Museum',
    address: 'Rue Charles-Galland 2',
    city: 'Geneva',
    country: 'Switzerland',
    capacity: 0,
    description: "Geneva's principal museum, opened in 1910 between the old town and the Tranchées.",
    longDescription: "The Musée d'Art et d'Histoire is the large civic museum, not a stage. Marc Camoletti designed it. It opened in 1910 on the site of the Casemates, between the old town and the Tranchées quarter, a job the city compared at the time to the building of Saint-Pierre. The collection runs across fine art, archaeology and applied arts. The Musée Rath and the Maison Tavel are attached to it. Doors are Tuesday to Sunday, 11:00 to 18:00, and Thursday until 21:00. Monday it is closed. There is no seat count, because there is no auditorium on this page.",
    history: "The Ville de Genève records the museum as inaugurated in 1910, designed by Marc Camoletti, on the site of the Casemates. It is one of the largest museums in Switzerland and the head of a group that includes the art and archaeology library, the print room, the Musée Rath and the Maison Tavel. The address is Rue Charles-Galland 2.",
    highlights: [
      "Opened in 1910, designed by Marc Camoletti",
      "Rue Charles-Galland 2, between the old town and the Tranchées",
      "Fine art, archaeology and applied arts under one roof",
      "Musée Rath and Maison Tavel are attached",
      "Tuesday to Sunday 11:00–18:00, Thursday until 21:00, closed Monday"
    ],
    image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80',
    website: 'https://www.geneve.ch/musee-art-histoire',
    categories: ['museum', 'exhibitions'],
    featured: true
  },
]
