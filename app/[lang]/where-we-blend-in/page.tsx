import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { availableImages } from '@/lib/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('blend') };
}

type Tile = { image: string; title: string; line: string };

export default async function WhereWeBlendIn({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('wwbi');
 const tiles = t.raw('tiles') as Tile[];
 return <main>
  <section className="section" style={{ paddingTop: 170 }}>
   <div className="container">
    <h1 className="display section-title animate-headline">{t('title')}</h1>
    <p className="copy">{t('intro')}</p>
    <div className="mosaic">
     {tiles.map((tile) => (
      <div className="mosaic-tile" key={tile.image} tabIndex={0}>
       <div className="flip">
        <div className="flip-front">{availableImages.has(tile.image) && <Image src={`/images/${tile.image}`} alt={tile.title} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />}</div>
        <div className="flip-back"><span className="flip-title">{tile.title}</span><span className="flip-line">{tile.line}</span></div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
