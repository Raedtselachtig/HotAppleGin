import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('cookies') };
}

export default async function Cookies({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('legal');
 const paras = t.raw('cookies.paras') as string[];
 return <main>
  <section className="section legal" style={{ paddingTop: 170 }}>
   <div className="container">
    <h1 className="display section-title">{t('cookies.title')}</h1>
    {paras.map((p, i) => <p className="copy" key={i}>{p}</p>)}
   </div>
  </section>
 </main>;
}
