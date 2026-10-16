// One-time, reproducible migration from the approved HTML preview.
// The generated JSON is committed so the site build does not depend on output/.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';

const source = readFileSync(resolve('../output/landing-design/personal-website/deploy/index.html'), 'utf8');
const start = source.indexOf('var T = {') + 'var T = '.length;
const end = source.indexOf('\n  };', start) + 4;
if (start < 12 || end < start) throw new Error('Translation object not found');
const translations = vm.runInNewContext('(' + source.slice(start, end) + ')', {});
const english = {};
for (const match of source.matchAll(/<([a-z][a-z0-9]*)\b([^>]*\bdata-i18n(?:-html)?="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/gi)) {
  english[match[3]] = match[4].replace(/<[^>]*>/g, '').replaceAll('&amp;', '&').trim();
}
for (const match of source.matchAll(/<[^>]*\bdata-i18n-aria="([^"]+)"[^>]*\baria-label="([^"]+)"[^>]*>/g)) english[match[1]] = match[2];
english['hero-h1'] = 'Practical solutions, built with purpose.';
translations.en = english;
writeFileSync(resolve('src/data/translations.json'), JSON.stringify(translations, null, 2) + '\n');
console.log(Object.fromEntries(Object.entries(translations).map(([language, values]) => [language, Object.keys(values).length])));
