import { pastEventInformation } from '@/actions/event-data';
import { notFound } from 'next/navigation';
import Carousel from '@/components/past_events/carousel';

const findEvent = (slug) => {
  return pastEventInformation.find((event) => event.slug === slug);
};

export default function Page({ params }) {
  const event = findEvent(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className='mx-auto max-w-7xl animate-fadeIn px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-10'>
      <h1 className='text-4xl font-black'>{event.title}</h1>
      <p className='text-md font-semibold text-stone-500'>{event.date}</p>
      <section className='pb-8 pt-4'>
        <p>{event.description}</p>
      </section>
      <Carousel images={event.images} />
    </div>
  );
}
