import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function ResCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link} target='_blank'>
      <Card className='border transition duration-300 ease-in-out hover:border-purple-800/60 hover:bg-purple-50'>
        <CardHeader>
          <CardTitle className='text-lg'>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='line-clamp-3 text-sm'>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
