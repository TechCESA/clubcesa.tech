import Link from 'next/link';
import {
  DropdownMenuLabel,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Menu } from 'lucide-react';

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
    <nav className='fixed right-4 top-0 z-50 mx-auto py-4 font-bold text-cesa-blue md:left-0 md:right-0'>
      {/* Desktop view */}
      <div className='container hidden flex-row items-center gap-12 md:flex'>
        {nav.map((el, i) => {
          return (
            <Link key={i} href={el.link}>
              <h3>{el.name.replace(/[\s]/g, '\u00a0\u00a0')}</h3>
            </Link>
          );
        })}
      </div>

      {/* Mobile view */}
      <div className='block md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu className='size-6 stroke-cesa-blue' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-2 text-cesa-blue'>
            {nav.map((el) => {
              return (
                <DropdownMenuLabel key={el.link}>
                  <Link href={el.link}>
                    {el.name.replace(/[\s]/g, '\u00a0\u00a0')}
                  </Link>
                </DropdownMenuLabel>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
