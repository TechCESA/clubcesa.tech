'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import ResourceCard from './_components/resource_card';
import { ResourceObject, Tags } from './_components/data';

type ResourceObject = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export default function Dashboard() {
  const [searchError, setSearchError] = React.useState<string | null>(null);
  const [resources, setResources] = React.useState<ResourceObject[] | null>(
    null,
  );
  const [tags, setTags] = React.useState<string[]>([]);

  React.useEffect(() => {
    // get resources from the firebase
    setResources(ResourceObject);
    setTags(Tags);
  }, []);

  const onSearchSubmit = (formData: FormData) => {
    const serachQuery = formData.get('search-query') as string;
    if (serachQuery === null) return;

    if (serachQuery.length < 3) {
      setSearchError('Search query must be at least 3 characters long');
      return;
    }

    setSearchError(null);

    const query = serachQuery.toString().toLowerCase();

    const searchedResources = resources!.filter((res) => {
      return (
        res.title.toLowerCase().includes(query) ||
        res.tags.map((tag) => tag.toLowerCase()).includes(query)
      );
    });

    if (searchedResources.length === 0) {
      setSearchError('No resources found');
      return;
    }

    setResources(searchedResources);
  };

  const onTagChange = (tag: string) => {
    if (tag === 'All') {
      setResources(ResourceObject);
      return;
    }

    setResources(
      resources!.filter((res) => {
        return res.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase());
      }),
    );
  };

  function getSixDigitNumber() {
    return (Math.floor(Math.random() * 900000) + 100000).toString();
  }

  return (
    <div className='container mt-4 min-h-screen'>
      <div className='my-2 flex flex-row gap-4'>
        <Select onValueChange={onTagChange}>
          <SelectTrigger className='flex-1'>
            <SelectValue placeholder='Select tag' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tags</SelectLabel>

              <SelectItem key={'all' + getSixDigitNumber()} value='All'>
                All
              </SelectItem>

              {tags.map((tag) => {
                return (
                  <SelectItem
                    key={tag.toLowerCase() + getSixDigitNumber()}
                    value={tag}
                  >
                    {tag}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className='flex flex-1 flex-col gap-1'>
          <form action={onSearchSubmit} className='flex flex-row gap-4'>
            <Input
              type='search'
              name='search-query'
              placeholder='Search resource'
            />
            <Button type='submit' className='bg-cesa-blue'>
              Search
            </Button>
          </form>
          {searchError ? (
            <span className='text-sm text-destructive'>{searchError}</span>
          ) : null}
        </div>
      </div>

      <div className='mx-4 my-6'>
        {resources == null ? (
          <p className='text-center text-lg font-semibold text-destructive'>
            No resources found
          </p>
        ) : (
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {resources.map((res, i) => {
              return (
                <ResourceCard
                  key={i + getSixDigitNumber()}
                  title={res.title}
                  description={res.description}
                  link={res.link}
                  tags={res.tags}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
