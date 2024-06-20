import Card from './card';
import { getResources } from '@/app/(user-facing)/_actions/resources';

function capitalizeAndRemoveHyphen(str: string) {
  return str
    .replace(/-/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default async function Page({
  params: { tag },
}: {
  params: { tag: string };
}) {
  // const response = await getResources(resource);

  return (
    <div className='flex h-96 animate-pulse items-center justify-center text-xl font-semibold'>
      Working...
    </div>
  );

  // return (
  //   <div className='mx-auto min-h-screen max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 '>
  //     <div className='container mx-auto my-12'>
  //       <div id='resourses-header' className='my-8 text-left'>
  //         <h1 className='under text-wrap text-2xl font-bold text-black'>
  //           {capitalizeAndRemoveHyphen(resource)}
  //         </h1>
  //         <p className='text-md text-gray-600/60'>
  //           Step by step guide to becoming a{' '}
  //           {capitalizeAndRemoveHyphen(resource)} master in{' '}
  //           {Date().split(' ')[3]}
  //         </p>
  //       </div>
  //       <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
  //         {response.data.length == 0 || response.error.length >= 1 ? (
  //           <div className='flex justify-center text-2xl font-medium uppercase text-red-400'>
  //             {response.error}
  //           </div>
  //         ) : (
  //           response.data.map((res) => {
  //             return (
  //               <Card
  //                 key={res.id}
  //                 title={res.title}
  //                 link={res.link}
  //                 description={res.description}
  //               />
  //             );
  //           })
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
}
