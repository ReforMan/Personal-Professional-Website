# Portfolio S3.2 – QA-jegyzőkönyv

## Környezet

- Dátum: 2026-10-16
- Operációs rendszer: Windows
- Node.js: 24.18.0
- Astro: 7.4.0
- Böngészőmotor: telepített Google Chrome, Playwright vezérléssel
- Vizsgált kimenet: helyi Astro production preview a statikusan generált `site/dist/` könyvtárból
- JavaScript nélküli oldalvizsgálat: bekapcsolva a SEO-ellenőrzésnél

## Automatizált eredmények

| Ellenőrzés | Eredmény | Bizonyíték |
|---|---|---|
| Lockfile alapú `npm ci` | PASS | 269 csomag telepítve, 0 ismert sérülékenység |
| Astro/TypeScript check | PASS | 19 fájl, 0 hiba, 0 figyelmeztetés |
| Statikus production build | PASS | 19 oldal: 18 indexelhető oldal és `404.html`; plusz sitemap és robots |
| Elvárt lokalizált oldalak | PASS | 18/18 HTTP 200 |
| HTML nyelv | PASS | 18/18 megfelel a HU/EN/DE útvonalnak |
| Title és description | PASS | 18/18 jelen van |
| Canonical | PASS | 18/18 egyedi, abszolút és önmagára mutat |
| Hreflang | PASS | 6/6 klaszter kölcsönös HU/EN/DE és `x-default` |
| Indexelési meta | PASS | 18/18 `index, follow, max-image-preview:large` |
| Open Graph és Twitter | PASS | 18/18 teljes alapmezők és abszolút kép-URL |
| JSON-LD | PASS | 18/18 érvényes JSON és megfelelő oldaltípus |
| Sitemap | PASS | 18 egyedi URL, teljes alternatív nyelvi megfeleltetés |
| robots.txt | PASS | feltérképezés engedélyezve, sitemap megadva |
| 404 | PASS | HTTP 404, `noindex, nofollow`, canonical nélkül |
| Egy H1 és címsorhierarchia | PASS | 18/18, nincs szintátugrás |

Az `npm run qa:seo` eredménye:

```json
{
  "status": "passed",
  "checks": {
    "localizedPages": 18,
    "languageClusters": 6,
    "canonicalLinks": 18,
    "structuredDataDocuments": 18,
    "sitemapUrls": 18,
    "robots": 1,
    "notFound": 1
  }
}
```

## Funkcionális és vizuális regresszió

A meglévő `site/scripts/qa.mjs` szintén PASS eredménnyel futott:

- viewportok: 375, 768, 1280 és 1440 px;
- navigáció és mobilmenü;
- HU→EN nyelvváltás;
- világos/sötét mód;
- Daily Verse képgaléria;
- email CTA;
- billentyűzetes fókusz;
- reduced-motion viselkedés;
- hero, kurzorfény, szemmozgás, marquee, profilkártya tilt és holo effekt;
- belső linkek és képek;
- JavaScript nélküli tartalom;
- vízszintes túlcsordulás és kliensoldali hibák.

Eredmény: `failures: []`. A 375 és 1280 px teljes oldalas képek, valamint az effekt- és profilkártya-képek kézi átnézésekor elcsúszás, levágott tartalom vagy új vizuális regresszió nem látszott.

## Ismert korlátok

- A teszt helyi production buildet vizsgált; production deployment és élő domain ellenőrzés nem történt.
- Külső keresőmotor általi újrafeltérképezés és rich result megjelenés csak publikálás után ellenőrizhető.

## Hibák

- Blokkoló hiba: nincs.
- Nem blokkoló, ismert regresszió: nincs.
