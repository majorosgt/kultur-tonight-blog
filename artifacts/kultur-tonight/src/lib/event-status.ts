import type { Event } from "@/content/events";

export function zurichToday(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Zurich" }).format(new Date());
}

export function eventDay(event: Event): string {
  return event.startDate.slice(0, 10);
}

export function isPastEvent(event: Event, today = zurichToday()): boolean {
  const end = event.endDate ? event.endDate.slice(0, 10) : eventDay(event);
  return end < today;
}

export function formatEventDay(event: Event, locale: "en" | "fr"): string {
  const date = new Date(`${eventDay(event)}T12:00:00+02:00`);
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-CH" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Zurich",
  }).format(date);
}
