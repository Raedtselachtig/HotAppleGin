import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ServeSlider, type ServeStep } from '@/components/serve/ServeSlider';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('serve') };
}

export default async function Serve({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('serve');
 const steps = t.raw('steps') as ServeStep[];
 return <main>
  <section className="section" style={{ paddingTop: 180 }}>
   <div className="container">
    <h1 className="display section-title animate-headline" style={{ textAlign: 'center' }}>{t('title')}</h1>
    <p className="copy animate-headline" style={{ textAlign: 'center', margin: '0 auto' }}>{t('intro')}</p>
    <ServeSlider steps={steps} />
   </div>
  </section>
 </main>;
}
