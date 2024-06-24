'use server';

import { db } from '@/firebaseConfig';
import { ResourceType } from '@/lib/types';
import {
  DocumentData,
  DocumentReference,
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

interface BackTagType {
  resourceRef: DocumentReference;
  isVerified: boolean;
}

const TagStr = 'tags';

export async function getResources(tag: string): Promise<ResourceReturnType> {
  noStore();

  try {
    const tagRef = doc(db, TagStr, tag);
    const docSnap = await getDoc(tagRef);

    if (!docSnap.exists()) {
      return { error: 'Resource not found' };
    }

    const resArr = docSnap.data()['docId'] as BackTagType[];

    if (resArr.length === 0) {
      return { error: 'Resources Not Found!' };
    }

    const resourcePromises = resArr.map(async (tag) => {
      if (!tag.isVerified) return null;

      const resourceSnap = await getDoc(tag.resourceRef);

      if (!resourceSnap.exists()) {
        return null;
      }

      const data = resourceSnap.data();

      if ((data['isVerified'] as boolean) == true) {
        return {
          id: resourceSnap.id,
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
        where('docId', '!=', [] || null || 0 || ''),
      );
      querySnapshot = await getDocs(q);
    } else {
      querySnapshot = await getDocs(collection(db, TagStr));
    }

    if (querySnapshot.empty) {
      return { error: 'Resources not found!' };
    }

    const tags: string[] = [];

    querySnapshot.forEach((doc) => {
      const data: BackTagType[] = doc.data()['docId'];

      if (
        Object.values(data).every((value) => {
          return value.isVerified === undefined || !value.isVerified;
        })
      ) {
        return;
      }

      tags.push(doc.id);
    });

    return { data: tags };
  } catch (error) {
    return { error: 'Internal Server Error!' };
  }
}
