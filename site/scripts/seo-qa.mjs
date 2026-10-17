import { chromium } from '@playwright/test';

const base = process.env.BASE_URL || 'http://127.0.0.1:4321';
const origin = 'https://zoltanbotos.com';
const languages = ['hu', 'en', 'de'];
const groups = [
  ['/', '/en/', '/de/'],
  ['/megoldasok/', '/en/solutions/', '/de/leistungen/'],
  ['/projektek/', '/en/projects/', '/de/projekte/'],
  ['/rolam/', '/en/about/', '/de/ueber-mich/'],
  ['/projektek/mona-weboldal/', '/en/projects/mona-website/', '/de/projekte/mona-website/'],
  ['/projektek/mona-foglalasi-rendszer/', '/en/projects/mona-booking-system/', '/de/projekte/mona-buchungssystem/']
];
const allPaths = groups.flat();
const absolute = (path) => new URL(path, origin).href;
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const expectedPageType = (path) => {
  if (['/rolam/', '/en/about/', '/de/ueber-mich/'].includes(path)) return 'ProfilePage';
  if (groups[1].includes(path) || groups[2].includes(path)) return 'CollectionPage';
  return 'WebPage';
};

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
});

try {
  const context = await browser.newContext({ javascriptEnabled: false });

  for (const group of groups) {
    for (let index = 0; index < group.length; index += 1) {
      const path = group[index];
      const page = await context.newPage();
      const response = await page.goto(base + path, { waitUntil: 'domcontentloaded' });
      check(response?.status() === 200, `${path}: expected HTTP 200, got ${response?.status()}`);
      check(await page.locator('html').getAttribute('lang') === languages[index], `${path}: incorrect html lang`);
      check((await page.title()).trim().length > 0, `${path}: missing title`);
      check((await page.locator('meta[name="description"]').getAttribute('content'))?.trim().length > 0, `${path}: missing description`);
      check(await page.locator('meta[name="robots"]').getAttribute('content') === 'index, follow, max-image-preview:large', `${path}: incorrect robots meta`);

      check(await page.locator('link[rel="canonical"]').count() === 1, `${path}: canonical count`);
      check(await page.locator('link[rel="canonical"]').getAttribute('href') === absolute(path), `${path}: canonical target`);

      const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) => Object.fromEntries(
        links.map((link) => [link.getAttribute('hreflang'), link.getAttribute('href')])
      ));
      check(Object.keys(alternates).length === 4, `${path}: alternate count`);
      languages.forEach((language, languageIndex) => check(alternates[language] === absolute(group[languageIndex]), `${path}: ${language} alternate`));
      check(alternates['x-default'] === absolute(group[0]), `${path}: x-default alternate`);

      const socialChecks = {
        'meta[property="og:title"]': await page.title(),
        'meta[property="og:description"]': await page.locator('meta[name="description"]').getAttribute('content'),
        'meta[property="og:url"]': absolute(path),
        'meta[property="og:image"]': absolute('/photos/og-zoltan-botos.jpg'),
        'meta[name="twitter:card"]': 'summary_large_image',
        'meta[name="twitter:title"]': await page.title(),
        'meta[name="twitter:description"]': await page.locator('meta[name="description"]').getAttribute('content'),
        'meta[name="twitter:image"]': absolute('/photos/og-zoltan-botos.jpg')
      };
      for (const [selector, expected] of Object.entries(socialChecks)) {
        check(await page.locator(selector).getAttribute('content') === expected, `${path}: ${selector}`);
      }

      check(await page.locator('h1').count() === 1, `${path}: expected exactly one H1`);
      const headingLevels = await page.locator('h1,h2,h3,h4,h5,h6').evaluateAll((headings) => headings.map((heading) => Number(heading.tagName.slice(1))));
      check(headingLevels.every((level, headingIndex) => headingIndex === 0 || level <= headingLevels[headingIndex - 1] + 1), `${path}: heading level skip ${headingLevels.join(',')}`);

      check(await page.locator('script[type="application/ld+json"]').count() === 1, `${path}: JSON-LD count`);
      const jsonText = await page.locator('script[type="application/ld+json"]').textContent();
      let data;
      try {
        data = JSON.parse(jsonText || '');
      } catch (error) {
        failures.push(`${path}: invalid JSON-LD (${error.message})`);
      }
      if (data) {
        check(data['@context'] === 'https://schema.org', `${path}: JSON-LD context`);
        check(Array.isArray(data['@graph']), `${path}: JSON-LD graph`);
        const pageNode = data['@graph']?.find((node) => node['@id'] === `${absolute(path)}#webpage`);
        check(Boolean(pageNode), `${path}: page node`);
        check(pageNode?.url === absolute(path), `${path}: page node URL`);
        check(pageNode?.['@type'] === expectedPageType(path), `${path}: page node type`);
        check(data['@graph']?.some((node) => node['@type'] === 'Person'), `${path}: Person node`);
        if (path === '/') check(data['@graph']?.some((node) => node['@type'] === 'WebSite'), `${path}: WebSite node`);
        if (groups[1].includes(path)) check(pageNode?.mainEntity?.numberOfItems === 5, `${path}: five services`);
        if (groups[2].includes(path)) check(pageNode?.mainEntity?.numberOfItems === 3, `${path}: three projects`);
        if (groups[4].includes(path) || groups[5].includes(path)) check(pageNode?.mainEntity?.['@type'] === 'CreativeWork', `${path}: CreativeWork case study`);
      }
      await page.close();
    }
  }

  const sitemapResponse = await context.request.get(`${base}/sitemap.xml`);
  check(sitemapResponse.status() === 200, `sitemap: HTTP ${sitemapResponse.status()}`);
  check((sitemapResponse.headers()['content-type'] || '').includes('xml'), 'sitemap: content type');
  const sitemap = await sitemapResponse.text();
  const urlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
  check(urlBlocks.length === 18, `sitemap: expected 18 URLs, got ${urlBlocks.length}`);
  const sitemapLocations = urlBlocks.map((block) => block.match(/<loc>(.*?)<\/loc>/)?.[1]);
  check(new Set(sitemapLocations).size === 18, 'sitemap: duplicate URLs');
  check(allPaths.every((path) => sitemapLocations.includes(absolute(path))), 'sitemap: URL set differs from route registry');
  for (const block of urlBlocks) {
    const location = block.match(/<loc>(.*?)<\/loc>/)?.[1];
    const path = new URL(location).pathname;
    const group = groups.find((candidate) => candidate.includes(path));
    const alternateMatches = [...block.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)];
    const alternates = Object.fromEntries(alternateMatches.map((match) => [match[1], match[2].replaceAll('&amp;', '&')]));
    check(alternateMatches.length === 4, `sitemap ${path}: alternate count`);
    languages.forEach((language, index) => check(alternates[language] === absolute(group[index]), `sitemap ${path}: ${language} alternate`));
    check(alternates['x-default'] === absolute(group[0]), `sitemap ${path}: x-default alternate`);
  }

  const robotsResponse = await context.request.get(`${base}/robots.txt`);
  const robots = await robotsResponse.text();
  check(robotsResponse.status() === 200, `robots: HTTP ${robotsResponse.status()}`);
  check((robotsResponse.headers()['content-type'] || '').includes('text/plain'), 'robots: content type');
  check(/^User-agent: \*$/m.test(robots), 'robots: User-agent');
  check(/^Allow: \/$/m.test(robots), 'robots: Allow');
  check(/^Sitemap: https:\/\/zoltanbotos\.com\/sitemap\.xml$/m.test(robots), 'robots: sitemap URL');

  const notFound = await context.newPage();
  const notFoundResponse = await notFound.goto(`${base}/seo-qa-not-found/`);
  check(notFoundResponse?.status() === 404, `404: HTTP ${notFoundResponse?.status()}`);
  check((await notFound.locator('meta[name="robots"]').getAttribute('content')) === 'noindex, nofollow', '404: robots meta');
  check(await notFound.locator('link[rel="canonical"]').count() === 0, '404: canonical must be absent');
  await notFound.close();
  await context.close();
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(JSON.stringify({ status: 'failed', checks: { localizedPages: 18, sitemapUrls: 18 }, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'passed',
  checks: {
    localizedPages: 18,
    languageClusters: 6,
    canonicalLinks: 18,
    structuredDataDocuments: 18,
    sitemapUrls: 18,
    robots: 1,
    notFound: 1
  }
}, null, 2));
