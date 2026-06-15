'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const nav = [
 ['Home', ''], ['The Collection', 'collection'], ['Our Story', 'our-story'], ['The Serve', 'serve'], ['Recipe', 'recipes'], ['FAQ', 'faq'], ['Partnerships', 'partnerships'], ['Contact', 'contact']
];

export function Header({ lang }: { lang: string }) {
 const [scrolled, setScrolled] = useState(false);
 const [open, setOpen] = useState(false);
 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 24);
  onScroll(); window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
 }, []);
 return (
  <>
   <header className={`header ${scrolled ? 'scrolled' : ''}`}>
    <div className="container header-inner">
     <Link href={`/${lang}`}><Logo /></Link>
     <nav className="nav">{nav.map(([label, href]) => <Link key={label} href={`/${lang}/${href}`.replace(/\/$/, '')}>{label}</Link>)}</nav>
     <button className="menu-button" onClick={() => setOpen(true)}>Menu</button>
    </div>
   </header>
   <div className={`mobile-menu ${open ? 'open' : ''}`}>
    <button className="close-menu" onClick={() => setOpen(false)}>Close</button>
    <nav>{nav.map(([label, href]) => <Link onClick={() => setOpen(false)} key={label} href={`/${lang}/${href}`.replace(/\/$/, '')}>{label}</Link>)}</nav>
   </div>
  </>
 );
}
