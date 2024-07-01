'use client';

import { addTagAction } from '@/actions/dashboard';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { TagType } from '@/types/dashboard';
import { useFormState } from 'react-dom';

export default function AddTagDialog({ prevTags }: { prevTags: TagType[] }) {
  const [formState, formAction] = useFormState(
    addTagAction.bind(null, prevTags),
    {
      error: undefined,
      message: undefined,
    },
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Tag</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add tag here</DialogTitle>
          <DialogDescription>
            Value must me combination of alphabetic characters and spaces
          </DialogDescription>
        </DialogHeader>
        <form action={formAction} className='space-y-4'>
          <Input name='tag' type='text' placeholder='Add Tag' required />
          {formState?.message && (
            <p className='text-sm text-destructive'>{formState.message}</p>
          )}
          {formState?.error && (
            <p className='text-sm text-destructive'>{formState.error}</p>
          )}
          <DialogFooter>
            <Button type='submit'>Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
