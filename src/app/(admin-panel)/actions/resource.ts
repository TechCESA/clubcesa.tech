'use server';

import { db } from '@/firebaseConfig';
import { convertTagsFtoB } from '@/lib/convert-tags';
import { ResourceType } from '@/lib/types';
import {
  DocumentData,
  QuerySnapshot,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  writeBatch,
} from '@firebase/firestore';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ResourceSchema = z.object({
  title: z
    .string()
    .min(30, 'Minimum 30 characters required')
    .max(50, 'Title length is more than maximum'),
  description: z
    .string()
    .min(300, 'Minimum 300 characters required')
    .max(400, 'Description length is more than maximum'),
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
    return { errors: result.error.flatten().fieldErrors };
  }

  const batch = writeBatch(db);

  try {
    const resourceRef = doc(collection(db, ResourceStr));
    batch.set(resourceRef, {
      title,
      description,
      link,
      tags,
    });

    for (const tg of tags) {
      const tagDocRef = doc(db, TagStr, tg);
      batch.update(tagDocRef, { docId: arrayUnion(resourceRef) });
    }

    await batch.commit();
  } catch (error) {
    console.error('Firebase Error:', error);
    return { message: 'Firebase Error: Failed to add resource.' };
  }

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
  const newTags = convertTagsFtoB(selectedTags);

  const result = ResourceSchema.safeParse({
    title,
    description,
    link,
    tags: newTags,
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const batch = writeBatch(db);

  try {
    const prevRes = await getResourceAction(id);

    if (!prevRes) {
      return { message: 'Edit: No specified document found' };
    }

    const resourceRef = doc(db, ResourceStr, id);

    batch.update(resourceRef, {
      title,
      description,
      link,
      tags: newTags,
    });

    const removedTags = difference(prevRes.tags, newTags);
    const addedTags = difference(newTags, prevRes.tags);

    for (const tag of removedTags) {
      const tagDocRef = doc(db, TagStr, tag);
      batch.update(tagDocRef, { docId: arrayRemove(resourceRef) });
    }

    for (const tag of addedTags) {
      const tagDocRef = doc(db, TagStr, tag);
      batch.update(tagDocRef, { docId: arrayUnion(resourceRef) });
    }

    await batch.commit();
  } catch (error) {
    console.error('Firebase Error:', error);
    return { message: 'Firebase Error: Failed to edit resource.' };
  }

  redirect('/admin/dashboard');
}

function difference(a: string[], b: string[]) {
  const setB = new Set(b);
  return a.filter((x) => !setB.has(x));
  /**
   * Above code has complexity O(1) that arr.inludes() which has O(n)
   */
}

export async function deleteResourceAction(id: string) {
  const batch = writeBatch(db);

  try {
    const resourceRef = doc(db, ResourceStr, id);
    const res = await getResourceAction(id);

    if (!res) {
      return { error: 'Delete: No specified document found.' };
    }

    for (const tg of res.tags) {
      const tagDocRef = doc(db, TagStr, tg);
      batch.update(tagDocRef, { docId: arrayRemove(resourceRef) });
    }

    batch.delete(resourceRef);

    await batch.commit();
  } catch (error) {
    return { error: 'Failed to delete resource' };
  }

  revalidatePath('/admin/dashboard');
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

export async function getAllTags({ all }: { all: boolean }) {
  try {
    let querySnapshot: QuerySnapshot<DocumentData, DocumentData>;

    if (all === false) {
      const q = query(
        collection(db, TagStr),
        where('docId', '!=', [] || null || 0 || ''),
      );
      querySnapshot = await getDocs(q);
    } else {
      querySnapshot = await getDocs(collection(db, TagStr));
    }

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
