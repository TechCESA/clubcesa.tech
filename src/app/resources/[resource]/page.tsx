import { resource_data, resources_data } from '../resources_data';
import Card from './card';

export default function Page({ params }: { params: { resource: string } }) {
  const { resource } = params;
  return (
    <div className='mx-auto  max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 '>
      <div className='container mx-auto my-12'>
        <div id='resourses-header' className='my-8 text-left'>
          <h1 className='text-black font-bold text-2xl text-wrap under'>
            {resources_data.find((res) => res.id === parseInt(resource))?.title}
          </h1>
          <p className='text-md text-gray-600/60'>{resources_data.find((res) =>  res.id === parseInt(resource))?.desciption}</p>
        </div>
        <div
          id='resources-category'
          className=' grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'
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
