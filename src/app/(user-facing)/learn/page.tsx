import TagsGrid from '@/components/resource_grid';

export default function Page() {
  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 lg:px-8'>
      {/* Announcement */}
      <div className='cursor-default text-nowrap text-center text-xs md:text-sm'>
        <span className='rounded-xl border-2 border-dashed border-purple-800/60 p-2 px-4 text-purple-500'>
          <span className='font-semibold text-black'>NEW!</span> Exclusively By
          Students, For Students
        </span>
      </div>

      {/* Header */}
      <h1 className='my-6 cursor-default bg-gradient-to-b from-amber-100 to-purple-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl'>
        {`Developer's Toolkit`}
      </h1>

      {/* Resources */}
      <TagsGrid />
    </div>
  );
}
