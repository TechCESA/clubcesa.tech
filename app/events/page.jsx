import Image from 'next/image';
import Link from 'next/link';
import Events from './events';

export default function Page() {
  return (
    <div className='bg-white'>
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
      </nav>
      <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-5'>
        <Events />
      </div>
    </div>
  );
}
