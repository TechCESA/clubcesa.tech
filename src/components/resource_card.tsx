import { convertTagBtoF } from '@/lib/convert-tags';
import Link from 'next/link';

export default function ResCard({
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
      <div className='mx-auto w-full rounded-xl border bg-gray-100 p-2 transition duration-300 ease-in-out hover:border-purple-800/60 hover:bg-purple-50'>
        <h1 className='flex flex-row items-center justify-between px-2 text-sm font-medium text-primary md:text-base'>
          <span className='truncate'>{convertTagBtoF(title)}</span>

          {/* Blink animation */}
          {isNew && (
            <span className='ml-5 flex flex-row items-center text-xs text-purple-300'>
              <span className='relative mr-1.5 flex h-2 w-2'>
                <span className='absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75'></span>
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
