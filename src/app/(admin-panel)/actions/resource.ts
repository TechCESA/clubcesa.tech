'use server';

import { db } from '@/firebaseConfig';
import { convertTagsFtoB } from '@/lib/convert-tags';
import { BackTagType, FilterOptions, ResourceType } from '@/types/resource';
import {
  DocumentData,
  QuerySnapshot,
  arrayRemove,
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
    .min(200, 'Minimum 300 characters required')
    .max(300, 'Description length is more than maximum'),
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
    title,
    description,
    link,
    tags: newTags,
    isVerified: isVerified === null ? false : true,
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
    const addedTags = difference(newTags, prevRes.tags);

    for (const tag of removedTags) {
      const tagDocRef = doc(db, TagStr, tag);
      const tagDocData = await getDoc(tagDocRef);

      if (tagDocData.exists()) {
        const data: BackTagType[] = tagDocData.data()['docId'];

        const updatedArray = data.filter((item) => {
          return item.id !== resourceRef.id;
        });

        batch.update(tagDocRef, {
          docId: [...updatedArray],
        });
      }
    }

    for (const tag of addedTags) {
      const tagDocRef = doc(db, TagStr, tag);
      const tagDocData = await getDoc(tagDocRef);

      if (tagDocData.exists()) {
        const data: BackTagType[] = tagDocData.data()['docId'];

        if (!data) {
          batch.update(tagDocRef, {
            docId: [
              {
                id: resourceRef.id,
                isVerified: result.data.isVerified,
              },
            ],
          });
        } else {
          batch.update(tagDocRef, {
            docId: [
              ...data,
              {
                id: resourceRef.id,
                isVerified: result.data.isVerified,
              },
            ],
          });
        }
      }
    }

    for (const tag of result.data.tags) {
      const tagDocRef = doc(db, TagStr, tag);
      const tagDocData = await getDoc(tagDocRef);

      if (tagDocData.exists()) {
        const data: BackTagType[] = tagDocData.data()['docId'];

        const updatedArray = data.map((item) => {
          if (item.id === resourceRef.id) {
            return { ...item, isVerified: result.data.isVerified };
          }

          return item;
        });

        batch.update(tagDocRef, {
          docId: [...updatedArray],
        });
      }
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
   * Above code has complexity O(1) then arr.inludes() which has O(n)
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
      // change this one also
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
      isVerified: data['isVerified'],
      author: {
        name: data['author']['name'],
        email: data['author']['email'],
        github: data['author']['github'],
        avatar: data['author']['avatar'],
      },
      createdAt: data['createdAt'],
    };
  } catch (error) {
    return null;
  }
}

export async function getAllResources(
  filter: FilterOptions = FilterOptions.All,
): Promise<ResourceType[]> {
  try {
    const querySnapshot =
      filter === FilterOptions.All
        ? await getDocs(collection(db, ResourceStr))
        : await getDocs(
            query(
              collection(db, ResourceStr),
              where('isVerified', '==', filter === FilterOptions.Verified),
            ),
          );

    if (querySnapshot.empty) {
      return [];
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
        isVerified: data['isVerified'] as boolean,
        author: {
          name: data['author']['name'] as string,
          email: data['author']['email'] as string,
          github: data['author']['github'] as string,
          avatar: data['author']['avatar'] as string,
        },
        createdAt: data['createdAt'],
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
        where('docId', '!=', [] || null || 0 || ''),
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
