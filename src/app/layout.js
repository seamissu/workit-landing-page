import { Fraunces, Manrope } from 'next/font/google';
import './globals.scss';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'Workit landing pag',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
