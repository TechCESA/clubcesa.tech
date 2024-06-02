import Card from '@/components/resource_card';
import { getTypeOfResources } from '@/app/actions/resources';

export default async function ResourceGrid() {
  const response = await getTypeOfResources();

  return (
    <div className='container mx-auto my-12'>
      <div className='mx-4 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3 xl:mx-0'>
        {response.types.length == 0 || response.error.length >= 1 ? (
          <div className='flex justify-center text-2xl font-medium uppercase text-red-400'>
            {response.error}
          </div>
        ) : (
          response.types?.map((res) => {
            return (
              <Card
                key={res}
                title={res}
                link={`/resources/${res}`}
                isNew={true}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
