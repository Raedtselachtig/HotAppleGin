import Image from 'next/image';
import Link from 'next/link';
import { availableImages, availableVideos } from '@/lib/content';
import { HeroVideo } from './HeroVideo';

export function Hero({ eyebrow, title, subtitle, imageName, videoName, welcome, ctaHref, ctaLabel, align = 'center' }: {
 eyebrow?: string; title: string; subtitle?: string; imageName: string; videoName?: string;
 welcome?: string; ctaHref?: string; ctaLabel?: string; align?: 'center' | 'left';
}) {
 const hasImage = availableImages.has(imageName);
 const hasVideo = !!videoName && availableVideos.has(videoName);
 const lines = title.split('\n');
 return <section className={`hero hero--${align}`}>
  <div className="hero-bg ken-burns">
   {hasVideo
    ? <HeroVideo src={`/videos/${videoName}`} poster={hasImage ? `/images/${imageName}` : undefined} />
    : hasImage && <Image src={`/images/${imageName}`} alt={title.replace(/\n/g, ' ')} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />}
  </div>
  <div className="hero-glow" aria-hidden="true" />
  <div className="container hero-content">
   {eyebrow && <p className="eyebrow">{eyebrow}</p>}
   <h1 className="display headline">{lines.map((line, i) => <span key={i} className="word-stagger">{line}</span>)}</h1>
   {subtitle && <p className="hero-subtitle">{subtitle}</p>}
   {welcome && <p className="hero-welcome">{welcome}</p>}
   {ctaHref && ctaLabel && <Link className="cta hero-cta" href={ctaHref}>{ctaLabel}</Link>}
  </div>
 </section>;
}
