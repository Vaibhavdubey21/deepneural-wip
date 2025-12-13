import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';

const interSans = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DeepNeural | AI Agent Solutions',
  description:
    'DeepNeural is pioneering autonomous AI agents that transform how businesses operate.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interSans.variable} ${jetbrainsMono.variable} antialiased flex flex-col min-h-screen bg-light dark:bg-dark text-light-dark dark:text-light transition-colors`}
      >
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
