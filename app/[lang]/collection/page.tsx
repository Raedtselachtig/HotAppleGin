import Image from 'next/image';
import { Hero } from '@/components/sections/Hero';
import { WaitlistForm } from '@/components/ui/Form';
import { products, availableImages } from '@/lib/content';

export const metadata = { title: 'The Collection' };

export default function Collection() {
 return <main>
  <Hero title="THE COLLECTION" subtitle="Available Seasonally" imageName="IMG_4704.jpg" />
  <section className="section" style={{ paddingTop: 'clamp(56px, 8vw, 96px)' }}>
   <div className="container">
    <div className="product-grid">
     {products.map(([title, copy, image]) => (
      <article className="product-card animate-headline" key={title}>
       <div className="product-card-img">{availableImages.has(image) && <Image src={`/images/${image}`} alt={title} fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />}</div>
       <div className="product-card-body">
        <h2 className="product-name">{title}</h2>
        <p className="copy product-copy">{copy}</p>
        <a className="cta" href="#waitlist">Be the first to know</a>
       </div>
      </article>
     ))}
    </div>
   </div>
  </section>
  <section className="section" id="waitlist" style={{ paddingTop: 0 }}><div className="container"><h2 className="display section-title animate-headline" style={{ maxWidth: '20ch' }}>Be the first to know when Hot Apple Gin returns.</h2><WaitlistForm /></div></section>
 </main>;
}
