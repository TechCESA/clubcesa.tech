'use client';
import { db } from '@/firebaseConfig';
import { collection, getDocs } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import Card from '@/components/resource_card';
import { set } from 'zod';
import axios from 'axios';

export default function ResourceGrid() {
  const [resource, setResource] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  async function getResources() {
    setLoading(true);
    const response = await axios.get('/api/resource');
    setResource(response.data);
  }
  useEffect(() => {
    getResources();
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <div className='container mx-auto my-12'>
      <div
        id='resources-categories'
        className='mx-4 grid grid-cols-1 gap-2 md:grid-cols-3 xl:mx-0'
      >
        {loading ? (
          <div className='flex justify-center'>loading...</div>
        ) : (
          resource.map((res) => {
            return (
              // <h1>{res}</h1>
              <Card
                key={res}
                title={res}
                link={`/resources/${res}`}
                isNew={true}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
