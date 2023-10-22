import { Poppins } from 'next/font/google';
import './globals.css';

const font = Poppins({
  subsets: ['devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'CESA Website',
  description:
    'Official website of Computer Engineering Student Association, BVCOENM',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
