'use client';
import axios from 'axios';
import Card from './card';
import { useEffect, useState } from 'react';
import { DocumentData } from '@firebase/firestore';
import { getResources } from '@/app/actions/resources';

export default function Page({ params }: { params: { resource: string } }) {
  const { resource } = params;
  const [resourcesData, setResourcesData] = useState<DocumentData>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchResources = async () => {
      const response = await getResources(resource);
      if (response.error) {
        setError(response.error);
        return;
      }
      setResourcesData(response.data);
      return;
    };
    fetchResources();
    setLoading(false);
  }, []);

  return (
    <div className='mx-auto  max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 '>
      <div className='container mx-auto my-12'>
        <div id='resourses-header' className='my-8 text-left'>
          <h1 className='under text-wrap text-2xl font-bold text-black'>
            {resource.toUpperCase()}
          </h1>
          <p className='text-md text-gray-600/60'>
            Step by step guide to becoming a {resource} master in{' '}
            {Date().split(' ')[3]}
          </p>
        </div>
        {loading ? (
          <div className='flex justify-center'>loading...</div>
        ) : error.length > 0 ? (
          <div className='flex justify-center font-medium text-red-400'>
            {error}
          </div>
        ) : (
          <div
            id='resources-category'
            className=' grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'
          >
            {resourcesData.map((res: DocumentData, index: number) => (
              <Card
                key={index}
                title={resourcesData[index].title}
                link={resourcesData[index].link}
                description={resourcesData[index].description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
