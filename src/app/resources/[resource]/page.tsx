'use client';
import { useEffect, useState } from 'react';
import Card from './card';
import { DocumentData, collection, getDocs } from '@firebase/firestore';
import { db } from '@/firebaseConfig';

export default function Page({ params }: { params: { resource: string } }) {
  const { resource } = params;
  const [resourcesData, setResourcesData] = useState<DocumentData>([]);
  async function getResources() {
    const querySnapshot = await getDocs(collection(db, 'resources'));
    const data: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      if (doc.id === resource) {
        data.push(doc.data().data);
      }
    });
    setResourcesData(data[0]);
  }

  useEffect(() => {
    getResources();
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
      </div>
    </div>
  );
}
