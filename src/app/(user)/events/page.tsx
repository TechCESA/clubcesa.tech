import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Events } from '@/utils/event-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div className='container mx-auto my-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
      {Events.map((event) => (
        <Card key={event.slug}>
          <Image
            src={event.main_image}
            alt={event.title}
            className='mb-4 h-96 w-full rounded-md object-cover'
            width={500}
            height={500}
            quality={100}
          />

          <CardContent>
            <h2 className='mb-2 text-xl font-bold text-black'>{event.title}</h2>
            <p
              className='mb-4 line-clamp-4 text-gray-600'
              dangerouslySetInnerHTML={{ __html: event.description }}
            ></p>
          </CardContent>

          <CardFooter className='flex flex-col items-start justify-between'>
            <div className='text-black'>
              <p className='text-sm text-gray-600'>Registration Fees</p>
              <div className='flex flex-row items-center gap-2'>
                <p className='text-2xl font-semibold tracking-tight'>
                  {event.price}
                </p>
                <p className='text-sm text-gray-600'>
                  {event.isTeamGame ? '/team' : '/person'}
                </p>
              </div>
            </div>

            <div className='flex w-full flex-row justify-between gap-4'>
              <Link
                href={event.knowMoreLink}
                className='mt-4 w-full rounded-md bg-cesa-blue py-2 text-center text-white'
              >
                View
              </Link>
              <Link
                href={event.registerLink}
                className='mt-4 w-full rounded-md bg-cesa-blue py-2 text-center text-white'
              >
                Register
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
