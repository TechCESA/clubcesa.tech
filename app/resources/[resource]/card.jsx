import Image from 'next/image';
import Link from 'next/link';

export default function Card({ title, description, link }) {
  return (
    <Link
      href={link}
      className='relative flex h-full max-h-40 flex-col rounded-md border border-gray-200/40 bg-blue-500/20 p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5 '
    >
      <span className='text-md mb-0 flex justify-between font-semibold text-white/90 sm:mb-1.5 sm:text-xl'>
        <span>{title}</span>
        <span>
          <Image
            src='/icons/next.svg'
            alt='Next icon'
            width={36}
            height={36}
            className='h-6 w-6'
          />
        </span>
      </span>
      <span className='line-clamp-2 text-ellipsis text-sm leading-normal text-gray-400  sm:block'>
        {description}
      </span>
    </Link>
  );
}
