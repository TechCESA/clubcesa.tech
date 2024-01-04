'use client';

import { pastEventInformation } from '@/event-data';
import { notFound } from 'next/navigation';
import Carousel from '@/components/past_events/carousel';

const findEvent = (slug) => {
  return pastEventInformation.find((event) => event.sku === slug);
};

export default function Page({ params }) {
  const event = findEvent(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className='m-auto max-w-[90vw] animate-fadeIn sm:max-w-[75vw]'>
      <div className='py-8 text-white'>
        {/* <Image
            src={EventImage}
            alt='detailed event image'
            className='animate-entry h-56 rounded-xl'
            width={512}
            height={512}
            quality={100}
          /> */}
        <h1 className='text-4xl font-black'>{event.title}</h1>
        <p className='text-md font-semibold text-stone-500'>{event.date}</p>
        <section className='pb-8 pt-4'>
          <p>{event.description}</p>
        </section>
      </div>
      <Carousel images={event.images} />
    </div>
  );
}
