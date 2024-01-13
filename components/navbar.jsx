'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
      link: '#events',
    },
    {
      name: 'Referral Points',
      link: '/referrals',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    // return () => {
    //   document.body.style.overflow = 'auto';
    // };
  }, [isOpen]);

  return (
    <nav
      id='navbar'
      className='fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl p-6 opacity-0 lg:px-8'
    >
      <div className='flex flex-row items-center justify-between'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>CESA</span>
            <Image
              className='h-8 w-auto'
              src='/cesa_logo.png'
              width={36}
              height={36}
              alt=''
            />
          </Link>
        </div>

        <div className='hidden flex-row items-center gap-8 font-bold text-stone-400 md:flex'>
          {nav.map((el, i) => {
            return (
              <Link key={i} href={el.link} className='p-2 hover:text-white'>
                <h3>{el.name.replace(/[\s]/g, '\u00a0\u00a0')}</h3>
              </Link>
            );
          })}
        </div>

        <div className='md:hidden'>
          <button
            className='relative z-50 block p-2 text-white focus:outline-none'
            onClick={toggleMenu}
          >
            <svg
              className='h-6 w-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isOpen ? (
                <path d='M6 18L18 6M6 6l12 12'></path>
              ) : (
                <path d='M3 12h18M3 6h18M3 18h18'></path>
              )}
            </svg>
          </button>

          {isOpen && (
            <div className='fixed right-0 top-0 z-10 min-h-full w-56 bg-zinc-900 pt-12 shadow-lg'>
              <ul className='font-semibold'>
                {nav.map((el, i) => {
                  return (
                    <Link href={el.link} key={i} onClick={toggleMenu}>
                      <li
                        key={i}
                        className='my-4 cursor-pointer px-4 py-2 hover:bg-zinc-950'
                      >
                        <h3>{el.name.replace(/[\s]/g, '\u00a0\u00a0')}</h3>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
