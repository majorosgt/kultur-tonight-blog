import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
}

export function useSEO({ title, description, ogTitle, ogDescription, canonical, jsonLd }: SEOConfig) {
  useEffect(() => {
    document.title = title;
    
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", ogTitle, true);
    setMeta("og:description", ogDescription, true);
    setMeta("twitter:title", ogTitle);
    setMeta("twitter:description", ogDescription);

    if (canonical) {
      let link = document.querySelector(`link[rel="canonical"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
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
      // Cleanup json-ld to avoid duplicate scripts when navigating
      const script = document.querySelector(`script[id="dynamic-json-ld"]`);
      if (script) script.remove();
    };
  }, [title, description, ogTitle, ogDescription, canonical, jsonLd]);
}

export function buildCanonical(path: string) {
  return `https://kulturtonight.com${path}`;
}
