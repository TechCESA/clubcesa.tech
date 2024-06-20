'use server';

import { db } from '@/firebaseConfig';
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

interface ReturnType {
  data?: any[];
  error?: string;
}

const TagStr = 'tags';
const ResourceStr = 'resources';

export async function getResources(resource: string): Promise<ReturnType> {
  noStore();

  try {
    const resourceRef = doc(db, ResourceStr, resource);
    const docSnap = await getDoc(resourceRef);
    if (!docSnap.exists()) {
      return { error: 'Resource not found' };
    }
    return { data: docSnap.data().data };
  } catch (error) {
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
      tags.push(doc.id);
    });

    return { data: tags };
  } catch (error) {
    return { error: 'Internal Server Error!' };
  }
}
