import Link from 'next/link';
import { recipes } from '@/lib/content';

export const metadata = { title: 'Recipe' };

export default async function Recipe({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const tiles = recipes
  .filter((r) => r.trim() !== '[COPY_NEEDED]')
  .map((r) => {
   const [head, ...rest] = r.split('\n\n');
   return { head, paras: rest };
  });
 return <main><section className="section" style={{ paddingTop: 170 }}><div className="container">
  <h1 className="display section-title animate-headline">RECIPE</h1>
  <div className="recipe-grid">
   {tiles.map((t, i) => <details className="recipe-tile" name="recipe" key={i}>
    <summary className="recipe-tile-h">{t.head}</summary>
    <div className="recipe-tile-body">
     {t.paras.map((p, j) => <p className="copy" key={j}>{p}</p>)}
     {i === tiles.length - 1 && <Link className="cta" href={`/${lang}/collection`}>Order the original</Link>}
    </div>
   </details>)}
  </div>
 </div></section></main>;
}
