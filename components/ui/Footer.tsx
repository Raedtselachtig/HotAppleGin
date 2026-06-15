import Link from 'next/link';
import { Logo } from './Logo';
const nav = [['Home',''],['The Collection','collection'],['Our Story','our-story'],['The Serve','serve'],['Recipes','recipes'],['FAQ','faq'],['Partnerships','partnerships'],['Contact','contact']];
export function Footer({ lang }: { lang: string }) {
  return <footer className="footer"><div className="container"><Logo small /><nav>{nav.map(([label, href]) => <Link key={label} href={`/${lang}/${href}`.replace(/\/$/,'')}>{label}</Link>)}</nav><p>Instagram: @hotapplegin</p><p>© 2026 Hot Apple Gin Family Co. · Privacy Policy · Terms</p><p className="eyebrow">Slow Down Together.</p></div></footer>;
}
