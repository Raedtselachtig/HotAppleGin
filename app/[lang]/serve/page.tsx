import { ServeSlider } from '@/components/serve/ServeSlider';
import { serveSteps } from '@/lib/content';

export const metadata = { title: 'The Serve' };

export default function Serve() {
 return <main>
  <section className="section" style={{ paddingTop: 180 }}>
   <div className="container">
    <h1 className="display section-title animate-headline" style={{ textAlign: 'center' }}>THE SERVE</h1>
    <p className="copy animate-headline" style={{ textAlign: 'center', margin: '0 auto' }}>{'Some things simply work better warm.\nSlowly heated. Carefully served.'}</p>
    <ServeSlider steps={serveSteps} />
   </div>
  </section>
 </main>;
}
