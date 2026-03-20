import type { Metadata } from 'next';
import { Manrope, Anybody } from 'next/font/google';
import '@atlas/tokens/build/web/tokens.light.css';
import '@atlas/tokens/build/web/tokens.dark.css';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const anybody = Anybody({
  subsets: ['latin'],
  variable: '--font-anybody',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atlas Connect',
  description: 'Atlas Connect Portal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${anybody.variable}`}>
      <body>{children}</body>
    </html>
  );
}
