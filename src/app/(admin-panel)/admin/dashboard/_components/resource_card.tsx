import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function ResourceCard({
  title,
  description,
  link,
  tags,
}: {
  title: string;
  description: string;
  link: string;
  tags: string[];
}) {
  return (
    <Link href={link} target='_blank'>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {/* If we are able to get image will display here */}
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p className='line-clamp-3'>{description}</p>
        </CardContent>
        <CardFooter>
          <p className='line-clamp-1'>
            <span className='font-semibold'>{'Tags: '}</span>
            {tags.join(', ')}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
