import { ContactForm } from '@/components/ui/Form';
import { ImageSlot } from '@/components/ui/ImageSlot';

export const metadata = { title: 'Partnerships' };

const workWith: [string, string][] = [
 ['Bars, restaurants & hotels', 'A warm serve that earns its place on a winter menu, and keeps the table seated a little longer.'],
 ['Retail & specialist liquor stores', 'A distinctive bottle that holds its own on the shelf in the months that matter.'],
 ['Distributors & importers', 'A young winter category with room to grow, behind a brand built to travel.'],
 ['Event partners & seasonal concepts', 'Made for Christmas markets, festivals and winter activations. Where it all began.']
];

const why: [string, string][] = [
 ['Distinctive concept', 'A warm, characterful serve with immediate appeal'],
 ['Strong positioning', 'Fits both on menus and on shelves'],
 ['Effortless execution', 'Simple preparation, consistent quality'],
 ['Memorable experience', 'Built around warmth and shared moments']
];

const steps: [string, string][] = [
 ['01 · Get in touch', 'Tell us who you are, your venue, store or distribution, and what you have in mind.'],
 ['02 · A real conversation', 'We talk through fit, volumes, the serve and your questions.'],
 ['03 · Set up to launch', 'Product, serving guidance and brand assets, so it lands properly.']
];

export default function Partnerships() {
 return <main>
  <section className="section" style={{ paddingTop: 170, paddingBottom: 40 }}>
   <div className="container grid-two" style={{ alignItems: 'start' }}>
    <div>
     <h1 className="display section-title animate-headline">PARTNERSHIPS</h1>
     <p className="copy animate-headline">A winter cocktail with a point of view, created for partners who value distinction. Built to perform across the rooms that matter, from hospitality venues to retail shelves and international distribution. A warm, refined serve that stands out through experience, not comparison.</p>
    </div>
    <div className="animate-headline">
     <ImageSlot name="partnerships-production.jpg" alt="Hot Apple Gin production" ratio="3/4" />
    </div>
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0, paddingBottom: 40 }}>
   <div className="container">
    <p className="eyebrow animate-headline">Who we work with</p>
    <p className="copy animate-headline" style={{ marginBottom: 8 }}>Four routes in. Pick the one that fits, then reach out below.</p>
    <div className="pill-grid">{workWith.map(([w, d]) => <details className="pill" name="ww" key={w}><summary>{w}</summary><div className="pill-body"><p>{d}</p></div></details>)}</div>
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0, paddingBottom: 40 }}>
   <div className="container">
    <p className="eyebrow animate-headline">How it works</p>
    <div className="card-grid">{steps.map(([t, d]) => <a className="mini-card mini-card--link" href="#enquire" key={t}><h3>{t}</h3><p>{d}</p></a>)}</div>
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0, paddingBottom: 40 }}>
   <div className="container">
    <p className="eyebrow animate-headline">Why Hot Apple Gin works</p>
    <div className="card-grid">{why.map(([t, d]) => <div className="mini-card" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
   </div>
  </section>
  <section className="section" id="enquire" style={{ paddingTop: 0, paddingBottom: 40, scrollMarginTop: 110 }}>
   <div className="container grid-two">
    <div>
     <h2 className="display section-title animate-headline">Become a partner</h2>
     <p className="copy">Hospitality, retail, distribution or seasonal events, tell us where Hot Apple Gin fits and we&rsquo;ll be in touch. One form, one conversation. We support our partners with product, serving guidance and brand assets.</p>
    </div>
    <ContactForm fields={['Name', 'Company', 'Email', 'Message']} button="Send enquiry" />
   </div>
  </section>
 </main>;
}
