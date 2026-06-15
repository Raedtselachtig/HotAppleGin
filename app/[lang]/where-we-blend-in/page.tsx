import Image from 'next/image';
import { availableImages } from '@/lib/content';

export const metadata = { title: 'Where We Blend In' };

// [filename, title, tongue-in-cheek line] — copy is a proposal, see chat.
const tiles: [string, string, string][] = [
 ['apres-ski.jpg', 'Après-ski', 'The slope was just the warm-up.'],
 ['wwbi-cafe-winter-terrace.jpg', 'Café winter terrace', 'Outside in winter. On purpose.'],
 ['winter-garden-party.png', 'Garden, at dusk', 'Coats on. Nobody in a hurry to leave.'],
 ['wwbi-hotel-lobby-bar.jpg', 'Hotel lobby bar', 'Checked in. In no rush to go up.'],
 ['fireplace.png', 'By the fire', 'The fire sets the pace.'],
 ['wwbi-cafe-terrace.jpg', 'Café terrace', 'One drink, then the afternoon disappears.'],
 ['IMG_0975.png', 'Christmas market', 'Where the first glass went to a stranger.'],
 ['wwbi-hotel-winter-terrace.jpg', 'Hotel winter terrace', 'A view, and a reason to stay out.'],
 ['wwbi-slopeside-restaurant.jpg', 'Slope-side', 'Lunch that quietly became dinner.']
];

export default function WhereWeBlendIn() {
 return <main>
  <section className="section" style={{ paddingTop: 170 }}>
   <div className="container">
    <h1 className="display section-title animate-headline">WHERE WE BLEND IN</h1>
    <p className="copy">{'From quiet nights to crowded tables.\nDifferent settings, same warmth.\nSomehow, we always seem to fit right in.'}</p>
    <div className="mosaic">
     {tiles.map(([image, title, line]) => (
      <div className="mosaic-tile" key={image} tabIndex={0}>
       <div className="flip">
        <div className="flip-front">{availableImages.has(image) && <Image src={`/images/${image}`} alt={title} fill sizes="(max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} />}</div>
        <div className="flip-back"><span className="flip-title">{title}</span><span className="flip-line">{line}</span></div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
