import type { Metadata } from 'next';
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
      <body>{children}</body>
    </html>
  );
}
