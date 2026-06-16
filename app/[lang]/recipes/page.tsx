import Image from 'next/image';
import Link from 'next/link';
import { recipeSections } from '@/lib/content';

export const metadata = { title: 'Recipe' };

export default async function Recipe({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 return <main>
  <section className="section recipe-head-section" style={{ paddingTop: 170, paddingBottom: 0 }}>
   <div className="container" style={{ textAlign: 'center' }}>
    <h1 className="display section-title animate-headline">RECIPE</h1>
   </div>
  </section>

  {recipeSections.map((s, si) => (
   <section className="section recipe-section" key={si} style={{ paddingTop: 'clamp(40px, 6vw, 80px)' }}>
    <div className="container recipe-wrap">
     <h2 className="display recipe-head animate-headline">{s.head}</h2>
     <div className="recipe-figure animate-headline">
      <Image src={`/images/${s.image}`} alt="" width={1280} height={840} sizes="(max-width: 820px) 100vw, 760px" />
     </div>
     <div className="recipe-body">
      {s.blocks.map((b, bi) => {
       if (b.type === 'quote') return <p className="display recipe-quote animate-headline" key={bi}>{b.text}</p>;
       if (b.type === 'list') return <ul className="recipe-plainlist" key={bi}>{b.items!.map((it, ii) => <li key={ii}>{it}</li>)}</ul>;
       if (b.type === 'ingredients') return <ul className="recipe-ingredients" key={bi}>{b.items!.map((it, ii) => <li key={ii}>{it}</li>)}</ul>;
       if (b.type === 'lines') return <p className="recipe-lines" key={bi}>{b.items!.map((it, ii) => <span key={ii}>{it}</span>)}</p>;
       if (b.type === 'triad') return <div className="recipe-triad" key={bi}>{b.items!.map((it, ii) => <span key={ii}>{it}</span>)}</div>;
       if (b.type === 'redacted') return <p className="recipe-redacted" key={bi}><span className="recipe-redacted-stamp">Classified</span><span className="recipe-redacted-text">{b.text}</span></p>;
       return <p className="copy" key={bi}>{b.text}</p>;
      })}
      {si === recipeSections.length - 1 && <Link className="cta recipe-cta" href={`/${lang}/collection`}>Order the original</Link>}
     </div>
    </div>
   </section>
  ))}
 </main>;
}
