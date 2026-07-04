import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Logo } from './Logo';

// [vertaalsleutel, pad]. Link (next-intl) prefixt zelf de taal.
const nav: [string, string][] = [
 ['collection', 'collection'], ['ourStory', 'our-story'], ['serve', 'serve'], ['recipes', 'recipes'], ['faq', 'faq'], ['partnerships', 'partnerships'], ['contact', 'contact']
];

export function Footer() {
 const t = useTranslations('footer');
 return <footer className="footer">
  <div className="container footer-inner">
   <Link href="/" className="footer-logo"><Logo small /></Link>
   <p className="footer-tag">{t('tagline')}</p>
   <nav className="footer-nav">{nav.map(([key, href]) => <Link key={key} href={`/${href}`}>{t(key)}</Link>)}</nav>
   <div className="footer-meta">
    <a href="https://www.instagram.com/hotapplegin" target="_blank" rel="noopener noreferrer">{t('instagram')}</a>
    <span>{t('rights')}</span>
    <Link href="/privacy">{t('privacy')}</Link>
    <Link href="/terms">{t('terms')}</Link>
    <Link href="/cookies">{t('cookies')}</Link>
   </div>
   <p className="footer-responsible">{t('responsible')}</p>
  </div>
 </footer>;
}
