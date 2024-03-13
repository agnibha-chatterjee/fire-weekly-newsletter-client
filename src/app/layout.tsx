import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/lib/firebase';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hattori - A personalized stock market newsletter',
  description: 'A stock market newsletter for the modern investor'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
