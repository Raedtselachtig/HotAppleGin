import Image from 'next/image';
import { availableImages } from '@/lib/content';

export function Hero({ eyebrow, title, subtitle, imageName }: { eyebrow?: string; title: string; subtitle?: string; imageName: string }) {
  const hasImage = availableImages.has(imageName);
  const lines = title.split('\n');
  return <section className="hero">
    <div className="hero-bg ken-burns">{hasImage && <Image src={`/images/${imageName}`} alt={title.replace(/\n/g, ' ')} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />}</div>
    <div className="container hero-content">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="display headline">{lines.map((line, i) => <span key={i} className="word-stagger">{line}</span>)}</h1>
      {subtitle && <p className="hero-subtitle">{subtitle}</p>}
    </div>
  </section>;
}
