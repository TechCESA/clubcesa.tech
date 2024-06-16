import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { convertTags } from '@/lib/convert-tags';
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
  const tagsLabel = convertTags(tags)
    .map((tag) => tag.label)
    .sort((a, b) => a.localeCompare(b));

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
            {tagsLabel.join(', ')}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
