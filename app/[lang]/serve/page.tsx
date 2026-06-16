import { ImageSlot } from '@/components/ui/ImageSlot';
import { serveSteps } from '@/lib/content';

export const metadata = { title: 'The Serve' };

export default function Serve() {
 return <main>
  <section className="section" style={{ paddingTop: 180 }}>
   <div className="container">
    <h1 className="display section-title animate-headline" style={{ textAlign: 'center' }}>THE SERVE</h1>
    <p className="copy animate-headline" style={{ textAlign: 'center', margin: '0 auto' }}>{'Some things simply work better warm.\nSlowly heated. Carefully served.'}</p>
    <div className="serve-list">
     {serveSteps.map(([title, subtitle, body, image], index) => (
      <article className="serve-step animate-headline" key={title}>
       <span className="serve-num">{String(index + 1).padStart(2, '0')}</span>
       <h2 className="step-label">{title}</h2>
       <p className="serve-sub">{subtitle}</p>
       <div className="serve-figure"><ImageSlot name={image} alt={title} ratio="4/5" /></div>
       <p className="copy serve-body">{body}</p>
      </article>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
