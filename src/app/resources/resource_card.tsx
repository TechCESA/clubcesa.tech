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
        className='rounded-xl border border-white/20 bg-blue-950/40 p-2 '
      >
        <h1 className='flex justify-between px-2 text-lg font-medium text-white/60'>
          {title}
          {isNew ? (
            <span className='flex items-center rounded-br rounded-tl text-sm font-medium text-purple-300'>
              <span className='mr-1.5 flex h-2 w-2'>
                <span className='absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75'></span>{' '}
                <span className='relative inline-flex h-2 w-2 rounded-full bg-purple-500'></span>
              </span>
              New
            </span>
          ) : null}
        </h1>
      </div>
    </Link>
  );
}
