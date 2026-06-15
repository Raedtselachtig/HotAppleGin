import { ImageSlot } from '@/components/ui/ImageSlot';
import { storyIntro, storyOrigin } from '@/lib/content';

export const metadata = { title: 'Our Story' };

const messages = ['Warm gin… 🤔', 'Hmmm…', "Still, I think I'm going to try to make it during the Christmas holidays."];

export default function OurStory() {
 const introParas = storyIntro.split('\n\n').slice(1);
 const paras = storyOrigin.split('\n\n');
 const last = paras[paras.length - 1];
 const body = paras.slice(0, -1);
 const mid = Math.ceil(body.length / 2);
 return <main>
  <section className="section story-intro" style={{ paddingTop: 200 }}>
   <div className="container">
    <h1 className="display section-title animate-headline">OUR STORY</h1>
    {introParas.map((p) => <p className="copy story-lead animate-headline" key={p}>{p}</p>)}
   </div>
  </section>

  <div className="story-photo"><ImageSlot name="origin-fireside.jpg" alt="Hot Apple Gin by the fire, where it began" ratio="1/1" /></div>

  <section className="section">
   <div className="container">
    <p className="eyebrow animate-headline">How it started</p>
    <p className="copy animate-headline">It started with a message from a brother, travelling one winter. The reply came back almost immediately.</p>
    <div className="chat animate-headline">{messages.map((m, i) => <div className="chat-bubble" key={i}><p>{m}</p></div>)}</div>
   </div>
  </section>

  <section className="section" style={{ paddingTop: 0 }}>
   <div className="container story-body">
    <h2 className="display section-title animate-headline">The Origin of Hot Apple Gin</h2>
    {body.slice(0, mid).map((p) => <p className="copy story-line" key={p}>{p}</p>)}
   </div>
   <div className="story-photo" style={{ margin: '64px auto' }}><ImageSlot name="origin-garden-fire.jpg" alt="Winter evenings in the garden, around the fire" ratio="3/4" /></div>
   <div className="container story-body">
    {body.slice(mid).map((p) => <p className="copy story-line" key={p}>{p}</p>)}
   </div>
  </section>

  <section className="section" style={{ paddingTop: 0 }}>
   <div className="container"><p className="display manifesto-quote animate-headline">{last}</p></div>
  </section>
 </main>;
}
