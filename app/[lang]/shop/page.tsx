import { WaitlistForm } from '@/components/ui/Form';
export const metadata = { title: 'Shop' };
export default function Shop() { return <main><section className="section" style={{ paddingTop: 150 }}><div className="container"><h1 className="display section-title animate-headline">THE COLLECTION</h1><p className="copy">Available seasonally.\nBe the first to know.</p><WaitlistForm /></div></section></main>; }
