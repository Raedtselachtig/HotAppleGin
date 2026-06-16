import Image from 'next/image';
import { availableImages } from '@/lib/content';

export const metadata = { title: 'Where We Blend In' };

// [filename, title, tongue-in-cheek line] — copy is a proposal, see chat.
const tiles: [string, string, string][] = [
 ['wwbi-terrace-two.jpg', 'Your favourite terrace?', 'One drink, and the afternoon quietly cancels its plans.'],
 ['wwbi-apres-inside.jpg', 'Après-ski', 'The skiing was just the warm-up.'],
 ['wwbi-garden-group-tap.jpg', 'Slope-side', "Five litres looked ambitious. It wasn't."],
 ['wwbi-waiter-tray.jpg', 'Your usual table?', 'The second round arrives before you ask.'],
 ['wwbi-firepit-group.jpg', 'Around the fire', "Out here, nobody's watching the clock."],
 ['wwbi-apres-outside.jpg', 'Worth the climb?', 'The cold made its point. We made ours.'],
 ['wwbi-market-crowd.jpg', 'Winter fairs', 'Where the first stranger became a regular.'],
 ['wwbi-christmas-dinner.jpg', 'Christmas dinner', 'Dress code: fancy. We were already there.'],
 ['wwbi-events.jpg', 'Events', 'Where the office party stops feeling obligatory.'],
 ['wwbi-slopeside-sun.jpg', 'Off the slopes', 'A strange amount of skiing happens between these moments.'],
 ['wwbi-backyard.jpg', 'The back garden', 'When one drink in the garden turns into an evening.'],
 ['wwbi-icerink.jpg', 'Rink-side', 'Some people came here to skate.'],
 ['wwbi-hotel-canal-terrace.jpg', 'Hotel terrace', 'Turns out the five-star review was one glass away.'],
 ['wwbi-autumn-walk.jpg', 'After a long walk', 'As if you really need a walk as an excuse.'],
 ['wwbi-rainy-restaurant.jpg', 'While it rains', 'Who needs a conversation starter.'],
 ['wwbi-fancy-dinner.jpg', 'Dinner reservations', 'The reservation was for dinner. The evening had other ideas.']
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
        <div className="flip-front">{availableImages.has(image) && <Image src={`/images/${image}`} alt={title} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />}</div>
        <div className="flip-back"><span className="flip-title">{title}</span><span className="flip-line">{line}</span></div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
