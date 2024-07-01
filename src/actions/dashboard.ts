'use server';

import { db } from '@/firebaseConfig';
import { convertTagFtoB } from '@/lib/convert-tags';
import { StatsType, TagType } from '@/types/dashboard';
import { UserType } from '@/types/user';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from '@firebase/firestore';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const ResourceStr = 'resources';
const TagStr = 'tags';
const AuthorsStr = 'authors';

export async function getStats() {
  const resourcesData = await getDocs(collection(db, ResourceStr));
  const tagsData = await getDocs(collection(db, TagStr));

  const querySnapshotForAdmins = await getDocs(
    query(collection(db, 'authors'), where('role', '==', 'admin')),
  );
  const adminData: UserType[] = [];
  querySnapshotForAdmins.forEach((adm) => {
    adminData.push({ ...(adm.data() as UserType), id: adm.id });
  });

  const authorsData = await getDocs(collection(db, AuthorsStr));

  const resourcesLength = resourcesData.size ?? 0;
  const tagsLength = tagsData.size ?? 0;
  const adminLength = adminData.length ?? 0;
  const authorLength = authorsData.size ?? 0;

  const tags: TagType[] = [];
  tagsData.forEach((doc) => {
    !!doc.data()['resources']
      ? tags.push({ id: doc.id, numberOfRes: doc.data()['resources'].length })
      : tags.push({ id: doc.id, numberOfRes: 0 });
  });
  tags.sort((a, b) => b.numberOfRes - a.numberOfRes);

  const authors = authorsData.docs
    .map((doc) => {
      return { ...(doc.data() as UserType), id: doc.id };
    })
    .sort((a, b) => b.resources.length - a.resources.length);

  return {
    admins: adminData,
    stats: {
      adminsLen: adminLength,
      tagsLen: tagsLength,
      authorsLen: authorLength,
      resourcesLen: resourcesLength,
    } as StatsType,
    tags: tags,
    authors: authors,
  };
}

type State =
  | {
      error?: string;
      message?: string;
    }
  | undefined;

export async function addTagAction(
  prevTags: TagType[],
  prevState: State,
  formData: FormData,
): Promise<State> {
  let { tag } = Object.fromEntries(formData);

  tag = typeof tag === 'string' ? tag.trim() : tag;

  const tagSchema = z
    .string()
    .regex(/^[a-zA-Z\s]+$/, {
      message: 'Only alphabetic characters and spaces are allowed',
    })
    .min(6, 'Minimum 6 characters required');

  const res = tagSchema.safeParse(tag);

  if (!res.success) {
    const errors = res.error.issues.map((issue) => issue.message);
    return { error: `${errors[0]}\n${errors[1] ?? ''}` };
  }

  const formattedTag = convertTagFtoB(res.data);

  const prevTagsIds = prevTags.map((tag) => tag.id);

  if (prevTagsIds.includes(formattedTag)) {
    return { message: 'Tags already exists.' };
  }

  try {
    const docRef = doc(db, 'tags', formattedTag);

    await setDoc(docRef, {
      resources: [],
    });
  } catch (error) {
    console.error('Firebase Error:', error);
    return { message: 'Firebase Error: Failed to add tag.' };
  }

  revalidatePath('/dashboard');
}
