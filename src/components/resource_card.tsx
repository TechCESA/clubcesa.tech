import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { db } from '@/firebaseConfig';
import { convertTagsBtoF } from '@/lib/convert-tags';
import { cn } from '@/lib/utils';
import { UserType } from '@/types/user';
import { doc, getDoc } from '@firebase/firestore';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import DeleteAlertBtn from './delete-alert-btn';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export default async function ResourceCard({
  id,
  title,
  description,
  link,
  tags,
  author,
  verified,
  isAdmin = false,
}: {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  author: string;
  verified: boolean;
  isAdmin?: boolean;
}) {
  const tagsLabel = convertTagsBtoF(tags).sort((a, b) => a.localeCompare(b));

  const authorRef = await getDoc(doc(db, 'authors', author.toString()));
  const authorData = authorRef.data() as UserType;

  return (
    <Card className='group relative'>
      <CardHeader className='pb-2'>
        <Link
          href={link}
          target='_blank'
          className='group-hover:underline group-hover:underline-offset-4'
        >
          <CardTitle className='p-0 text-lg'>{title}</CardTitle>
        </Link>
      </CardHeader>

      <CardContent className='pb-3'>
        <p className='line-clamp-3 text-sm'>{description}</p>
      </CardContent>

      <CardFooter className='flex flex-col items-start gap-4'>
        <p className='line-clamp-1 text-sm'>
          <span className='font-semibold'>{'Tags: '}</span>
          {tagsLabel.join(', ')}
        </p>

        {isAdmin ? (
          <Link
            href={authorData.github}
            target='_blank'
            className='flex flex-row items-center gap-2 group-hover:underline group-hover:underline-offset-4'
          >
            <Avatar className='size-6'>
              <AvatarImage src={authorData.avatar} alt={authorData.name} />
              <AvatarFallback className='font-bold text-cesa-blue'>
                {authorData.name.charAt(0) ?? ''}
              </AvatarFallback>
            </Avatar>

            <span className='text-xs font-normal'>{authorData.name}</span>
          </Link>
        ) : null}
      </CardFooter>

      <div className='absolute bottom-3 right-3 space-x-2 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100'>
        {isAdmin ? (
          <Button size='icon' variant='outline' asChild>
            <Link href={`/dashboard/resources/edit/${id}`}>
              <Pencil size={18} />
            </Link>
          </Button>
        ) : null}
        <DeleteAlertBtn id={id} />
      </div>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span
              className={cn(
                'absolute right-2 top-2 m-2 size-2 cursor-pointer rounded-full',
                verified ? 'bg-green-600' : 'bg-red-600',
              )}
            ></span>
          </TooltipTrigger>
          <TooltipContent>
            <p className={cn(verified ? 'text-green-600' : 'text-red-600')}>
              {verified ? 'Verified' : 'Unverified'}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Card>
  );
}
