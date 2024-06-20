import ResourceGrid from '@/components/resource_grid';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <div className='mx-auto mt-10 max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10'>
        {/* Announcement */}
        <div className='mg:text-md cursor-default text-nowrap text-center text-sm'>
          <span className='rounded-xl border-2 border-dashed  border-purple-800/60 p-2 px-4 text-purple-500'>
            <span className='font-semibold text-black'>NEW!</span> Exclusively
            By Students, For Students
          </span>
        </div>

        {/* Header */}
        <h1 className='my-8 cursor-default bg-gradient-to-b from-amber-100 to-purple-500 bg-clip-text text-center text-6xl font-bold text-transparent'>
          {`Developer's Toolkit`}
        </h1>

        {/* Resources */}
        <ResourceGrid />
      </div>
    </div>
  );
}
