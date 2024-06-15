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

export default function Dashboard() {
  const [selectedTags, setSelectedTags] = React.useState('All');

  const onSearchSubmit = (formData: FormData) => {
    const serachQuery = formData.get('search-query');
    if (serachQuery === null) return;
  };

  return (
    <div className='container mt-4 min-h-screen'>
      <div className='my-2 flex flex-row gap-4'>
        <Select
          // defaultValue='All'
          onValueChange={(val) => {
            setSelectedTags(val);
          }}
        >
          <SelectTrigger className='flex-1'>
            <SelectValue placeholder='Select tag' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tags</SelectLabel>

              {Tags.map((t) => {
                return (
                  <SelectItem key={t + Math.random().toString()} value={t}>
                    {t}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <form action={onSearchSubmit} className='flex flex-1 flex-row gap-4'>
          <Input
            type='search'
            name='search-query'
            placeholder='Search resource'
          />
          <Button type='submit' className='bg-cesa-blue'>
            Search
          </Button>
        </form>
      </div>
      <div className='mx-4 my-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {ResourceObject.map((res, i) => {
          return (
            <ResourceCard
              key={i + Math.random().toString()}
              title={res.title}
              description={res.description}
              link={res.link}
              tags={res.tags}
            />
          );
        })}
      </div>
    </div>
  );
}
