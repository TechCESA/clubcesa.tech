'use client';

import { editResourceAction } from '@/actions/admin-resources';
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
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { convertTagsBtoF } from '@/lib/convert-tags';
import { ResourceType } from '@/types/resource';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

export default function EditForm({
  id,
  resource,
  tags,
}: {
  id: string;
  resource: ResourceType;
  tags: string[];
}) {
  const [selectedTags, setSelectedTags] = React.useState<string[]>(
    convertTagsBtoF(resource.tags),
  );
  const formRef = React.useRef<HTMLFormElement>(null);

  const [{ errors, message }, formAction] = useFormState(
    editResourceAction.bind(null, selectedTags, id),
    {
      errors: {},
      message: undefined,
    },
  );

  return (
    <form
      ref={formRef}
      action={formAction}
      className='my-8 flex w-full flex-col items-start gap-6 md:max-w-[70%]'
    >
      <h1 className='w-full text-center text-xl font-semibold'>
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
        {errors?.title && (
          <p className='text-sm text-destructive'>{errors.title}</p>
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
        {errors?.description && (
          <p className='text-sm text-destructive'>{errors.description}</p>
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
        {errors?.link && (
          <p className='text-sm text-destructive'>{errors.link}</p>
        )}
      </div>
      <div className='flex w-full flex-col items-start gap-2'>
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
        {errors?.tags && (
          <p className='text-sm text-destructive'>{errors.tags}</p>
        )}
      </div>

      <div className='flex w-full flex-col gap-2'>
        <div className='flex w-full flex-row items-center gap-2'>
          <VerifyAlertCheckbox defaultChecked={resource.isVerified} />
          <Label htmlFor='isVerified' className='font-semibold'>
            Verified
          </Label>
        </div>
        {errors?.isVerified && (
          <p className='text-sm text-destructive'>{errors.isVerified}</p>
        )}
      </div>

      <div className='flex w-full flex-col gap-2'>
        {message && <p className='text-sm text-destructive'>{message}</p>}
        <ChangeButton formRef={formRef} />
      </div>
    </form>
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

function VerifyAlertCheckbox({ defaultChecked }: { defaultChecked: boolean }) {
  const [checked, setChecked] = React.useState<boolean>(defaultChecked);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Checkbox name='isVerified' id='isVerified' checked={checked} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will change the verification status.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className='bg-destructive' asChild>
            <Button
              className='bg-cesa-blue'
              onClick={() => setChecked(!checked)}
            >
              Change
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
