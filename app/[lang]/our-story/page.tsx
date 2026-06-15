import { ImageSlot } from '@/components/ui/ImageSlot';
import { storyIntro, storyOrigin } from '@/lib/content';

export const metadata = { title: 'Our Story' };
export default function OurStory() {
  return <main>
    <section className="section" style={{ paddingTop: 150 }}><div className="container grid-two"><div><p className="copy story-line">{storyIntro}</p></div><ImageSlot name="IMG_4627.jpg" alt="IMG_4627.jpg" ratio="4/5" /></div></section>
    <section className="section"><div className="container"><h1 className="display section-title animate-headline">The Origin of Hot Apple Gin</h1>{storyOrigin.split('\n\n').map((p) => <p className="copy story-line" key={p}>{p}</p>)}</div></section>
    <section className="section"><div className="container"><ImageSlot name="IMG_4501.jpg" alt="IMG_4501.jpg" ratio="16/9" /></div></section>
  </main>;
}
