import TagsGrid from '@/components/resource_grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center px-4 py-12 sm:px-6 md:py-14 lg:px-8'>
      {/* Announcement */}
      <div className='cursor-default text-nowrap text-center text-xs md:text-sm'>
        <span className='rounded-xl border-2 border-dashed border-purple-800/60 px-4 py-1 text-purple-500'>
          <span className='font-semibold text-black'>NEW!</span>
          {` Exclusively By Students, For Students`}
        </span>
      </div>

      {/* Header */}
      <h1 className='my-6 cursor-default bg-gradient-to-t from-purple-500 via-pink-500 to-red-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl'>
        {`Developer's Toolkit`}
      </h1>

      {/* Contribution Heading */}
      <h2 className='skew-x-6 transform text-balance bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 text-center text-xs font-semibold text-white shadow-xl transition hover:shadow-2xl sm:px-6'>
        <p className='-skew-x-6'>
          The Missing Link? It Might Be You. Share Your Tech Expertise
        </p>
      </h2>

      <div className='my-4 cursor-pointer touch-manipulation select-none rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'>
        <div className='relative -left-1 -top-1 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-0.5 active:left-0 active:top-0'>
          <Button
            variant='link'
            size='sm'
            className='h-auto rounded-[calc(0.5rem-2px)] bg-white px-3 py-2 text-xs font-bold uppercase tracking-wider hover:no-underline'
            asChild
          >
            <Link href='/learn/contribute'>Contribute</Link>
          </Button>
        </div>
      </div>

      {/* Resources */}
      <TagsGrid />
    </div>
  );
}
