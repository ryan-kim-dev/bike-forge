import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cub Configurator',
  description: 'Create and share your own cub!',
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
