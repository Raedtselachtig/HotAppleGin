import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Hero } from '@/components/sections/Hero';
import { Band } from '@/components/sections/Band';
import { RickrollLine } from '@/components/ui/RickrollLine';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('home');
 return <main>
  <Hero
   eyebrow={t('heroEyebrow')}
   title={t('heroTitle')}
   ctaHref="/collection"
   ctaLabel={t('heroCta')}
   cta2Href="/partnerships"
   cta2Label={t('heroCta2')}
   imageName="hero-lounge.jpg"
   videoName="hero-lounge.mp4"
   align="left"
  />
  <section className="section manifesto">
   <div className="container manifesto-inner">
    <div className="manifesto-rule animate-headline" />
    <p className="display manifesto-quote animate-headline">{t('manifesto')}</p>
   </div>
  </section>
  <Band title={t('collectionBandTitle')} copy={t('collectionBandCopy')} link="/collection" label={t('collectionBandLabel')} image="collection-bar.jpg" />
  <section className="section quiet-band">
   <div className="container">
    <div className="quiet-rule animate-headline" />
    <h2 className="display section-title animate-headline">{t('storyTitle')}</h2>
    <p className="copy animate-headline">{t('storyCopy')}</p>
    <Link className="cta animate-headline" href="/our-story">{t('storyLink')}</Link>
   </div>
  </section>
  <Band title={t('servedBandTitle')} copy={t('servedBandCopy')} link="/serve" label={t('servedBandLabel')} image="served-warm-people.jpg" />
  <section className="section quiet-band">
   <div className="container">
    <div className="quiet-rule animate-headline" />
    <h2 className="display section-title animate-headline">{t('blendTitle')}</h2>
    <p className="copy animate-headline">{t('blendCopy')}</p>
    <Link className="cta animate-headline" href="/where-we-blend-in">{t('blendLink')}</Link>
   </div>
  </section>
  <Band title={t('partnersBandTitle')} copy={t('partnersBandCopy')} link="/partnerships" label={t('partnersBandLabel')} image="partners-restaurant.jpg" />
  <section className="section quiet-band" style={{ paddingBottom: 'clamp(18px, 2.5vw, 36px)' }}>
   <div className="container">
    <h2 className="display section-title animate-headline">{t('modernClassic')}</h2>
    <RickrollLine text={t('rickrollText')} hint={t('rickrollHint')} />
   </div>
  </section>
 </main>;
}
