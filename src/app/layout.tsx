import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Florea Bouquet | Curated Fresh Botanical Studio',
  description: 'Rangkaian bunga segar harian, bespoke arrangements, dan wedding bouquet berkelas by Florea Bouquet.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-[#FAF8F5] text-stone-900 antialiased selection:bg-rose-100 selection:text-rose-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
