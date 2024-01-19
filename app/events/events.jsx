import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ongoingEvents } from '@/actions/event-data';

export default async function Events() {
  return (
    <div className='container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
      {ongoingEvents.map((event) => (
        <div key={event.slug} className='rounded-lg bg-white p-4 shadow-md'>
          <Image
            src={event.main_image}
            alt={event.title}
            className='mb-4 h-96 w-full rounded-md object-contain'
            width={500}
            height={500}
            quality={100}
          />
          <h2 className='mb-2 text-xl font-bold text-black'>{event.title}</h2>
          <p
            className='mb-4 line-clamp-4 text-gray-600'
            dangerouslySetInnerHTML={{ __html: event.description }}
          ></p>
          <div className='mt-8 flex flex-col justify-between'>
            <div className='text-black'>
              <p className='text-sm text-gray-600'>Registration Fees</p>
              <div className='flex flex-row items-center gap-2'>
                <p className='text-2xl font-semibold tracking-tight'>
                  {event.price}
                </p>
                <p className='text-sm text-gray-600'>{`/team`}</p>
              </div>
            </div>
            <div className='flex flex-row justify-between gap-4'>
              <Link
                href={event.knowMoreLink}
                className='mt-4 w-full rounded-md bg-indigo-600 py-2 text-center text-white'
              >
                View
              </Link>
              <Link
                href={event.registerLink}
                className='mt-4 w-full rounded-md bg-indigo-600 py-2 text-center text-white'
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
