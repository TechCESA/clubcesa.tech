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
  function capitalizeAndRemoveHyphen(str: string) {
    return str
      .replace(/-/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <Link href={link}>
      <div
        id='backend'
        className='mx-auto w-full cursor-pointer rounded-xl border bg-gray-100 p-2 transition duration-300 ease-in-out hover:border-purple-800/60 hover:bg-purple-50'
      >
        <h1 className='flex justify-between px-2 text-lg font-medium text-black/60'>
          {capitalizeAndRemoveHyphen(title)}

          {/* Blink animation */}
          {isNew && (
            <span className='ml-5 flex items-center rounded-br rounded-tl text-sm font-medium text-purple-300'>
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
