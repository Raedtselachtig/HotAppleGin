import { ImageSlot } from '@/components/ui/ImageSlot';
import { serveSteps } from '@/lib/content';
export const metadata = { title: 'The Serve' };
export default function Serve() {
  return <main><section className="section" style={{ paddingTop: 150 }}><div className="container">{serveSteps.map(([title, subtitle, body, image], index) => <article className="grid-two" key={title} style={{ marginBottom: 76 }}><ImageSlot name={image} alt={image} ratio="4/5" /><div><h1 className="display section-title animate-headline">{title}</h1><p className="copy"><em>{subtitle}</em>{'\n'}{body}</p></div></article>)}</div></section></main>;
}
