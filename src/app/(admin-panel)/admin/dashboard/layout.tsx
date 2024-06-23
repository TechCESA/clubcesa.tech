import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav className='bg-cesa-blue p-2'>
        <ul className='container flex flex-row items-center justify-between font-semibold text-white'>
          <li className='text-xl'>
            <Link href='/admin/dashboard'>CESA Dashboard</Link>
          </li>
          <li className='text-lg'>
            <Link href='/learn'>Learn</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
}
