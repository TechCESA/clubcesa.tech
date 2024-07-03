import SessionProvider from '@/components/auth-session-provider';
import Footer from '@/components/footer';
import NabBar from '@/components/navbar';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Poppins } from 'next/font/google';
import { authOptions } from './api/auth/[...nextauth]/options';
import Transition from './template';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Computer Engineering Students Association, BVCOENM',
  description:
    'This community is initiative taken by students of Computer Department of Bharati Vidyapeeth College of Engineering, Navi Mumbai',
  keywords: [
    'CESA',
    'clubcesa',
    'Club Cesa',
    'Tech Cesa',
    'Cesa Tech Team',
    'Tech Team',
    'CESA Club',
    'CESA Tech',
    'Computer Engineering',
    'BVCOENM',
    'CESABVCOENM',
    'Computer Department',
    'Computer Engineering Students Association',
    'Bharati Vidyapeeth College of Engineering, Navi Mumbai',
    'Computer Engineering Students Association, BVCOENM',
    'Computer Engineering Students Association',
    'Computer Department, BVCOENM',
    'Computer Department, Bharati Vidyapeeth College of Engineering, Navi Mumbai',
    'Computer Department, Bharati Vidyapeeth College of Engineering',
    'Computer Department, BVCOENM',
    'Bharati Vidyapeeth College of Engineering',
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body
        className={cn(
          'min-h-screen scroll-smooth bg-background font-poppins text-primary antialiased selection:bg-cesa-blue selection:text-primary-foreground',
          font.variable,
        )}
      >
        <SessionProvider session={session}>
          <NabBar />
          <Transition>{children}</Transition>
          <Footer />
        </SessionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
