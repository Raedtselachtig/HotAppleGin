import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/ui/Form';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('partnerships') };
}

type Card = { title: string; body: string };

export default async function Partnerships({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('partnerships');
 const workWith = t.raw('workWith') as Card[];
 const steps = t.raw('steps') as Card[];
 const why = t.raw('why') as Card[];
 return <main>
  <section className="section" style={{ paddingTop: 170, paddingBottom: 40 }}>
   <div className="container grid-two" style={{ alignItems: 'stretch' }}>
    <div>
     <h1 className="display section-title animate-headline">{t('title')}</h1>
     <p className="copy animate-headline">{t('intro')}</p>
    </div>
    <div className="animate-headline partnerships-header-img">
     <Image src="/images/partnerships-production.jpg" alt="Hot Apple Gin production" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="(max-width: 900px) 100vw, 50vw" />
    </div>
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0, paddingBottom: 40 }}>
   <div className="container">
    <p className="eyebrow animate-headline">{t('workWithEyebrow')}</p>
    <p className="copy animate-headline" style={{ marginBottom: 8 }}>{t('workWithSub')}</p>
    <div className="pill-grid">{workWith.map((w) => <details className="pill" name="ww" key={w.title}><summary>{w.title}</summary><div className="pill-body"><p>{w.body}</p></div></details>)}</div>
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0, paddingBottom: 40 }}>
   <div className="container">
    <p className="eyebrow animate-headline">{t('howItWorksEyebrow')}</p>
    <div className="card-grid">{steps.map((s) => <a className="mini-card mini-card--link" href="#enquire" key={s.title}><h3>{s.title}</h3><p>{s.body}</p></a>)}</div>
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0, paddingBottom: 40 }}>
   <div className="container">
    <p className="eyebrow animate-headline">{t('whyEyebrow')}</p>
    <div className="card-grid">{why.map((w) => <div className="mini-card" key={w.title}><h3>{w.title}</h3><p>{w.body}</p></div>)}</div>
   </div>
  </section>
  <section className="section" id="enquire" style={{ paddingTop: 0, paddingBottom: 40, scrollMarginTop: 110 }}>
   <div className="container grid-two">
    <div>
     <h2 className="display section-title animate-headline">{t('becomeTitle')}</h2>
     <p className="copy">{t('becomeCopy')}</p>
    </div>
    <ContactForm fields={['name', 'company', 'email', 'message']} button={t('formButton')} subject="Verzoek van partnerships" fromName="Hot Apple Gin Family Co." />
   </div>
  </section>
 </main>;
}
