import type { Metadata } from 'next';
import './globals.css';
import { arcadiaDisplay, arcadiaText, ppNeueMontreal } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Mercury | Banking for Startups',
  description:
    'A complete financial stack to build your company. Scale with FDIC-insured bank accounts, debit and credit cards, and 3-click payment flows.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${arcadiaDisplay.variable} ${arcadiaText.variable} ${ppNeueMontreal.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
