'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NabBar() {
  const navText = ['Home', 'About', 'Events', 'Connect'];
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
      className='sticky z-20 mt-4 flex flex-row items-center justify-between opacity-0'
    >
      <Link href={'/'} className='md:hidden'>
        <Image
          src='/cesa_logo.png'
          alt='CESA'
          width={36}
          height={36}
          loading='eager'
          className='rounded-full'
        />
      </Link>
      <Link href={'/'} className='hidden md:block'>
        <Image
          src='/cesa_logo.png'
          alt='CESA'
          width={54}
          height={54}
          loading='eager'
          className='rounded-full'
        />
      </Link>

      <div className='hidden flex-row items-center gap-8 font-bold text-stone-400 md:flex'>
        {navText.map((el, i) => {
          const href = el.toLowerCase();
          return (
            <Link key={i} href={`#${href}`} className='p-2 hover:text-white'>
              <h3>{el}</h3>
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
          <div className='fixed right-0 top-0 z-10 min-h-full w-56 bg-zinc-900 pt-4 shadow-lg'>
            <ul className='font-semibold'>
              {navText.map((el, i) => {
                return (
                  <li
                    key={i}
                    className='my-4 cursor-pointer px-4 py-2 hover:bg-zinc-950'
                  >
                    <h3>{el}</h3>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
