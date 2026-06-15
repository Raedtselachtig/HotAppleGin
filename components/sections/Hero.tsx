import { Particles } from '@/components/animations/Particles';
import { ImageSlot } from '@/components/ui/ImageSlot';

export function Hero({ eyebrow, title, subtitle, imageName }: { eyebrow?: string; title: string; subtitle?: string; imageName: string }) {
  return <section className="hero"><div className="hero-bg ken-burns"><ImageSlot alt={imageName} name={imageName} ratio="16/9" priority /></div><Particles /><div className="container hero-content">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1 className="display headline word-stagger">{title}</h1>{subtitle && <p className="hero-subtitle">{subtitle}</p>}</div></section>;
}
