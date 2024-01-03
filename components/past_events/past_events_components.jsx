import Image from 'next/image';
import Link from 'next/link';
import './style.css';

export default function PastEventCard({ pastEvents }) {
  return (
    <div className='relative inline-block h-[175px] w-[250px] rounded-xl border-2 border-white max-sm:h-[140px] max-sm:w-[200px]'>
      <Image
        className='overflow-hidden rounded-xl'
        alt='past event image'
        src={pastEvents.image}
        layout='fill'
        objectFit='contain'
      />
      <div
        id='caption'
        className='absolute left-0 top-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-[#15161850] px-3 py-3'
      >
        <h2 id='title' className='text-[100%] font-semibold'>
          {pastEvents.title}
        </h2>
        <h2
          id='description'
          className='text-ellipse h-[50px] overflow-hidden text-xs'
        >
          {pastEvents.description}
        </h2>
        <div id='footer' className='flex flex-row justify-between'>
          <p className='text-[90%]'> {pastEvents.date}</p>
          <Link href={pastEvents.url} target='_blank'>
            <Image
              className='img cursor-pointer'
              src='/icons/arrow.png'
              alt='Icon'
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
