import { Fragment } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('faq') };
}

type FaqCategory = { title: string; items: { q: string; a: string }[] };
type Target = { phrase: string; href: string; external?: boolean };

// Verwijzingen naar andere pagina's worden vanzelf links. Per taal, want de zinnen
// verschillen. Langste zinnen eerst zodat "The Collection page" wint van "The Collection".
// de/fr vallen terug op en zolang die talen nog niet vertaald zijn (placeholder = Engels).
const targetsByLocale: Record<string, Target[]> = {
 en: [
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
 ],
 nl: [
  { phrase: 'vakbeurzen en seizoensevenementen', href: '/contact#events' },
  { phrase: 'De Collectie', href: '/collection' },
  { phrase: 'Ons Verhaal', href: '/our-story' },
  { phrase: 'Contact-pagina', href: '/contact' },
  { phrase: 'Partnerships', href: '/partnerships' },
  { phrase: 'Serveren', href: '/serve' },
  { phrase: '@hotapplegin', href: 'https://www.instagram.com/hotapplegin/', external: true },
  { phrase: 'Instagram', href: 'https://www.instagram.com/hotapplegin/', external: true }
 ],
 de: [
  { phrase: 'Fachmessen und Saisonevents', href: '/contact#events' },
  { phrase: 'Die Kollektion', href: '/collection' },
  { phrase: 'Kontakt-Seite', href: '/contact' },
  { phrase: 'Partnerships', href: '/partnerships' },
  { phrase: 'Servieren', href: '/serve' },
  { phrase: '@hotapplegin', href: 'https://www.instagram.com/hotapplegin/', external: true },
  { phrase: 'Instagram', href: 'https://www.instagram.com/hotapplegin/', external: true }
 ],
 fr: [
  { phrase: 'salons professionnels et des événements saisonniers', href: '/contact#events' },
  { phrase: 'La Collection', href: '/collection' },
  { phrase: 'Le Service', href: '/serve' },
  { phrase: 'page Contact', href: '/contact' },
  { phrase: 'Partnerships', href: '/partnerships' },
  { phrase: '@hotapplegin', href: 'https://www.instagram.com/hotapplegin/', external: true },
  { phrase: 'Instagram', href: 'https://www.instagram.com/hotapplegin/', external: true }
 ]
};

function escapeRegExp(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function linkify(text: string, targets: Target[], splitter: RegExp) {
 return text.split(splitter).map((part, i) => {
  const t = targets.find((x) => x.phrase === part);
  if (!t) return <Fragment key={i}>{part}</Fragment>;
  if (t.external) return <a key={i} className="faq-link" href={t.href} target="_blank" rel="noopener noreferrer">{part}</a>;
  return <Link key={i} className="faq-link" href={t.href}>{part}</Link>;
 });
}

export default async function FAQ({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('faq');
 const categories = t.raw('categories') as FaqCategory[];

 const targets = targetsByLocale[lang] ?? targetsByLocale.en;
 const sorted = [...targets].sort((a, b) => b.phrase.length - a.phrase.length);
 const splitter = new RegExp('(' + sorted.map((x) => escapeRegExp(x.phrase)).join('|') + ')', 'g');

 const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: categories.flatMap((cat) => cat.items.map((item) => ({
   '@type': 'Question',
   name: item.q,
   acceptedAnswer: { '@type': 'Answer', text: item.a }
  })))
 };

 return <main>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  <section className="section" style={{ paddingTop: 150 }}>
   <div className="container faq-wrap">
    <h1 className="display section-title animate-headline">{t('title')}</h1>
    <div className="faq-cats">
     {categories.map((cat) => (
      <details className="faq-cat" key={cat.title}>
       <summary><span className="faq-cat-title">{cat.title}</span><span className="faq-cat-count">{cat.items.length}</span></summary>
       <div className="accordion">
        {cat.items.map((item) => (
         <details key={item.q}><summary>{item.q}</summary><p>{linkify(item.a, targets, splitter)}</p></details>
        ))}
       </div>
      </details>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
