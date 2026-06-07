import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  noindex?: boolean;
  /** hreflang alternate links — [{lang: "en", url: "..."}, ...] */
  alternates?: Array<{ lang: string; url: string }>;
  jsonLd?: Record<string, unknown>;
}

export function useSEO({ title, description, ogTitle, ogDescription, canonical, noindex, alternates, jsonLd }: SEOConfig) {
  useEffect(() => {
    document.title = title;

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

    setMeta("description", description);
    setMeta("og:title", ogTitle ?? title, true);
    setMeta("og:description", ogDescription ?? description, true);
    setMeta("twitter:title", ogTitle ?? title);
    setMeta("twitter:description", ogDescription ?? description);

    // Robots / noindex
    const robotsContent = noindex ? "noindex, nofollow" : "index, follow";
    setMeta("robots", robotsContent);

    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>(`link[rel="canonical"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Inject hreflang alternates
    const injectedAlts: HTMLLinkElement[] = [];
    if (alternates) {
      document.querySelectorAll<HTMLLinkElement>(`link[rel="alternate"][data-dyn="1"]`).forEach((el) => el.remove());
      for (const alt of alternates) {
        const el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", alt.lang);
        el.setAttribute("href", alt.url);
        el.setAttribute("data-dyn", "1");
        document.head.appendChild(el);
        injectedAlts.push(el);
      }
    }

    if (jsonLd) {
      let script = document.querySelector(`script[id="dynamic-json-ld"]`);
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("id", "dynamic-json-ld");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      const script = document.querySelector(`script[id="dynamic-json-ld"]`);
      if (script) script.remove();
      injectedAlts.forEach((el) => el.remove());
    };
  }, [title, description, ogTitle, ogDescription, canonical, noindex, alternates, jsonLd]);
}

export function buildCanonical(path: string) {
  return `https://kulturtonight.ch${path}`;
}
