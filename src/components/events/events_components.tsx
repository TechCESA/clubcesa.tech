import Image from 'next/image';
import Link from 'next/link';

export default function EventCard({ event }) {
  return (
    <div
      id='event_container'
      className='relative max-w-7xl overflow-hidden rounded-xl bg-white md:w-[35vw] lg:w-[20vw]'
    >
      <div
        id='event_date'
        className='absolute right-2 top-2 z-10 rounded-xl from-[#001aff] to-[#ff005e] px-4 py-1 text-center font-semibold text-white backdrop-blur-md hover:bg-gradient-to-tr'
      >
        <h1 className='text-2xl'>{event.date}</h1>
        <h1 className='text-sm'>{event.month}</h1>
      </div>

      <Image
        src={event.main_image}
        alt='events_image'
        width={512}
        height={512}
        loading='lazy'
        quality={100}
        placeholder='blur'
        blurDataURL='/background.png'
        className='pointer-events-none h-full w-full object-cover object-center'
      />
      <div id='event_details' className='p-4 text-black'>
        <h1 className='text-2xl font-bold'>{event.title}</h1>
        <p
          className='mt-3 line-clamp-4 text-sm'
          dangerouslySetInnerHTML={{ __html: event.description }}
        ></p>
        <Link href={event.knowMoreLink}>
          <button className='mt-4 w-full rounded-xl bg-gradient-to-tr from-[#001aff] to-[#ff005e] p-2 text-center font-semibold text-white transition-all duration-300 hover:bg-gradient-to-bl'>
            View
          </button>
        </Link>
      </div>
    </div>
  );
}
