import { Guide } from "../content/guides";
import { Event } from "../content/events";
import { Venue } from "../content/venues";
import type { BlogArticle } from "../content/blog-guides";
import { buildCanonical } from "./seo";

const LOGO_URL = "https://kulturtonight.ch/assets/logo-mark.svg";

const publisher = {
  "@type": "Organization",
  "name": "KulturTonight",
  "logo": {
    "@type": "ImageObject",
    "url": LOGO_URL
  }
};

export function articleSchema(guide: Guide, canonicalPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.seoTitle,
    "description": guide.seoDescription,
    "datePublished": guide.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "KulturTonight"
    },
    "publisher": publisher,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": buildCanonical(canonicalPath)
    }
  };
}

export function blogArticleSchema(article: BlogArticle, canonicalPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.seoTitle,
    "description": article.seoDescription,
    "datePublished": article.date,
    "inLanguage": article.lang === "fr" ? "fr-CH" : "en-GB",
    "author": {
      "@type": "Organization",
      "name": "KulturTonight"
    },
    "publisher": publisher,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": buildCanonical(canonicalPath)
    }
  };
}

export function eventSchema(event: Event, canonicalPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "startDate": new Date().toISOString(),
    "location": {
      "@type": "Place",
      "name": event.venue.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Geneva",
        "addressCountry": "CH"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CHF",
      "price": event.priceRange.split("-")[0],
      "url": buildCanonical(canonicalPath)
    }
  };
}

export function venueSchema(venue: Venue, canonicalPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": venue.schemaType,
    "name": venue.name,
    "description": venue.description,
    "url": buildCanonical(canonicalPath),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": venue.address.split(", ")[0],
      "addressLocality": "Geneva",
      "addressCountry": "CH"
    },
    "maximumAttendeeCapacity": venue.capacity
  };
}
