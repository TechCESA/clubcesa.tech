'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@/components/resource_card';
import Loader from './loader';

export default function ResourceGrid() {
  const [resource, setResource] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  async function getResources() {
    setLoading(true);
    const response = await axios.get('/api/resource');
    setResource(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className='container mx-auto my-12'>
      {loading ? (
        <Loader />
      ) : (
        <div className='mx-4 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3 xl:mx-0'>
          {resource.map((res) => {
            return (
              <Card
                key={res}
                title={res}
                link={`/resources/${res}`}
                isNew={true}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
