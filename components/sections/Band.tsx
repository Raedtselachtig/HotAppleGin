import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { availableImages } from '@/lib/content';

export function Band({ title, copy, link, label, image }: { title: string; copy?: string; link?: string; label?: string; image: string }) {
 const hasImage = availableImages.has(image);
 return (
  <section className="band">
   <div className="band-bg ken-burns">{hasImage && <Image src={`/images/${image}`} alt={title} fill sizes="100vw" style={{ objectFit: 'cover' }} />}</div>
   <div className="band-inner">
    <h2 className="display section-title animate-headline">{title}</h2>
    {copy && <p className="copy animate-headline">{copy}</p>}
    {link && label && <Link className="cta animate-headline" href={link}>{label}</Link>}
   </div>
  </section>
 );
}
