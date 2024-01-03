import Image from 'next/image';
import Link from 'next/link';
import EventImage from '@/public/event/event.avif';

export default function EventCard({ eventInformation }) {
  return (
    <div
      id='event_container'
      className='relative max-w-[90vw] overflow-hidden rounded-xl bg-white md:w-[35vw] lg:w-[20vw]'
    >
      <div
        id='event_date'
        className='absolute right-2 top-2 z-10 rounded-xl from-[#001aff] to-[#ff005e] px-4 py-1 text-center font-semibold text-white backdrop-blur-md hover:bg-gradient-to-tr'
      >
        <h1 className='text-2xl'>{eventInformation.date}</h1>
        <h1 className='text-sm'>{eventInformation.month}</h1>
      </div>

      <Image
        src={EventImage}
        alt='events_image'
        width={512}
        height={512}
        loading='lazy'
        quality={100}
        placeholder='blur'
        blurDataURL='/images/background.png'
        className='pointer-events-none h-full w-full object-cover object-center'
      />
      <div id='event_details' className='p-4 text-black'>
        <h1 className='text-2xl font-bold'>{eventInformation.title}</h1>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center'>
            <Image
              src='/icons/location.png'
              alt='CESA'
              width={12}
              height={12}
              loading='eager'
              className='mr-1'
            />
            <p className='text-xs text-stone-500'>
              {eventInformation.location}
            </p>
          </div>
          <p className='text-xs text-stone-500'>{eventInformation.time}</p>
        </div>
        <p className='mt-3 line-clamp-4 text-sm'>
          {eventInformation.description}
        </p>
        <Link href={eventInformation.registerLink} target='_blank'>
          <button className='mt-4 w-full rounded-xl bg-gradient-to-tr from-[#001aff] to-[#ff005e] p-2 text-center font-semibold text-white transition-all duration-300 hover:bg-gradient-to-bl'>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
