import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const font = Poppins({
  subsets: ['devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Computer Engineering Student Association, BVCOENM',
  description:
    'This community is initiative taken by students of Computer Department of Bharati Vidyapeeth College of Engineering, Navi Mumbai',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='select-none scroll-smooth antialiased'>
      <body className={`${font.className} flex min-h-screen flex-col`}>
        <div className='flex-1'>{children}</div>
        <div className='flex-shrink-0'>
          <Footer />
        </div>
      </body>
    </html>
  );
}
