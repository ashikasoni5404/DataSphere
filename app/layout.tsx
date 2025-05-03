import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatBot } from '@/components/home/ChatBot';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DataSphere | Data Engineering, Data Science, and AI Solutions',
  description: 'DataSphere delivers cutting-edge solutions in data engineering, data science, and artificial intelligence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          {/* <ChatBot /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}