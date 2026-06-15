import { ImageSlot } from '@/components/ui/ImageSlot';
export const metadata = { title: 'Where We Blend In' };
const items: [string, string][] = [
  ['apres-ski.jpg', 'On the mountain, between runs.'],
  ['winter-garden-party.png', 'Outside, under the lights.'],
  ['fireplace.png', 'Indoors, when nobody leaves early.'],
  ['IMG_0975.png', 'Where the season started — the market stall.'],
  ['IMG_4635.jpg', 'A slow afternoon, something on the side.'],
  ['IMG_2609.jpg', 'And sometimes, just the drink.']
];
export default function WhereWeBlendIn() { return <main><section className="section" style={{ paddingTop: 150 }}><div className="container"><h1 className="display section-title animate-headline">WHERE WE BLEND IN</h1><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>{items.map(([image, caption]) => <figure key={image} style={{ margin: 0 }}><ImageSlot name={image} alt={caption} ratio="3/4" /><figcaption className="eyebrow" style={{ marginTop: 14 }}>{caption}</figcaption></figure>)}</div></div></section></main>; }
