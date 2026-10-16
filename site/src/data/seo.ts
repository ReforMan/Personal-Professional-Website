import { t } from './i18n';
import { languages, paths, type Language, type Route } from './routes';

export const SITE_ORIGIN = 'https://zoltanbotos.com';
export const SITE_NAME = 'Zoltan Botos';
export const DEFAULT_LANGUAGE: Language = 'hu';
export const SOCIAL_IMAGE_PATH = '/photos/og-zoltan-botos.jpg';

export const absoluteUrl = (path: string): string => new URL(path, SITE_ORIGIN).href;

export const localeFor = (language: Language): string => ({
  hu: 'hu_HU',
  en: 'en_US',
  de: 'de_DE'
})[language];

export const alternateLinksFor = (route: Route) => [
  ...languages.map((language) => ({ language, href: absoluteUrl(paths[route.id][language]) })),
  { language: 'x-default' as const, href: absoluteUrl(paths[route.id][DEFAULT_LANGUAGE]) }
];

const personId = `${SITE_ORIGIN}/#person`;
const websiteId = `${SITE_ORIGIN}/#website`;

const personNode = {
  '@type': 'Person',
  '@id': personId,
  name: 'Zoltan Botos',
  url: SITE_ORIGIN,
  image: absoluteUrl('/photos/zoltan-headshot-cutout.png'),
  sameAs: ['https://www.linkedin.com/in/zoltan-botos/'],
  knowsLanguage: ['hu', 'en', 'de'],
  knowsAbout: ['Enterprise IT', 'Solution design', 'Web development', 'Booking workflows', 'Internal business tools']
};

const pageTypeFor = (route: Route): string => {
  if (route.id === 'about') return 'ProfilePage';
  if (route.id === 'solutions' || route.id === 'projects') return 'CollectionPage';
  return 'WebPage';
};

const projectItems = (route: Route) => [
  {
    '@type': 'CreativeWork',
    name: t(route.lang, 'work-mona-title'),
    description: t(route.lang, 'work-mona-desc'),
    url: absoluteUrl(paths.monaWebsite[route.lang]),
    image: absoluteUrl('/photos/mona-website-screenshot.jpg')
  },
  {
    '@type': 'CreativeWork',
    name: t(route.lang, 'work-mona2-title'),
    description: t(route.lang, 'work-mona2-desc'),
    url: absoluteUrl(paths.monaBooking[route.lang]),
    image: absoluteUrl('/photos/mona-booking-screenshot.jpg')
  },
  {
    '@type': 'SoftwareApplication',
    name: 'Daily Verse',
    description: t(route.lang, 'work-dv-desc'),
    url: 'https://daily-verse-ten.vercel.app/',
    applicationCategory: 'LifestyleApplication',
    image: absoluteUrl('/photos/daily-verse-screenshot.png')
  }
];

export function structuredDataFor(route: Route) {
  const canonical = absoluteUrl(route.path);
  const pageId = `${canonical}#webpage`;
  const graph: Record<string, unknown>[] = [];

  if (route.id === 'home' && route.lang === DEFAULT_LANGUAGE) {
    graph.push({
      '@type': 'WebSite',
      '@id': websiteId,
      url: SITE_ORIGIN,
      name: SITE_NAME,
      inLanguage: languages,
      publisher: { '@id': personId }
    });
  }

  graph.push(personNode);

  const pageNode: Record<string, unknown> = {
    '@type': pageTypeFor(route),
    '@id': pageId,
    url: canonical,
    name: route.meta.title,
    description: route.meta.description,
    inLanguage: route.lang,
    isPartOf: { '@id': websiteId },
    author: { '@id': personId },
    image: absoluteUrl(SOCIAL_IMAGE_PATH)
  };

  if (route.id === 'about') pageNode.mainEntity = { '@id': personId };

  if (route.id === 'solutions') {
    pageNode.mainEntity = {
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [1, 2, 3, 4, 5].map((number, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: t(route.lang, `card${number}-title`),
          description: t(route.lang, `card${number}-desc`),
          provider: { '@id': personId }
        }
      }))
    };
  }

  if (route.id === 'projects') {
    pageNode.mainEntity = {
      '@type': 'ItemList',
      numberOfItems: 3,
      itemListElement: projectItems(route).map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item
      }))
    };
  }

  if (route.id === 'monaWebsite' || route.id === 'monaBooking') {
    pageNode.mainEntity = {
      '@type': 'CreativeWork',
      name: route.id === 'monaWebsite' ? t(route.lang, 'work-mona-title') : t(route.lang, 'work-mona2-title'),
      description: route.id === 'monaWebsite' ? t(route.lang, 'work-mona-desc') : t(route.lang, 'work-mona2-desc'),
      url: canonical,
      inLanguage: route.lang,
      image: absoluteUrl(route.id === 'monaWebsite' ? '/photos/mona-website-screenshot.jpg' : '/photos/mona-booking-screenshot.jpg'),
      creator: { '@id': personId },
      ...(route.id === 'monaWebsite' ? { sameAs: 'https://monaeskuvo.com/' } : {})
    };
  }

  graph.push(pageNode);
  return { '@context': 'https://schema.org', '@graph': graph };
}
