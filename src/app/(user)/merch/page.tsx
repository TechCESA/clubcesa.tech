import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MerchList } from '@/utils/merch-list';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='container mx-auto my-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
      {MerchList.map((merch) => (
        <Card key={merch.image}>
          <Image
            src={merch.image}
            alt={merch.image}
            className='mb-4 h-96 w-full rounded-md object-cover'
            width={500}
            height={500}
            quality={100}
          />
          <CardContent>
            <h2 className='mb-2 text-xl font-bold'>{merch.name}</h2>
            <p className='mb-4 text-gray-600'>{merch.description}</p>
          </CardContent>
          <CardFooter className='flex flex-row items-center justify-between'>
            <p className='font-semibold'>{merch.price}</p>
            <Link href={merch.link}>
              <Button className='hover:bg-cesa-blue/20 bg-cesa-blue'>
                View More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
