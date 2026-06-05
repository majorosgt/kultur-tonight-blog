import { Guide } from "../content/guides";
import { Event } from "../content/events";
import { Venue } from "../content/venues";
import { buildCanonical } from "./seo";

export function articleSchema(guide: Guide) {
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
    "publisher": {
      "@type": "Organization",
      "name": "KulturTonight",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kulturtonight.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": buildCanonical(`/en/blog/${guide.slug}`)
    }
  };
}

export function eventSchema(event: Event) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "startDate": new Date().toISOString(), // In a real app, map event.date to a real date string
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
      "url": buildCanonical(`/en/geneva/events/${event.slug}`)
    }
  };
}

export function venueSchema(venue: Venue) {
  return {
    "@context": "https://schema.org",
    "@type": venue.schemaType,
    "name": venue.name,
    "description": venue.description,
    "url": buildCanonical(`/en/geneva/venues/${venue.slug}`),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": venue.address.split(", ")[0],
      "addressLocality": "Geneva",
      "addressCountry": "CH"
    },
    "maximumAttendeeCapacity": venue.capacity
  };
}
