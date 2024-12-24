import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { db } from '@/firebaseConfig';
import { UserType } from '@/types/user';
import { doc, getDoc } from '@firebase/firestore';
import Link from 'next/link';

export default async function LearnResourceCard({
  title,
  description,
  link,
  author,
}: {
  title: string;
  description: string;
  link: string;
  author: string;
}) {
  const authorRef = await getDoc(doc(db, 'authors', author.toString()));
  const authorData = authorRef.data() as UserType;

  return (
    <Card className='group border transition duration-300 ease-in-out hover:border-purple-800/60 hover:bg-purple-50'>
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
      <CardFooter>
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
      </CardFooter>
    </Card>
  );
}
