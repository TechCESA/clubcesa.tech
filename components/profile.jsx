import Image from 'next/image';

export default function Profile({ name, role, picture }) {
  return (
    <div className='overflow-hidden rounded-xl'>
      <div className='relative h-60 w-48'>
        <Image
          src={picture}
          alt='profile'
          height={512}
          width={512}
          quality={100}
          className='absolute h-full w-full rounded-lg object-contain'
        />
      </div>
      <div className='relative -mt-6 px-4'>
        <div className='rounded-xl py-1 text-center backdrop-blur-md'>
          <p className='text-lg font-semibold leading-tight'>{name}</p>
          <p className='text-xs font-semibold leading-tight text-zinc-500'>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
