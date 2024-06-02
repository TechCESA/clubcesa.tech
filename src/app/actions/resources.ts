'use server';

import { db } from '@/firebaseConfig';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  DocumentData,
} from '@firebase/firestore';

interface Data {
  data: any[];
  error: string[];
}

export async function getResources(resource: string): Promise<Data> {
  try {
    if (!resource || typeof resource !== 'string' || resource.length === 0) {
      return { error: ['Invalid resource identifier'], data: [] };
    }
    const resourceRef = doc(db, 'resources', resource);
    const docSnap = await getDoc(resourceRef);
    if (!docSnap.exists()) {
      return { error: ['Resource not found'], data: [] };
    }
    return { data: docSnap.data().data, error: [] };
  } catch (error) {
    return { error: ['Internal Server Error'], data: [] };
  }
}

export async function getTypeOfResources(): Promise<Data> {
  try {
    const querySnapshot = await getDocs(collection(db, 'resources'));
    const data: string[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.id);
    });
    return { data: data, error: [] };
  } catch (error) {
    return { data: [], error: ['Internal Server Error'] };
  }
}
