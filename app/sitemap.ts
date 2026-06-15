import type { MetadataRoute } from 'next';
import { routes } from '@/lib/content';

const base = 'https://hotapplegin.com';
const pages = ['', 'collection', 'our-story', 'serve', 'recipes', 'faq', 'partnerships', 'where-we-blend-in', 'contact', 'privacy', 'terms', 'cookies'];

export default function sitemap(): MetadataRoute.Sitemap {
 return routes.flatMap((lang) => pages.map((page) => ({
  url: `${base}/${lang}${page ? `/${page}` : ''}`,
  changeFrequency: 'monthly' as const,
  priority: page === '' ? 1 : 0.7
 })));
}
