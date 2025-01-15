import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Events } from '@/utils/event-data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const findEvent = (slug: string) => {
  return Events.find((event) => event.slug === slug);
};

export default function Page({ params }: { params: { slug: string } }) {
  const event = findEvent(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className='container mx-auto my-12 px-4 py-8'>
      <div className='grid items-start gap-8 lg:grid-cols-2'>
        <div className='overflow-hidden rounded-lg lg:block'>
          <Image
            src={event.main_image}
            alt={event.title}
            className='size-full object-cover'
            width={1024}
            height={1024}
            quality={100}
          />
        </div>

        {/* event info */}
        <div className='space-y-8'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tight'>{event.title}</h1>
            <Separator />
          </div>

          <div>
            <p className='text-sm text-gray-600'>Registration Fees</p>
            <div className='flex flex-row items-center gap-2'>
              <p className='text-2xl font-semibold tracking-tight'>
                {event.price}
              </p>
              <p className='text-sm text-gray-600'>
                {event.isTeamGame ? '/team' : '/person'}
              </p>
            </div>
          </div>

          {/* Description and details */}
          <p
            className='text-sm text-muted-foreground md:text-base'
            dangerouslySetInnerHTML={{ __html: event.description }}
          ></p>

          <Link href={event.registerLink} className='block'>
            <Button type='submit' className='w-full bg-cesa-blue text-white'>
              Fill the form
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
