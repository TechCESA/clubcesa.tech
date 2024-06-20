import { convertTagBtoF } from '@/lib/convert-tags';
import Card from './card';
import {
  getAllTags,
  getResources,
} from '@/app/(user-facing)/_actions/resources';

export default async function Page({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const response = await getResources(tag);

  return (
    <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='container mx-auto'>
        <div className='mb-6 text-left'>
          <h1 className='under text-wrap text-2xl font-bold text-black'>
            {convertTagBtoF(tag)}
          </h1>
          <p className='text-sm text-gray-600/60'>
            {`Navigating the World of ${convertTagBtoF(tag)} in ${Date().split(' ')[3]}`}
          </p>
        </div>
        {!response.data || response.error ? (
          <div className='text-center text-xl font-bold uppercase text-destructive'>
            {response.error}
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3'>
            {response.data.map((res) => {
              return (
                <Card
                  key={res.id}
                  title={res.title}
                  link={res.link}
                  description={res.description}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
