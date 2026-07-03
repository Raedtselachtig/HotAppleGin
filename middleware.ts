import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Alles behalve: /api, /studio (Sanity-admin, eentalig), Next-interne routes en
  // bestanden met extensie (.jpg, .mp4, sitemap.xml, robots.txt, ...).
  matcher: ['/((?!api|studio|_next|_vercel|.*\\..*).*)']
};
