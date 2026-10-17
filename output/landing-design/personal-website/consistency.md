# Consistency — personal-website ("Layered Blueprint")

Ellenőrizhető szabályok — mindegyik szám vagy fájlnév, nem ízlés.

## Spacing & grid
- Base unit: `8px`.
- Szekció-padding: mobil `64px`, tablet `96px`, desktop `140px` (a
  vizualis-minoseg.md 64–180px sávján belül, a "Layered Blueprint"
  légies, nem tömör hatásához a felső tartományhoz közelebb).
- Konténer: `1280px` (`layout.contentMax`), szerkesztett szövegoszlop
  (About, Enterprise foundation): `680px`.
- Grid: 12 oszlop desktopon, 4 tableten, 1 mobilon.

## Tipográfiai hierarchia (a vizualis-minoseg.md clamp-jei szerint)
- Hero H1: `clamp(2.75rem, 7vw, 6.5rem)`, `line-height: 0.98`,
  `letter-spacing: -0.03em`.
- H2 (szekció-címek): `clamp(2rem, 4vw, 3.5rem)`, `line-height: 1.05`,
  `letter-spacing: -0.02em`.
- H3 (kártya-címek, Approach-lépések): `clamp(1.25rem, 2vw, 1.75rem)`.
- Lead (proof strip szám, hero alcím): `clamp(1.125rem, 1.6vw, 1.5rem)`,
  `line-height: 1.5`, max 60 karakter/sor.
- Törzs: `1–1.125rem`, `line-height: 1.6`, max 70 karakter/sor.
- Eyebrow/kicker (minden szekció felett): `0.75rem`,
  `letter-spacing: 0.18em`, uppercase, 700.
- Két betűtípus: **Display** (geometrikus, karakteres — pl. Space
  Grotesk vagy General Sans variable) a H1/H2/kiemelt szavakhoz, **UI**
  (semleges, jól olvasható — pl. Inter variable) mindenhez másnak.
- Tipográfia-vezérelt hangsúly: a Hero H1-ben egy szó **outline/stroke**
  kontúrral (fill helyett `-webkit-text-stroke` + átlátszó fill), a
  Contact CTA záró-mondatában egy szó gold színnel.

## Radius-karakter: **Editorial**
- Kártya: `4–8px`. Gomb: `4px` (elsődleges tömör), kontúros gomb szintén
  `4px`. Kép: `0–4px`, de a képek nagyok (full-bleed vagy min. 60vh/40vw)
  — az éles sarok az architektúrális, nem organikus irányt erősíti.
- Árnyék-tokenek: `shadow.sm: 0 1px 2px rgba(15,15,15,.08)`,
  `shadow.lg: 0 24px 48px -12px rgba(15,15,15,.22)`.
- `backdrop-blur`: a ragadós navigáción (`backdrop-filter: blur(12px)` +
  félig átlátszó graphite háttér).

## Szín — 60/30/10
- **60% alap**: ivory/off-white (`#F7F4EE` világos szekciókban).
- **30% másodlagos**: graphite/charcoal (`#181A1D` körüli) — Hero,
  Approach (kötelező középső-harmad sötét szekció) és Contact CTA
  háttereként.
- **10% akcent**: champagne-gold (`#C9A24B` körüli tónus) — CTA-gombok,
  link-hover, a Hero kiemelt szó kontúrja, a koncentrikus vonal-motívum
  színezése.
- Sötét szekciók: Hero, Approach, Contact CTA. Világos: About, Proof
  strip, Solution cards, Selected work, Enterprise foundation, Footer
  (footer sötét, de vékony — nem számít "feature" dark szekciónak).
- Minden szöveg-háttér pár WCAG AA (4.5:1 törzs, 3:1 nagy szöveg) —
  a gold akcent sötét graphite alapon ellenőrzött kontraszttal, world
  szövegben csak nagy méretben vagy UI-elemen, sosem törzsszövegen.
- Finom gradient engedett: Hero WebGL háttér + a Contact CTA sávon egy
  2-tónusú graphite gradient (max 8% eltérés).

## Mozgás
- **Belépő reveal**: `opacity 0→1` + `translateY 20px`, `600ms`,
  `cubic-bezier(0.16, 1, 0.3, 1)`, listás elemeknél (Solution cards,
  Approach lépések) `70ms` stagger.
- **Hover**: `240ms`, `cubic-bezier(0.33, 1, 0.68, 1)` — gombon
  háttér/árnyék + 1-2px emelés, kártyán `translateY(-3px)` +
  `shadow.sm → shadow.lg`, képen `scale(1.03)` `500ms` alatt (lassabb,
  ld. vizualis-minoseg.md §10).
- **Signature effect**: a Hero háttér-vizuál (React Bits `silk`/`beams`)
  lassú, folyamatos fénymozgása + a koncentrikus vonal-motívum nagyon
  lassú (60s+ ciklusú) forgása az About szekcióban — ez az oldal EGY
  nagy, folyamatos effektje, máshol csak reveal + hover.
- Minden animáció `@media (prefers-reduced-motion: reduce)` alatt
  kikapcsol (a WebGL háttér statikus képre esik vissza).

## Named MCP-komponensek (min. 4, helyszínnel)
1. **React Bits `beams`** (vagy `silk`) — Hero háttér-vizuál, gold
   tónusra parametrizálva, lassú sebesség.
2. **Magic UI `bento-grid`** — Solution cards szekció (4 elem, egy
   domináns).
3. **Magic UI `magic-card`** — Selected work kártyák (spotlight hover a
   kurzor körül, gold tónusban).
4. **Magic UI `marquee`** — Contact CTA alatti, egyszínű, lassú
   kulcsszó-sáv a footer előtt.
5. **React Bits `scroll-reveal`** vagy Magic UI `blur-fade` — a Proof
   strip és az Approach-lépések belépő animációja.
- shadcn/ui: `button`, `input`, `label`, `textarea` a Contact CTA
  űrlapjához (funkcionális alap, nem számít bele a 4-be).

## Differenciáló irány (intelligence.md-ből)
Sötét/architektúrális alap + EGY meleg akcent (gold, nem pink), a
"forgó headline" energiájának statikus/tipó-vezérelt megfelelője
(kontúros kiemelt szó), a kurzor-szem helyett koncentrikus vonal-
motívum mint márka-aláírás, portfólió-kártya metaadat-oszloppal,
lépcsőzetes záró-tipó + egyszínű marquee, körkörös forgó "Download CV"
jelvény a footerben.

## Kereszt-ellenőrzés a vizualis-minoseg.md 12 pontjával
1. Hero ≥85vh, valódi WebGL effekt — ✅ (Hero art direction).
2. H1/törzs 4× ugrás — ✅ (`6.5rem` vs `1.125rem` ≈ 5.7×).
3. ≥2 rács-törő szekció — ✅ (Selected work full-bleed split, Approach
   átlapoló panel-sor).
4. ≥1 sötét szekció középen — ✅ (Approach, a középső harmadban).
5. Minden képhely kitöltve — ✅ (MONA embargó-placeholder is jelölve,
   nem üres doboz — ld. `HIANYZO-ADATOK.md`, amit a builder ír).
6. ≥2 árnyék-szint, konzisztens radius — ✅ (`shadow.sm`/`lg`, Editorial).
7. ≥4 MCP-komponens — ✅ (5 felsorolva fent).
8. Reveal + hover mindenen — ✅ (fenti Mozgás szakasz).
9. `prefers-reduced-motion` — ✅.
10. 375px, H1 ≤4 sor — a builder feladata ellenőrizni build közben.
