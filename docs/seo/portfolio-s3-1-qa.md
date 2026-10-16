# S3.1 — QA

## Környezet

2026-10-16, Windows, Node.js 24.18.0, npm 11.16.0, Astro 7.4.0, Google Chrome 155.0.8059.41. Az Astro `preview` a `127.0.0.1:4321`, a változatlan eredeti HTML a `127.0.0.1:4322` címen futott. A Browser plugin nem volt elérhető, ezért a Playwright 1.64.1 helyi Chrome-ot vezérelt. Production környezet nem volt tesztelve.

## Eredmények

| Ellenőrzés | Állapot | Bizonyíték |
|---|---|---|
| Base commit és feature ág | PASS | Az origin/base SHA egyezett; az új ág a `2fc0422…` commitból indult |
| `npm ci` | PASS | Lockfile alapján 269 csomag települt; 0 audit sérülékenység |
| `npm run check` | PASS | 15 Astro/TS fájl; 0 hiba, 0 figyelmeztetés |
| `npm run build` | PASS | 18 indexelhető útvonal + `404.html` |
| 18 URL, HTML `lang`, egy H1, JS nélküli tartalom | PASS | `node scripts/qa.mjs` |
| Nyelvváltó célok, belső linkek, képek, 404-válasz | PASS | `node scripts/qa.mjs` |
| 375 / 768 / 1280 / 1440 px, látható tartalom és vízszintes overflow | PASS | Playwright; 0 hibás eset |
| Mobilmenü, Escape, nyelvváltás, téma, galéria, e-mail CTA, billentyűfókusz | PASS | Playwright interakciós teszt |
| Kurzor-, hero-, profilkártya-, számláló-, marquee- és scroll-progress effektek | PASS | Playwright interakciós és állapotellenőrzés |
| Reduced motion | PASS | A reveal tartalom látható; a hero, kurzor és marquee animációk leállnak |
| Chrome konzol futási hibák | PASS | A vizsgált viewportokon 0 `pageerror` |
| Más böngészők, képernyőolvasó, éles Cloudflare | NOT TESTED | Külön QA-kör szükséges |
| SEO canonical/hreflang/sitemap/JSON-LD QA | NOT TESTED | S3.2 hatókör |

## A 18 előírt útvonal

| Oldal | HU | EN | DE | Állapot |
|---|---|---|---|---|
| Home | `/` | `/en/` | `/de/` | PASS |
| Solutions | `/megoldasok/` | `/en/solutions/` | `/de/leistungen/` | PASS |
| Projects | `/projektek/` | `/en/projects/` | `/de/projekte/` | PASS |
| About | `/rolam/` | `/en/about/` | `/de/ueber-mich/` | PASS |
| MONA Website | `/projektek/mona-weboldal/` | `/en/projects/mona-website/` | `/de/projekte/mona-website/` | PASS |
| MONA Booking | `/projektek/mona-foglalasi-rendszer/` | `/en/projects/mona-booking-system/` | `/de/projekte/mona-buchungssystem/` | PASS |

## Vizuális összehasonlítás

Az eredeti HTML és az új magyar kezdőlap 1280 px-es, teljes oldalas Playwright képernyőképe készült. A képek a repón kívül találhatók: `C:/Users/User/.codex/visualizations/2026/10/16/01a143b8-537f-7043-8d02-66e1cb3cc6c2/s31-reference-1280.png` és `s31-home-1280.png`; az új oldalról 375, 768 és 1440 px-es kép is készült. Az effekt-ellenőrzés külön `s31-effects-hero-1280.png` és `s31-effects-profile-1280.png` képet készített. A fő színek, tipográfia, elrendezési ritmus, munkakártyák, képek, portré és mozgásnyelv megtartották az eredeti vizuális irányt. A statikus oldalakon a tartalom oldalanként rövidebb és célzottabb.

Az új Astro-oldalon ellenőrizve működik az animált hero-vonalrendszer, a kurzorfény, a kurzort követő márkajel, a profilkártya tilt és holografikus kapcsolója, a CTA- és footer-marquee, a számláló, a képkarusszel, a reveal és a scroll-progress gomb. A hero körmotívum SVG-je egyszerűbb szerkezetű, de a látható körök és az animált canvas-háttér jelen vannak.

**Blokkoló hibák:** a végső lokális QA-ban nem maradtak. A tulajdonos megerősítette, hogy a dokumentált MONA-funkciókat az alkalmazásban tesztelték, és valós időben működnek. A production deployment, merge és éles ellenőrzés szándékosan nem történt meg.
