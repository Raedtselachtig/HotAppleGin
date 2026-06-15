import { ImageSlot } from '@/components/ui/ImageSlot';

export const metadata = { title: 'Where We Blend In' };

// [filename, caption, ratio]. Files not yet in /public/images show as a HAG
// placeholder until generated (see the Higgsfield brief in project notes).
const tiles: [string, string, string][] = [
 ['apres-ski.jpg', 'Après-ski, mid-rush', '4/5'],
 ['wwbi-cafe-winter-terrace.jpg', 'A café winter terrace', '3/4'],
 ['winter-garden-party.png', 'A garden table, at dusk', '1/1'],
 ['wwbi-hotel-lobby-bar.jpg', 'A hotel lobby bar', '4/5'],
 ['fireplace.png', 'Around the fire', '3/4'],
 ['wwbi-cafe-terrace.jpg', 'A café terrace', '1/1'],
 ['IMG_0975.png', 'Christmas gatherings', '4/5'],
 ['wwbi-hotel-winter-terrace.jpg', 'A hotel winter terrace', '3/4'],
 ['wwbi-slopeside-restaurant.jpg', 'A restaurant by the slopes', '4/5']
];

export default function WhereWeBlendIn() {
 return <main>
  <section className="section" style={{ paddingTop: 170 }}>
   <div className="container">
    <h1 className="display section-title animate-headline">WHERE WE BLEND IN</h1>
    <p className="copy">{'From quiet nights to crowded tables.\nDifferent settings, same warmth.\nSomehow, we always seem to fit right in.'}</p>
    <div className="mosaic">
     {tiles.map(([image, caption, ratio]) => (
      <figure className="mosaic-tile" key={caption}>
       <ImageSlot name={image} alt={caption} ratio={ratio} />
       <figcaption className="mosaic-cap">{caption}</figcaption>
      </figure>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
