import { getAllTags } from '@/actions/user-resources';
import ResTagCard from '@/components/tag_card';

export default async function TagsGrid() {
  const tags = await getAllTags({ all: false });

  return (
    <div className='mx-0 my-4 w-full md:container md:mx-auto'>
      {tags.data?.length == 0 || !tags.data || tags.error ? (
        <div className='text-center text-lg font-bold uppercase text-destructive'>
          {tags.error ? tags.error : 'Resources not found!'}
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3'>
          {tags.data.map((tg) => {
            return <ResTagCard key={tg} title={tg} link={`/learn/${tg}`} />;
          })}
        </div>
      )}
    </div>
  );
}
