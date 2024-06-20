import Card from '@/components/resource_card';
import { getAllTags } from '@/app/(user-facing)/_actions/resources';

export default async function TagsGrid() {
  const tags = await getAllTags({ all: false });

  return (
    <div className='mx-0 my-4 w-full md:container md:mx-auto'>
      {!tags.data || tags.error ? (
        <div className='text-center text-xl font-bold uppercase text-destructive'>
          {tags.error}
        </div>
      ) : (
        <div className='grid w-full grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3'>
          {tags.data.map((tg) => {
            return (
              <Card key={tg} title={tg} link={`/learn/${tg}`} isNew={true} />
            );
          })}
        </div>
      )}
    </div>
  );
}
