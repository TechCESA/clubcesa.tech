import ResourceGrid from '@/components/resource_grid';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <div className='mx-auto mt-12 max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10'>
        {/* Announcement */}
        <div className='mg:text-md text-nowrap text-center text-sm'>
          <span className='rounded-xl border-2 border-dashed  border-purple-800/60 p-2 px-4 text-purple-400'>
            <span className='font-semibold text-black'>NEW !</span> Resources
            exclusively for students.
          </span>
        </div>

        {/* Header */}
        <div className='my-8 text-center'>
          {/* <p>Recommendations by your seniors or fellow engineers.</p> */}
          <h1 className='bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-6xl font-bold text-transparent'>
            Student Resources
          </h1>
        </div>

        {/* Resources */}
        <ResourceGrid />
      </div>
    </div>
  );
}
