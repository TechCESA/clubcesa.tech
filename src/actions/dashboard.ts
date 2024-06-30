'use server';

import { db } from '@/firebaseConfig';
import { StatsType } from '@/types/dashboard';
import { UserType } from '@/types/user';
import { collection, getDocs, query, where } from '@firebase/firestore';

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

  const tags = [] as { id: string; data: number }[];
  tagsData.forEach((doc) => {
    !!doc.data()['resources']
      ? tags.push({ id: doc.id, data: doc.data()['resources'].length })
      : tags.push({ id: doc.id, data: 0 });
  });

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
