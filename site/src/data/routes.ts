export const languages = ['hu', 'en', 'de'] as const;
export type Language = (typeof languages)[number];
export const pageIds = ['home', 'solutions', 'projects', 'about', 'monaWebsite', 'monaBooking'] as const;
export type PageId = (typeof pageIds)[number];

// The only mapping of page identity and localized URLs.
export const paths = {
  home: { hu: '/', en: '/en/', de: '/de/' },
  solutions: { hu: '/megoldasok/', en: '/en/solutions/', de: '/de/leistungen/' },
  projects: { hu: '/projektek/', en: '/en/projects/', de: '/de/projekte/' },
  about: { hu: '/rolam/', en: '/en/about/', de: '/de/ueber-mich/' },
  monaWebsite: { hu: '/projektek/mona-weboldal/', en: '/en/projects/mona-website/', de: '/de/projekte/mona-website/' },
  monaBooking: { hu: '/projektek/mona-foglalasi-rendszer/', en: '/en/projects/mona-booking-system/', de: '/de/projekte/mona-buchungssystem/' }
} as const satisfies Record<PageId, Record<Language, string>>;

export type Route = {
  id: PageId;
  lang: Language;
  path: string;
  type: 'home' | 'listing' | 'profile' | 'caseStudy';
  meta: { title: string; description: string; reviewStatus: 'source-reviewed' | 'content-review-needed' };
};

const meta: Record<PageId, Record<Language, { title: string; description: string }>> = {
  home: {
    hu: { title: 'Botos Zoltán | AI-asszisztált digitális megoldások', description: 'Weboldalak, foglalási workflow-k és belső eszközök több mint 12 év enterprise IT-tapasztalatra építve.' },
    en: { title: 'Zoltan Botos | AI-Assisted Digital Solutions', description: 'Websites, booking workflows and internal tools built on more than 12 years of enterprise IT experience.' },
    de: { title: 'Zoltan Botos | KI-unterstützte digitale Lösungen', description: 'Websites, Buchungsprozesse und interne Tools auf Basis von über zwölf Jahren Enterprise-IT-Erfahrung.' }
  },
  solutions: {
    hu: { title: 'Megoldások | Botos Zoltán', description: 'Céges weboldalak, foglalási workflow-k, belső eszközök és strukturált megoldástervezés.' },
    en: { title: 'Solutions | Zoltan Botos', description: 'Business websites, booking workflows, internal tools and structured solution design.' },
    de: { title: 'Leistungen | Zoltan Botos', description: 'Unternehmenswebsites, Buchungsprozesse, interne Tools und strukturierte Lösungskonzeption.' }
  },
  projects: {
    hu: { title: 'Projektek | Botos Zoltán', description: 'MONA weboldal, MONA foglalási rendszer és Daily Verse: kiválasztott digitális munkák.' },
    en: { title: 'Projects | Zoltan Botos', description: 'MONA website, MONA booking system and Daily Verse: selected digital work.' },
    de: { title: 'Projekte | Zoltan Botos', description: 'MONA Website, MONA Buchungssystem und Daily Verse: ausgewählte digitale Projekte.' }
  },
  about: {
    hu: { title: 'Rólam | Botos Zoltán', description: 'Enterprise IT-tapasztalat, képzések és AI-asszisztált megoldástervezés.' },
    en: { title: 'About | Zoltan Botos', description: 'Enterprise IT experience, training and AI-assisted solution design.' },
    de: { title: 'Über mich | Zoltan Botos', description: 'Enterprise-IT-Erfahrung, Weiterbildungen und KI-unterstützte Lösungskonzeption.' }
  },
  monaWebsite: {
    hu: { title: 'MONA weboldal | Botos Zoltán', description: 'A MONA esküvői ruhaszalon weboldala és a próbaidőpont-kérések kapcsolata a belső rendszerrel.' },
    en: { title: 'MONA Website | Zoltan Botos', description: 'The MONA bridal salon website and its connection to the internal fitting-request workflow.' },
    de: { title: 'MONA Website | Zoltan Botos', description: 'Die Website des MONA Brautmodengeschäfts und die Anbindung von Anprobeanfragen an das interne System.' }
  },
  monaBooking: {
    hu: { title: 'MONA foglalási rendszer | Botos Zoltán', description: 'Belső ruha- és foglaláskövető rendszer a MONA esküvői ruhaszalonnak.' },
    en: { title: 'MONA Booking System | Zoltan Botos', description: 'An internal dress inventory and booking workflow for the MONA bridal salon.' },
    de: { title: 'MONA Buchungssystem | Zoltan Botos', description: 'Internes System für Kleiderbestand und Buchungsabläufe des MONA Brautmodengeschäfts.' }
  }
};

export const routes: Route[] = pageIds.flatMap((id) => languages.map((lang) => ({
  id, lang, path: paths[id][lang],
  type: id === 'home' ? 'home' : id === 'about' ? 'profile' : id.startsWith('mona') ? 'caseStudy' : 'listing',
  meta: { ...meta[id][lang], reviewStatus: id.startsWith('mona') ? 'content-review-needed' : 'source-reviewed' }
})));

if (new Set(routes.map((route) => route.path)).size !== routes.length) throw new Error('Duplicate localized route');
export const routeFor = (id: PageId, lang: Language): Route => {
  const route = routes.find((item) => item.id === id && item.lang === lang);
  if (!route) throw new Error(`Missing route ${id}/${lang}`);
  return route;
};
