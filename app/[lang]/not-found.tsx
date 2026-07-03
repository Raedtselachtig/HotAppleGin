import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

// Gelokaliseerde 404. not-found.tsx krijgt geen params; getLocale() leest de actieve
// taal expliciet uit de request, zodat de vertalingen kloppen.
export default async function NotFound() {
 const locale = await getLocale();
 const t = await getTranslations({ locale, namespace: 'notFound' });
 return <main>
  <section className="section" style={{ paddingTop: 200, paddingBottom: 120, textAlign: 'center' }}>
   <div className="container">
    <h1 className="display section-title">{t('title')}</h1>
    <p className="copy" style={{ margin: '0 auto', maxWidth: '46ch' }}>{t('body')}</p>
    <Link className="cta" href="/" style={{ marginTop: 24, display: 'inline-block' }}>{t('cta')}</Link>
   </div>
  </section>
 </main>;
}
