'use client';

import EventCard from './events_components';

export default function Events() {
  return (
    <section
      id='events'
      className='max-w-screen flex min-h-screen items-center justify-center '
    >
      <EventCard />
    </section>
  );
}
