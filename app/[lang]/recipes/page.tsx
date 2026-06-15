import Link from 'next/link';
import { recipes } from '@/lib/content';

export const metadata = { title: 'Recipe' };

export default async function Recipe({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const tiles = recipes
  .filter((r) => r.trim() !== '[COPY_NEEDED]')
  .map((r) => {
   const [head, ...rest] = r.split('\n\n');
   return { head, body: rest.join('\n\n') };
  });
 return <main><section className="section" style={{ paddingTop: 170 }}><div className="container">
  <h1 className="display section-title animate-headline">RECIPE</h1>
  <div className="recipe-grid">
   {tiles.map((t, i) => <article className="recipe-tile animate-headline" key={i}>
    <h2 className="recipe-tile-h">{t.head}</h2>
    <p className="copy">{t.body}</p>
    {i === tiles.length - 1 && <Link className="cta" href={`/${lang}/collection`}>Order the original</Link>}
   </article>)}
  </div>
 </div></section></main>;
}
