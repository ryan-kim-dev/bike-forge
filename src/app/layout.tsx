import type { Metadata } from 'next';
import QueryProvider from './components/query-provider';
import './globals.css';

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
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
