import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
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

export const metadata: Metadata = {
 metadataBase: new URL('https://hotapplegin.com'),
 title: { default: 'Hot Apple Gin', template: '%s · Hot Apple Gin' },
 description: 'A Winter Cocktail, Served Warm',
 openGraph: { title: 'Hot Apple Gin', description: 'A Winter Cocktail, Served Warm', url: 'https://hotapplegin.com', siteName: 'Hot Apple Gin', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${dmSans.variable} ${cheltenham.variable}`}><body>{children}</body></html>;
}
