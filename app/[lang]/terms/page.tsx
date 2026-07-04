import { Fragment } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('terms') };
}

type Section = { h: string; p: string };

export default async function Terms({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('legal');
 const sections = t.raw('terms.sections') as Section[];
 return <main>
  <section className="section legal" style={{ paddingTop: 170 }}>
   <div className="container">
    <h1 className="display section-title">{t('terms.title')}</h1>
    <p className="muted legal-date">{t('lastUpdated')}</p>
    <p className="copy">{t('terms.intro')}</p>
    {sections.map((s, i) => <Fragment key={i}><h2 className="legal-h">{s.h}</h2><p className="copy">{s.p}</p></Fragment>)}
   </div>
  </section>
 </main>;
}
