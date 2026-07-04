import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const base = 'https://hotapplegin.com';
const pages = ['', 'collection', 'our-story', 'serve', 'recipes', 'faq', 'partnerships', 'where-we-blend-in', 'contact', 'privacy', 'terms', 'cookies'];

// as-needed: standaardtaal (en) staat zonder prefix op de root, nl/de/fr onder /nl, /de, /fr.
function urlFor(locale: string, page: string) {
 const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
 const path = page ? `/${page}` : '';
 return `${base}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
 return pages.map((page) => ({
  url: urlFor(routing.defaultLocale, page),
  changeFrequency: 'monthly' as const,
  priority: page === '' ? 1 : 0.7,
  alternates: {
   languages: Object.fromEntries(routing.locales.map((l) => [l, urlFor(l, page)]))
  }
 }));
}
