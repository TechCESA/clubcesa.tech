'use client';

import {
  editResourceAction,
  getAllTags,
  getResourceAction,
} from '@/app/(admin-panel)/actions/resource';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/extension/multi-selector';
import Loader from '@/components/loader';
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
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { convertTagsBtoF } from '@/lib/convert-tags';
import { ResourceType } from '@/types/resource';
import { notFound } from 'next/navigation';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

export default function EditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [allTags, setAllTags] = React.useState<string[]>([]);
  const [resource, setResource] = React.useState<ResourceType | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const [formState, formAction] = useFormState(
    editResourceAction.bind(null, selectedTags, id),
    {
      errors: {},
      message: undefined,
    },
  );

  React.useEffect(() => {
    (async function () {
      try {
        const [resourceData, tagsData] = await Promise.all([
          getResourceAction(id),
          getAllTags({ all: true }),
        ]);

        if (!resourceData) {
          notFound();
        }

        if (!tagsData) {
          setAllTags([]);
        } else {
          const tagsLabel = convertTagsBtoF(tagsData).sort((a, b) =>
            a.localeCompare(b),
          );
          setAllTags(tagsLabel);
        }

        setResource(resourceData);
        setSelectedTags(convertTagsBtoF(resourceData.tags));
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
    })();
  }, [id]);

  if (!resource) {
    return (
      <div className='flex min-h-96 items-center justify-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='container flex min-h-screen flex-col items-center'>
      <form
        ref={formRef}
        action={formAction}
        className='my-8 flex w-full flex-col items-start gap-6 md:max-w-[70%]'
      >
        <h1 className='w-full text-center text-2xl font-semibold'>
          Edit a resource
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
            defaultValue={resource.title}
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
            defaultValue={resource.description}
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
          <Input
            type='url'
            id='link'
            name='link'
            defaultValue={resource.link}
            placeholder='Link'
            required
          />
          {formState.errors?.link && (
            <p className='text-sm text-destructive'>{formState.errors.link}</p>
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
                {allTags.map((tag) => (
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
        </div>

        <div className='flex w-full flex-col gap-2'>
          <div className='flex w-full flex-row items-center gap-2'>
            <Checkbox
              name='isVerified'
              id='isVerified'
              defaultChecked={resource.isVerified}
            />
            <Label htmlFor='isVerified' className='font-semibold'>
              Verified
            </Label>
          </div>
          {formState.errors?.isVerified && (
            <p className='text-sm text-destructive'>
              {formState.errors.isVerified}
            </p>
          )}
        </div>

        <div className='flex w-full flex-col gap-2'>
          {formState.message && (
            <p className='text-sm text-destructive'>{formState.message}</p>
          )}
          <ChangeButton formRef={formRef} />
        </div>
      </form>
    </div>
  );
}

function ChangeButton({
  formRef,
}: {
  formRef: React.RefObject<HTMLFormElement>;
}) {
  const { pending } = useFormStatus();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='bg-cesa-blue'>
          {pending ? (
            <span className='animate-bounce text-3xl'>...</span>
          ) : (
            'Change'
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently change the resource.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className='bg-destructive' asChild>
            <Button
              className='bg-cesa-blue'
              onClick={() => formRef.current?.requestSubmit()}
            >
              Change
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
