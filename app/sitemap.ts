import type { MetadataRoute } from 'next';
const pages = ['', 'collection', 'our-story', 'serve', 'recipes', 'faq', 'partnerships', 'where-we-blend-in', 'contact', 'shop'];
export default function sitemap(): MetadataRoute.Sitemap { return pages.map((page) => ({ url: `https://hotapplegin.com/en${page ? `/${page}` : ''}`, lastModified: new Date() })); }
