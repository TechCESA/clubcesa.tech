import { deleteResourceAction } from '@/app/(admin-panel)/_actions/resource';
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
  id,
  title,
  description,
  link,
  tags,
}: {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}) {
  const tagsLabel = convertTagsBtoF(tags).sort((a, b) => a.localeCompare(b));

  const handleDelete = () => {
    deleteResourceAction(id);
    window.location.reload(); // try to remove this if you can and ensure revalidation in dashoboard
  };

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
      <div className='absolute bottom-3 right-3 flex justify-end gap-2 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100'>
        <Button size='icon' variant='outline' asChild>
          <Link href={`/admin/dashboard/edit/${id}`}>
            <Pencil size={18} />
          </Link>
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
