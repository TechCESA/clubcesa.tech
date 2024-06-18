'use client';

import { addResourceAction } from '@/app/(admin-panel)/_actions/resource';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/extension/multi-selector';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { convertTagsBtoF } from '@/lib/convert-tags';
import { getSixDigitNumber } from '@/lib/get-six-digit-num';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Tags } from '../_components/data';

export default function AddPage() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const tags = convertTagsBtoF(Tags).sort((a, b) => a.localeCompare(b));

  const [formState, formAction] = useFormState(
    addResourceAction.bind(null, selectedTags),
    {
      errors: {},
      message: undefined,
    },
  );

  return (
    <div className='container flex min-h-screen flex-col items-center'>
      <form
        action={formAction}
        className='my-8 flex w-full flex-col items-start gap-6 md:max-w-[70%]'
      >
        <h1 className='w-full text-center text-2xl font-semibold'>
          Add a new resource
        </h1>

        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='title' className='font-semibold'>
            Title of the resource
          </Label>
          <Input
            type='title'
            id='title'
            name='title'
            placeholder='Title (minimum 30 characters)'
            required
            autoFocus
          />
          {formState.errors?.title && (
            <p className='text-destructive'>{formState.errors.title}</p>
          )}
        </div>
        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='description' className='font-semibold'>
            Description
          </Label>
          <Textarea
            id='description'
            name='description'
            placeholder='Description (minimum 50 words/ 300 characters)'
            required
          />
          {formState.errors?.description && (
            <p className='text-destructive'>{formState.errors.description}</p>
          )}
        </div>
        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='link' className='font-semibold'>
            Link to the resource
          </Label>
          <Input type='url' id='link' name='link' placeholder='Link' required />
          {formState.errors?.link && (
            <p className='text-destructive'>{formState.errors.link}</p>
          )}
        </div>
        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='link' className='font-semibold'>
            Select the tag
          </Label>
          <MultiSelector
            values={selectedTags}
            onValuesChange={(val) => setSelectedTags(val)}
            loop
          >
            <MultiSelectorTrigger>
              <MultiSelectorInput placeholder='Select tags' />
            </MultiSelectorTrigger>
            <MultiSelectorContent>
              <MultiSelectorList>
                {tags.map((tag) => (
                  <MultiSelectorItem
                    key={tag + getSixDigitNumber()}
                    value={tag}
                  >
                    {tag}
                  </MultiSelectorItem>
                ))}
              </MultiSelectorList>
            </MultiSelectorContent>
          </MultiSelector>

          {formState.errors?.tags && (
            <p className='text-destructive'>{formState.errors.tags}</p>
          )}
        </div>

        <div className='flex w-full flex-col gap-2'>
          {formState.message && (
            <p className='text-destructive'>{formState.message}</p>
          )}
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className='flex w-full items-center justify-center bg-cesa-blue'
    >
      {pending ? (
        <span className='animate-bounce text-3xl'>...</span>
      ) : (
        'Submit'
      )}
    </Button>
  );
}
