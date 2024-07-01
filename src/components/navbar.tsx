'use client';

import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import UserProfileDropDown from './user-profile-dropdown';

export default function NabBar() {
  const pathname = usePathname();
  const { data: session } = useSession({ required: false });

  const nav = [
    { name: '/', link: '/' },
    { name: 'Learn', link: '/learn' },
    { name: 'Events', link: '/events' },
    { name: 'Memories', link: '/memories' },
  ];

  return (
    <nav
      className={cn(
        'fixed right-4 top-0 z-50 mx-auto py-4 font-bold text-cesa-blue md:left-0 md:right-0',
        { hidden: pathname.startsWith('/dashboard') },
      )}
    >
      {/* Desktop view */}
      <div className='container hidden flex-row justify-between md:flex'>
        <div className='flex flex-row items-center gap-12'>
          {nav.map((el, i) => {
            return (
              <Link key={i} href={el.link}>
                <h3>{el.name.replace(/[\s]/g, '\u00a0\u00a0')}</h3>
              </Link>
            );
          })}
        </div>
        {session && <UserProfileDropDown />}
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
                <DropdownMenuItem key={el.link} asChild>
                  <Link href={el.link}>
                    {el.name.replace(/[\s]/g, '\u00a0\u00a0')}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            {session && (
              <>
                <DropdownMenuItem asChild>
                  <Link href='/me'>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className='cursor-pointer text-destructive'
                  onClick={() => {
                    signOut({ redirect: true, callbackUrl: '/' });
                  }}
                >
                  Sign Out
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
