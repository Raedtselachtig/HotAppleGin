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

export default function FAQ() {
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
         <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>
        ))}
       </div>
      </details>
     ))}
    </div>
   </div>
  </section>
 </main>;
}
