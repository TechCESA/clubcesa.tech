'use client';

import axios from 'axios';
import Card from './card';
import { useEffect, useState } from 'react';
import { DocumentData } from '@firebase/firestore';
import Loader from '@/components/loader';

export default function Page({ params }: { params: { resource: string } }) {
  const { resource } = params;
  const [resourcesData, setResourcesData] = useState<DocumentData>([]);
  const [loading, setLoading] = useState(true);

  async function getResources() {
    setLoading(true);
    const response = await axios.post('/api/resource', {
      resource: resource,
    });
    setResourcesData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getResources();
  }, []);

  function capitalizeAndRemoveHyphen(str: string) {
    return str
      .replace(/-/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <div className='mx-auto min-h-screen max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 '>
      <div className='container mx-auto my-12'>
        <div id='resourses-header' className='my-8 text-left'>
          <h1 className='under text-wrap text-2xl font-bold text-black'>
            {capitalizeAndRemoveHyphen(resource)}
          </h1>
          <p className='text-md text-gray-600/60'>
            Step by step guide to becoming a{' '}
            {capitalizeAndRemoveHyphen(resource)} master in{' '}
            {Date().split(' ')[3]}
          </p>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
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
