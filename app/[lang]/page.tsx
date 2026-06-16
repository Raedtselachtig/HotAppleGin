import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { Band } from '@/components/sections/Band';
import { RickrollLine } from '@/components/ui/RickrollLine';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 return <main>
  <Hero
   eyebrow="A Winter Cocktail · Served Warm"
   title={'NEW MEMORIES\nSAME WARMTH'}
   ctaHref={`/${lang}/collection`}
   ctaLabel="Meet the Collection"
   cta2Href={`/${lang}/partnerships`}
   cta2Label="Become a Partner"
   imageName="hero-lounge.jpg"
   videoName="hero-lounge.mp4"
   align="left"
  />
  <section className="section manifesto">
   <div className="container manifesto-inner">
    <div className="manifesto-rule animate-headline" />
    <p className="display manifesto-quote animate-headline">{'Hot Apple Gin was never meant to become a brand. It was meant to be enjoyed by family and friends, in winter, with nowhere to be. And it actually still is.'}</p>
   </div>
  </section>
  <Band title="THE COLLECTION" copy="Bottles for slow nights and people who rarely leave after one glass." link={`/${lang}/collection`} label="Meet the Collection" image="IMG_4627.jpg" />
  <section className="section quiet-band">
   <div className="container">
    <div className="quiet-rule animate-headline" />
    <h2 className="display section-title animate-headline">OUR STORY</h2>
    <p className="copy animate-headline">{'Built on moments, not occasions.\nA drink that brings people together.'}</p>
    <Link className="cta animate-headline" href={`/${lang}/our-story`}>Where it began</Link>
   </div>
  </section>
  <Band title="SERVED WARM" copy="Some things simply work better warm. Slowly heated. Carefully served." link={`/${lang}/serve`} label="Discover the Serve" image="wwbi-cafe-winter-terrace.jpg" />
  <section className="section quiet-band">
   <div className="container">
    <div className="quiet-rule animate-headline" />
    <h2 className="display section-title animate-headline">WHERE WE BLEND IN</h2>
    <p className="copy animate-headline">{'From quiet nights to crowded tables.\nDifferent settings, same warmth.'}</p>
    <Link className="cta animate-headline" href={`/${lang}/where-we-blend-in`}>See where we blend in</Link>
   </div>
  </section>
  <Band title="PARTNERSHIPS" copy="Built for curated menus and standout shelves." link={`/${lang}/partnerships`} label="Available for select partners" image="partners-hotel-lobby.jpg" />
  <section className="section quiet-band" style={{ paddingBottom: 'clamp(18px, 2.5vw, 36px)' }}>
   <div className="container">
    <h2 className="display section-title animate-headline">A MODERN CLASSIC IN THE MAKING</h2>
    <RickrollLine text="Somebody had to say it." />
   </div>
  </section>
 </main>;
}
