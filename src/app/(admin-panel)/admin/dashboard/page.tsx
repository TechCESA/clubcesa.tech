import { Button } from '@/components/ui/button';
import { convertTagsBtoF } from '@/lib/convert-tags';
import { memoize } from '@/lib/memoize';
import { ResourceType } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import { getAllResources, getAllTags } from '../../actions/resource';
import ResourceCard from '../components/resource_card';
import ResourceSearch from '../components/resource_search';
import SelectTag from '../components/select_tag';

/* We can filter directly from the firestore */
const filterResources = ({
  resources,
  query,
  tag,
}: {
  resources: ResourceType[];
  query: string | null;
  tag: string | null;
}) => {
  let filteredResources = resources;

  if (tag && tag !== 'all') {
    filteredResources = filteredResources.filter((res) =>
      res.tags.includes(tag),
    );
  }

  if (query) {
    filteredResources = filteredResources.filter(
      (res) =>
        res.title.toLowerCase().includes(query) ||
        res.tags.includes(query) ||
        res.tags.some((tag) => tag.includes(query)),
    );
  }

  return filteredResources;
};

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const searchQuery =
    typeof searchParams.search === 'string' ? searchParams.search : null;
  const selectedTag =
    typeof searchParams.tag === 'string' ? searchParams.tag : null;

  const [allResources, allTags] = await Promise.all([
    getAllResources(),
    getAllTags({ all: false }),
  ]);

  if (!allResources || !allTags) {
    return (
      <div className='pt-12 text-center text-4xl font-bold'>
        Error fetching Resources or Tags
      </div>
    );
  }

  const convertTagsBtoFMemo = memoize(convertTagsBtoF);
  const formattedTags = convertTagsBtoFMemo(allTags);

  const filteredResources = memoize(filterResources)({
    resources: allResources,
    query: searchQuery,
    tag: selectedTag,
  });

  return (
    <div className='container my-4 min-h-screen'>
      <Button className='w-full bg-cesa-blue font-semibold' asChild>
        <Link href='/admin/dashboard/add'>Add New Resource</Link>
      </Button>

      <div className='my-2 flex flex-col gap-4 md:flex-row'>
        <SelectTag tags={formattedTags} defaultValue={selectedTag ?? ''} />

        <ResourceSearch
          placeholder='Search resource'
          defaultValue={searchQuery ?? ''}
        />
      </div>

      <div className='mx-4 my-6'>
        {filteredResources.length === 0 ? (
          <p className='text-center text-lg font-semibold text-destructive'>
            No resources found
          </p>
        ) : (
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {filteredResources.map((res) => (
              <ResourceCard
                key={res.id}
                id={res.id}
                title={res.title}
                description={res.description}
                link={res.link}
                tags={res.tags}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
