'use server';

import { db } from '@/firebaseConfig';
import { convertTagsFtoB } from '@/lib/convert-tags';
import { ResourceType } from '@/lib/types';
import { addDoc, collection } from '@firebase/firestore';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { ResourceObject } from '../admin/dashboard/_components/data';

const ResourceSchema = z.object({
  title: z.string().min(30, 'Minimum 30 characters required'),
  description: z.string().min(300, 'Minimum 300 characters required'),
  link: z.string().url('Invalid URL format'),
  tags: z.array(z.string()).nonempty('At least one tag is required'),
});

enum FormFields {
  Button = 'button',
  Title = 'title',
  Description = 'description',
  Link = 'link',
  Tags = 'tags',
}

type State = {
  errors?: {
    link?: string[];
    title?: string[];
    description?: string[];
    tags?: string[];
  };
  message?: string;
};

export async function addResourceAction(
  selectedTags: string[],
  prevState: State,
  formData: FormData,
): Promise<State> {
  const title = formData.get(FormFields.Title) as string;
  const description = formData.get(FormFields.Description) as string;
  const link = formData.get(FormFields.Link) as string;
  const tags = convertTagsFtoB(selectedTags);

  const result = ResourceSchema.safeParse({
    title,
    description,
    link,
    tags,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await addDoc(collection(db, 'resources'), {
      title,
      description,
      link,
      tags,
    });
  } catch (error) {
    return {
      message: 'Firebase Error: Failed to add resource.',
    };
  }

  revalidatePath('/admin/dashboard');
  redirect('/admin/dashboard');
}

export async function editResourceAction(
  selectedTags: string[],
  id: string,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const title = formData.get(FormFields.Title) as string;
  const description = formData.get(FormFields.Description) as string;
  const link = formData.get(FormFields.Link) as string;
  const tags = convertTagsFtoB(selectedTags);

  const result = ResourceSchema.safeParse({
    title,
    description,
    link,
    tags,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    /**
     * update data of given 'id' in firebase
     */

    console.log({ editAction: id });
  } catch (error) {
    return {
      message: 'Firebase Error: Failed to edit resource.',
    };
  }

  revalidatePath('/admin/dashboard');
  redirect('/admin/dashboard');
}

export async function deleteResourceAction(id: string) {
  try {
    /**
     * delete resource of given 'id' in firebase
     */

    console.log({ deleteAction: id });
  } catch (error) {
    return {
      error: 'Failed to delete resource',
    };
  }

  revalidatePath('/admin/dashboard');
}

export async function getResourceAction(
  id: string,
): Promise<ResourceType | null> {
  try {
    /**
     * get resource of given 'id' from firebase
     */

    const resource = ResourceObject.find((res) => res.id === id);

    if (!resource) return null;

    return resource;
  } catch (error) {
    return null;
  }
}
