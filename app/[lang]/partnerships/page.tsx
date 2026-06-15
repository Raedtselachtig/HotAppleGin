import { ContactForm } from '@/components/ui/Form';

export const metadata = { title: 'Partnerships' };

const workWith: [string, string][] = [
 ['Bars, restaurants & hotels', 'A warm serve that earns its place on a winter menu, and keeps the table seated a little longer.'],
 ['Retail & premium liquor stores', 'A distinctive bottle that holds its own on the shelf in the months that matter.'],
 ['Distributors & importers', 'A young winter category with room to grow, behind a brand built to travel.'],
 ['Event partners & seasonal concepts', 'Made for Christmas markets, festivals and winter activations. Where it all began.']
];

const why: [string, string][] = [
 ['Distinctive concept', 'A warm, premium serve with immediate appeal'],
 ['Strong positioning', 'Fits both on menus and on shelves'],
 ['Effortless execution', 'Simple preparation, consistent quality'],
 ['Memorable experience', 'Built around warmth and shared moments']
];

export default function Partnerships() {
 return <main>
  <section className="section" style={{ paddingTop: 170 }}>
   <div className="container">
    <h1 className="display section-title animate-headline">PARTNERSHIPS</h1>
    <p className="copy animate-headline">A premium winter cocktail, created for partners who value distinction. Built to perform across premium environments, from hospitality venues to retail shelves and international distribution. A warm, refined serve that stands out through experience, not comparison.</p>
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0 }}>
   <div className="container">
    <p className="eyebrow animate-headline">We work with</p>
    <div className="pill-grid">{workWith.map(([w, d]) => <details className="pill" name="ww" key={w}><summary>{w}</summary><div className="pill-body"><p>{d}</p></div></details>)}</div>
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0 }}>
   <div className="container">
    <p className="eyebrow animate-headline">Why Hot Apple Gin works</p>
    <div className="card-grid">{why.map(([t, d]) => <div className="mini-card" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0 }}>
   <div className="container grid-two">
    <div>
     <h2 className="display section-title animate-headline">{"Let's build something warm together"}</h2>
     <p className="copy">From winter terraces and hotel lounges to retail displays and seasonal activations, Hot Apple Gin adapts seamlessly while keeping a refined presence. We support our partners with product, serving guidance and brand assets.</p>
    </div>
    <ContactForm fields={['Name', 'Email', 'Message']} button="Send" />
   </div>
  </section>
 </main>;
}
