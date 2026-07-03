'use client';
import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';

// Eigen dropdown (geen native <select>, die is niet te stylen en rendert wit).
// Elke taal is een echte next-intl Link naar dezelfde pagina in die taal, dus
// navigeren gebeurt via gewone anchors - betrouwbaar en volledig te stylen.
export function LanguageSwitcher() {
 const t = useTranslations('language');
 const locale = useLocale();
 const pathname = usePathname();
 const [open, setOpen] = useState(false);
 const ref = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (!open) return;
  const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
  document.addEventListener('mousedown', onDoc);
  document.addEventListener('keydown', onKey);
  return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
 }, [open]);

 return (
  <div className="lang-switcher" ref={ref}>
   <button type="button" className="lang-current" aria-haspopup="listbox" aria-expanded={open} aria-label={t('label')} onClick={() => setOpen((v) => !v)}>
    <span>{t(locale as Locale)}</span>
    <svg className={`lang-caret${open ? ' open' : ''}`} width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
   </button>
   <ul className={`lang-menu${open ? ' open' : ''}`} role="listbox">
    {routing.locales.map((l) => (
     <li key={l} role="option" aria-selected={l === locale}>
      <Link href={pathname} locale={l} className={`lang-option${l === locale ? ' active' : ''}`} onClick={() => setOpen(false)}>{t(l)}</Link>
     </li>
    ))}
   </ul>
  </div>
 );
}
