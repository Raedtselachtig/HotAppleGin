import { ContactForm } from '@/components/ui/Form';
export const metadata = { title: 'Contact' };
export default function Contact() { return <main><section className="section" style={{ paddingTop: 150 }}><div className="container grid-two"><div><h1 className="display section-title animate-headline">Contact</h1><p className="copy">Instagram: @hotapplegin\nLocatie: Haarlem, Nederland</p></div><ContactForm fields={['Naam','E-mailadres','Onderwerp','Bericht']} button="Send" /></div></section></main>; }
