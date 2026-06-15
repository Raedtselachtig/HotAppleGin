import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { ImageSlot } from '@/components/ui/ImageSlot';

function Teaser({ title, copy, link, label, image }: { title: string; copy: string; link: string; label: string; image: string }) {
  return <section className="section"><div className="container grid-two"><ImageSlot name={image} alt={image} /><div><p className="eyebrow animate-headline">{title}</p><p className="copy">{copy}</p><Link className="cta" href={link}>{label}</Link></div></div></section>;
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <main>
    <Hero title="NEW STORY SAME WARMTH" subtitle="A Winter Cocktail — Served Warm" imageName="IMG_4704.jpg" />
    <Teaser title="THE COLLECTION" copy="Bottles for slow nights and people who rarely leave after one glass." link={`/${lang}/collection`} label="Meet the Collection" image="IMG_4627.jpg" />
    <Teaser title="OUR STORY" copy={'Built on moments, not occasions.\nA drink that brings people together.'} link={`/${lang}/our-story`} label="Where it began" image="IMG_4635.jpg" />
    <Teaser title="SERVED WARM" copy="Some things simply work better warm. Slowly heated. Carefully poured." link={`/${lang}/serve`} label="Discover the Serve" image="IMG_4047.jpg" />
    <section className="section"><div className="container"><h2 className="display section-title animate-headline">WHERE WE BLEND IN</h2><p className="copy">{'From quiet nights to crowded tables.\nDifferent settings, same warmth.\nSomehow, we always seem to fit right in.'}</p><div className="grid-two" style={{ marginTop: 42 }}><ImageSlot name="apres-ski.jpg" alt="Hot Apple Gin served après-ski" ratio="3/4" /><ImageSlot name="winter-garden-party.png" alt="Hot Apple Gin at a winter garden party" ratio="3/4" /></div></div></section>
    <section className="section"><div className="container"><p className="eyebrow animate-headline">PARTNERSHIPS</p><p className="copy">Built for premium menus and standout shelves.</p><Link className="cta" href={`/${lang}/partnerships`}>Available for select partners</Link></div></section>
    <section className="section"><div className="container" style={{ textAlign: 'center' }}><h2 className="display section-title animate-headline">A MODERN CLASSIC IN THE MAKING</h2><p className="copy" style={{ margin: '0 auto' }}>Somebody had to say it.</p></div></section>
  </main>;
}
