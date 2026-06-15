import { Hero } from '@/components/sections/Hero';
import { Band } from '@/components/sections/Band';

export const metadata = { title: 'Light preview' };

// Not in the nav — a side-by-side comparison of a warm-light palette.
export default async function LightPreview({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 return <div className="theme-light">
  <main>
   <Hero eyebrow="A Winter Cocktail · Served Warm" title={'NEW STORY\nSAME WARMTH'} ctaHref={`/${lang}/collection`} ctaLabel="Meet the Collection" imageName="hero-lounge.jpg" align="left" />
   <section className="section manifesto">
    <div className="container manifesto-inner">
     <div className="manifesto-rule animate-headline" />
     <p className="display manifesto-quote animate-headline">{'Hot Apple Gin was never meant to become a brand. It was meant to be enjoyed by family, in winter, with nowhere to be.'}</p>
    </div>
   </section>
   <Band title="THE COLLECTION" copy="Bottles for slow nights and people who rarely leave after one glass." link={`/${lang}/collection`} label="Meet the Collection" image="IMG_4627.jpg" />
   <section className="section">
    <div className="container">
     <p className="eyebrow">OUR STORY</p>
     <p className="copy">{'Built on moments, not occasions.\nA drink that brings people together.'}</p>
    </div>
   </section>
  </main>
 </div>;
}
