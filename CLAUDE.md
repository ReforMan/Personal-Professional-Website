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

Prémium, modern — de MEG NEM visszafogott vagy diszkrét. A designer
kifejezetten unalmasnak/vaníliásnak/kockának minősítette a túl visszafogott
első irányt: merész, magabiztos, energikus, futurisztikus/high-tech vizuál
kell, ami nemzetközi közönség előtt is üt (a cél nemzetközi kliens-kör,
nem csak helyi). Telített színek, erős kontraszt, kifejező mozgás/animáció
mind mehet — a "kevesebb szín, lassabb mozgás" alapállás itt NEM érvényes,
ezt a designer explicit felülírta.

Egyetlen kőbe vésett tiltólista van (ezek klisék, nem energia-kérdés):
corporate blue, neon cyberpunk, robotok/AI-agyak/code rain/generikus
áramköri minták, stock fotók. Fake testimonial/logó/metrika sem kitalálható
(ld. "Amit kerülj").

Kötelező marad — ez nem stílus, hanem akadálymentességi alapkövetelmény:
minden animáció leáll `@media (prefers-reduced-motion: reduce)` alatt,
akármilyen energikus egyébként a mozgásnyelv.

A konkrét paletta/tipó/formanyelv a landing-design fázisban dől el
(ld. output/landing-design/personal-website/) — ott A és B irány is
készült, jóváhagyásra vár.

## Tech stack és workflow

- Build: Cursor + Claude Code
- Frontend: React, TypeScript, Vite, Tailwind CSS, Framer Motion
- V1: nincs backend/CMS — strukturált lokális adat
- Teljesen reszponzív, mobile-first, akadálymentes (szemantikus HTML,
  billentyű-navigáció, focus state-ek, kontraszt), erős SEO metaadatok
- Deploy: Cloudflare Pages (main = éles, dev = fejlesztés)

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
