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
