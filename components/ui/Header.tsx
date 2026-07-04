'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

// [vertaalsleutel, pad]. Pad '' = home. Link (next-intl) prefixt zelf de taal.
const nav: [string, string][] = [
 ['home', ''], ['collection', 'collection'], ['ourStory', 'our-story'], ['serve', 'serve'], ['recipes', 'recipes'], ['faq', 'faq'], ['partnerships', 'partnerships'], ['contact', 'contact']
];

export function Header() {
 const t = useTranslations('nav');
 const [scrolled, setScrolled] = useState(false);
 const [open, setOpen] = useState(false);
 const pathname = usePathname();
 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 24);
  onScroll(); window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
 }, []);
 const hrefFor = (href: string) => href === '' ? '/' : `/${href}`;
 const isActive = (href: string) => href === '' ? pathname === '/' : pathname === hrefFor(href);
 return (
  <>
   <header className={`header ${scrolled ? 'scrolled' : ''}`}>
    <div className="container header-inner">
     <Link href="/"><Logo /></Link>
     <nav className="nav">{nav.map(([key, href]) => <Link key={key} className={isActive(href) ? 'active' : ''} href={hrefFor(href)}>{t(key)}</Link>)}</nav>
     <div className="header-actions">
      <LanguageSwitcher />
      <button className="menu-button" onClick={() => setOpen(true)}>{t('menu')}</button>
     </div>
    </div>
   </header>
   <div className={`mobile-menu ${open ? 'open' : ''}`}>
    <button className="close-menu" onClick={() => setOpen(false)}>{t('close')}</button>
    <nav>{nav.map(([key, href]) => <Link onClick={() => setOpen(false)} key={key} className={isActive(href) ? 'active' : ''} href={hrefFor(href)}>{t(key)}</Link>)}</nav>
   </div>
  </>
 );
}
