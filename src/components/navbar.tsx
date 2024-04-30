import Link from 'next/link';

export default function NabBar() {
  const nav = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Student Resources',
      link: '/resources',
    },
    {
      name: 'Merch',
      link: '/merch',
    },
    {
      name: 'Events',
      link: '/events',
    },
    {
      name: 'Referral Points',
      link: '/referrals',
    },
  ];

  return (
    <nav
      id='navbar'
      className='fixed left-[50%] top-0 z-50 mx-auto max-w-7xl -translate-x-[50%] p-4'
    >
      <div className='flex flex-row items-center gap-8 font-bold text-cesa-blue'>
        {nav.map((el, i) => {
          return (
            <Link key={i} href={el.link} className='p-2 hover:animate-bounce'>
              <h3>{el.name.replace(/[\s]/g, '\u00a0\u00a0')}</h3>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
