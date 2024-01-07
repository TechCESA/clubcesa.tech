import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <header>
      <nav
        className='mx-auto flex max-w-7xl flex-row items-center p-6 lg:px-8'
        aria-label='Global'
      >
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
        <div className='hidden lg:flex lg:gap-x-12'>
          <Link
            href='/merch/varsity'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Varsity
          </Link>
          <Link
            href='/merch/sport-jersey'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Jersey
          </Link>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'></div>
      </nav>
    </header>
  );
}
