import { notFound } from 'next/navigation';

// Vangt alle onbekende paden binnen een taal (/nl/bestaat-niet, ...) en stuurt ze
// naar de gelokaliseerde not-found.tsx i.p.v. de Engelse Next.js-standaard-404.
export default function CatchAll() {
 notFound();
}
