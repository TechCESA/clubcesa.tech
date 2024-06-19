'use client';

import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { convertTagsBtoF } from '@/lib/convert-tags';
import { getSixDigitNumber } from '@/lib/get-six-digit-num';
import { ResourceType } from '@/lib/types';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { getAllResources, getAllTags } from '../../_actions/resource';
import ResourceCard from './_components/resource_card';

export default function Dashboard() {
  const [allResources, setAllResources] = React.useState<ResourceType[] | null>(
    null,
  );
  const [filteredResources, setFilteredResources] = React.useState<
    ResourceType[] | null
  >(null);
  const [tags, setTags] = React.useState<string[]>([]);
  const [searchError, setSearchError] = React.useState<string | null>(null);
  const [selectedTag, setSelectedTag] = React.useState<string>('all');

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    (async function () {
      try {
        const resourcesData = await getAllResources();
        const tagsData = await getAllTags();

        if (!resourcesData) {
          /**
           * When resourcesData is null, continuesly shows the loader
           */
          setFilteredResources(null);
          return;
        }

        if (!tagsData) {
          setTags([]);
        } else {
          /**
           * Note: If possible =>
           * here when you fetch tags from firebase
           * convert them as pair of {value: "web-development", label: "Web Development"}
           * and get rid of "convertTagsBtoF" and "convertTagsFtoB" functions
           */
          const tagsLabel = convertTagsBtoF(tagsData).sort((a, b) =>
            a.localeCompare(b),
          );
          setTags(tagsLabel);
        }

        setAllResources(resourcesData);
        setFilteredResources(resourcesData);
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
    })();
  }, []);

  if (!allResources || !filteredResources) {
    return (
      <div className='flex min-h-96 items-center justify-center'>
        <Loader />
      </div>
    );
  }

  const onInputChange = () => {
    const serachQuery = inputRef.current?.value ?? '';

    const query = serachQuery.toString().toLowerCase();

    const filteredForSearch = allResources.filter((res) => {
      return (
        convertTagsBtoF(res.tags)
          .map((t) => t.toLowerCase())
          .includes(selectedTag) || selectedTag === 'all'
      );
    });

    const searchedResources = filteredForSearch.filter((res) => {
      const lowerCaseTags = convertTagsBtoF(res.tags).map((tag) =>
        tag.toLowerCase(),
      );

      return (
        res.title.toLowerCase().includes(query) ||
        lowerCaseTags.includes(query) ||
        lowerCaseTags.some((tag) => tag.includes(query))
      );
    });

    if (searchedResources.length === 0) {
      setSearchError('No resources found');
      return;
    }

    setFilteredResources(searchedResources);
    setSearchError(null);
  };

  const onTagChange = (tag: string) => {
    setSearchError(null);
    inputRef.current!.value = '';

    if (tag === 'All') {
      setFilteredResources(allResources);
      setSelectedTag('all');
      return;
    }

    setSelectedTag(tag.toLowerCase());

    setFilteredResources(
      allResources.filter((res) => {
        return convertTagsBtoF(res.tags)
          .map((t) => t.toLowerCase())
          .includes(tag.toLowerCase());
      }),
    );
  };

  return (
    <div className='container my-4 min-h-screen'>
      <Button className='w-full bg-cesa-blue font-semibold' asChild>
        <Link href='/admin/dashboard/add'>Add New Resource</Link>
      </Button>
      <div className='my-2 flex flex-col gap-4 md:flex-row'>
        <Select onValueChange={onTagChange}>
          <SelectTrigger className='flex-1'>
            <SelectValue placeholder='Select tag' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
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
          <div className='relative'>
            <Input
              type='search'
              name='search-query'
              placeholder='Search resource'
              ref={inputRef}
              autoComplete='off'
              onChange={onInputChange}
              className='peer'
            />
            <SearchIcon
              strokeOpacity='.5'
              strokeWidth='1.3'
              className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform peer-focus:hidden'
            />
          </div>

          {searchError ? (
            <span className='text-sm text-destructive'>{searchError}</span>
          ) : null}
        </div>
      </div>

      <div className='mx-4 my-6'>
        {filteredResources == null ? (
          <p className='text-center text-lg font-semibold text-destructive'>
            No resources found
          </p>
        ) : (
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {filteredResources.map((res, i) => {
              return (
                <ResourceCard
                  key={res.id}
                  id={res.id}
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
