'use server';

import { db } from '@/firebaseConfig';
import { collection, doc, getDoc, getDocs } from '@firebase/firestore';
import { unstable_noStore as noStore } from 'next/cache';

interface Data {
  data?: any[];
  error?: string;
}

export async function getResources(resource: string): Promise<Data> {
  noStore();

  try {
    if (!resource || typeof resource !== 'string' || resource.length === 0) {
      return { error: 'Invalid resource identifier' };
    }
    const resourceRef = doc(db, 'resources', resource);
    const docSnap = await getDoc(resourceRef);
    if (!docSnap.exists()) {
      return { error: 'Resource not found' };
    }
    return { data: docSnap.data().data };
  } catch (error) {
    return { error: 'Internal Server Error' };
  }
}

export async function getTypeOfResources(): Promise<Data> {
  noStore();

  try {
    const querySnapshot = await getDocs(collection(db, 'resources'));
    const data: string[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.id);
    });
    return { data: data };
  } catch (error) {
    return { error: 'Internal Server Error' };
  }
}
