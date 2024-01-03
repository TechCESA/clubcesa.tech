'use client';

import Image from 'next/image';
import { pastEventInformation } from '@/event-data';
import { notFound } from 'next/navigation';
import EventImage from '@/public/event/event.avif';
import './globals.css';
import Carousel from '@/components/teams/carousel';

const findEvent = (slug) => {
  return pastEventInformation.find(
    (event) => event.title.toLowerCase() === slug
  );
};

export default function Page({ params }) {
  const event = findEvent(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className='newbody z-0'>
      <div className='eventpage animate-fade-in opacity-0'>
        <div className='custom-gradient flex-wrap p-7 pt-10 md:flex-wrap md:pt-10 lg:flex lg:pt-24'>
          <Image
            src={EventImage}
            alt='detailed event image'
            className='event-image animate-entry mx-auto h-48 rounded-2xl bg-black shadow-lg md:mx-auto md:flex md:h-44 lg:mx-0 lg:h-56'
            width={512}
            height={512}
            quality={100}
          />
          <header className='text-white'>
            <h1 className='eventname animate-fade-in pt-8 text-center text-xl font-bold md:pt-10 md:text-center md:text-5xl lg:pl-10 lg:pt-24 lg:text-7xl'>
              {event.title}
            </h1>
          </header>
        </div>
        <div className='eventdetails mx-auto w-full px-4 py-8 shadow-lg'>
          <section className='px-4 py-6'>
            <p className='mb-4 text-justify text-white'>
              <b>Date </b>: October 2023
            </p>
            <p className='mb-4 text-justify text-white'>
              <b>Location </b>: Bharati vidyapeeth college of engineering Navi
              Mumbai
            </p>
            <p className='mb-8 text-justify leading-relaxed text-white'>
              <b>Description </b>: Smart India Hackathon is a nationwide
              initiative to provide students with a platform to solve problems
              and offer innovative solutions.
            </p>
          </section>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
