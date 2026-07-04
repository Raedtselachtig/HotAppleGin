import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('recipes') };
}

type Block = { type: string; text?: string; items?: string[] };
type Section = { head: string; image: string; blocks: Block[] };

export default async function Recipe({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('recipes');
 const sections = t.raw('sections') as Section[];
 return <main>
  <section className="recipe-hero">
   <div className="recipe-hero-bg ken-burns"><Image src="/images/recipe-hero.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover' }} /></div>
   <div className="container"><h1 className="display section-title animate-headline" style={{ margin: 0 }}>{t('heroTitle')}</h1></div>
  </section>
  <section className="section" style={{ paddingTop: 'clamp(40px, 5vw, 72px)' }}><div className="container">
  <div className="recipe-grid">
   {sections.map((s, si) => (
    <details className="recipe-tile" name="recipe" key={si}>
     <summary className="recipe-tile-h">{s.head}</summary>
     <div className="recipe-tile-body">
      <div className="recipe-figure"><Image src={`/images/${s.image}`} alt="" width={900} height={900} sizes="(max-width: 900px) 100vw, 360px" /></div>
      {s.blocks.map((b, bi) => {
       if (b.type === 'quote') return <p className="display recipe-quote" key={bi}>{b.text}</p>;
       if (b.type === 'list') return <ul className="recipe-plainlist" key={bi}>{b.items!.map((it, ii) => <li key={ii}>{it}</li>)}</ul>;
       if (b.type === 'ingredients') return <ul className="recipe-ingredients" key={bi}>{b.items!.map((it, ii) => <li key={ii}>{it}</li>)}</ul>;
       if (b.type === 'lines') return <p className="recipe-lines" key={bi}>{b.items!.map((it, ii) => <span key={ii}>{it}</span>)}</p>;
       if (b.type === 'triad') return <div className="recipe-triad" key={bi}>{b.items!.map((it, ii) => <span key={ii}>{it}</span>)}</div>;
       if (b.type === 'redacted') return <p className="recipe-redacted" key={bi}><span className="recipe-redacted-stamp">{t('classified')}</span><span className="recipe-redacted-text">{b.text}</span></p>;
       return <p className="copy" key={bi}>{b.text}</p>;
      })}
      {si === sections.length - 1 && <Link className="cta recipe-cta" href="/collection">{t('orderCta')}</Link>}
     </div>
    </details>
   ))}
  </div>
 </div></section></main>;
}
