import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const base = 'http://127.0.0.1:4321';
const reference = 'http://127.0.0.1:4322';
const screenshots = 'C:/Users/User/.codex/visualizations/2026/10/16/01a143b8-537f-7043-8d02-66e1cb3cc6c2';
mkdirSync(screenshots, { recursive: true });
const groups = [
  ['/', '/en/', '/de/'],
  ['/megoldasok/', '/en/solutions/', '/de/leistungen/'],
  ['/projektek/', '/en/projects/', '/de/projekte/'],
  ['/rolam/', '/en/about/', '/de/ueber-mich/'],
  ['/projektek/mona-weboldal/', '/en/projects/mona-website/', '/de/projekte/mona-website/'],
  ['/projektek/mona-foglalasi-rendszer/', '/en/projects/mona-booking-system/', '/de/projekte/mona-buchungssystem/']
];
const languages = ['hu', 'en', 'de'];
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
let failures = [];
const internalLinks = new Set();
const check = (condition, message) => { if (!condition) failures.push(message); };

const noJs = await browser.newContext({ javascriptEnabled: false });
for (const group of groups) {
  for (let i = 0; i < 3; i++) {
    const path = group[i];
    const page = await noJs.newPage();
    const response = await page.goto(base + path);
    check(response?.status() === 200, `${path} HTTP ${response?.status()}`);
    check(await page.locator('html').getAttribute('lang') === languages[i], `${path} lang`);
    check(await page.locator('h1').count() === 1, `${path} H1 count`);
    check((await page.locator('main').innerText()).length > 250, `${path} no-JS text`);
    for (let j = 0; j < 3; j++) {
      check(await page.locator('.lang-switch a').nth(j).getAttribute('href') === group[j], `${path} language ${languages[j]}`);
    }
    (await page.locator('a[href^="/"]').evaluateAll((links) => links.map((link) => link.getAttribute('href')))).forEach((href) => internalLinks.add(href));
    await page.locator('main img').evaluateAll((images) => images.forEach((image) => { image.loading = 'eager'; }));
    await page.waitForTimeout(100);
    const brokenImages = await page.locator('main img').evaluateAll((images) => images.filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.src));
    check(brokenImages.length === 0, `${path} images: ${brokenImages}`);
    await page.close();
  }
}
for (const href of internalLinks) {
  const response = await noJs.request.get(base + href);
  check(response.status() === 200, `internal link ${href}: ${response.status()}`);
}
const notFound = await noJs.newPage();
check((await notFound.goto(base + '/unknown-path-qa/'))?.status() === 404, '404 status');
await notFound.close();
await noJs.close();

for (const width of [375, 768, 1280, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 850 }, reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(base + '/');
  await page.locator('img').evaluateAll((images) => images.forEach((image) => { image.loading = 'eager'; }));
  await page.waitForFunction(() => [...document.images].every((image) => image.complete));
  await page.screenshot({ path: join(screenshots, `s31-home-${width}.png`), fullPage: true });
  check(await page.locator('h1').isVisible(), `${width} heading visible`);
  check(await page.locator('.reveal').first().evaluate((element) => getComputedStyle(element).opacity === '1'), `${width} reduced-motion content visible`);
  const overflow = await page.evaluate(() => ({
    width: document.documentElement.scrollWidth,
    offenders: [...document.querySelectorAll('body *')].filter((element) => element.getBoundingClientRect().right > innerWidth + 2 && getComputedStyle(element).position !== 'absolute').slice(0, 6).map((element) => element.tagName + '.' + element.className)
  }));
  check(overflow.width <= width + 1, `${width} horizontal overflow ${JSON.stringify(overflow)}`);
  check(errors.length === 0, `${width} script errors: ${errors}`);
  if (width === 375) {
    await page.locator('#burgerBtn').click();
    check(await page.locator('#burgerBtn').getAttribute('aria-expanded') === 'true', 'mobile menu opens');
    check(await page.locator('#mobileMenu').isVisible(), 'mobile menu visible');
    await page.keyboard.press('Escape');
    check(await page.locator('#burgerBtn').getAttribute('aria-expanded') === 'false', 'mobile menu closes');
  }
  if (width === 1280) {
    await page.locator('.lang-switch a[lang="en"]').click();
    check(new URL(page.url()).pathname === '/en/', 'language navigation');
    await page.locator('#themeBtn').click();
    check(await page.locator('html').getAttribute('data-theme') === 'light', 'theme toggle');
    await page.locator('.car-btn.next').click();
    check(await page.locator('.carousel-track img.active').getAttribute('src') === '/photos/daily-verse-screenshot-hu.png', 'carousel next');
    check((await page.locator('#ctaMailLink').getAttribute('href')).startsWith('mailto:'), 'email CTA');
    await page.keyboard.press('Tab');
    check((await page.evaluate(() => document.activeElement?.tagName)) !== 'BODY', 'keyboard focus');
  }
  await page.close();
}
const baseline = await browser.newPage({ viewport: { width: 1280, height: 850 }, reducedMotion: 'reduce' });
await baseline.goto(reference + '/');
await baseline.locator('img').evaluateAll((images) => images.forEach((image) => { image.loading = 'eager'; }));
await baseline.waitForFunction(() => [...document.images].every((image) => image.complete));
await baseline.screenshot({ path: join(screenshots, 's31-reference-1280.png'), fullPage: true });
await baseline.close();
await browser.close();
console.log(JSON.stringify({ routes: 18, viewports: [375, 768, 1280, 1440], failures, screenshots }, null, 2));
if (failures.length) process.exitCode = 1;
