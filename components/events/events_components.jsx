import Image from 'next/image';
export default function EventCard() {
  return (
    <div
      id='event_container'
      className='relative h-fit w-[70vw] overflow-hidden rounded-xl  bg-white pb-4 lg:w-[35vw] xl:w-[20vw] '
    >
      <div
        id='event_date'
        className='absolute left-2 top-2 z-10 h-14 w-14 rounded-md bg-gray-200/40 text-center font-semibold text-white backdrop-blur-xl hover:bg-purple-300/40 lg:left-4 lg:top-4 lg:h-16 lg:w-16'
      >
        <h1 className='text-2xl lg:text-3xl'>12</h1>
        <h1 className='text-sm lg:text-base'>July</h1>
      </div>

      <div
        id='event_know_more'
        className='absolute right-2 top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white text-center text-black backdrop-blur-md hover:bg-purple-300/40 hover:text-white lg:right-4 lg:top-4 lg:h-6 lg:w-6'
      >
        <h1 className='text-sm lg:text-xl '>?</h1>
      </div>
      <div
        id='event_location'
        className='absolute right-2 top-[22vh] z-10 line-clamp-1 flex h-6 w-fit max-w-[7.5rem] items-center justify-center text-ellipsis rounded-md bg-white px-2 text-center text-purple-500 shadow-md shadow-purple-200/70 backdrop-blur-md hover:bg-purple-500/20 hover:text-white lg:right-4 lg:top-[23vh] lg:h-8 lg:max-h-8 lg:max-w-[12rem] xl:top-[21vh] xl:h-10 xl:max-h-10 xl:max-w-[14rem] '
      >
        <h1 className='text-sm font-semibold lg:text-lg  '>Computer Lab</h1>
      </div>
      <Image
        src='/images/background.png'
        alt='events_image'
        width={1000}
        height={1000}
        // objectFit='cover'
        // objectPosition='center'
        loading='eager'
        quality={20}
        placeholder='blur'
        blurDataURL='/images/background.png'
        // layout='responsive'
        className='  pointer-events-none object-cover object-center '
      />
      <div id='event_details' className='p-2 text-black lg:mt-2 lg:p-4'>
        <h1 className='text-xl font-bold hover:cursor-pointer lg:text-4xl xl:text-3xl'>
          Techfest
        </h1>
        <p className='mb-2 line-clamp-3 text-ellipsis text-xs font-normal capitalize lg:text-xl xl:text-lg'>
          Time: 12:00-01:10
        </p>
        <p className='mt-3 line-clamp-3 text-ellipsis text-xs text-gray-500 lg:line-clamp-4 lg:text-lg xl:text-base '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptates, quas, voluptatibus, dolores voluptatem quibusdam
          voluptatum iusto quod quos doloribus! Quod, voluptates. Quisquam
          voluptate, voluptas quidem voluptatibus quia doloribus?
        </p>
      </div>
      <div
        id='event_btns'
        className='flex flex-col text-black lg:flex-row lg:justify-evenly lg:px-2 xl:justify-around'
      >
        <button className='mx-2 my-1 h-8 rounded-xl  bg-purple-600 text-center text-white hover:bg-gray-200 hover:text-black lg:h-10 lg:w-36 lg:text-xl xl:w-44 xl:text-lg'>
          Register
        </button>
        <button className='mx-2 my-1 h-8 rounded-xl border-2 border-purple-600 text-center hover:border-gray-200 lg:h-10 lg:w-36 lg:text-xl  xl:w-44 xl:text-lg'>
          Know More
        </button>
      </div>
    </div>
  );
}
