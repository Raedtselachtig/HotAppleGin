import Link from 'next/link';
import { recipes } from '@/lib/content';
export const metadata = { title: 'Recipes' };
export default async function Recipes({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <main><section className="section" style={{ paddingTop: 150 }}><div className="container" style={{ display: 'grid', gap: 70 }}>{recipes.map((recipe, index) => <article className="card" key={index}><p className="copy">{recipe}</p>{index === 3 && <Link className="cta" href={`/${lang}/collection`}>Order the original</Link>}</article>)}</div></section></main>;
}
