import translations from './translations.json';
import type { Language } from './routes';

export function t(lang: Language, key: string): string {
  const dictionary = translations[lang] as Record<string, string>;
  const value = dictionary[key];
  if (!value) throw new Error(`Missing ${lang} translation: ${key}`);
  return value;
}

export const localText = {
  hu: { contact: 'Kapcsolat', readMore: 'Részletek', back: 'Vissza a projektekhez', website: 'Weboldal megtekintése', bookingNote: 'Belső üzemeltetési rendszer; publikus belépési link nélkül.', menu: 'Menü megnyitása' },
  en: { contact: 'Contact', readMore: 'Details', back: 'Back to projects', website: 'Visit website', bookingNote: 'Internal operations system; no public login link.', menu: 'Open menu' },
  de: { contact: 'Kontakt', readMore: 'Details', back: 'Zurück zu Projekten', website: 'Website besuchen', bookingNote: 'Internes Betriebssystem; kein öffentlicher Anmeldelink.', menu: 'Menü öffnen' }
} satisfies Record<Language, Record<string, string>>;
