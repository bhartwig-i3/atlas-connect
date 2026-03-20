import type { Metadata } from 'next';
import '@atlas/tokens/build/web/tokens.light.css';
import '@atlas/tokens/build/web/tokens.dark.css';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
