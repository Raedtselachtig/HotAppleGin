import { AgeGate } from '@/components/ui/AgeGate';
import { ClientEffects } from '@/components/animations/ClientEffects';
import { Footer } from '@/components/ui/Footer';
import { Header } from '@/components/ui/Header';

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 return <div className="page-shell"><Header lang={lang} />{children}<Footer lang={lang} /><AgeGate /><ClientEffects /></div>;
}
