import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Christiane Bernal | Terapia e Mentoria',
  description: 'Encontre a força real para reconstruir sua vida, seus relacionamentos e seu propósito.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-[#fdfcfb] text-[#2a2a2a] antialiased selection:bg-[#e6d5c3] selection:text-[#2a2a2a]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
