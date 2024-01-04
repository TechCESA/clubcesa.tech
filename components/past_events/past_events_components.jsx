import Image from 'next/image';
import Link from 'next/link';
import './style.css';

export default function PastEventCard({ pastEvents }) {
  return (
    <div className='relative inline-block h-[280px] w-[300px] overflow-hidden rounded-xl max-lg:h-[260px] max-lg:w-[260px]'>
      <Image
        className='overflow-hidden rounded-xl object-cover object-center'
        alt='past event image'
        src={pastEvents.home_image}
        width={400}
        height={400}
      />
      <div
        id='caption'
        className='absolute left-0 top-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-[#15161850] px-3 py-3'
      >
        <h2 id='title' className='text-2xl font-bold'>
          {pastEvents.title}
        </h2>
        <h2
          id='description'
          className='text-ellipse line-clamp-4 h-[100px] overflow-hidden text-center text-sm'
        >
          {pastEvents.description}
        </h2>
        <div id='footer' className='flex flex-row justify-between'>
          <p className='text-lg'> {pastEvents.date}</p>
          <Link href={pastEvents.url}>
            <Image
              className='img cursor-pointer'
              src='/icons/arrow.png'
              alt='Icon'
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
