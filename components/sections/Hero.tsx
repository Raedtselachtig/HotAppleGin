import Image from 'next/image';
import { availableImages } from '@/lib/content';

export function Hero({ eyebrow, title, subtitle, imageName }: { eyebrow?: string; title: string; subtitle?: string; imageName: string }) {
  const hasImage = availableImages.has(imageName);
  return <section className="hero">
    <div className="hero-bg ken-burns">{hasImage && <Image src={`/images/${imageName}`} alt={title} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />}</div>
    <div className="container hero-content">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1 className="display headline word-stagger">{title}</h1>{subtitle && <p className="hero-subtitle">{subtitle}</p>}</div>
  </section>;
}
