import SignOutBtn from '@/components/signout-btn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav className='bg-cesa-blue p-2'>
        <ul className='container flex w-full flex-row items-center justify-between font-semibold text-white'>
          <li className='text-xl'>
            <Link href='/dashboard'>CESA Dashboard</Link>
          </li>
          <div className='grid gap-y-2 space-x-2 text-right md:block'>
            <Button variant='ghost' className='text-base' asChild>
              <Link href='/learn'>Go to Learn</Link>
            </Button>
            <SignOutBtn />
          </div>
        </ul>
      </nav>
      {children}
    </main>
  );
}
