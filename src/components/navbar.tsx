import Link from 'next/link';

export default function NabBar() {
  const nav = [
    {
      name: '/',
      link: '/',
    },
    {
      name: 'Student Resources',
      link: '/resources',
    },
    {
      name: 'Events',
      link: '/events',
    },
    {
      name: 'Memories',
      link: '/memories',
    },
  ];

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 mx-auto py-4'>
      <div className='container flex flex-row items-center gap-12 text-start font-bold text-cesa-blue'>
        {nav.map((el, i) => {
          return (
            <Link key={i} href={el.link} className='hover:scale-125'>
              <h3>{el.name.replace(/[\s]/g, '\u00a0\u00a0')}</h3>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
