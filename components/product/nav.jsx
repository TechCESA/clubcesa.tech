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
              width={36}
              height={36}
              alt=''
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          ></button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <div className='relative'>
            {/* ... Your 'Product' menu code ... */}
          </div>

          {/* Other menu items */}
          {/* <a href="/product/Varsity" className="text-sm font-semibold leading-6 text-gray-900">Varsity</a> */}

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
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> */}
        </div>
      </nav>
      {/* Mobile menu */}
      <div className='lg:hidden' role='dialog' aria-modal='true'>
        <h1>Hello</h1>
        {/* ... Your mobile menu code ... */}
      </div>
    </header>
  );
}
