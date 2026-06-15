import { ImageSlot } from '@/components/ui/ImageSlot';
import { serveSteps } from '@/lib/content';

export const metadata = { title: 'The Serve' };

export default function Serve() {
 return <main>
  <section className="section" style={{ paddingTop: 180 }}>
   <div className="container">
    <h1 className="display section-title animate-headline">THE SERVE</h1>
    <p className="copy">{'Some things simply work better warm.\nSlowly heated. Carefully poured.'}</p>
    <div className="serve-list">
     {serveSteps.map(([title, subtitle, body, image], index) => (
      <article className={`serve-step ${index % 2 ? 'serve-step--rev' : ''}`} key={title}>
       <div className="serve-figure"><span className="serve-num">{String(index + 1).padStart(2, '0')}</span><ImageSlot name={image} alt={title} ratio="4/5" /></div>
       <div className="serve-text">
        <h2 className="step-label animate-headline">{title}</h2>
        <p className="copy animate-headline"><em>{subtitle}</em>{body}</p>
       </div>
      </article>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
