import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-bewuste Link/router: prefixt automatisch de juiste taal (en zonder prefix,
// nl/de/fr met /nl, /de, /fr). Gebruik deze i.p.v. next/link binnen de site.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
