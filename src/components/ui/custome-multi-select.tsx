'use client';

import * as React from 'react';
import { X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Command as CommandPrimitive } from 'cmdk';

type TAG = Record<'value' | 'label', string>;

export function CustomMultiSelect({
  tags,
  onChange,
}: {
  tags: TAG[];
  onChange?: (tags: TAG[]) => void;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<TAG[]>([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = React.useCallback((tag: TAG) => {
    setSelected((prev) => prev.filter((s) => s.value !== tag.value));
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '' && selected.length > 0) {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behavior of the <input /> field
        if (e.key === 'Escape') {
          input.blur();
        }
      }
    },
    [selected],
  );

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setOpen(true);
  };

  React.useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, [onChange, selected]);

  // Filter out already selected tags from the list of selectable tags
  const selectables = tags.filter(
    (tag) => !selected.some((s) => s.value === tag.value),
  );

  return (
    <Command
      onKeyDown={handleKeyDown}
      className='overflow-visible bg-transparent'
    >
      <div className='group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2'>
        <div className='flex flex-wrap gap-1'>
          {selected.map((tag) => (
            <Badge
              key={tag.value + Math.random().toString()}
              variant='secondary'
            >
              {tag.label}
              <button
                className='ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleUnselect(tag);
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={() => handleUnselect(tag)}
              >
                <X className='h-3 w-3 text-muted-foreground hover:text-foreground' />
              </button>
            </Badge>
          ))}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={handleInputChange}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder='Select tags...'
            className='ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground'
          />
        </div>
      </div>
      <div className='relative mt-2'>
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className='absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in'>
              <CommandGroup className='h-full overflow-auto'>
                {selectables.map((tag) => (
                  <CommandItem
                    key={tag.value + Math.random().toString()}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => {
                      setInputValue('');
                      setSelected((prev) => [...prev, tag]);
                      // setOpen(false);
                    }}
                    className='cursor-pointer'
                  >
                    {tag.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  );
}
