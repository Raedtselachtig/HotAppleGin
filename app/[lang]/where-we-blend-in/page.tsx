import Image from 'next/image';
import { availableImages } from '@/lib/content';

export const metadata = { title: 'Where We Blend In' };

// [filename, setting label shown on hover-flip]
const tiles: [string, string][] = [
 ['apres-ski.jpg', 'Après-ski'],
 ['wwbi-cafe-winter-terrace.jpg', 'Café winter terrace'],
 ['winter-garden-party.png', 'Garden, at dusk'],
 ['wwbi-hotel-lobby-bar.jpg', 'Hotel lobby bar'],
 ['fireplace.png', 'By the fire'],
 ['wwbi-cafe-terrace.jpg', 'Café terrace'],
 ['IMG_0975.png', 'Christmas market'],
 ['wwbi-hotel-winter-terrace.jpg', 'Hotel winter terrace'],
 ['wwbi-slopeside-restaurant.jpg', 'Slope-side restaurant']
];

export default function WhereWeBlendIn() {
 return <main>
  <section className="section" style={{ paddingTop: 170 }}>
   <div className="container">
    <h1 className="display section-title animate-headline">WHERE WE BLEND IN</h1>
    <p className="copy">{'From quiet nights to crowded tables.\nDifferent settings, same warmth.\nSomehow, we always seem to fit right in.'}</p>
    <div className="mosaic">
     {tiles.map(([image, label]) => (
      <div className="mosaic-tile" key={image}>
       <div className="flip">
        <div className="flip-front">{availableImages.has(image) && <Image src={`/images/${image}`} alt={label} fill sizes="(max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} />}</div>
        <div className="flip-back"><span>{label}</span></div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
