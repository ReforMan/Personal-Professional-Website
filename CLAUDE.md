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
- Selected work (3 elem, külön kártyaként — nem egy projekt, hiába
  kapcsolódnak össze):
  - MONA Wedding Dress Salon — weboldal, végső finomításban, MÉG NEM
    publikus, semmilyen érzékeny adat/screenshot nem kerülhet fel
  - MONA foglalási rendszer (reservation app) — funkcionálisan külön
    projekt, előbb készült el, mint a weboldal, utólag lett összekötve
    vele. MÉG NEM publikus: hiányos a feltöltött tartalom (csak pár
    ruha van fent), és a design is felülvizsgálatra szorulhat. Ugyanúgy
    embargó-placeholderként kezelendő, mint a weboldal — semmilyen
    screenshot/részlet nem mehet ki. Külön esettanulmányként azért
    hasznos, mert önmagában is eladható szolgáltatás (van kliens, akinek
    csak foglalási rendszer kell, weboldal nélkül) — a "booking/customer
    workflows" szolgáltatás-kategóriát bizonyítja, míg a weboldal a
    "business websites" kategóriát.
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

**Egy explicit kivétel a tiltólista alól**: egy kicsi, visszafogott,
absztrakt szem-jel (kör + két "szem", ami finoman a kurzor felé mozdul)
a nav-logó/márka-jel szerepében engedélyezett — a designer megnézte
élőben, és nem a tiltott "robot/AI-agy" kategóriának minősítette
(statikus, nem giccses, nem hero-központi). Ld.
output/landing-design/personal-website/components-shortlist.md
részletekért. Ez NEM nyitja meg az utat más robot/AI-ikonográfiának —
kifejezetten csak erre az egy, jóváhagyott elemre vonatkozik.

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
- **Nyelvváltó**: EN / HU / DE, nav-ban egy high-tech ikonos (nem zászló)
  switch. Alapértelmezett nyelv: HU (a designer explicit döntése) — angol
  és német választható.
  A teljes, végleges fordítás a copywriter-fázis feladata minden
  szekcióra — demo/preview célra részleges fordítás elfogadható, éles
  oldalra nem.
- **Világos/sötét mód váltó**: a látogató válthat a két módban a nav-ban.
  A szekció-szintű szín-ritmus (Hero/Approach/Contact sötét sáv,
  Solutions/Work/Foundation világos) marad tervezési elemként mindkét
  módban — dark módban a világos szekciók alap-tónusa vált sötétre,
  nem az egész oldal invertálódik egyszerűen.

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
