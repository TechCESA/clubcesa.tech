'use server';

import { db } from '@/firebaseConfig';
import { convertTagsFtoB } from '@/lib/convert-tags';
import { ResourceType } from '@/lib/types';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from '@firebase/firestore';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

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

const ResourceStr = 'resources';
const TagStr = 'tags';

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
    /**
     * For more secure tags add validation that tags are valid,
     * by comparing those with tags in firestore
     */

    await addDoc(collection(db, 'resources'), {
      title,
      description,
      link,
      tags,
    });

    /**
     * Here add the id/ref returned from resource to their corresponding tags collection
     */
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
     * For more secure tags add validation that tags are valid,
     * by comparing those with tags in firestore
     */

    const resourceRef = doc(db, ResourceStr, id);
    await updateDoc(resourceRef, {
      title,
      description,
      link,
      tags,
    });

    /**
     * Here add given resource id or resource ref to their corresponding tags collection
     */
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
    const resourceRef = doc(db, ResourceStr, id);
    await deleteDoc(resourceRef);
  } catch (error) {
    return {
      error: 'Failed to delete resource',
    };
  }

  /**
   * Dashboard is not revalidating properly
   */
  revalidatePath('/admin/dashboard');
  redirect('/admin/dashboard');
}

export async function getResourceAction(
  id: string,
): Promise<ResourceType | null> {
  try {
    const resourceRef = doc(db, ResourceStr, id);
    const docSnap = await getDoc(resourceRef);
    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();

    return {
      id: docSnap.id,
      title: data['title'],
      description: data['description'],
      link: data['link'],
      tags: data['tags'],
    };
  } catch (error) {
    return null;
  }
}

export async function getAllResources() {
  try {
    const querySnapshot = await getDocs(collection(db, ResourceStr));

    if (querySnapshot.empty) {
      return null;
    }

    const resources: ResourceType[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      resources.push({
        id: doc.id,
        title: data['title'] as string,
        description: data['description'] as string,
        link: data['link'] as string,
        tags: data['tags'] as string[],
      });
    });

    return resources;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export async function getAllTags() {
  try {
    const querySnapshot = await getDocs(collection(db, TagStr));

    if (querySnapshot.empty) {
      return null;
    }

    const tags: string[] = [];

    querySnapshot.forEach((doc) => {
      tags.push(doc.id);
    });

    return tags;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
