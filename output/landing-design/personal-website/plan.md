# Plan — personal-website

## Irány neve

**"Layered Blueprint"** — architektúrális rétegzettség (a CLAUDE.md
vizuális irányából) + az "Enterprise foundation" narratíva szó szerinti
vizuális megfelelője: mintha rétegzett alaprajz-síkokon állna a tartalom.
Minden szekciónak ezt kell szolgálnia — nem dekoráció, hanem a "12+ év
alapokon nyugvó, AI-assisted kivitelezés" történet vizuális váza.

## Narratív ív (3 mondat)

Felül: magabiztos, tiszta állítás — nem "AI startup", hanem tapasztalt
szakember, aki gyakorlati eszközökkel dolgozik. Középen: bizonyíték és
folyamat — mit épít, hogyan dolgozik, mi az alap alatta. Végén: egyenes,
súrlódásmentes felhívás a beszélgetésre, minimál, bizalom-építő footer.

## Szekció-architektúra

### 1. Hero
- **Job:** azonnali pozicionálás + hitelesség 3 másodperc alatt.
- **Kulcsüzenet:** "AI-Assisted Digital Solutions for Real Business Needs."
- **Perszóna/szakasz:** minden célcsoport — ez a belépési pont.
- **Art direction:** teljes képernyős (≥85vh), **sötét graphite/charcoal
  alap**, aszimmetrikus split — bal 60% szöveg, jobb 40% absztrakt
  rétegzett-sík WebGL vizuál (React Bits `silk` vagy `beams`, lassú, finom
  fénymozgással, champagne-gold tónusban). A H1-ben **egy kiemelt szó**
  eltérő kezeléssel (outline/stroke kontúr a fő szín helyett) — az
  inspiráció forgó-headline energiájának visszafogott, statikus
  megfelelője (ld. `consistency.md` signature effect). Két CTA:
  elsődleges tömör (gold), másodlagos kontúros.

### 2. About (rövid bemutatkozás)
- **Job:** ki ez az ember, gyorsan és hitelesen — a nav "About" pontja,
  amit az eredeti terv kihagyott, most pótolva.
- **Kulcsüzenet:** 12+ év enterprise tapasztalat + gyakorlati AI-assisted
  fókusz, **röviden és frappánsan** — NEM életrajz-esszé (ld.
  intelligence.md About-inspiráció). Max 3 rövid bekezdés, félkövér
  kiemelésekkel a kulcsszavakon.
- **Perszóna:** recruiterek, döntéshozók, akik gyorsan tájékozódnak.
- **Art direction:** világos szekció, **vékony koncentrikus kör-vonalak**
  (line-art gyűrűk, graphite/gold hajszálvonal, alacsony opacitás) a
  fejléc mögött — a CLAUDE.md "finom perspektíva-vonalak" irányának
  közvetlen, statikus megvalósítása; ez a szekció vezeti be a motívumot,
  ami utána a Hero-ban és a szekció-elválasztóknál is visszatér.
  Szöveg-oszlop max 680px, mellette (nem mögötte) egy kis, statikus
  absztrakt rétegzett-sík grafika (nincs személyes fotó-anyag). A
  szöveg-oszlop tetején egy kompakt "fejléc-kártya": név + pozíció-cím
  gold akcentben + egy rövid alcím, a bio-bekezdések előtt (ld.
  intelligence.md Resume-minta). Különbözik a hero split mintától (itt
  nincs WebGL, csak statikus SVG-réteg) és a következő stat-sortól.

### 3. Proof strip (12+ Years Enterprise IT / AI-Assisted Delivery / Practical Digital Solutions)
- **Job:** azonnali hitelesítés, mielőtt bármi mást állítanánk.
- **Kulcsüzenet:** nem üres marketing — mérhető alap.
- **Perszóna:** cégvezetők, recruiterek — gyors szkennelés.
- **Art direction:** **teljes szélességű, tömör akcent-színű sáv**
  (gold vagy coral, az irány szerint) közvetlenül a sötét hero alatt —
  erős kontrasztváltás, nem visszafogott ivory csík. A számok
  **animáltan felszámolnak** 0-ról a célértékre, amikor a szekció
  görgetésre a képernyőre ér (pl. "12+ Years", "4+ Delivered Projects"
  stb.) — konkrét, átvett minta (ld. components-shortlist.md
  `StatsSection`/`AnimatedCounter`). NEM 3 egyforma ikon-kártya — a
  számok maguk a hangsúly, nagy display tipóval. Különbözik a hero
  split mintától és a következő bento-tól.

### 3. Solution cards (négy: websites / booking-workflows / internal tools / scope & support)
- **Job:** konkrét szolgáltatás-kínálat, azonnal átlátható.
- **Kulcsüzenet:** "ezt tudom megépíteni neked, pontosan."
- **Perszóna:** cégvezetők, ops vezetők — döntési szakasz eleje.
- **Art direction:** **bento-grid** (Magic UI `bento-grid`), NEM négy
  egyforma kártya — egy domináns (2×1, a "business websites", mert ez a
  belépő ajánlat) + három kisebb. Világos alap, gold akcent a hover-
  állapoton. Különbözik az előző stat-sortól és a következő split-től.

### 4. Selected work (MONA weboldal + MONA foglalási app + Daily Verse — 3 külön kártya)
- **Job:** bizonyíték, hogy nem csak terv, hanem szállított munka.
- **Kulcsüzenet:** valódi, működő rendszerek — és két külön szolgáltatás-
  kategória (weboldal ÉS foglalási rendszer) bizonyítéka egy klienstől.
- **Perszóna:** minden célcsoport, különösen a döntéshozók.
- **Art direction:** **editorial 60/40 aszimmetrikus split**, kártyánként
  váltakozó oldal (Daily Verse: kép balra/szöveg jobbra; MONA weboldal:
  szöveg balra/kép jobbra; MONA foglalási app: kép balra/szöveg jobbra —
  vissza a Daily Verse mintájához, hogy a 3. kártya ne ismételje közvetlenül
  a 2.-at). MONA mindkét kártyájánál a "kép" helyén egy diszkrét, embargó-
  jelölt absztrakt placeholder-vizuál, SOHA nem üres szürke doboz — lásd
  `HIANYZO-ADATOK.md` (ok külön jelölve: weboldalnál "végső finomítás",
  foglalási appnál "hiányos tartalom + design felülvizsgálat alatt").
  Jobbra igazított metaadat-oszlop (szerep / stack / státusz), kör alakú
  "Megnézem" gomb Magic UI `magic-card` spotlight-tal a kártyán.
  Full-bleed képszél. Különbözik a bento-tól és a következő dark band-től.
  A metaadat-oszlopban a MONA két kártyájánál eltérő "szerep" címke
  (Website / Booking System), hogy egyértelmű legyen: két külön munka.

### 5. Working approach (Understand / Define / Design & build / Test & refine)
- **Job:** folyamat-átláthatóság — nem "fekete doboz" AI-munka.
- **Kulcsüzenet:** strukturált, ellenőrizhető módszer.
- **Perszóna:** ops vezetők, óvatosabb döntéshozók.
- **Art direction:** **sötét feature-sáv** (a kötelező középső-harmad
  sötét szekció), 4 lépés vízszintesen, **egymást enyhén átlapoló**
  (negatív margó / translate) számozott panel-sor — nem szimmetrikus
  rács. Gold vonal köti össze a lépéseket (a "rétegzett alaprajz"
  motívum konkrét megjelenése). Különbözik az előző split mintától és a
  következő világos szekciótól.

### 6. Enterprise foundation
- **Job:** a 12+ év enterprise tapasztalat mint bizalmi alap, kifejtve.
- **Kulcsüzenet:** ez nem hobbi-projekt-kivitelező, hanem valaki, aki
  ismeri a vállalati környezetet.
- **Perszóna:** recruiterek, nagyobb cégek döntéshozói.
- **Art direction:** világos, **editorial szövegsáv** (max 680px szélesség,
  nagy sorköz), mellette/mögötte finom, statikus rétegzett-sík grafika
  (SVG, nem WebGL — visszafogottabb, mert ez egy "olvasós" szekció).
  Különbözik a dark band-től és a következő CTA-tól.

### 7. Contact CTA
- **Job:** a fő konverziós pont — projekt-beszélgetés indítása.
- **Kulcsüzenet:** lépcsőzetes, magabiztos záró-állítás + súrlódásmentes
  űrlap.
- **Perszóna:** minden célcsoport, aki idáig eljutott.
- **Art direction:** **teljes szélességű, sötét, enyhén gradiens sáv**,
  lépcsőzetes tipó-hierarchia (kicker → alcím gold → nagy bold záró-
  mondat — az inspiráció "Creative / ... / STORYTELLING." mintájának
  architektúrális, egyszínű megfelelője). Közvetlenül alatta egy **finom,
  egyszínű `LogoLoop`-sáv** (React Bits — a Magic UI marquee helyett ezt
  választottuk, mert alapból helyesen kezeli a `prefers-reduced-motion`-t)
  a szolgáltatás-kulcsszavakból
  (Websites · Booking Workflows · Internal Tools · AI-Assisted Delivery),
  lassan úszó, halvány — az inspiráció szivárvány-marquee-jének
  visszafogott, egyszínű verziója, mint vizuális horgony a footer előtt.
  Ez az egyetlen másik center-aligned szekció a hero mellett (max 2,
  szabály szerint). Az űrlap "mit szeretnél javítani?" mezője **gyors,
  letterelt választógombokként** jelenik meg (A/B/C/D — Weboldal /
  Booking-workflow / Belső eszköz / Nem biztos), a név/cég/email/
  időkeret mezők mellett, "kb. 1 perc" idő-becslés mikroszöveggel a
  gomb fölött (ld. intelligence.md Typeform-minta — architektúrális,
  egyszínű kivitelben, NEM a Typeform színes stílusában).

### 8. Footer
- **Job:** minimál lezárás, elérhetőségek.
- **Kulcsüzenet:** nincs túlbeszélve.
- **Art direction:** vékony, sötét sáv, bal copyright, jobb LinkedIn/email
  inline szöveg-sor (ld. intelligence.md Resume fejléc-minta). A "CV
  placeholder" egy **körkörös, lassan forgó szöveg-gyűrű jelvény**
  ("DOWNLOAD · CV" körbefutva, letöltés-ikon középen, graphite/gold),
  hover-en felgyorsuló forgással — konkrét, átvett komponens-ötlet (ld.
  intelligence.md Resume-fül). A copyright-sor fölött egy nagyon
  visszafogott **`LogoLoop` tech-stack sáv**, kicsi, halvány, lassú —
  de NEM a site saját frontend-stackje, hanem a **valódi eszközpark**,
  amit a designer ehhez ÉS a MONA projekthez ténylegesen használ:
  Claude Code, GPT, GitHub, Supabase, Cloudflare, Vercel, Resend +
  amit még megad. Ez erősebb hitelesség-jel, mint egy sima "built with
  React" sáv — konkrétan az "AI-assisted delivery" pozicionálást
  támasztja alá valós eszközökkel. Nincs rács-törés — ez szándékosan a
  "leengedés" a nagy CTA után.

## Amit NEM veszünk át (ld. intelligence.md)

Playful illusztráció-karakterek, szivárvány-paletta, fekete-fehér
portré-központú hero, laza/vicces hangnem, forgó egér-kurzor. Az
inspiráció "visszatérő márka-ikon" elvét (kurzor-szem mindenhol) egy
architektúrális motívumra cseréljük: **vékony, koncentrikus kör-vonalak**
(line-art gyűrűk, graphite/gold hajszálvonal) — ez jelenik meg az About
fejléc mögött, visszafogottan a Hero háttérben, és a szekció-elválasztók
mögött mint ismétlődő réteg-elem. Ez a mi konzisztens vizuális
aláírásunk, playful ikon helyett.
