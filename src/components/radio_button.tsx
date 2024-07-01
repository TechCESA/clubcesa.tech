'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function RadioButton({
  defaultValue,
}: {
  defaultValue: string;
}) {
  const options = [
    { name: 'All', value: 'all' },
    { name: 'Verified', value: 'true' },
    { name: 'Unverified', value: 'false' },
  ];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('filter', value);
    } else {
      params.delete('filter');
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <RadioGroup
      defaultValue={defaultValue ?? options[0].value.toLowerCase()}
      className='my-3 flex flex-row items-center justify-end gap-4'
    >
      {options.map((option) => (
        <div className='flex items-center space-x-2' key={option.name}>
          <RadioGroupItem
            value={option.value.toLowerCase()}
            id={option.name}
            onClick={() => {
              handleChange(option.value.toLowerCase());
            }}
          />
          <Label htmlFor={option.name}>{option.name}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
