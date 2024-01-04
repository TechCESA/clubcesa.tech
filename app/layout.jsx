import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const font = Poppins({
  subsets: ['devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'CESA',
  description:
    'Official website of Computer Engineering Student Association, BVCOENM',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth antialiased'>
      <body className={`${font.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
