import Link from 'next/link';
import { ContactForm } from '@/components/ui/Form';

export const metadata = { title: 'Contact' };

type Ev = { name: string; tag: string; date: string; place: string; url: string; start: string; end: string };
const events: Ev[] = [
 { name: 'Bar Convent Berlin', tag: 'Trade only', date: '12-14 October 2026', place: 'Exhibition Centre Berlin, Berlin', url: 'https://www.barconvent.com/berlin/en-gb.html', start: '2026-10-12', end: '2026-10-14' },
 { name: 'Castle Christmas Fair', tag: '', date: '24-29 November 2026', place: 'Landgoed Duin en Kruidberg, Santpoort-Zuid', url: 'https://www.castlechristmasfair.nl/', start: '2026-11-24', end: '2026-11-29' },
 { name: 'Kerstmarkt Haarlem', tag: '', date: '11-13 December 2026', place: 'Grote Markt, Haarlem', url: 'https://www.visithaarlem.com/kerstmarkt/', start: '2026-12-11', end: '2026-12-13' },
 { name: 'Horecava', tag: 'Trade only', date: '11-14 January 2027', place: 'RAI Amsterdam', url: 'https://www.horecava.nl/', start: '2027-01-11', end: '2027-01-14' }
];

const eventSchema = {
 '@context': 'https://schema.org',
 '@graph': events.map((e) => ({
  '@type': 'Event',
  name: `Hot Apple Gin at ${e.name}`,
  startDate: e.start,
  endDate: e.end,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: { '@type': 'Place', name: e.place, address: e.place },
  url: e.url,
  organizer: { '@type': 'Organization', name: 'Hot Apple Gin Family Co.' }
 }))
};

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 return <main>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
  <section className="section" style={{ paddingTop: 170 }}>
   <div className="container grid-two">
    <div>
     <h1 className="display section-title animate-headline">{"Let's Heat Things Up"}</h1>
     <p className="copy">{"If it's worth saying, it's worth sending. We're listening."}</p>
    </div>
    <ContactForm fields={['Name', 'Email', 'Message']} button="Warm regards" />
   </div>
  </section>
  <section className="section" id="events" style={{ paddingTop: 0, scrollMarginTop: 120 }}>
   <div className="container">
    <h2 className="display section-title animate-headline">Find us where it matters most</h2>
    <p className="copy">Come find us at selected trade shows, winter fairs and seasonal events.</p>
    <div className="event-list">
     {events.map(({ name, tag, date, place, url }) => (
      <a className="event-row" href={url} target="_blank" rel="noopener noreferrer" key={name}>
       <p className="event-name">{name}{tag && <span className="event-tag"> · {tag}</span>}</p>
       <p className="event-meta">{date}</p>
       <p className="event-meta muted">{place}</p>
      </a>
     ))}
    </div>
    <div className="event-cta">
     <p className="copy">Attending one of these? Let&rsquo;s set up a meeting.</p>
     <Link className="cta" href={`/${lang}/partnerships#enquire`}>Become a partner</Link>
    </div>
   </div>
  </section>
 </main>;
}
