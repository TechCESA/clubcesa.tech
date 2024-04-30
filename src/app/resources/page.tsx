import Card from './resource_card';
import { resources_data } from './resources_data';
import { BackButton } from '@/components/back-button';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-bold text-cesa-blue'>Comming Soon...</h1>
      <BackButton />
    </div>
  );
}

function WorkingOnPage() {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10'>
      {/* Announcement */}
      <div id='announce' className='text-md text-nowrap text-center'>
        <span className='rounded-xl border-2 border-dashed  border-purple-800/60 p-2 px-4 text-purple-400'>
          <span className='font-semibold text-white'>NEW</span> Announcing
          roadmaps and resources exclusively for students.{' '}
          <span className='hidden'>Learn more!</span>
        </span>
      </div>

      {/* Header */}
      <div id='resourses-header' className='my-8 text-center'>
        <h1 className=' bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-6xl font-bold text-transparent'>
          Student Resources
        </h1>
      </div>

      {/* Resources */}
      <div className='container mx-auto my-12'>
        <div
          id='resources-category'
          className='mx-16 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:mx-0'
        >
          {resources_data.map((resource) => {
            return (
              <Card
                key={resource.id}
                title={resource.title}
                link={resource.link}
                isNew={resource.isNew}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
