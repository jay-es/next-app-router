import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseStyles = 'prose max-w-none overflow-y-scroll';
  const layoutStyles = 'grid min-h-screen grid-rows-[1fr_auto]';

  return (
    <html lang="en">
      <body className={`${baseStyles} ${layoutStyles} ${inter.className}`}>
        <main>{children}</main>
        <footer className="text-center">&copy;jay-es</footer>
      </body>
    </html>
  );
}
