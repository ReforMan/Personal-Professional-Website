# Tech references — inspirációk és mintaprojektek

Nem projekt-specifikus jegyzetek: eszközök/repók, amiket menet közben
találtunk, és jövőbeli munkákhoz (nem feltétlenül a personal-website
projekthez) hasznosak lehetnek.

## miurla/morphic — AI-alapú keresőmotor (Next.js)

https://github.com/miurla/morphic

Nyílt forráskódú, Perplexity-jellegű "AI answer engine" generatív UI-val
(streamelt válaszok, dinamikusan renderelt komponensek a válaszból,
nem csak markdown). Több AI-szolgáltatót kezel egységesen (OpenAI,
Anthropic, Google, Ollama, Vercel AI Gateway), több keresési providert
(Tavily, SearXNG, Brave, Exa), Supabase Auth-tal, Postgres chat-
historyval, Docker deploy-jal.

**Miért lehet később hasznos**: ha egy ügyfélnek belső tudásbázis-
keresőt vagy AI chat-asszisztenst kell építeni (illik az "internal
tools/ops apps" szolgáltatás-kategóriába), ez jó referencia/blueprint
arra, hogyan lehet több AI-modellt egységesen kezelni és generatív UI-t
csinálni streamelt válaszokból. Demo-alapnak is jó lehet, ha egy
potenciális ügyfélnek gyorsan meg kell mutatni egy működő AI-keresés/
chat funkciót.

Melléktermékként innen jött a personal-website nav-logójának
kurzort követő szem-jel ötlete is (`components/ui/animated-logo.tsx`) —
azt lásd az `output/landing-design/personal-website/components-shortlist.md`
fájlban, saját implementációként átvéve.
