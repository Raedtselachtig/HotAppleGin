import { ContactForm } from '@/components/ui/Form';

export const metadata = { title: 'Contact' };

const events: [string, string, string, string][] = [
 ['Bar Convent Berlin', 'Trade only', '11-13 October 2026', 'Exhibition Centre Berlin, Berlin'],
 ['Castle Christmas Fair', '', '24-29 November 2026', 'Landgoed Duin en Kruidberg, Santpoort-Zuid'],
 ['Kerstmarkt Haarlem', '', '11-13 December 2026', 'Grote Markt, Haarlem']
];

export default function Contact() {
 return <main>
  <section className="section" style={{ paddingTop: 170 }}>
   <div className="container grid-two">
    <div>
     <h1 className="display section-title animate-headline">{"Let's Heat Things Up"}</h1>
     <p className="copy">{"If it's worth saying, it's worth sending. We're listening."}</p>
    </div>
    <ContactForm fields={['Name', 'Email', 'Message']} button="Warm regards" />
   </div>
  </section>
  <section className="section" style={{ paddingTop: 0 }}>
   <div className="container">
    <h2 className="display section-title animate-headline">Find us where it matters most</h2>
    <p className="copy">Come find us this season:</p>
    <div className="event-list">
     {events.map(([name, tag, date, place]) => (
      <div className="event-row" key={name}>
       <p className="event-name">{name}{tag && <span className="event-tag"> · {tag}</span>}</p>
       <p className="event-meta">{date}</p>
       <p className="event-meta muted">{place}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
