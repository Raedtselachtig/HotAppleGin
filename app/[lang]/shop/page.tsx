import { getTranslations, setRequestLocale } from 'next-intl/server';
import { WaitlistForm } from '@/components/ui/Form';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const t = await getTranslations({ locale: lang, namespace: 'meta.titles' });
 return { title: t('shop') };
}

export default async function Shop({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 setRequestLocale(lang);
 const t = await getTranslations('shop');
 return <main><section className="section" style={{ paddingTop: 150 }}><div className="container"><h1 className="display section-title animate-headline">{t('title')}</h1><p className="copy">{t('copy')}</p><WaitlistForm /></div></section></main>;
}
