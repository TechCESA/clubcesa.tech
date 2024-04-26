import EventCard from './events_components';
import { ongoingEvents } from '@/actions/event-data';

export default function Events() {
  let targetDate = new Date('2022-01-23').toLocaleDateString();
  let currentDate = new Date().toLocaleDateString();

  return (
    <div id='events' className='min-h-screen py-4'>
      {currentDate === targetDate ? (
        <h1 className='my-12 text-4xl font-black'>Ongoing&nbsp;&nbsp;Events</h1>
      ) : (
        <h1 className='my-12 text-4xl font-black'>
          Upcoming&nbsp;&nbsp;Events
        </h1>
      )}{' '}
      <section className='mx-auto grid grid-cols-1 items-center justify-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {ongoingEvents.map((event, index) => (
          <EventCard event={event} key={index} />
        ))}
      </section>
    </div>
  );
}
