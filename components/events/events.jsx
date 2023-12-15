'use client';

import EventCard from './events_components';

export default function Events() {
  const image =
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <>
      <h1 className='mb-12 text-center text-2xl font-semibold lg:text-5xl'>
        Events
      </h1>
      <section
        id='events'
        className='max-w-screen flex min-h-screen flex-col items-center justify-center gap-y-20 lg:grid lg:grid-cols-3 lg:justify-items-center '
      >
        <EventCard image={image} />
        <EventCard image={image} />
        <EventCard image={image} />
        <EventCard image={image} />
      </section>
    </>
  );
}
