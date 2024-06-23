import { convertTagBtoF } from '@/lib/convert-tags';
import Link from 'next/link';
import { Card, CardHeader } from './ui/card';

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
      <Card className='rounded-xl border transition duration-300 ease-in-out hover:border-purple-800/60 hover:bg-purple-50'>
        <CardHeader className='flex flex-row items-center justify-between py-2 text-sm font-medium text-primary md:text-base'>
          <span className='truncate'>{convertTagBtoF(title)}</span>

          {/* Blink animation */}
          {isNew && (
            <div className='flex flex-row items-center gap-1 text-xs text-purple-300'>
              <span className='relative flex size-2'>
                <span className='absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75'></span>
                <span className='relative inline-flex h-2 w-2 rounded-full bg-purple-500'></span>
              </span>
              New
            </div>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
