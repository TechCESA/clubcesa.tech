'use server';

import { db } from '@/firebaseConfig';
import {  collection, getDocs, doc, getDoc } from '@firebase/firestore';

export async function getResources(resource: string) {
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

export async function getTypeOfResources() {
  try {
    const querySnapshot = await getDocs(collection(db, 'resources'));
    const data: string[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.id);
    });
    return { types: data , error: []};
  } catch (error) {
    return { types :[], error: ['Internal Server Error'] };
  }
}
