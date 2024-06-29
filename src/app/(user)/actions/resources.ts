'use server';

import { db } from '@/firebaseConfig';
import { BackTagType, ResourceType } from '@/types/resource';
import {
  DocumentData,
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from '@firebase/firestore';
import { unstable_noStore as noStore } from 'next/cache';

interface ResourceReturnType {
  data?: ResourceType[];
  error?: string;
}

const TagStr = 'tags';
const ResourceStr = 'resources';

export async function getResources(tag: string): Promise<ResourceReturnType> {
  noStore();

  try {
    const tagRef = doc(db, TagStr, tag);
    const docSnap = await getDoc(tagRef);

    if (!docSnap.exists()) {
      return { error: 'Resource not found' };
    }

    const resArr = docSnap.data()['resources'] as BackTagType[];

    if (resArr.length === 0) {
      return { error: 'Resources Not Found!' };
    }

    const resourcePromises = resArr.map(async (tag) => {
      if (!tag.isVerified) return null;

      const resourceSnap = await getDoc(doc(db, ResourceStr, tag.id));

      if (!resourceSnap.exists()) {
        return null;
      }

      const data = resourceSnap.data();

      if ((data['isVerified'] as boolean) == true) {
        return {
          id: resourceSnap.id,
          ...(data as Omit<ResourceType, 'id'>),
        };
      }
    });

    const resources = await Promise.all(resourcePromises);

    const formattedResources = resources.filter(
      (doc): doc is ResourceType => doc !== null && doc !== undefined,
    );

    return { data: formattedResources };
  } catch (error) {
    console.error('Error fetching resources: ', error);
    return { error: 'Internal Server Error' };
  }
}

interface TagsReturnType {
  data?: string[];
  error?: string;
}

export async function getAllTags({
  all,
}: {
  all: boolean;
}): Promise<TagsReturnType> {
  noStore();

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
      return { error: 'Resources not found!' };
    }

    const tags: string[] = [];

    if (all === false) {
      querySnapshot.forEach((doc) => {
        const data: BackTagType[] = doc.data()['resources'];

        if (
          Object.values(data).every((value) => {
            return value.isVerified === undefined || !value.isVerified;
          })
        ) {
          return;
        }

        tags.push(doc.id);
      });
    } else {
      querySnapshot.forEach((doc) => {
        tags.push(doc.id);
      });
    }

    return { data: tags };
  } catch (error) {
    return { error: 'Internal Server Error!' };
  }
}
