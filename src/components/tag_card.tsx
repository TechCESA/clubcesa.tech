import { convertTagBtoF } from '@/lib/convert-tags';
import Link from 'next/link';
import { Card, CardHeader } from './ui/card';

export default function ResTagCard({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <Card className='rounded-xl border-2 transition duration-200 ease-in-out hover:border-purple-200 hover:bg-purple-50'>
        <CardHeader className='py-2 text-center text-sm font-medium text-primary md:text-base'>
          <p className='truncate'>{convertTagBtoF(title)}</p>
        </CardHeader>
      </Card>
    </Link>
  );
}

/* Blink animation */
/* 
  <p className='flex flex-row items-center gap-1 text-xs leading-6 text-purple-500'>
    <span className='relative flex size-2'>
      <span className='absolute inline-flex size-2 animate-ping rounded-full bg-purple-500 opacity-75'></span>
      <span className='absolute inline-flex size-2 rounded-full bg-purple-600'></span>
    </span>
    New
  </p>
*/
