import Link from 'next/link';

export default function Card({
  title,
  link,
  isNew,
}: {
  title: string;
  link: string;
  isNew: boolean;
}) {
  return (
    <Link href={link}>
      <div
        id='backend'
        className='rounded-xl border border-white/90 bg-black/5 p-2 w-full mx-auto cursor-pointer hover:bg-black/10 transition duration-300 ease-in-out'
      >
        <h1 className='flex justify-between   px-2 text-lg font-medium text-black/60'>
          {title}
           {/* Blink animation */}
          {isNew && (
            <span className='ml-2 flex items-center rounded-br rounded-tl text-sm font-medium text-purple-300'>
              <span className='mr-1.5 flex h-2 w-2'>
                <span className='absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75'></span>{' '}
                <span className='relative inline-flex h-2 w-2 rounded-full bg-purple-500'></span>
              </span>
              New
            </span>
          )}
        </h1>
      </div>
    </Link>
  );
}
