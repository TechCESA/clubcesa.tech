import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <header>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>CESA</span>
            <Image
              className='h-8 w-auto'
              src='/cesa_logo.png'
              alt=''
              width={128}
              height={128}
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <div className='relative'>
            {/* ... Your 'Product' menu code ... */}
          </div>

          {/* Other menu items */}
          {/* <a href="/product/Varsity" className="text-sm font-semibold leading-6 text-gray-900">Varsity</a> */}
          <Link
            href='/product/sport-jersey'
            className='text-xl font-semibold leading-6 text-gray-900'
          >
            Jersey
          </Link>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> */}
        </div>
      </nav>
      {/* Mobile menu */}
      <div className='lg:hidden' role='dialog' aria-modal='true'>
        {/* ... Your mobile menu code ... */}
      </div>
    </header>
  );
}
