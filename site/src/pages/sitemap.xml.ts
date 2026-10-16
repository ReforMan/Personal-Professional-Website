import type { APIRoute } from 'astro';
import { languages, paths, routes } from '../data/routes';
import { absoluteUrl, DEFAULT_LANGUAGE } from '../data/seo';

const escapeXml = (value: string): string => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = () => {
  const entries = routes.map((route) => {
    const alternates = [
      ...languages.map((language) => ({ language, href: absoluteUrl(paths[route.id][language]) })),
      { language: 'x-default', href: absoluteUrl(paths[route.id][DEFAULT_LANGUAGE]) }
    ];
    const links = alternates
      .map(({ language, href }) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${escapeXml(href)}" />`)
      .join('\n');
    return `  <url>\n    <loc>${escapeXml(absoluteUrl(route.path))}</loc>\n${links}\n  </url>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
