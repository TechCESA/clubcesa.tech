import { ongoingEvents } from '@/actions/event-data';
import LeaderBoard from '@/components/leaderboard';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const findEvent = (slug) => {
  return ongoingEvents.find((event) => event.slug === slug);
};

export default function Page({ params }) {
  const event = findEvent(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className='bg-white text-gray-900'>
      {/* Navbar */}
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
            href='/events/ongoing/valo'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Valo Classic
          </Link>
          <Link
            href='/events/ongoing/fifa'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            FIFA
          </Link>
          <Link
            href='/events/ongoing/human-foosball'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Human Foosball
          </Link>
          <Link
            href='/events/ongoing/scavenger'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Scavenger Hunt
          </Link>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'></div>
      </nav>

      {/* Image gallery */}
      <div className='mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
        <div className='overflow-hidden rounded-lg lg:block'>
          <Image
            src={event.main_image}
            alt={event.title}
            className='h-full w-full object-cover object-center'
            width={1024}
            height={1024}
            quality={100}
          />
        </div>
        <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
          <div className='aspect-[3/2] overflow-hidden rounded-lg'>
            <Image
              src={event.side_image[0]}
              alt={event.title}
              className='h-full w-full object-cover object-center'
              width={1024}
              height={1024}
              quality={100}
            />
          </div>
          <div className='aspect-[3/2] overflow-hidden rounded-lg'>
            <Image
              src={event.side_image[1]}
              alt={event.title}
              className='h-full w-full object-cover object-center'
              width={1024}
              height={1024}
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* event info */}
      <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
        <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
          <h1 className='text-2xl font-bold tracking-tight sm:text-3xl'>
            {event.title}
          </h1>
        </div>

        {/* Options */}
        <div className='mt-4 lg:row-span-3 lg:mt-0'>
          <h2 className='sr-only'>event information</h2>
          <p className='text-sm text-gray-600'>Registration Fees</p>
          <div className='flex flex-row items-center gap-2'>
            <p className='text-2xl font-semibold tracking-tight'>
              {event.price}
            </p>
            <p className='text-sm text-gray-600'>{`/team`}</p>
          </div>

          <Link href={event.registerLink}>
            <button
              type='submit'
              className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Fill the form
            </button>
          </Link>
          <div className='hidden lg:block'>
            <LeaderBoard />
          </div>
        </div>

        <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
          {/* Description and details */}
          <div>
            <h3 className='sr-only'>Description</h3>

            <div className='space-y-6'>
              <p
                className='text-base'
                dangerouslySetInnerHTML={{ __html: event.description }}
              ></p>
            </div>
          </div>
        </div>
        <div className='lg:hidden'>
          <LeaderBoard />
        </div>
      </div>
    </div>
  );
}
