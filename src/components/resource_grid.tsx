'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/resource_card';
import { getTypeOfResources } from '@/app/actions/resources';

export default function ResourceGrid() {
  const [resource, setResource] = useState<[] | string[]>([]);
  const [error, setError] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchResourceType = async () => {
      const response = await getTypeOfResources();
      if (response.error) {
        console.error('Error fetching resource types:', response.error);
        setError(response.error);
        return;
      }
      setResource(response.types);
      return;
    };
    fetchResourceType();
    setLoading(false);
  }, []);

  return (
    <div className='container mx-auto my-12'>
      <div
        id='resources-categories'
        className='mx-4 grid grid-cols-1 gap-2 md:grid-cols-3 xl:mx-0'
      >
        {loading ? (
          <div className='flex justify-center'>loading...</div>
        ) : error.length > 0 ? (
          <div className='flex justify-center font-medium text-red-400'>
            {error}
          </div>
        ) : (
          resource.map((res) => {
            return (
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
