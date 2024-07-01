import { getAllTags, getResources } from '@/actions/user-resources';
import LearnResourceCard from '@/components/learn_resource_card';
import { convertTagBtoF } from '@/lib/convert-tags';
import { MoveLeftIcon } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const tags = await getAllTags({ all: false });

  if (tags.error || !tags.data) {
    return [{ tag: '' }];
  }

  return tags.data.map((tag) => ({ tag }));
}

export default async function Page({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const response = await getResources(tag);

  return (
    <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='container mx-auto'>
        <div className='mb-6 flex flex-row items-center justify-start gap-4'>
          <Link href='/learn' className='inline-block'>
            <MoveLeftIcon
              strokeWidth='2.4'
              className='scale-125 rounded-full bg-cesa-blue stroke-primary-foreground p-1'
            />
          </Link>
          <div className='text-left'>
            <h3 className='under text-wrap text-lg font-bold text-black'>
              {convertTagBtoF(tag)}
            </h3>
            <p className='text-sm text-gray-400'>
              {`Navigating the World of ${convertTagBtoF(tag)} in ${Date().split(' ')[3]}`}
            </p>
          </div>
        </div>
        {!response.data || response.data.length == 0 || response.error ? (
          <div className='text-center text-xl font-bold uppercase text-destructive'>
            {response.error ? response.error : 'Resources not found!'}
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3'>
            {response.data.map((res) => {
              return (
                <LearnResourceCard
                  key={res.id}
                  title={res.title}
                  link={res.link}
                  description={res.description}
                  author={res.author}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
