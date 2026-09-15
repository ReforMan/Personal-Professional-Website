# UI komponens-jelöltek — personal-website

A designer az Aceternity UI / React Bits / MagicUI katalógusokból gyűjt
komponenseket. Ez a fájl követi a döntéseket, hogy ne vesszenek el a
beszélgetésben. Frissítve folyamatosan, a builder fázis ebből dolgozik.

## Eldöntve

### Hero háttér: **WebThreads** (React Bits, OGL/WebGL2)
- Fénylő, egymást átszövő "szálak", egér-interakcióval (pinch-pont
  követi a kurzort, fényudvar-bloom).
- Indoklás: a legkidolgozottabb, legprémiumabb a felmerült
  háttér-effektek közül; pontosan a "high-tech, energikus, de nem
  giccses/AI-klisés" célt szolgálja, szó szerinti AI-ikonográfia
  nélkül (ld. CLAUDE.md tiltólista).
- **TEENDŐ ÉPÍTÉSKOR**: a komponens alapból NEM kezeli a
  `prefers-reduced-motion`-t (csak láthatóság/tab-fókusz alapján áll
  le) — kötelező egy wrapper, ami `matchMedia('(prefers-reduced-motion: reduce)')`
  esetén nem indítja el a render-loopot / statikus képkockán tartja.
  Ez CLAUDE.md kemény követelmény, nem opcionális.
- Telepítés: `npm install ogl`, forráskód a designertől megvan
  (JS + CSS variáns), be kell TypeScriptre fordítani a projekt
  konvenciója szerint.
- Színezés: `color1`/`color2`/`color3` props — a végleges design-tokens
  (A vagy B irány, ld. design-tokens.json / design-tokens-b.json)
  palettájára állítva, nem az alapértelmezett lila/pink.

### Fő navigáció (asztali): **GooeyNav** (React Bits, nincs extra függőség)
- Aktív menüpont váltásakor folyadék-blob morph + részecske-kirobbanás.
- Illik a horgonyzott nav-ra (Home/Solutions/Work/Approach/About/Contact).
- **TEENDŐ**: `href="#"` helyett valódi szekció-ID-k; `prefers-reduced-motion`-nél
  instant váltás animáció nélkül; a Space-es billentyű-aktiválás
  egyszerűsítése build közben.

### Mobil menü: **StaggeredMenu** (React Bits, GSAP)
- Teljes panelt betöltő off-canvas menü, réteges szín-reveal, számozott
  hatalmas menüpontok, Menu↔Close szöveg-pörgetés.
- A `GooeyNav` desktopon, ez mobil hamburger-menüként — nem versenyeznek.
- **TEENDŐ**: `prefers-reduced-motion` guard; fehér alap → sötét paletta
  átszínezés; placeholder social linkek (Twitter/GitHub) → LinkedIn/email;
  eldöntendő, hogy a GSAP-ot bevisszük-e függőségként a framer-motion
  mellé, vagy framer-motionnal újraírjuk ugyanezt.

### Contact CTA motor: **Stepper** (React Bits, `motion`/Framer Motion család)
- Lépésenkénti wizard (progress-körök, vissza/tovább gomb, csúszó
  átmenet) — ez valósítja meg a korábban eltervezett Typeform-stílusú,
  egy-kérdés-egyszerre kontakt-űrlapot (ld. lejjebb, Contact CTA terv).
- **TEENDŐ**: a lépés-jelző körök `<button>`-ré alakítása (jelenleg
  `<div onClick>`, nincs billentyű-elérés) — kötelező javítás.

### Hero/szekció-headline hangsúly: **TrueFocus** (React Bits, `motion`)
- Kamera-fókusz HUD-effekt: mondat szavai közül mindig egy éles, a
  többi elmosva, világító sarok-keret ugrik rá.
- Csak **egyetlen** szekcióban használjuk (pl. Hero H1 vagy Approach
  cím), hogy ne ismétlődjön a hatás.
- **TEENDŐ**: `prefers-reduced-motion`-nél minden szó élesen, pörgés
  nélkül; alapszín (zöld) átszínezés.

### Hosszabb szövegblokk (pl. About bio): **ScrollReveal** (React Bits, GSAP+ScrollTrigger)
- Görgetéshez kötött (nem időzített) szavankénti blur+opacity feloldás.
- **TEENDŐ**: a komponens mindig `<h2>`-be csomagol — ha nem címsorra
  használjuk, ezt buildeléskor javítani kell (szemantikus HTML hiba
  lenne). `prefers-reduced-motion` guard is kell.

### Marquee-sávok: **LogoLoop** (React Bits, nincs extra függőség)
- Végtelen görgő logó/ikon-sáv, szél-elhalványítással, hover-lassítással.
- **Alapból helyesen kezeli a `prefers-reduced-motion`-t** — ritka
  pozitív kivétel a mai listában.
- Két helyen, két tartalommal (a designer döntése):
  1. **Contact CTA alatt**: szolgáltatás-kulcsszavak szövegként
     (Websites · Booking Workflows · Internal Tools · AI-Assisted
     Delivery) — felváltja a plan.md-ben korábban Magic UI `marquee`-ként
     szereplő helyet.
  2. **Footerben**: NEM a site saját frontend-stackje, hanem a designer
     valódi, projektekben használt eszközparkja (ehhez ÉS a MONA
     projekthez): **Claude Code, GPT, GitHub, Supabase, Cloudflare,
     Vercel, Resend** + amit még megad — kicsi, halvány, lassú sáv,
     diszkrét, de konkrét hitelesség-jel az "AI-assisted delivery"
     pozicionáláshoz.
- GlowCursor (lásd lent) és a valódi logós opció (korábbi munkáltatók/
  ügyfelek) egyelőre nem került be — nincs hozzá kép-anyag/engedély.

### Kurzor-aláírás vagy Hero-effekt: **GlowCursor** (React Bits, OGL/WebGL2)
- Fénylő, pulzáló nyomvonal a kurzor mögött, idle-fade beépítve.
- Ugyanabból a családból, mint a már kiválasztott `WebThreads` — **nyitott
  kérdés, melyik szerepet kapja** (globális, végigkísérő kurzor-aláírás
  VAGY Hero-effekt, nem mindkettő egyszerre, hogy ne duplázódjon a
  GPU-terhelés és a vizuális motívum). A designer még nem döntött.
- **TEENDŐ, ha bekerül**: `prefers-reduced-motion` guard; csak
  `(hover: hover) and (pointer: fine)` eszközökön fusson (érintőn
  gyakorlatilag inert); ha globális, visszafogottabb intenzitással,
  mint a demo.

## Segéd-infrastruktúra (nem UI-komponens, hanem a builder alapja)

Forrás: DavidHDev (a React Bits alkotója) saját portfólió-sablonja
(github.com/DavidHDev/rbp-portfolio) — Next.js-alapú, NEM vesszük át
alapnak (CLAUDE.md Vite + egyoldalas horgony-nav struktúrát ír elő,
ez a sablon Next.js + több route). Két mintát viszont kiemeltünk és
Vite/framer-motion-re adaptáltunk:

- **`reference-snippets/useReducedMotion.tsx`** — egy `useReducedMotion()`
  hook + kész `MotionDiv`/`StaggerContainer`/`StaggerItem` komponensek,
  amik automatikusan csökkentett-mozgásra váltanak. **Ez legyen a
  közös alap minden ma jóváhagyott komponens `prefers-reduced-motion`
  hiányosságának javításához** (WebThreads, TrueFocus, ScrollReveal,
  GooeyNav, StaggeredMenu, Stepper) — nem kell mindegyikbe külön
  matchMedia-logikát írni, ez a wrapper-készlet adja.
- **`reference-snippets/SmoothScroll.tsx`** — opcionális, oldal-szintű
  Lenis smooth-scroll, ami csökkentett mozgásnál automatikusan ki sem
  indul, és az `href="#szekcio"` horgony-linkeket helyesen köti össze
  a sima görgetéssel. Csak akkor kell bekötni, ha végül globális
  smooth-scroll mellett döntünk — alapból nincs aktiválva.

## Elvetve (kliséveszély)

- **ScrambledText** (React Bits, GSAP `ScrambleTextPlugin`+`SplitText`)
  — egérközelségre "dekódolódó" monospace szöveg-effekt. A designer
  megnézte és elengedte: túl közel van a "hacker terminál / mesterséges
  intelligencia gondolkodik" vizuális klisékhez, amiket kifejezetten
  el akarunk kerülni.

## Fotóra vár

- **ProfileCard** (React Bits, nincs extra npm-függőség) — holografikus,
  3D-dőlős profilkártya (egér/giroszkóp), avatár + név/pozíció + handle/
  status/kontakt-gomb overlay. Erősen egyezik a tervezett About-fejléc
  kártyával (ld. intelligence.md Resume-minta). **Blokkoló**: valódi
  portré-fotó kell hozzá, ami még nincs — a designer feltölti, amint
  kész. Nyitott kérdés: a "holo" csillogás teljes szivárvány-spektrumát
  megtartjuk, vagy egy gold/coral duo-tone verzióra szűkítjük.
  `prefers-reduced-motion`-nál a 3D dőlés kikapcsolandó (hover-alapú,
  kisebb súlyú, mint a folyamatos háttér-animációk).

## Polcra téve (nem elvetve, csak nem prioritás)

- **3d-globe** (Aceternity) — a designer megerősítette: nemzetközi
  kliens-kör a cél (nem csak helyi), szóval tartalmilag indokolt lehet,
  de a Three.js/WebGL súlya és a helye a struktúrában még nyitott
  kérdés. Újranézzük, ha eljutunk a Enterprise foundation / Contact
  szekció részletes tervezéséhez.
- **WavyBackground** (Aceternity, canvas-alapú) — jóváhagyva mint
  koncepció ("igen"-jelölt volt), de miután a Hero helyét a WebThreads
  kapta, ennek a szerepe nyitott: vagy elvetjük (redundáns lenne a
  Hero-val), vagy egy másik szekcióban (pl. Approach) kap helyet,
  visszafogottabb paraméterezéssel, hogy ne ismételje a Hero motívumát.
- **Waves** (React Bits, OGL/WebGL, monokróm vonal-háló) — felmerült
  alternatívaként, nem döntöttünk mellette/ellene.

## Elvetve

- **HeroParallax** (Aceternity) — 15 elemre tervezett logó-rács, nálunk
  csak 2 projekt van (Daily Verse + embargós MONA), üresen/törötten
  nézne ki. A parallax-technika (useScroll+useTransform) kicsiben,
  2-3 elemes léptékben még felmerülhet a Selected work szekciónál.

## Még nyitott

- A designer folyamatosan küld új komponens-jelölteket — ez a lista
  bővül, ahogy döntés születik.
