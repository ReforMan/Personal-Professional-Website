# Tokens notes — personal-website

- **color.brand / surface**: graphite900/700 (sötét) + ivory100/200
  (világos) pár, a consistency.md 60/30/10 felosztásából. A gold500 a
  10%-os akcent (CTA, hover, kiemelt szó, vonal-motívum).
- **color.text**: onDark/onLight a két alap-felület törzsszövegéhez;
  `accent` (gold) csak nagy méretben vagy UI-elemen használható —
  ivory háttéren a gold kontrasztja csak 2.17:1, ott NEM mehet
  törzsszövegbe, csak grafikai elemként (vonal, ikon, keret).
- **Kiszámolt WCAG kontraszt-arányok** (python, sRGB relatív
  luminancia alapján, nem becsült):
  - ivory bg / onLight text: **15.72:1** (AA törzsre bőven felette)
  - graphite900 bg / onDark text: **16.35:1**
  - graphite700 bg / onDark text: **14.58:1**
  - graphite900 bg / gold500 (nagy szöveg/UI): **7.52:1** — AA large
    (3:1) és AA normal (4.5:1) is teljesül, sötét alapon a gold
    törzsszövegben is használható.
  - ivory bg / gold500 (nagy szöveg/UI): **2.17:1** — NEM felel meg
    AA-nak, ezért ivory alapon gold csak dekoratív/grafikai elemként
    (vonal-motívum, ikon-körvonal), soha nem szövegként.
  - graphite900 bg / onDarkMuted: **6.67:1** — megfelel törzsre is.
  - ivory bg / onLightMuted: **5.35:1** — megfelel törzsre is.
- **font**: Space Grotesk (display, geometrikus, karakteres — illik az
  "architektúrális" irányhoz) + Inter (body, semleges, jól olvasható
  variable font). Két betűtípus, a vizualis-minoseg.md §1 szabálya
  szerint.
- **type**: a h1 (6.5rem max) és a body (1.0625rem) között ~5.9× ugrás
  — teljesíti a kötelező min. 4×-et.
- **radius/shadow**: Editorial karakter (consistency.md döntése) —
  4–8px kártya, 4px gomb, éles képsarok, de nagy/full-bleed képekkel
  kompenzálva. Két árnyék-szint ténylegesen definiálva.
- **motion**: revealEasing a vizualis-minoseg.md §1 ajánlott görbéje;
  a hover külön, lassabban kifutó görbét kapott (§10 szabálya: a
  belépő-görbe hoveren "rántósnak" hatna).
- **layout**: contentMax 1280px, textMax 680px — az About és Enterprise
  foundation szekció szövegoszlopának felel meg (plan.md).
- **image**: hero 21/9 (a WebGL háttér nem klasszikus fotó, de az arány-
  token a fallback statikus képhez kell, `prefers-reduced-motion`
  esetére).
- Nincs árva token: minden consistency.md szabály (spacing, tipó,
  radius, szín, motion, MCP-lista) egy tokencsoportra képeződik le.
