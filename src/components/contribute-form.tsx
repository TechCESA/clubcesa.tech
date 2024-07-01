'use client';

import { contributeResourceAction } from '@/actions/contribute';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/extension/multi-selector';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

export default function ContributeForm({ tags }: { tags: string[] }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, formAction] = useFormState(
    contributeResourceAction.bind(null, selectedTags),
    {
      errors: {},
      message: undefined,
    },
  );

  return (
    <form
      ref={formRef}
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
        <Label htmlFor='multi-selector' className='font-semibold'>
          Select the tag
        </Label>
        <MultiSelector
          values={selectedTags}
          onValuesChange={(val) => setSelectedTags(val)}
          loop
          id='multi-selector'
        >
          <MultiSelectorTrigger>
            <MultiSelectorInput placeholder='Select tags' />
          </MultiSelectorTrigger>
          <MultiSelectorContent>
            <MultiSelectorList>
              {tags.map((tag) => (
                <MultiSelectorItem key={tag} value={tag}>
                  {tag}
                </MultiSelectorItem>
              ))}
            </MultiSelectorList>
          </MultiSelectorContent>
        </MultiSelector>
        {formState.errors?.tags && (
          <p className='text-sm text-destructive'>{formState.errors.tags}</p>
        )}
        <p className='text-xs text-gray-400'>
          {`If you don't find any relevant tags you can email us at `}
          <Link
            href='mailto:connect.cesaofficial@gmail.com'
            className='text-blue-500'
          >
            connect.cesaofficial@gmail.com
          </Link>
        </p>
      </div>

      <div className='flex w-full flex-col gap-2'>
        {formState.message && (
          <p className='text-sm text-destructive'>{formState.message}</p>
        )}
        <SubmitButton formRef={formRef} />
      </div>
    </form>
  );
}

function SubmitButton({
  formRef,
}: {
  formRef: React.RefObject<HTMLFormElement>;
}) {
  const { pending } = useFormStatus();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={pending}
          className='flex w-full items-center justify-center bg-cesa-blue'
        >
          {pending ? (
            <span className='animate-bounce text-3xl'>...</span>
          ) : (
            'Submit'
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Note</AlertDialogTitle>
          <AlertDialogDescription className='space-y-2'>
            <li>{`We value your contribution! Your submission will be reviewed for
            accuracy and security before it's published.`}</li>
            <li>
              {`We'll let you know when
            it's live through email or you can see it in your profile.`}
            </li>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className='bg-destructive' asChild>
            <Button
              type='submit'
              className='bg-cesa-blue'
              onClick={() => formRef.current?.requestSubmit()}
            >
              Submit
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
