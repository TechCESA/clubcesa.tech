import Card from '@/components/resource_card';
import { getTypeOfResources } from '@/app/(user-facing)/_actions/resources';

export default async function ResourceGrid() {
  const response = await getTypeOfResources();

  return (
    <div className='mx-0 my-4 w-full md:container md:mx-auto'>
      {!response.data || response.error ? (
        <div className='text-center text-xl font-bold uppercase text-destructive'>
          {response.error}
        </div>
      ) : (
        <div className='grid w-full grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3'>
          {response.data.map((res) => {
            return (
              <Card
                key={res}
                title={res}
                link={`/resources/${res}`}
                isNew={true}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
