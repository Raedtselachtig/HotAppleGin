import Link from 'next/link';
import { Logo } from './Logo';

const nav = [['The Collection', 'collection'], ['Our Story', 'our-story'], ['The Serve', 'serve'], ['Recipe', 'recipes'], ['FAQ', 'faq'], ['Partnerships', 'partnerships'], ['Contact', 'contact']];

export function Footer({ lang }: { lang: string }) {
 return <footer className="footer">
  <div className="container footer-inner">
   <Link href={`/${lang}`} className="footer-logo"><Logo small /></Link>
   <p className="footer-tag">The Warm Winter Cocktail</p>
   <nav className="footer-nav">{nav.map(([label, href]) => <Link key={label} href={`/${lang}/${href}`}>{label}</Link>)}</nav>
   <div className="footer-meta">
    <a href="https://www.instagram.com/hotapplegin" target="_blank" rel="noopener noreferrer">Instagram</a>
    <span>© 2026 Hot Apple Gin Family Co.</span>
    <Link href={`/${lang}/privacy`}>Privacy</Link>
    <Link href={`/${lang}/terms`}>Terms</Link>
    <Link href={`/${lang}/cookies`}>Cookies</Link>
   </div>
   <p className="footer-responsible">Good things, in good measure. Please enjoy responsibly.</p>
  </div>
 </footer>;
}
