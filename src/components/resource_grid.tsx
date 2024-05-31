'use client';
import { db } from '@/firebaseConfig';
import { collection, getDocs } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import Card from '@/components/resource_card';

export default function ResourceGrid() {
  const [resource, setResource] = useState<string[]>([]);
  async function getResources() {
    const querySnapshot = await getDocs(collection(db, 'resources'));
    const data: string[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.id);
    });
    setResource(data);
  }

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className='container mx-auto my-12'>
      <div
        id='resources-categories'
        className='mx-4 grid grid-cols-1 gap-2 md:grid-cols-3 xl:mx-0'
      >
        {resource.map((res) => {
          return (
            // <h1>{res}</h1>
            <Card
              key={res}
              title={res}
              link={`/resources/${res}`}
              isNew={true}
            />
          );
        })}
      </div>
    </div>
  );
}
