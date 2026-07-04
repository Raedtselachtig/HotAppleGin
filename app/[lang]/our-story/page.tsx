import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('ourStory') };
}

export default async function OurStory({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('story');
 const chat = t.raw('chat') as string[];
 const introParas = t('intro').split('\n\n').slice(1);
 const paras = t('origin').split('\n\n');
 const opening = paras[0];          // the founding-message intro line (real copy)
 const last = paras[paras.length - 1];
 const body = paras.slice(2, -1);   // skip opening + the quoted messages (shown as chat)
 return <main>
  <section className="section story-intro" style={{ paddingTop: 200, paddingBottom: 'clamp(34px, 4.5vw, 62px)' }}>
   <div className="container">
    <h1 className="display section-title animate-headline">{t('heading')}</h1>
    {introParas.map((p) => <p className="copy story-lead animate-headline" key={p}>{p}</p>)}
   </div>
  </section>

  <section className="story-scene">
   <div className="story-scene-bg"><Image src="/images/origin-fireside.jpg" alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: '28% 52%' }} /></div>
   <div className="container">
    <p className="eyebrow animate-headline">{t('howItStarted')}</p>
    <p className="copy story-line">{opening}</p>
    <div className="chat">{chat.map((m, i) => <div className="chat-bubble" key={i}><p>{m}</p></div>)}</div>
   </div>
  </section>

  <section className="section" style={{ paddingTop: 'clamp(32px, 4vw, 58px)', paddingBottom: 'clamp(16px, 2vw, 24px)' }}>
   <div className="container story-body">
    <h2 className="display section-title animate-headline" style={{ marginBottom: 30 }}>{t('originHeading')}</h2>
    {body.map((p) => <p className="copy story-line" key={p}>{p}</p>)}
   </div>
  </section>

  <section className="story-scene story-scene--center">
   <div className="story-scene-bg"><Image src="/images/origin-garden-fire.jpg" alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'left 66%' }} /></div>
   <div className="container"><p className="display manifesto-quote">{last}</p></div>
  </section>
 </main>;
}
