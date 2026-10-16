# S3.1 — Astro SSG implementáció

## Kiindulás

- Repository: `ReforMan/Personal-Professional-Website`, origin: `https://github.com/ReforMan/Personal-Professional-Website.git`.
- Base ág: `claude/portfolio-website-setup-9w7tcr`; ellenőrzött HEAD: `2fc0422b1086191044cda477213e14e06f85e063`. A GitHub összehasonlítás `identical` eredményt adott.
- Feature ág: `feature/portfolio-seo-astro-ssg`, a fenti commitból.
- UI-forrás: `output/landing-design/personal-website/deploy/index.html`. Az eredeti `output/` nem módosult.

## Architektúra

A `site/` önálló Astro 7.4.0 projekt, explicit `output: 'static'` beállítással. A `site/src/data/routes.ts` a hat oldalazonosító és három nyelv URL-megfeleltetésének egyetlen forrása. A típusos route rekord az oldalazonosítót, nyelvet, elérési utat, oldaltípust, title-t, descriptiont és tartalmi felülvizsgálati státuszt tartalmazza. Az `index.astro` a magyar kezdőlapot, a `[...slug].astro` a további 17 oldalt generálja; a `404.astro` külön `404.html` állományt ad.

A közös `BaseLayout.astro` készíti a fejlécet, a valódi linkekből álló nyelvváltót, a mobilmenüt, az e-mailes kapcsolat CTA-t és a footert. A `PageContent.astro` és a `Solutions`, `Projects`, `About` komponensek az oldaltípusokhoz tartozó részeket osztják meg. A tartalom és a megfelelő `<html lang>` már a szerver által adott statikus HTML-ben szerepel. A `t()` hiányzó fordításnál build-hibát dob; nincs más nyelvű fallback vagy automatikus nyelvi átirányítás.

## Fájlok

| Hely | Szerep |
|---|---|
| `site/src/data/routes.ts` | Típusos route registry és oldalspecifikus SEO metaadatok |
| `site/src/data/translations.json`, `i18n.ts` | Az ellenőrzött HTML-ből átvett HU/EN/DE szöveg és szigorú lekérés |
| `site/src/layouts/`, `site/src/components/`, `site/src/pages/` | Közös Astro megjelenítés, 18 oldal, 404 |
| `site/src/styles/legacy.css`, `site/src/styles/site.css` | Az eredeti arculati CSS és célzott többoldalas kiegészítések |
| `site/public/photos/`, favicon fájlok | Az eredeti, már megtisztított képek és ikonok abszolút URL-eken |
| `site/public/site.js` | Mobilmenü, témaváltás, galéria, CTA-választás, reveal és vissza a tetejére |
| `site/scripts/import-translations.mjs` | Egyszeri, újrafuttatható tartalommigráció az eredeti HTML-ből |
| `site/scripts/qa.mjs` | Statikus és böngészős QA |
| `site/package.json`, `package-lock.json` | Rögzített függőségek és reprodukálható npm telepítés |

## Megőrzött és módosult működés

Megmaradt a sötét/világos téma, a mobilmenü, a képgaléria, a reduced-motion támogatás, a referenciafotók, a MONA és Daily Verse munkák, az enterprise tapasztalat és a képzések, valamint a `mailto:` kapcsolatfelvétel. A MONA belső adminisztrációs címe nem szerepel az új oldalon. A referenciák önálló URL-eket kaptak, a képek `/photos/…` útvonalat használnak. A nyelvváltás JavaScript-gomb helyett oldalpárok közötti HTML-link.

A kezdőlap meglévő fő vizuális ritmusa és színei megmaradtak. A régi kurzorfény, a hero canvas effekt, a holografikus kártyakapcsoló és a footer marquee nem került át; a reveal animáció és a galéria működik. Ez tudatosan rögzített vizuális eltérés, nem állítjuk a teljes vizuális azonosságot.

## Tartalmi bizonyíték és S3.2

Az esettanulmányok kizárólag a meglévő HTML és a `CLAUDE.md` állításait használják. A MONA-oldalak `content-review-needed` jelzést kapnak a route adatmodellben: a problémaleírás és a működés dokumentált, de a publikálás előtti tartalmi és bizonyítékellenőrzés külön feladat. Új eredménymetrikát nem adtunk hozzá.

Az S3.2 feladata a canonical és hreflang címkék tényleges generálása és validálása, a sitemap, a robots-szabályok, a JSON-LD bővítése, a metaadatok szerkesztői ellenőrzése és az automatizált SEO QA. Az S3.1 route registry és metaadatmodell ezekhez előkészített, de a teljes technikai SEO nincs kész.

## Helyi futtatás és Cloudflare Pages

```sh
cd site
npm ci
npm run check
npm run build
npm run preview
```

A kimenet `site/dist/`; a későbbi Pages beállítás: root `site`, build command `npm run build`, output `dist`. Az [Astro konfigurációs dokumentáció](https://docs.astro.build/en/reference/configuration-reference/) szerint a `static` kimenet alapértelmezetten előállítja a HTML-t, a [Cloudflare Pages útmutató](https://docs.astro.build/en/guides/deploy/cloudflare/) pedig az Astro presethez `npm run build` és `dist` értéket ad meg. Deployment és Cloudflare-konfigurációs változtatás nem történt.
