'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NabBar() {
  const navText = ['Home', 'About', 'Events', 'Connect'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='mt-4 flex flex-row items-center justify-between'>
      <Link href={'/'} className='sm:hidden'>
        <Image
          src='/cesa_logo.jpeg'
          alt='CESA'
          width={36}
          height={36}
          loading='eager'
          className='rounded-full'
        />
      </Link>
      <Link href={'/'} className='hidden sm:block'>
        <Image
          src='/cesa_logo.jpeg'
          alt='CESA'
          width={54}
          height={54}
          loading='eager'
          className='rounded-full'
        />
      </Link>

      <div className='hidden flex-row items-center gap-8 font-bold text-gray-500 sm:flex'>
        {navText.map((el, i) => {
          return (
            <Link key={i} href={'/'} className='p-2 hover:text-black'>
              <h3>{el}</h3>
            </Link>
          );
        })}
      </div>

      <div className='sm:hidden'>
        <button
          className='block text-gray-800 focus:outline-none'
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
          <div className='fixed right-0 top-0 mt-4 min-h-full w-56 bg-white shadow-lg'>
            <ul className='font-semibold'>
              {navText.map((el, i) => {
                return (
                  <li
                    key={i}
                    className='cursor-pointer px-4 py-2 hover:bg-gray-100'
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
