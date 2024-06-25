'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { convertTagBtoF, convertTagFtoB } from '@/lib/convert-tags';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SelectTag({
  tags,
  defaultValue,
}: {
  tags: string[];
  defaultValue: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (tag: string) => {
    const params = new URLSearchParams(searchParams);

    if (tag) {
      params.set('tag', convertTagFtoB(tag));
    } else {
      params.delete('tag');
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      defaultValue={convertTagBtoF(defaultValue) ?? ''}
      onValueChange={(val) => handleChange(val)}
    >
      <SelectTrigger className='flex-1'>
        <SelectValue placeholder='Select tag' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem key={'all'} value='All'>
            All
          </SelectItem>

          {tags.map((tag) => {
            return (
              <SelectItem key={tag.toLowerCase()} value={tag}>
                {tag}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
