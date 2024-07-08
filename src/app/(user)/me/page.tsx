import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import NotFoundComponent from '@/components/not-found';
import RadioButton from '@/components/radio_button';
import ResourceCard from '@/components/resource_card';
import ResourceSearch from '@/components/resource_search';
import SelectTag from '@/components/select_tag';
import { Card } from '@/components/ui/card';
import { db } from '@/firebaseConfig';
import { convertTagsBtoF } from '@/lib/convert-tags';
import { filterResources } from '@/lib/filter-resource';
import { memoize } from '@/lib/memoize';
import { ResourceType } from '@/types/resource';
import { UserType } from '@/types/user';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from '@firebase/firestore';
import { PlusIcon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function UserPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const searchQuery =
    typeof searchParams.search === 'string' ? searchParams.search : null;
  const selectedTag =
    typeof searchParams.tag === 'string' ? searchParams.tag : null;
  const filter =
    typeof searchParams.filter === 'string' ? searchParams.filter : 'all';

  const userSession = await getServerSession(authOptions);
  if (!userSession) notFound();

  const userRef = await getDoc(doc(db, 'authors', `${userSession.user.id}`));
  const userData = { ...(userRef.data() as UserType), id: userRef.id };

  const userResourcesQuery = query(
    collection(db, 'resources'),
    where('author', '==', +userData.id),
  );
  const userResourcesRef = await getDocs(userResourcesQuery);

  const userResources: ResourceType[] = [];
  const tags = new Set<string>();

  userResourcesRef.forEach((doc) => {
    const res = doc.data() as ResourceType;

    res.tags.forEach((el) => tags.add(el));

    userResources.push({ ...res, id: doc.id });
  });

  const convertTagsBtoFMemo = memoize(convertTagsBtoF);
  const formattedTags = convertTagsBtoFMemo(Array.from(tags));

  const filteredResources = memoize(filterResources)({
    resources: userResources,
    query: searchQuery,
    tag: selectedTag,
    isVerified: filter == 'all' ? null : filter === 'true',
  });

  return (
    <div className='container my-4 mt-16 min-h-screen'>
      <div className='my-2 flex flex-col gap-4 md:flex-row'>
        <SelectTag tags={formattedTags} defaultValue={selectedTag ?? ''} />

        <ResourceSearch
          placeholder='Search resource'
          defaultValue={searchQuery ?? ''}
        />
      </div>

      <div className='flex flex-row items-center justify-between'>
        <span>{`${filteredResources.length} of ${userResources.length}`}</span>
        <RadioButton defaultValue={filter ?? ''} />
      </div>

      <div className='my-6 md:mx-4'>
        {filteredResources.length === 0 ? (
          <NotFoundComponent />
        ) : (
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <Link
                href='/learn/contribute'
                className='flex h-full w-full flex-col items-center justify-center text-gray-400'
              >
                <PlusIcon className='size-12' strokeWidth='1.2' />
                <span className='text-primary'>Add more</span>
              </Link>
            </Card>
            {filteredResources.map((res) => (
              <ResourceCard
                key={res.id}
                id={res.id}
                title={res.title}
                description={res.description}
                link={res.link}
                tags={res.tags}
                author={res.author}
                verified={res.isVerified}
                isAdmin={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
