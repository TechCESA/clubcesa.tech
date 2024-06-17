import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { convertTagsBtoF } from '@/lib/convert-tags';
import { Pencil, Trash2 } from 'lucide-react';
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
  const tagsLabel = convertTagsBtoF(tags).sort((a, b) => a.localeCompare(b));

  const handleDelete = () => {};

  return (
    <Card className='group relative pb-8'>
      <Link href={link} target='_blank'>
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
      </Link>
      <div className='absolute bottom-2 right-0 flex justify-end gap-2 pr-3 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100'>
        <Button size='icon' variant='outline'>
          <Pencil size={18} />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size='icon' variant='outline'>
              <Trash2 size={18} />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete these resource.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className='bg-destructive'
                onClick={handleDelete}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Card>
  );
}
