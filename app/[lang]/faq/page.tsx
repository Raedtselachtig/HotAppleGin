import Link from 'next/link';
import { Fragment } from 'react';
import { faqCategories } from '@/lib/faq';
export const metadata = { title: 'FAQ' };

const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faqCategories.flatMap((cat) => cat.items.map((item) => ({
  '@type': 'Question',
  name: item.question,
  acceptedAnswer: { '@type': 'Answer', text: item.answer }
 })))
};

// Mentions of other pages become intuitive links. Longest phrases first so
// "The Collection page" wins over "The Collection". Plain copy stays untouched.
const targets: { phrase: string; href: string; external?: boolean }[] = [
 { phrase: 'trade shows and seasonal events', href: '/contact#events' },
 { phrase: 'trade shows or events', href: '/contact#events' },
 { phrase: 'trade shows and events', href: '/contact#events' },
 { phrase: 'The Collection page', href: '/collection' },
 { phrase: 'The Collection', href: '/collection' },
 { phrase: 'The Serve', href: '/serve' },
 { phrase: 'Partnerships page', href: '/partnerships' },
 { phrase: 'Partnerships', href: '/partnerships' },
 { phrase: 'Our Story', href: '/our-story' },
 { phrase: 'Contact page', href: '/contact' },
 { phrase: '@hotapplegin', href: 'https://www.instagram.com/hotapplegin/', external: true },
 { phrase: 'Instagram', href: 'https://www.instagram.com/hotapplegin/', external: true }
];

function escapeRegExp(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
const sorted = [...targets].sort((a, b) => b.phrase.length - a.phrase.length);
const splitter = new RegExp('(' + sorted.map((t) => escapeRegExp(t.phrase)).join('|') + ')', 'g');

function linkify(text: string, lang: string) {
 return text.split(splitter).map((part, i) => {
  const t = targets.find((x) => x.phrase === part);
  if (!t) return <Fragment key={i}>{part}</Fragment>;
  if (t.external) return <a key={i} className="faq-link" href={t.href} target="_blank" rel="noopener noreferrer">{part}</a>;
  return <Link key={i} className="faq-link" href={`/${lang}${t.href}`}>{part}</Link>;
 });
}

export default async function FAQ({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 return <main>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  <section className="section" style={{ paddingTop: 150 }}>
   <div className="container faq-wrap">
    <h1 className="display section-title animate-headline">FAQ</h1>
    <div className="faq-cats">
     {faqCategories.map((cat) => (
      <details className="faq-cat" key={cat.title}>
       <summary><span className="faq-cat-title">{cat.title}</span><span className="faq-cat-count">{cat.items.length}</span></summary>
       <div className="accordion">
        {cat.items.map((item) => (
         <details key={item.question}><summary>{item.question}</summary><p>{linkify(item.answer, lang)}</p></details>
        ))}
       </div>
      </details>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
