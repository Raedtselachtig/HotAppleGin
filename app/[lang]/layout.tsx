import { AgeGate } from '@/components/ui/AgeGate';
import { ClientEffects } from '@/components/animations/ClientEffects';
import { Footer } from '@/components/ui/Footer';
import { Header } from '@/components/ui/Header';

const orgSchema = {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 name: 'Hot Apple Gin Family Co.',
 alternateName: 'Hot Apple Gin',
 url: 'https://hotapplegin.com',
 logo: '/logo.png',
 description: 'A warm gin cocktail (RTD), crafted in Haarlem, the Netherlands.',
 sameAs: ['https://www.instagram.com/hotapplegin/']
};

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 return <div className="page-shell">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
  <Header lang={lang} />{children}<Footer lang={lang} /><AgeGate /><ClientEffects />
 </div>;
}
