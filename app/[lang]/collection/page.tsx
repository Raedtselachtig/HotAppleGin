import { Hero } from '@/components/sections/Hero';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { WaitlistForm } from '@/components/ui/Form';
import { products } from '@/lib/content';

export const metadata = { title: 'The Collection' };
export default function Collection() {
 return <main>
  <Hero title="THE COLLECTION" subtitle="AVAILABLE SEASONALLY" imageName="IMG_4704.jpg" />
  <section className="section"><div className="container"><a className="cta" href="#waitlist">Be the first to know</a></div></section>
  <section className="section"><div className="container" style={{ display: 'grid', gap: 44 }}>{products.map(([title, copy, image], index) => <article className="grid-two" key={title}><ImageSlot name={image} alt={image} ratio="4/5" /><div><h2 className="display section-title animate-headline">{title}</h2><p className="copy">{copy}</p></div></article>)}</div></section>
  <section className="section" id="waitlist"><div className="container"><h2 className="display section-title animate-headline">Be the first to know when Hot Apple Gin returns.</h2><WaitlistForm /></div></section>
 </main>;
}
