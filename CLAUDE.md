# CLAUDE.md — Personal Professional Website

## A projekt

Zoltan Botos személyes szakmai portfólió weboldala. Pozicionálás:
"AI-Assisted Digital Solutions for Real Business Needs" — 12+ év
enterprise IT support / service operations / application coordination
tapasztalat, ma gyakorlati AI-assisted megoldás-implementáció fókusszal:
weboldalak, booking workflow-k, belső eszközök. NEM pozicionáljuk Senior
Software Engineernek, AI Engineernek, ML Engineernek, sem full ügynökségnek.
Junior/kezdő hangnem tilos.

## A kliens és a célcsoport

- Kliens: Zoltan Botos maga — saját szakmai portfólió, nem külsős megbízás.
- Célcsoport: fragmentált manuális workflow-kkal küzdő cégvezetők;
  kis csapat/ops vezetők, akiknek belső eszköz kell; recruiterek/hiring
  managerek; potenciális együttműködő partnerek.
- A projekt üzleti célja: kvalifikált projekt-beszélgetés indítása a
  kontakt űrlapon (név, cég, email, mit szeretnének javítani, időkeret).

## Site struktúra

Egyoldalas site, horgonyzott navigációval — Home, Solutions, Work,
Approach, About, Contact.

Szekciók:
- Hero
- Proof strip: 12+ Years Enterprise IT / AI-Assisted Delivery /
  Practical Digital Solutions
- Négy solution card: business websites; booking/customer workflows;
  internal tools/ops apps; solution scope & implementation support
- Selected work:
  - MONA Wedding Dress Salon — végső finomításban, MÉG NEM publikus,
    semmilyen érzékeny adat/screenshot nem kerülhet fel
  - Daily Verse — élesben: https://daily-verse-ten.vercel.app/
- Négylépéses working approach: Understand the context / Define the
  solution / Design and build / Test and refine
- Enterprise foundation szekció
- Contact CTA
- Minimál footer: LinkedIn, email, CV placeholder

## Vizuális irány

Prémium, modern, architektúrális (nem sci-fi). Közel-fekete
graphite/charcoal alap, meleg sand/champagne-gold/ivory akcentusok.
TILOS: corporate blue, neon cyberpunk, robotok/AI-agyak/code rain/
generikus áramköri minták/stock fotók. Absztrakt rétegzett síkok,
finom perspektíva-vonalak, visszafogott fénymozgás. Visszafogott
animáció, `prefers-reduced-motion` tiszteletben tartása.

## Tech stack és workflow

- Build: Cursor + Claude Code
- Frontend: React, TypeScript, Vite, Tailwind CSS, Framer Motion
- V1: nincs backend/CMS — strukturált lokális adat
- Teljesen reszponzív, mobile-first, akadálymentes (szemantikus HTML,
  billentyű-navigáció, focus state-ek, kontraszt), erős SEO metaadatok
- Deploy: Vercel (konzisztensen a másik projekttel, Daily Verse-zel)

## Működési szabályok

1. Kérdezz vissza, mielőtt módosítasz — ne találgass.
2. Kis lépésekben dolgozz: kódolás előtt mindig rövid implementációs terv,
   jóváhagyás után kód.
3. Konkrét fájlokra hivatkozz, és ne nyúlj máshoz, csak amit a feladat kér.
4. Best practices, production grade minőség — skálázható és időtálló.
5. Minden működő állapot után commit.
6. A briefek a knowledge-base/briefs/ inboxba érkeznek; minden projekt
   saját mappát kap (knowledge-base/briefs/<projekt-slug>/), az outputok
   pedig /output/<fázis>/<projekt-slug>/ alá. Onnan dolgozz. Ennek a
   projektnek a slugja: `personal-website`. Ez a standard workflow a
   jövőbeli kliens-munkákhoz is — akkor is tartsd meg, ha jelenleg csak
   egy projekt van a rendszerben.

## Amit kerülj

- Ne találj ki fake testimonialt, logót vagy metrikát.
- A MONA projekt adatai bizalmasak, amíg más utasítást nem kapsz —
  semmilyen részlet, screenshot vagy érzékeny adat nem kerülhet be a
  kódba vagy a publikus tartalomba.
- Ne pozicionáld Zoltant Senior Software Engineerként, AI/ML Engineerként
  vagy ügynökségként; kerüld a junior/kezdő hangnemet.
- Ne bővítsd a scope-ot kérés nélkül.
