import { defineRouting } from 'next-intl/routing';

// Talen van de site. 'en' is de standaard en verschijnt zonder prefix op de root
// (/, /collection, ...). nl/de/fr staan onder /nl, /de, /fr.
// Volgorde bepaalt ook de taalswitcher-volgorde.
export const routing = defineRouting({
  locales: ['en', 'nl', 'de', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export type Locale = (typeof routing.locales)[number];
