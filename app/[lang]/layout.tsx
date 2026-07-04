import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
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

export function generateStaticParams() {
 return routing.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta' });
 const title = t('defaultTitle');
 const description = t('description');
 return {
  title: { default: title, template: '%s · Hot Apple Gin' },
  description,
  openGraph: { title, description, url: 'https://hotapplegin.com', siteName: 'Hot Apple Gin', type: 'website' }
 };
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 if (!routing.locales.includes(lang as Locale)) notFound();
 setRequestLocale(lang);
 const messages = await getMessages();
 return <NextIntlClientProvider messages={messages}>
  <div className="page-shell">
   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
   <Header />{children}<Footer /><AgeGate /><ClientEffects />
  </div>
 </NextIntlClientProvider>;
}
