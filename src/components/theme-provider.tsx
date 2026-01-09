'use client';
import { darkThemeClass, lightThemeClass } from '@/styles/theme.css';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      value={{ light: lightThemeClass, dark: darkThemeClass }}
    >
      {children}
    </NextThemesProvider>
  );
}
