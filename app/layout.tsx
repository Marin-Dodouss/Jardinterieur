'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <title>Jardintérieur - Mobilier Upcyclé </title>
        <meta name="description" content="Découvrez notre collection de meubles et accessoires d'ameublement durables, conçus à partir de tissus upcyclés. Alliant durabilité et originalité, nos créations apportent confort et style à votre extérieur tout en respectant l'environnement." />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}