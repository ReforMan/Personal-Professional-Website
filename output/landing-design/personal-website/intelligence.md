# Intelligence — personal-website

## Megadott inspiráció

Forrás: https://rekavig.pages.dev/ (Víg Réka portfóliója — a Designer 2.0
kurzus trénere, hasonló irányú szakmai pozicionálással). A designer
screenshotokat küldött, mert az oldal éles elérése blokkolva van ebben a
környezetben. **Nem stílusmásolás** — a szerkezetet, ritmust és energiát
vesszük át, a színvilágot, a playful hangot és a tartalmat nem: a mi
irányunk architektúrális-prémium, nem playful-illusztratív (lásd
CLAUDE.md vizuális irány).

### Amit konkrétan megfigyeltünk

**Hero**
- Sötét (navy-fekete) alap, éles egyetlen akcent-szín a fényes elemeken
  (nála mályva/pink) — nem sok-színű paletta, egy erős kontraszt-akcent.
- A headline **forgó/becsúszó szöveg**: 3+ variáció váltja egymást
  jobbról balra csúszó animációval ("Badass Webflow Developer" →
  "Enthusiast of Web3.0 Design" → "Creative UI/UX Designer"), a
  headline-ön belül vegyes betűsúly — egy szó kitöltött bold, a másik
  csak körvonalas (outline) ugyanabban a méretben. Ez ad mozgást és
  réteg-érzetet statikus fotó/vizuál nélkül is.
- Portré jobbra, fekete-fehér, mögötte lágy körkörös glow/blob-forma —
  nálunk nincs személyes fotó-irány, ez az elem NEM releváns 1:1, de a
  "lágy glow-forma a fő elem mögött" mint réteg-technika átvehető
  absztrakt geometriával.
- Két CTA: elsődleges tömör (akcent háttér), másodlagos kontúros
  (átlátszó, csak border) — világos elsődleges/másodlagos hierarchia.
- Egyedi kurzor: mozgó szem-ikon, kör alakú, akcent-színnel — playful
  jelzés, de a mögöttes elv (egy visszatérő, márka-szintű ikon-motívum,
  ami a kurzoron ÉS a UI-gombokon is megjelenik) jó rendszerező elv.

**Navigáció**
- Monogram logó + kis tagline felirat fölötte/alatta, verzál.
- Nav-linkek mind verzál, letter-spaced.
- CTA gomb jobb szélen kontúros stílusban, nem tömör.

**UI-flourök (nem funkcionális, hangulati elemek)**
- Jobb szélen fixen rögzített, függőleges "Let's Talk!" fül (akcent
  háttérszín, forgatott szöveg).
- Lent jobbra függőleges "Scroll Down" felirat, forgatva.
- Ezek a fix, forgatott szövegcsíkok olcsó, de hatásos "prémium" jelzést
  adnak — komolyabb fejlesztés nélkül érzetet javítanak.

**Portfólió-kártyák (lefele görgetve azonnal megjelennek)**
- Konzisztens, ismétlődő kártya-minta: kép/mockup az egyik oldalon
  (asztali jelenet VAGY telefon-mockup színes gradiens háttéren),
  szöveg a másikon.
- Szöveg-oldal felépítése: nagy cím → alcím (szürke, kisebb) → leírás
  bekezdés → jobbra igazított metaadat-oszlop (kategória / típus / év).
- Záró elem minden kártyán: "VIEW PROJECT" felirat + kör alakú gomb,
  benne a márka szem-ikonjával — a kurzor-motívum újrahasznosítva mint
  UI-elem, nem csak kurzoron jelenik meg.

**Záró / kontakt szekció (kiegészítve, 2. képkör alapján)**
- Az illusztráció-karakter és a "papír-gombóc → papír-repülőgép"
  alakváltás ténylegesen **animált** (nem statikus grafika) — a
  designer külön bekarikázta mint mozgó elemet. Elv, ami átvehető:
  egy kis, ismétlődő, alacsony-zajszintű animáció a záró szekcióban,
  ami a mozgás-tokent (finom fénymozgás, perspektíva-váltás) viszi
  tovább — NEM az illusztrációs stílust.
- Footer: bal alul copyright-sor, jobb alul social-ikon sor (kör
  gombok). Ez megegyezik a CLAUDE.md footer-tervével (LinkedIn, email,
  CV placeholder) — csak a végleges verzióban kevesebb, célzottabb
  ikonnal.

**Záró / kontakt szekció
- Tipó-hierarchia lépcsőzetesen nő: kis label → közepes alcím
  akcent-színben → hatalmas bold záró-szó/mondat (itt nála: "Creative /
  Digital Experience Designer / with a passion for / STORYTELLING.").
- Keretes (nem tömör) CTA gomb — "LET'S WORK TOGETHER!".
- Legalul egy kontrasztos, futó szövegsáv (marquee-stílus), nála
  szivárvány-színekkel — ez playful, NEM illik a mi irányunkhoz
  színben, de a szerkezeti ötlet (egy vízszintesen mozgó/kontrasztos
  szövegsáv mint záró-flourish közvetlenül a footer előtt) átvehető
  visszafogott, egyszínű, finom mozgással (pl. lassan úszó, halvány
  ismétlődő szöveg vagy vonal-minta, `prefers-reduced-motion`-nel
  kikapcsolva).

### Mit veszünk át (szerkezet/energia) és mit NEM (szín/hang)

Átvesszük:
- Hero: forgó/váltakozó headline mint réteg-és-mozgás forrás fotó nélkül.
- Konzisztens ikon-motívum, ami kurzoron/gombon is megjelenik (nálunk
  nem szem, hanem valami architektúrális jel — pl. finom vonal/perspektíva
  motívum, ld. designer fázis).
- Fix, forgatott szöveg-csík mint oldalsó UI-flourish (pl. "Let's talk"
  helyett saját szöveggel, vagy elhagyva, ha zajos).
- Portfólió-kártya minta: kép/mockup + szöveg + jobbra igazított
  metaadat-oszlop + kör alakú "view project" gomb.
- Záró szekció lépcsőzetes tipó-hierarchiája + keretes CTA + egy finom
  kontrasztos szövegsáv-flourish közvetlenül a footer előtt.
- Kontúros másodlagos CTA / kontúros nav-CTA mint visszatérő gomb-stílus.

NEM vesszük át:
- A playful illusztráció-karaktereket, a szivárvány/sok-színű paletst.
- A "badass", vicces, laza hangnemet — nálunk visszafogott, enterprise-
  hitelességű, de mégsem száraz hangot használunk (ld. CLAUDE.md
  pozicionálás: NEM junior, NEM agency-hangnem).
- A fekete-fehér portré-központú hero-kompozíciót (nincs hozzá anyagunk,
  és nem is illik az architektúrális irányhoz) — helyette absztrakt
  rétegzett síkok / finom perspektíva-vonalak a CLAUDE.md vizuális
  iránya szerint.

### About / bemutatkozás oldal (3. képkör)

- A bemutatkozó szöveg **rövid és frappáns** — nem életrajz-esszé, 2-3
  tömör bekezdés, félkövér kiemelésekkel a kulcsszavakon belül (pl.
  "**adapt and learn quickly**", "**Can-Do attitude**"). Ez közvetlen
  útmutatás a mi About szekciónkhoz is: rövid, ütős, nem szószátyár.
- Nagy, halvány, elforgatott **háttér-vízjel szöveg** a szekció mögött
  (nála "Story Time", nagyon halvány, dekoratív réteg) — jó
  architektúrális eszköz nálunk is: egy hatalmas, alacsony-kontrasztú
  szó/szám a háttérben mint textúra-réteg (pl. "FOUNDATION" az
  Enterprise foundation szekció mögött, vagy egy nagy "01/02/03/04"
  szekció-szám az Approach mögött).
- Forgó, körkörös jelvény-elem ("drag for more" felirat körben,
  forgó animációval) — playful interakciós jelzés; nálunk NEM releváns
  1:1, de a "forgó, apró jelvény mint mikro-interakció" elve átvehető
  visszafogottabb formában (pl. egy finom, lassan forgó architektúra-
  jel az Approach szekcióban).
- Folyamat-lépések (Research / Prototype / Optimize & Deploy) **ferde,
  hullámos-tetejű, gradiens kártyákon**, balra-jobbra nyilas
  navigációval (karusszel-jellegű). A hullámos/playful forma NEM illik
  hozzánk, DE a mögöttes elv jó: minden lépés-kártya hátterében egy
  **nagy, halvány sorszám** ("01", "02"...) mint réteg — ezt átvesszük,
  csak egyenes, éles (editorial) panel-formában, a "Layered Blueprint"
  irányhoz illően.

### About-hero (4. képkör) — a legdirektebb találat

- A "Passion turned into PROFESSION." fejléc mögött **vékony, koncentrikus,
  egymást metsző kör-vonalak** (line-art gyűrűk, nem kitöltött forma) —
  ez **szó szerint** a CLAUDE.md "finom perspektíva-vonalak" irányának
  egy kész megvalósítása. **Ezt 1:1 szerkezetileg átvesszük**, csak
  graphite/gold hajszálvonal (`1px`, alacsony opacitás) színezéssel, nem
  pink/piros. Ez lehet a márka-szintű visszatérő grafikai motívum (az
  eredeti terv szem-ikonja helyett) — megjelenhet a Hero, az About és a
  szekció-elválasztók mögött is, konzisztens réteg-elemként.
- Apró, elszórt geometriai díszek a szövegblokk mellett: egy tömör pont +
  egy kontúros kör, különböző méretben — mikro-díszítés, amit a mi
  irányunkban egy-két helyen, nagyon visszafogottan érdemes megismételni
  (pl. a szekció-számozásnál).
- A bio-szöveg 3 rövid bekezdésben fut, mindegyikben 2-3 félkövér kiemelt
  kulcsszó-csoport — megerősíti a korábbi megfigyelést: rövid, tömör,
  emphasis-vezérelt szöveg, nem hosszú próza.

### Resume fül (5. képkör) — fejléc-kártya minta

- Név két eltérő súllyal ("Reka" light + "Vig" bold, vagy fordítva) —
  ugyanaz a "vegyes súly egy sorban" elv, mint a hero headline-nál.
- Pozíció-cím **akcent-színben, bold** ("Webflow Developer & AI
  Strategist"), alatta egy visszafogottabb alcím, benne bold
  márka-kiemelésekkel.
- Kontakt-adatok **egyszerű, inline szöveg-sorban** (weboldal · email ·
  telefon), nem ikon-gombokként — letisztult, önéletrajz-szerű.
- Nálunk nincs külön Resume/CV oldal (egyoldalas site), de ez a
  fejléc-kártya minta jól illik az About szekció tetejére (név + rövid
  pozíció-státusz-sor a bio-bekezdések előtt) és a footer kontakt-sorára
  (LinkedIn/email/CV-placeholder egyszerű inline elrendezésben, ikon
  helyett/mellett szöveggel).

### Resume fül folytatás (6. képkör)

- "Professional Summary" és "Experience" H1-ek: rövid bekezdések, bold
  kulcsszó-kiemelésekkel (megerősíti a korábbi mintát), egy H1 mellett
  inline kis ikon (itt a szem-motívum "Experience" mellett).
- **Körkörös, forgó-szöveges jelvény** felhő/letöltés-ikonnal a
  középpontban — vizuálisan "download CV" akció-gombként funkcionál.
  **Konkrét, átvehető komponens-ötlet**: a mi footerünk "CV placeholder"
  eleme pontosan ez lehet — egy kör alakú, lassan forgó szöveg-gyűrű
  ("DOWNLOAD · CV · DOWNLOAD · CV" körbefutva) + középen egy letöltés-
  ikon, graphite/gold színben, hover-en felgyorsuló forgással.

### Contact / "Let's Talk" blokk (7. képkör)

- Külön, playful belépő-képernyő ("Bonjour / Hola / Hello" kézírásos
  betűkkel, színes hullám-gradiens háttér) — ez NEM a mi irányunk
  (túl játékos/színes), nem vesszük át.
- A tényleges form **Typeform-stílusú, lépésenkénti kérdőív**: egy
  kérdés képernyőnként, **letterelt (A/B/C…) gyors-választó gombok**
  ("Choose as many as you like" — több is választható), "OK" gomb a
  továbblépéshez.
- Mikroszöveg a CTA gomb alatt: **"Takes 45 sec"** — idő-becslés, ami
  csökkenti a súrlódást a form kitöltése előtt.
- **Átvehető minta**: a mi Contact CTA szekciónk (CLAUDE.md: név, cég,
  email, mit szeretnének javítani, időkeret) az "mit szeretnél javítani"
  mezőt gyors, letterelt választógombokként is felkínálhatja (pl. A)
  Weboldal · B) Booking/ügyfél-workflow · C) Belső eszköz · D) Nem
  biztos, beszéljünk), a hagyományos mezők (név/cég/email/időkeret)
  mellett. Az űrlap fölé/alá egy "kb. 1 perc" idő-becslés mikroszöveg
  kerül — ugyanaz a súrlódás-csökkentő elv, architektúrális, egyszínű
  gomb-stílusban (nem színes Typeform-dizájnnal).

## Kategória-kutatás (saját, a designer beleegyezésével — "kutass magad")

A designer az inspiráció-kapunál a "Nem, kutass magad" opciót választotta
a formális kategória-kutatáshoz (in-category + award-szint poolhoz), a
fenti megadott inspiráció mellett. Mivel ebben a környezetben az
external web-elérés korlátozott (lásd fentebb — a rekavig.pages.dev
élő elérése is blokkolva volt, csak screenshot alapján tudtunk
dolgozni), a kategória-kutatást a designer/architektúra-brief saját,
már rögzített vizuális iránya helyettesíti (CLAUDE.md "Vizuális irány"
szakasz): prémium enterprise/consulting + boutique digital studio
metszéspontja — pl. a "dark, architectural, restrained-motion, single
warm accent" formanyelv, ami jellemző a magasabb szintű B2B
tanácsadói/fejlesztői one-pagerekre. [ASSUMPTION: nem tudtunk friss,
élő versenytárs-oldalakat megnyitni ehhez a futáshoz; a creative-director
fázis ezt a rögzített irányt tekinti mércének.]
