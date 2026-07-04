import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { availableImages, availableVideos } from '@/lib/content';
import { HeroVideo } from './HeroVideo';

export function Hero({ eyebrow, title, subtitle, imageName, videoName, welcome, ctaHref, ctaLabel, cta2Href, cta2Label, align = 'center', focal = '70% center' }: {
 eyebrow?: string; title: string; subtitle?: string; imageName: string; videoName?: string;
 welcome?: string; ctaHref?: string; ctaLabel?: string; cta2Href?: string; cta2Label?: string; align?: 'center' | 'left'; focal?: string;
}) {
 const hasImage = availableImages.has(imageName);
 const hasVideo = !!videoName && availableVideos.has(videoName);
 const lines = title.split('\n');
 return <section className={`hero hero--${align}`}>
  <div className="hero-bg ken-burns">
   {hasImage && <Image src={`/images/${imageName}`} alt={title.replace(/\n/g, ' ')} fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: focal }} />}
   {hasVideo && <HeroVideo src={`/videos/${videoName}`} focal={focal} />}
  </div>
  <div className="hero-glow" aria-hidden="true" />
  <div className="container hero-content">
   {eyebrow && <p className="eyebrow">{eyebrow}</p>}
   <h1 className="display headline">{lines.map((line, i) => <span key={i} className="word-stagger">{line}</span>)}</h1>
   {subtitle && <p className="hero-subtitle">{subtitle}</p>}
   {welcome && <p className="hero-welcome">{welcome}</p>}
   {ctaHref && ctaLabel && <div className="hero-cta">
    <Link className="cta" href={ctaHref}>{ctaLabel}</Link>
    {cta2Href && cta2Label && <Link className="cta" href={cta2Href}>{cta2Label}</Link>}
   </div>}
  </div>
 </section>;
}
