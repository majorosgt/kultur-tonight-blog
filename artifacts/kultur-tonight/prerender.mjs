/**
 * Build-time prerender script for KulturTonight.
 *
 * Runs after `vite build` (client bundle) and `vite build --ssr` (server bundle).
 * For each public route it:
 *   1. Calls the SSR render function to get the body HTML + captured SEO config
 *   2. Strips the generic head from index.html and injects route-specific tags
 *   3. Writes <route>/index.html so crawlers receive a full HTML document
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist/public");
const templatePath = path.resolve(distDir, "index.html");
const ssrBundlePath = path.resolve(__dirname, "dist/server/entry-server.js");

// ── Load SSR bundle ───────────────────────────────────────────────────────────
// The SSR bundle exports: render(), renderSEOHead(), and all content arrays
// used for slug enumeration.  We import everything from the single bundled file
// instead of trying to import individual dist/server/content/*.js files, which
// don't exist after Vite SSR bundling.

let ssrModule;
try {
  ssrModule = await import(ssrBundlePath);
} catch (err) {
  console.error("Failed to load SSR bundle:", err.message);
  console.error("Run `vite build --ssr src/entry-server.tsx --outDir dist/server` first.");
  process.exit(1);
}

const {
  render: renderFn,
  renderSEOHead,
  events,
  eventsFr,
  venues,
  venuesFr,
  blogGuides,
  blogGuidesFr,
  blogVenues,
  blogVenuesFr,
  blogThisWeek,
  blogThisWeekFr,
  blogThisWeekend,
  blogThisWeekendFr,
  blogEvents,
  blogEventsFr,
  blogSeasonal,
  blogSeasonalFr,
  blogCulture,
  blogCultureFr,
  blogFamily,
  blogFamilyFr,
} = ssrModule;

function slugs(arr) {
  return Array.isArray(arr) ? arr.map((x) => x.slug).filter(Boolean) : [];
}

// ── Route manifest ────────────────────────────────────────────────────────────

const staticRoutes = [
  "/en",
  "/fr",
  "/en/geneva",
  "/fr/geneve",
  "/en/geneva/things-to-do-this-weekend",
  "/fr/geneve/que-faire-ce-weekend",
  "/en/geneva/theatre",
  "/fr/geneve/theatre",
  "/en/geneva/concerts",
  "/fr/geneve/concerts",
  "/en/geneva/family-events",
  "/fr/geneve/sorties-en-famille",
  "/en/geneva/venues",
  "/fr/geneve/lieux",
  "/en/geneva/events",
  "/fr/geneve/evenements",
  "/en/blog",
  "/fr/blog",
  "/en/blog/geneva",
  "/fr/blog/geneve",
  "/en/blog/geneva/guides",
  "/fr/blog/geneve/guides",
  "/en/blog/geneva/venues",
  "/fr/blog/geneve/lieux",
  "/en/blog/geneva/this-week",
  "/fr/blog/geneve/cette-semaine",
  "/en/blog/geneva/this-weekend",
  "/fr/blog/geneve/ce-weekend",
  "/en/blog/geneva/events",
  "/fr/blog/geneve/evenements",
  "/en/blog/geneva/seasonal",
  "/fr/blog/geneve/saisonnier",
  "/en/blog/geneva/culture",
  "/fr/blog/geneve/culture",
  "/en/blog/geneva/family",
  "/fr/blog/geneve/famille",
  "/en/about",
  "/fr/a-propos",
  "/en/contact",
  "/fr/contact",
];

const dynamicRoutes = [
  ...slugs(events).map((s) => `/en/geneva/events/${s}`),
  ...slugs(venues).map((s) => `/en/geneva/venues/${s}`),
  ...slugs(blogGuides).map((s) => `/en/blog/geneva/guides/${s}`),
  ...slugs(blogVenues).map((s) => `/en/blog/geneva/venues/${s}`),
  ...slugs(blogThisWeek).map((s) => `/en/blog/geneva/this-week/${s}`),
  ...slugs(blogThisWeekend).map((s) => `/en/blog/geneva/this-weekend/${s}`),
  ...slugs(blogEvents).map((s) => `/en/blog/geneva/events/${s}`),
  ...slugs(blogSeasonal).map((s) => `/en/blog/geneva/seasonal/${s}`),
  ...slugs(blogCulture).map((s) => `/en/blog/geneva/culture/${s}`),
  ...slugs(blogFamily).map((s) => `/en/blog/geneva/family/${s}`),
  ...slugs(eventsFr).map((s) => `/fr/geneve/evenements/${s}`),
  ...slugs(venuesFr).map((s) => `/fr/geneve/lieux/${s}`),
  ...slugs(blogGuidesFr).map((s) => `/fr/blog/geneve/guides/${s}`),
  ...slugs(blogVenuesFr).map((s) => `/fr/blog/geneve/lieux/${s}`),
  ...slugs(blogThisWeekFr).map((s) => `/fr/blog/geneve/cette-semaine/${s}`),
  ...slugs(blogThisWeekendFr).map((s) => `/fr/blog/geneve/ce-weekend/${s}`),
  ...slugs(blogEventsFr).map((s) => `/fr/blog/geneve/evenements/${s}`),
  ...slugs(blogSeasonalFr).map((s) => `/fr/blog/geneve/saisonnier/${s}`),
  ...slugs(blogCultureFr).map((s) => `/fr/blog/geneve/culture/${s}`),
  ...slugs(blogFamilyFr).map((s) => `/fr/blog/geneve/famille/${s}`),
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

// ── Helpers ───────────────────────────────────────────────────────────────────

function stripGenericHead(template) {
  return template
    .replace(/<title>[^<]*<\/title>/i, "<!--TITLE-->")
    .replace(/<meta\s+name="description"[^>]*>/i, "<!--DESC-->")
    .replace(/<meta\s+property="og:(?!type)[^>]*>/gi, "")
    .replace(/<meta\s+name="twitter:[^>]*>/gi, "")
    .replace(/<meta\s+name="robots"[^>]*>/i, "")
    .replace(/<link\s+rel="canonical"[^>]*>/i, "")
    .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, "");
}

function injectSEO(template, seoHtml) {
  // Replace TITLE placeholder with all SEO tags, then remove the now-redundant
  // DESC placeholder.  They are on separate lines in the stripped template so
  // we must replace them independently rather than looking for a contiguous
  // "<!--TITLE--><!--DESC-->" token which would never match.
  return template
    .replace("<!--TITLE-->", seoHtml)
    .replace("<!--DESC-->", "");
}

function injectBody(template, bodyHtml) {
  return template.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
}

function setLangAttr(template, url) {
  const lang = url.startsWith("/fr") ? "fr" : "en";
  return template.replace(/(<html[^>]*lang=")[^"]*"/i, `$1${lang}"`);
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf-8");
}

// ── Main ──────────────────────────────────────────────────────────────────────

const template = fs.readFileSync(templatePath, "utf-8");
const cleanTemplate = stripGenericHead(template);

let rendered = 0;
let errors = 0;

console.log(`Prerendering ${allRoutes.length} routes (${staticRoutes.length} static + ${dynamicRoutes.length} dynamic)…`);

for (const route of allRoutes) {
  try {
    const { html: bodyHtml, seo } = renderFn(route);

    let page = cleanTemplate;
    page = setLangAttr(page, route);

    if (seo && renderSEOHead) {
      const seoHtml = renderSEOHead(seo);
      page = injectSEO(page, seoHtml);
    } else {
      page = page.replace("<!--TITLE-->", "").replace("<!--DESC-->", "");
    }

    page = injectBody(page, bodyHtml);

    const outputPath = path.join(distDir, route === "/" ? "index.html" : `${route}/index.html`);
    writeFile(outputPath, page);
    rendered++;
  } catch (err) {
    console.error(`  ✗ ${route}: ${err.message}`);
    errors++;
  }
}

console.log(`\nPrerender complete: ${rendered} pages rendered, ${errors} errors.`);
if (errors > 0) process.exit(1);
