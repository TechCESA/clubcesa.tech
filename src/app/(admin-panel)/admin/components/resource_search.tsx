'use client';

import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { debounce } from '@/lib/debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function ResourceSearch({
  placeholder,
  defaultValue,
}: {
  placeholder: string;
  defaultValue: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = debounce((query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set('search', query.toLowerCase());
    } else {
      params.delete('search');
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className='flex flex-1 flex-col gap-1'>
      <div className='relative'>
        <Input
          type='search'
          name='search-query'
          placeholder={placeholder}
          autoComplete='off'
          className='peer'
          defaultValue={defaultValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <SearchIcon
          strokeOpacity='.5'
          strokeWidth='1.3'
          className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform peer-focus:hidden'
        />
      </div>
    </div>
  );
}