import Image from 'next/image';
import { availableImages } from '@/lib/content';

export const metadata = { title: 'Where We Blend In' };

// [filename, title, tongue-in-cheek line] — copy is a proposal, see chat.
const tiles: [string, string, string][] = [
 ['wwbi-terrace-two.jpg', 'Café terrace', 'One drink, and the afternoon quietly cancels its plans.'],
 ['wwbi-apres-inside.jpg', 'Après-ski bar', 'The skiing was just the warm-up.'],
 ['wwbi-garden-group-tap.jpg', 'On tap, slope-side', "Five litres looked ambitious. It wasn't."],
 ['wwbi-waiter-tray.jpg', 'Table service', 'The second round arrives before you ask.'],
 ['wwbi-firepit-group.jpg', 'Around the fire', "Out here, nobody's watching the clock."],
 ['wwbi-apres-outside.jpg', 'On the mountain', 'The cold made its point. We made ours.'],
 ['wwbi-market-crowd.jpg', 'Christmas market', 'Where the first stranger became a regular.'],
 ['wwbi-slopeside-friends.jpg', 'Slope-side', 'Lunch that quietly turned into dinner.']
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
