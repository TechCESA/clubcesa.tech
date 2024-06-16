'use client';

import { addResourceAction } from '@/app/(admin-panel)/_actions/resource';
import { Button } from '@/components/ui/button';
import { CustomMultiSelect } from '@/components/ui/custome-multi-select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { convertTags } from '@/lib/convert-tags';
import { ErrorType, FormField, TAGType } from '@/lib/types';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Tags } from '../_components/data';

export default function AddPage() {
  const [selectedTags, setSelectedTags] = React.useState<TAGType[]>([]);
  const tags = convertTags(Tags);

  const [formState, formAction] = useFormState(
    addResourceAction.bind(null, selectedTags),
    {
      error: {
        field: 'button',
        message: '',
      } as ErrorType,
    },
  );

  return (
    <div className='container flex min-h-screen flex-col items-center'>
      <form
        action={formAction}
        className='my-8 flex w-full flex-col items-start gap-6'
      >
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
          {formState.error && formState.error.field == FormField.Title && (
            <p className='text-destructive'>{formState.error.message}</p>
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
          {formState.error &&
            formState.error.field == FormField.Description && (
              <p className='text-destructive'>{formState.error.message}</p>
            )}
        </div>
        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='link' className='font-semibold'>
            Link to the resource
          </Label>
          <Input type='url' id='link' name='link' placeholder='Link' required />
          {formState.error && formState.error.field == FormField.Link && (
            <p className='text-destructive'>{formState.error.message}</p>
          )}
        </div>
        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='link' className='font-semibold'>
            Select the tag
          </Label>
          <CustomMultiSelect
            tags={tags}
            onChange={(val) => {
              setSelectedTags(val);
            }}
          />
          {formState.error && formState.error.field == FormField.Tags && (
            <p className='text-destructive'>{formState.error.message}</p>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          {formState.error && formState.error.field == FormField.Button && (
            <p className='text-destructive'>{formState.error.message}</p>
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
      className='flex w-full items-center justify-center'
    >
      {pending ? (
        <span className='animate-bounce text-3xl'>...</span>
      ) : (
        'Submit'
      )}
    </Button>
  );
}
