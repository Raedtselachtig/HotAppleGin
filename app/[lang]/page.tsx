import { Hero } from '@/components/sections/Hero';
import { Band } from '@/components/sections/Band';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 return <main>
  <Hero
   eyebrow="A Winter Cocktail · Served Warm"
   title={'NEW STORY\nSAME WARMTH'}
   ctaHref={`/${lang}/collection`}
   ctaLabel="Meet the Collection"
   imageName="hero-lounge.jpg"
   align="left"
  />
  <section className="section manifesto">
   <div className="container manifesto-inner">
    <div className="manifesto-rule animate-headline" />
    <p className="display manifesto-quote animate-headline">{'Hot Apple Gin was never meant to become a brand. It was meant to be enjoyed by family, in winter, with nowhere to be.'}</p>
   </div>
  </section>
  <Band title="THE COLLECTION" copy="Bottles for slow nights and people who rarely leave after one glass." link={`/${lang}/collection`} label="Meet the Collection" image="IMG_4627.jpg" />
  <Band title="OUR STORY" copy={'Built on moments, not occasions.\nA drink that brings people together.'} link={`/${lang}/our-story`} label="Where it began" image="IMG_4635.jpg" />
  <Band title="SERVED WARM" copy="Some things simply work better warm. Slowly heated. Carefully poured." link={`/${lang}/serve`} label="Discover the Serve" image="IMG_4047.jpg" />
  <Band title="WHERE WE BLEND IN" copy={'From quiet nights to crowded tables.\nDifferent settings, same warmth.\nSomehow, we always seem to fit right in.'} link={`/${lang}/where-we-blend-in`} label="See where we blend in" image="apres-ski.jpg" />
  <Band title="PARTNERSHIPS" copy="Built for premium menus and standout shelves." link={`/${lang}/partnerships`} label="Available for select partners" image="IMG_3978.jpg" />
  <section className="section"><div className="container" style={{ textAlign: 'center' }}><h2 className="display section-title animate-headline">A MODERN CLASSIC IN THE MAKING</h2><p className="copy animate-headline" style={{ margin: '0 auto' }}>Somebody had to say it.</p></div></section>
 </main>;
}
