import { ContactForm } from '@/components/ui/Form';

export const metadata = { title: 'Partnerships' };

const workWith = [
  'Bars, restaurants & hotels',
  'Retail & premium liquor stores',
  'Distributors & importers',
  'Event partners & seasonal concepts'
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
        <p className="copy animate-headline">A premium winter cocktail, created for partners who value distinction. Built to perform across premium environments — from hospitality venues to retail shelves and international distribution. A warm, refined serve that stands out through experience, not comparison.</p>
      </div>
    </section>
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <p className="eyebrow animate-headline">We work with</p>
        <div className="pill-grid">{workWith.map((w) => <div className="pill" key={w}>{w}</div>)}</div>
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
