import type { Metadata } from 'next';
import QueryProvider from './components/query-provider';
import { Inter, Racing_Sans_One } from 'next/font/google';
import localFont from 'next/font/local';
import { lightThemeClass } from '@/styles/theme.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './reset.css';

// 1) Body font: SUIT (local)
const suit = localFont({
  src: [
    {
      path: '../assets/fonts/SUIT-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
});

// 2) UI brand font: Inter (google)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-ui-brand',
  display: 'swap',
});

// 3) Logo display font: Racing Sans One (google)
const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-logo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bike Forge',
  description: 'Customize and share your own motorcycle!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lightThemeClass} ${suit.variable} ${inter.variable} ${racingSansOne.variable}`}
    >
      <body>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
