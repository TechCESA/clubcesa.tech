import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function ResCard({
  title,
  description,
  link,
  author,
}: {
  title: string;
  description: string;
  link: string;
  author: { name: string; avatar: string; github: string };
}) {
  return (
    <Card className='group border transition duration-300 ease-in-out hover:border-purple-800/60 hover:bg-purple-50'>
      <CardHeader>
        <Link
          href={link}
          target='_blank'
          className='group-hover:underline group-hover:underline-offset-4'
        >
          <CardTitle className='text-lg'>{title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <p className='line-clamp-3 text-sm'>{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={author.github}
          target='_blank'
          className='flex flex-row items-center gap-2 group-hover:underline group-hover:underline-offset-4'
        >
          <Avatar className='size-6'>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className='font-bold text-cesa-blue'>
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <span className='text-xs font-normal'>{author.name}</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
