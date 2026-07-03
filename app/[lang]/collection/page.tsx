import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { WaitlistForm } from '@/components/ui/Form';
import { availableImages } from '@/lib/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('collection') };
}

type Product = { title: string; copy: string; image: string; specs: string };

export default async function Collection({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('collection');
 const products = t.raw('products') as Product[];

 const productSchema = {
  '@context': 'https://schema.org',
  '@graph': products.map((p) => ({
   '@type': 'Product',
   name: p.title,
   description: p.copy.replace(/\n/g, ' '),
   image: `/images/${p.image}`,
   brand: { '@type': 'Brand', name: 'Hot Apple Gin' },
   category: 'Warm cocktail (RTD)'
  }))
 };

 return <main>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
  <Hero title={t('heroTitle')} subtitle={t('heroSubtitle')} imageName="IMG_4704.jpg" focal="center" />
  <section className="section" style={{ paddingTop: 'clamp(56px, 8vw, 96px)' }}>
   <div className="container">
    <div className="product-grid">
     {products.map((p) => (
      <article className="product-card animate-headline" key={p.title}>
       <div className="product-card-img">{availableImages.has(p.image) && <Image src={`/images/${p.image}`} alt={p.title} fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />}</div>
       <div className="product-card-body">
        <h2 className="product-name">{p.title}</h2>
        <p className="product-spec">{p.specs}</p>
        <p className="copy product-copy">{p.copy}</p>
        <a className="cta" href="#waitlist">{t('productCta')}</a>
       </div>
      </article>
     ))}
    </div>
   </div>
  </section>
  <section className="section" id="waitlist" style={{ paddingTop: 0 }}><div className="container"><h2 className="display section-title animate-headline" style={{ maxWidth: '20ch' }}>{t('waitlistTitle')}</h2><WaitlistForm /></div></section>
 </main>;
}
