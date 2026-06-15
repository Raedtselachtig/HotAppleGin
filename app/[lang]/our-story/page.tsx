import Image from 'next/image';
import { storyIntro, storyOrigin } from '@/lib/content';

export const metadata = { title: 'Our Story' };

const messages = ['Warm gin… 🤔', 'Hmmm…', "Still, I think I'm going to try to make it during the Christmas holidays."];

export default function OurStory() {
 const introParas = storyIntro.split('\n\n').slice(1);
 const paras = storyOrigin.split('\n\n');
 const opening = paras[0];          // the founding-message intro line (real copy)
 const last = paras[paras.length - 1];
 const body = paras.slice(2, -1);   // skip opening + the quoted messages (shown as chat)
 return <main>
  <section className="section story-intro" style={{ paddingTop: 200 }}>
   <div className="container">
    <h1 className="display section-title animate-headline">OUR STORY</h1>
    {introParas.map((p) => <p className="copy story-lead animate-headline" key={p}>{p}</p>)}
   </div>
  </section>

  <section className="story-scene">
   <div className="story-scene-bg"><Image src="/images/origin-fireside.jpg" alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: '28% 52%' }} /></div>
   <div className="container">
    <p className="eyebrow animate-headline">How it started</p>
    <p className="copy story-line">{opening}</p>
    <div className="chat">{messages.map((m, i) => <div className="chat-bubble" key={i}><p>{m}</p></div>)}</div>
   </div>
  </section>

  <section className="section" style={{ paddingTop: 'clamp(64px, 8vw, 116px)', paddingBottom: 'clamp(28px, 3vw, 44px)' }}>
   <div className="container story-body">
    <h2 className="display section-title animate-headline" style={{ marginBottom: 30 }}>The Origin of Hot Apple Gin</h2>
    {body.map((p) => <p className="copy story-line" key={p}>{p}</p>)}
   </div>
  </section>

  <section className="story-scene story-scene--center">
   <div className="story-scene-bg"><Image src="/images/origin-garden-fire.jpg" alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'left 66%' }} /></div>
   <div className="container"><p className="display manifesto-quote">{last}</p></div>
  </section>
 </main>;
}
