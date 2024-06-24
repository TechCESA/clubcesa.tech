'use client';

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/extension/multi-selector';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getAllTags } from '../../actions/resources';
import { getSixDigitNumber } from '@/lib/get-six-digit-num';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { convertTagsBtoF } from '@/lib/convert-tags';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { contributeResourceAction } from '../../actions/contribute';

export default function ContributePage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  const [formState, formAction] = useFormState(
    contributeResourceAction.bind(null, selectedTags),
    {
      errors: {},
      message: undefined,
    },
  );

  useEffect(() => {
    (async function () {
      try {
        const tagsData = await getAllTags({ all: true });

        if (!tagsData.data || tagsData.error) {
          setAllTags([]);
        } else {
          const tagsLabel = convertTagsBtoF(tagsData.data).sort((a, b) =>
            a.localeCompare(b),
          );
          setAllTags(tagsLabel);
        }
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    })();
  }, []);

  return (
    <div className='container flex min-h-screen flex-col items-center'>
      <form
        action={formAction}
        className='my-8 flex w-full flex-col items-start gap-6 rounded-lg bg-primary-foreground p-4 shadow-md md:my-24 md:max-w-[70%] md:px-12 md:py-8'
      >
        <div className='w-full text-center'>
          <h1 className='text-2xl font-bold text-cesa-blue'>
            Contribute to a Developer Community.
          </h1>
          <h4 className='text-sm text-gray-500'>
            Your Contribution Will Be the Missing Piece Someone Needs.
          </h4>
        </div>
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
            <p className='text-sm text-destructive'>{formState.errors.title}</p>
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
            <p className='text-sm text-destructive'>
              {formState.errors.description}
            </p>
          )}
        </div>
        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='link' className='font-semibold'>
            Link to the resource
          </Label>
          <Input type='url' id='link' name='link' placeholder='Link' required />
          {formState.errors?.link && (
            <p className='text-sm text-destructive'>{formState.errors.link}</p>
          )}
        </div>
        <div className='flex w-full flex-col items-start'>
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
                {allTags.map((tag) => (
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
            <p className='text-sm text-destructive'>{formState.errors.tags}</p>
          )}
        </div>
        <div className='flex w-full flex-col gap-2'>
          {formState.message && (
            <p className='text-sm text-destructive'>{formState.message}</p>
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
