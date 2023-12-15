import Image from 'next/image';
import Link from 'next/link';
export default function EventCard({ eventInformation }) {
  return (
    <div
      id='event_container'
      className='-md:w-[20vw] relative h-fit w-[70vw] overflow-hidden  rounded-xl bg-white pb-4 lg:w-[35vw] xl:w-[20vw] '
    >
      <div
        id='event_date'
        className='absolute left-2 top-2 z-10 h-14 w-14 rounded-md bg-gray-200/40 text-center font-semibold text-white backdrop-blur-xl hover:bg-purple-300/40 lg:left-4 lg:top-4 lg:h-16 lg:w-16'
      >
        <h1 className='text-2xl lg:text-3xl'>{eventInformation.date}</h1>
        <h1 className='text-sm lg:text-base'>{eventInformation.month}</h1>
      </div>

      <Image
        src={eventInformation.image}
        alt='events_image'
        width={1000}
        height={1000}
        loading='lazy'
        quality={20}
        placeholder='blur'
        blurDataURL='/images/background.png'
        className='  pointer-events-none object-cover object-center '
      />
      <div id='event_details' className='p-2 text-black lg:mt-2 lg:p-4'>
        <h1 className='text-xl font-bold hover:cursor-pointer lg:text-4xl xl:text-3xl'>
          {eventInformation.title}
        </h1>
        <p className='mb-2 line-clamp-3 text-ellipsis text-xs font-normal capitalize lg:text-xl xl:text-lg'>
          {eventInformation.time}{' '}
        </p>
        <p className='mt-3 line-clamp-3 text-ellipsis text-xs text-gray-500 lg:line-clamp-4 lg:text-lg xl:text-base '>
          {eventInformation.description}
        </p>
      </div>
      <div
        id='event_btns'
        className='flex flex-col text-black lg:flex-row lg:justify-evenly lg:px-2 xl:justify-around'
      >
        <button className='mx-2 my-1 h-8 rounded-xl  bg-purple-600 text-center text-white hover:bg-gray-200 hover:text-black lg:h-10 lg:w-36 lg:text-xl xl:w-44 xl:text-lg'>
          <Link href={eventInformation.registerLink}>Register</Link>
        </button>
        <button className='mx-2 my-1 h-8 rounded-xl border-2 border-purple-600 text-center hover:border-gray-200 lg:h-10 lg:w-36 lg:text-xl  xl:w-44 xl:text-lg'>
          <Link href={eventInformation.knowMoreLink}>Know More</Link>
        </button>
      </div>
    </div>
  );
}
