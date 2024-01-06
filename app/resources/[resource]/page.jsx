import { resource_data } from '../resources_data';
import Card from './card';

export default function Page({ params }) {
  const { resource } = params;
  return (
    <div className='mx-auto  max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 '>
      <div className='container mx-auto my-12'>
        <div id='resourses-header' className='my-8 text-center'>
          <h1 className=' bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-5xl font-bold uppercase text-transparent'>
            {resource}
          </h1>
          {/* <p>Add description</p> */}
        </div>
        <div
          id='resources-category'
          className='mx-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'
        >
          {resource_data.map((resource) => {
            return (
              <Card
                key={resource.id}
                title={resource.title}
                link={resource.link}
                description={resource.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
