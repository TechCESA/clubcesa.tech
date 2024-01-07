import EventCard from './events_components';
import { eventInformation } from '@/actions/event-data';

export default function Events() {
  return (
    <div id='events' className='min-h-screen py-4'>
      <h1 className='my-12 text-4xl font-black'>Events</h1>
      <section className='mx-auto grid grid-cols-1 items-center justify-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {eventInformation.map((event, index) => (
          <EventCard eventInformation={event} key={index} />
        ))}
      </section>
    </div>
  );
}
