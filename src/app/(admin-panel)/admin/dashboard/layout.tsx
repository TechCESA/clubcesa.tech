import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=''>
      <nav className='bg-cesa-blue p-2'>
        <ul className='container flex flex-row items-center justify-between gap-4 font-semibold text-white'>
          <li className='text-xl'>
            <Link href='/admin/dashboard'>CESA Dashboard</Link>
          </li>
          <Button variant='ghost' className='font-semibold' asChild>
            <Link href='/admin/dashboard/add'>Add</Link>
          </Button>
        </ul>
      </nav>
      {children}
    </main>
  );
}
