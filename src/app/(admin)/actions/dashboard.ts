'use server';
import { db } from '@/firebaseConfig';
import { collection, getDocs, getDoc, doc } from '@firebase/firestore';
import { AuthorType, AdminType, StatsType } from '../types/dashboard';

const ResourceStr = 'resources';
const TagStr = 'tags';
const AdminStr = 'admin';
const AuthorsStr = 'authors';

export async function getStats() {
  const resourcesData = await getDocs(collection(db, ResourceStr));
  const tagsData = await getDocs(collection(db, TagStr));
  const adminData = await getDoc(doc(db, AdminStr, 'emails'));
  const authorsData = await getDocs(collection(db, AuthorsStr));

  const adminEmails = adminData.exists()
    ? (adminData.data().data as string[])
    : [];
  const resourcesLength = resourcesData.size ?? 0;
  const tagsLength = tagsData.size ?? 0;
  const adminLength = adminEmails.length ?? 0;
  const authorLength = authorsData.size ?? 0;

  let tags = [] as { id: string; data: number }[];
  tagsData.forEach((doc) => {
    !!doc.data()['resources']
      ? tags.push({ id: doc.id, data: doc.data()['resources'].length })
      : tags.push({ id: doc.id, data: 0 });
  });
  tags = tags.sort((a, b) => b.data - a.data);

  let authors = authorsData.docs.map((doc) => {
    return {
      avatar: doc.data()['avatar'],
      createdAt: doc.data()['createdAt'],
      email: doc.data()['email'],
      github: doc.data()['github'],
      name: doc.data()['name'],
      resources: doc.data()['resources'].length,
    } as AuthorType;
  });

  authors = authors.sort((a, b) => b.resources - a.resources);

  return {
    admins: {
      email: adminEmails,
    } as AdminType,
    stats: {
      adminsLen: adminLength,
      tagsLen: tagsLength,
      authorsLen: authorLength,
      resourcesLen: resourcesLength,
    } as StatsType,
    tags: {
      tags: tags,
    },
    authors: authors,
  };
}
