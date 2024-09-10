'use server';

import { db } from '@/firebaseConfig';
import { convertTagsFtoB } from '@/lib/convert-tags';
import { FilterOptions, ResourceType } from '@/types/resource';
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
import { sendVerifyEmail } from '@/lib/verify-email';

const ResourceSchema = z.object({
  title: z
    .string()
    .min(30, 'Minimum 30 characters required')
    .max(50, 'Title length is more than maximum'),
  description: z
    .string()
    .min(200, 'Minimum 200 characters required')
    .max(
      300,
      'Description length is more than maximum, it should be less than 300 characters',
    ),
  link: z.string().url('Invalid URL format'),
  tags: z.array(z.string()).nonempty('At least one tag is required'),
  isVerified: z.boolean().default(false),
});

const ResourceStr = 'resources';
const TagStr = 'tags';

type State = {
  errors?: {
    title?: string[];
    description?: string[];
    link?: string[];
    tags?: string[];
    isVerified?: string[];
  };
  message?: string;
};

export async function editResourceAction(
  selectedTags: string[],
  id: string,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const { title, description, link, isVerified } = Object.fromEntries(formData);
  const newTags = convertTagsFtoB(selectedTags);

  const result = ResourceSchema.safeParse({
    title: (title as string).trim(),
    description: (description as string).trim(),
    link: (link as string).trim(),
    tags: newTags,
    isVerified: isVerified === 'on',
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  try {
    const prevRes = await getResourceAction(id);

    if (!prevRes) {
      return { message: 'Edit: No specified document found' };
    }

    const batch = writeBatch(db);
    const resourceRef = doc(db, ResourceStr, id);

    batch.update(resourceRef, {
      title: result.data.title,
      description: result.data.description,
      link: result.data.link,
      tags: result.data.tags,
      isVerified: result.data.isVerified,
    });

    const removedTags = difference(prevRes.tags, newTags);

    removedTags.forEach((tag) => {
      const tagRef = doc(db, TagStr, tag);

      batch.update(tagRef, {
        resources: arrayRemove({ id, isVerified: prevRes.isVerified }),
      });
    });

    result.data.tags.forEach((tag) => {
      const tagRef = doc(db, TagStr, tag);

      batch.update(tagRef, {
        resources: arrayRemove({ id, isVerified: prevRes.isVerified }),
      });

      batch.update(tagRef, {
        resources: arrayUnion({ id, isVerified: result.data.isVerified }),
      });
    });

    await batch.commit();

    if (result.data.isVerified && !prevRes.isVerified) {
      await sendVerifyEmail({ userId: prevRes.author, resourceId: prevRes.id });
    }
  } catch (error) {
    console.error('Firebase Error:', error);
    return { message: 'Firebase Error: Failed to edit resource.' };
  }

  redirect('/dashboard/resources');
}

function difference(a: string[], b: string[]) {
  const setB = new Set(b);
  return a.filter((x) => !setB.has(x));
  /**
   * Above code has complexity O(1) then arr.inludes() which has O(n)
   */
}

export async function deleteResourceAction(id: string) {
  try {
    const batch = writeBatch(db);

    const resourceRef = doc(db, ResourceStr, id);
    const res = await getResourceAction(id);

    if (!res) {
      return { error: 'Delete: No specified document found.' };
    }

    for (const tg of res.tags) {
      const tagDocRef = doc(db, TagStr, tg);
      batch.update(tagDocRef, {
        resources: arrayRemove({ id, isVerified: res.isVerified }),
      });
    }

    batch.delete(resourceRef);

    await batch.commit();
  } catch (error) {
    return { error: 'Failed to delete resource' };
  }

  revalidatePath('/dashboard/resources');
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
      ...(data as Omit<ResourceType, 'id'>),
    };
  } catch (error) {
    return null;
  }
}

export async function getAllResources(): Promise<ResourceType[]> {
  try {
    const querySnapshot = await getDocs(collection(db, ResourceStr));

    if (querySnapshot.empty) {
      return [];
    }

    const resources: ResourceType[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      resources.push({
        id: doc.id,
        ...(data as Omit<ResourceType, 'id'>),
      });
    });

    return resources;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    return [];
  }
}

export async function getAllTags({ all }: { all: boolean }): Promise<string[]> {
  try {
    let querySnapshot: QuerySnapshot<DocumentData, DocumentData>;

    if (all === false) {
      const q = query(
        collection(db, TagStr),
        where('resources', '!=', [] || null || 0 || ''),
      );
      querySnapshot = await getDocs(q);
    } else {
      querySnapshot = await getDocs(collection(db, TagStr));
    }

    if (querySnapshot.empty) {
      return [];
    }

    const tags: string[] = [];

    querySnapshot.forEach((doc) => {
      tags.push(doc.id);
    });

    return tags;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    return [];
  }
}
