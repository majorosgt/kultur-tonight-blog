export type Locale = "en" | "fr";

/** Ordered list of route equivalents — most specific first */
const SEGMENTS: Array<{ en: string; fr: string; dynamic?: boolean }> = [
  { en: "/en/geneva/things-to-do-this-weekend", fr: "/fr/geneve/que-faire-ce-weekend" },
  { en: "/en/geneva/family-events",             fr: "/fr/geneve/sorties-en-famille" },
  { en: "/en/geneva/venues/",                   fr: "/fr/geneve/lieux/",          dynamic: true },
  { en: "/en/geneva/events/",                   fr: "/fr/geneve/evenements/",     dynamic: true },
  { en: "/en/geneva/venues",                    fr: "/fr/geneve/lieux" },
  { en: "/en/geneva/events",                    fr: "/fr/geneve/evenements" },
  { en: "/en/geneva/theatre",                   fr: "/fr/geneve/theatre" },
  { en: "/en/geneva/concerts",                  fr: "/fr/geneve/concerts" },
  { en: "/en/geneva",                           fr: "/fr/geneve" },
  { en: "/en/blog/",                            fr: "/fr/blog/",                  dynamic: true },
  { en: "/en/blog",                             fr: "/fr/blog" },
  { en: "/en",                                  fr: "/fr" },
];

export function detectLocale(path: string): Locale {
  return path.startsWith("/fr") ? "fr" : "en";
}

export function switchLocale(currentPath: string, to: Locale): string {
  const from = detectLocale(currentPath);
  if (from === to) return currentPath;

  for (const seg of SEGMENTS) {
    const fromPath = from === "en" ? seg.en : seg.fr;
    const toPath   = from === "en" ? seg.fr : seg.en;

    if (seg.dynamic) {
      if (currentPath.startsWith(fromPath)) {
        return toPath + currentPath.slice(fromPath.length);
      }
    } else {
      if (currentPath === fromPath) return toPath;
    }
  }

  return to === "fr" ? "/fr" : "/en";
}

const BASE = "https://kulturtonight.com";

/** Build hreflang alternates from the canonical EN path */
export function buildAlternates(enPath: string): Array<{ lang: string; url: string }> {
  const frPath = switchLocale(enPath, "fr");
  return [
    { lang: "en",        url: BASE + enPath },
    { lang: "fr",        url: BASE + frPath },
    { lang: "x-default", url: BASE + enPath },
  ];
}

/** Build hreflang alternates from the canonical FR path */
export function buildAlternatesFr(frPath: string): Array<{ lang: string; url: string }> {
  const enPath = switchLocale(frPath, "en");
  return [
    { lang: "en",        url: BASE + enPath },
    { lang: "fr",        url: BASE + frPath },
    { lang: "x-default", url: BASE + enPath },
  ];
}

const categoryLabelsFr: Record<string, string> = {
  opera:    "opéra",
  theatre:  "théâtre",
  concerts: "concerts",
  jazz:     "jazz",
  family:   "famille",
  dance:    "danse",
  classical:"classique",
};

export function localizeCategory(category: string, locale: Locale): string {
  if (locale === "en") return category;
  return categoryLabelsFr[category.toLowerCase()] ?? category;
}

/** Human-readable locale label */
export const localeLabel: Record<Locale, string> = { en: "EN", fr: "FR" };
