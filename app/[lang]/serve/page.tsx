import { ImageSlot } from '@/components/ui/ImageSlot';
import { serveSteps } from '@/lib/content';
export const metadata = { title: 'The Serve' };
export default function Serve() {
  return <main><section className="section" style={{ paddingTop: 170 }}><div className="container">{serveSteps.map(([title, subtitle, body, image], index) => <article className={`grid-two serve-step ${index % 2 ? 'serve-step--rev' : ''}`} key={title}><ImageSlot name={image} alt={title} ratio="4/5" /><div><h2 className="step-label animate-headline">{title}</h2><p className="copy animate-headline"><em>{subtitle}</em>{body}</p></div></article>)}</div></section></main>;
}
