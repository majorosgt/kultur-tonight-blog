import { createContext, useContext, useEffect } from "react";

export interface SEOConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterImage?: string;
  canonical?: string;
  noindex?: boolean;
  /** hreflang alternate links — [{lang: "en", url: "..."}, ...] */
  alternates?: Array<{ lang: string; url: string }>;
  jsonLd?: Record<string, unknown>;
}

/** Context used by the SSR prerender entry to capture SEO data synchronously. */
export interface SSRSEOContextValue {
  seo: SEOConfig | null;
  capture: (s: SEOConfig) => void;
}
export const SSRSEOContext = createContext<SSRSEOContextValue | null>(null);

export function useSEO(config: SEOConfig) {
  const ssrCtx = useContext(SSRSEOContext);

  // SSR mode: capture synchronously. useEffect never fires during renderToString.
  if (ssrCtx && ssrCtx.seo === null) {
    ssrCtx.capture(config);
  }

  useEffect(() => {
    document.title = config.title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", config.description);
    setMeta("og:title", config.ogTitle ?? config.title, true);
    setMeta("og:description", config.ogDescription ?? config.description, true);
    if (config.ogUrl) setMeta("og:url", config.ogUrl, true);
    if (config.ogImage) setMeta("og:image", config.ogImage, true);
    setMeta("twitter:title", config.ogTitle ?? config.title);
    setMeta("twitter:description", config.ogDescription ?? config.description);
    if (config.twitterCard) setMeta("twitter:card", config.twitterCard);
    if (config.twitterImage) setMeta("twitter:image", config.twitterImage);

    const robotsContent = config.noindex ? "noindex, nofollow" : "index, follow";
    setMeta("robots", robotsContent);

    if (config.canonical) {
      let link = document.querySelector<HTMLLinkElement>(`link[rel="canonical"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", config.canonical);
    }

    const injectedAlts: HTMLLinkElement[] = [];
    if (config.alternates) {
      document.querySelectorAll<HTMLLinkElement>(`link[rel="alternate"][data-dyn="1"]`).forEach((el) => el.remove());
      for (const alt of config.alternates) {
        const el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", alt.lang);
        el.setAttribute("href", alt.url);
        el.setAttribute("data-dyn", "1");
        document.head.appendChild(el);
        injectedAlts.push(el);
      }
    }

    if (config.jsonLd) {
      let script = document.querySelector(`script[id="dynamic-json-ld"]`);
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("id", "dynamic-json-ld");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(config.jsonLd);
    }

    return () => {
      const script = document.querySelector(`script[id="dynamic-json-ld"]`);
      if (script) script.remove();
      injectedAlts.forEach((el) => el.remove());
    };
  }, [
    config.title,
    config.description,
    config.ogTitle,
    config.ogDescription,
    config.ogUrl,
    config.ogImage,
    config.twitterCard,
    config.twitterImage,
    config.canonical,
    config.noindex,
    config.alternates,
    config.jsonLd,
  ]);
}

export function buildCanonical(path: string) {
  return `https://kulturtonight.ch${path}`;
}

/** Renders SEO config as HTML head tag strings for static prerender injection. */
export function renderSEOHead(seo: SEOConfig): string {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const lines: string[] = [];

  lines.push(`<title>${esc(seo.title)}</title>`);
  lines.push(`<meta name="description" content="${esc(seo.description)}" />`);

  const ogTitle = seo.ogTitle ?? seo.title;
  const ogDesc = seo.ogDescription ?? seo.description;
  lines.push(`<meta property="og:title" content="${esc(ogTitle)}" />`);
  lines.push(`<meta property="og:description" content="${esc(ogDesc)}" />`);
  if (seo.ogUrl) lines.push(`<meta property="og:url" content="${esc(seo.ogUrl)}" />`);
  if (seo.ogImage) lines.push(`<meta property="og:image" content="${esc(seo.ogImage)}" />`);

  const twitterCard = seo.twitterCard ?? "summary_large_image";
  lines.push(`<meta name="twitter:card" content="${esc(twitterCard)}" />`);
  lines.push(`<meta name="twitter:title" content="${esc(ogTitle)}" />`);
  lines.push(`<meta name="twitter:description" content="${esc(ogDesc)}" />`);
  if (seo.twitterImage) lines.push(`<meta name="twitter:image" content="${esc(seo.twitterImage)}" />`);

  const robots = seo.noindex ? "noindex, nofollow" : "index, follow";
  lines.push(`<meta name="robots" content="${robots}" />`);

  if (seo.canonical) lines.push(`<link rel="canonical" href="${esc(seo.canonical)}" />`);

  if (seo.alternates) {
    for (const alt of seo.alternates) {
      lines.push(`<link rel="alternate" hreflang="${esc(alt.lang)}" href="${esc(alt.url)}" />`);
    }
  }

  if (seo.jsonLd) {
    lines.push(`<script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`);
  }

  return lines.join("\n    ");
}
