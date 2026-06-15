import Image from 'next/image';
import { Placeholder } from './Placeholder';
import { availableImages } from '@/lib/content';

export function ImageSlot({ src, alt, name, ratio = '4/5', priority = false }: { src?: string; alt: string; name: string; ratio?: string; priority?: boolean }) {
  const resolved = src ?? (availableImages.has(name) ? `/images/${name}` : undefined);
  if (!resolved) return <Placeholder name={name} ratio={ratio} />;
  return (
    <div className="image-frame parallax-image" style={{ ['--ratio' as string]: ratio }}>
      <Image src={resolved} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" priority={priority} />
    </div>
  );
}
