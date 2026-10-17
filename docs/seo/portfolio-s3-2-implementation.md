# Portfolio S3.2 – technikai SEO implementáció

## Kiinduló állapot

- Repository: `ReforMan/Personal-Professional-Website`
- Munkabranch: `feature/portfolio-seo-technical-seo`
- S3.1 alapcommit: `6570dd03b1654283048f3c1da319a893331a16c1`
- Alkalmazás: Astro 7.4.0, statikus `dist/` kimenet
- Production merge és deployment nem történt.

Az S3.2 az S3.1 központi route registryjére épül. A 18 indexelhető URL, a nyelvi megfeleltetések, a head metaadatok és a sitemap ugyanazt a típussal ellenőrzött adatforrást használják.

## Megvalósított SEO-réteg

### Canonical és nyelvi megfeleltetés

- Mind a 18 oldal abszolút, önmagára mutató canonical URL-t kap.
- Minden oldal tartalmazza a teljes, kölcsönös `hu`, `en`, `de` hreflang klasztert.
- Az `x-default` az adott oldal magyar változatára mutat.
- A nyelvi hivatkozások teljes URL-ek, és a sitemapben is ugyanazok szerepelnek.

Ez követi a Google önmagára mutató canonicalra, teljes URL-ekre, önhivatkozást is tartalmazó kölcsönös hreflang klaszterre és opcionális `x-default` címre vonatkozó útmutatását:

- [Canonical URL-ek](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Lokalizált változatok és hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)

### Oldalszintű metaadatok

A közös Astro layout statikusan kiírja:

- az egyedi `title` és meta description értéket;
- az indexelési utasítást;
- a canonical és hreflang linkeket;
- az Open Graph title, description, URL, locale és 1200×630 képadatokat;
- a Twitter nagy képes kártya adatait;
- az oldalspecifikus JSON-LD dokumentumot.

### Strukturált adatok

A JSON-LD kizárólag a weboldalon ellenőrizhető tartalmat írja le:

- `WebSite` a domain magyar gyökéroldalán;
- `Person` a portfólió tulajdonosához;
- `WebPage`, `CollectionPage` vagy `ProfilePage` az oldaltípus szerint;
- öt `Service` a megoldások oldalon;
- három kiválasztott munka a projektek oldalon;
- `CreativeWork` a két MONA esettanulmányban.

A `WebSite` névjelölés a Google útmutatása szerint a domain gyökéroldalán szerepel: [WebSite structured data](https://developers.google.com/search/docs/appearance/site-names).

### Sitemap, robots és 404

- `src/pages/sitemap.xml.ts` statikus XML sitemapet generál pontosan 18 URL-lel és mindegyikhez négy nyelvi hivatkozással.
- `src/pages/robots.txt.ts` engedélyezi a feltérképezést és abszolút sitemap URL-t ad meg.
- A statikus endpointok az Astro build részeként készülnek: [Astro static file endpoints](https://docs.astro.build/en/guides/endpoints/).
- A 404 oldal `noindex, nofollow` értéket kap, canonical és hreflang nélkül.

### Szemantikus címsorok

A különálló Solutions, Projects és About oldalakon rejtett, akadálymentes H2 került a meglévő H3 elemek elé. Ez kijavítja a H1→H3 ugrást, vizuális változtatás nélkül.

## Fontos fájlok

- `site/src/data/seo.ts` – domain, locale-ok, alternatív URL-ek és strukturált adatok
- `site/src/layouts/BaseLayout.astro` – teljes közös SEO head
- `site/src/pages/sitemap.xml.ts` – sitemap generálás
- `site/src/pages/robots.txt.ts` – robots generálás
- `site/scripts/seo-qa.mjs` – automatizált, renderelt SEO QA
- `site/src/components/{Solutions,Projects,About}.astro` – helyes címsorhierarchia
- `site/src/pages/404.astro` – noindexelt hibakimenet

## Lokális parancsok

```text
cd site
npm ci
npm run check
npm run build
npm run preview
npm run qa:seo
```

## Hatókör

Az oldal szövegei, bizonyítékai, vizuális effektjei, navigációja és interakciói megmaradtak. Cloudflare-beállítás, production branch, deployment és külső rendszer nem módosult.
