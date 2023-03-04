import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js 13 Tutorial Home Page - Dave Gray ',
  description: "This is a tutorial from Dave Gray's Youtube page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <h1>My NavBar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
