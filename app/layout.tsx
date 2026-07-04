import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { getLocale } from 'next-intl/server';
import './globals.css';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-cormorant', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-dm-sans', display: 'swap' });
const cheltenham = localFont({
 src: [
  { path: './fonts/CheltenhamStdBookCond.otf', weight: '400', style: 'normal' },
  { path: './fonts/CheltenhamStdBoldCond.otf', weight: '700', style: 'normal' }
 ],
 variable: '--font-cheltenham',
 display: 'swap'
});

// Alleen metadataBase globaal; de gelokaliseerde title/description/openGraph komen
// uit app/[lang]/layout.tsx (generateMetadata). Zo geen dubbele title-template.
export const metadata: Metadata = {
 metadataBase: new URL('https://hotapplegin.com')
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
 const locale = await getLocale();
 return <html lang={locale} suppressHydrationWarning className={`${cormorant.variable} ${dmSans.variable} ${cheltenham.variable}`}><body>{children}</body></html>;
}
