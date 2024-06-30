import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AuthorType } from '@/types/dashboard';
import Link from 'next/link';

export default function AuthorStats({ data }: { data: AuthorType[] }) {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Authors</CardTitle>
        <CardDescription>
          List of authors and their associated details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className='text-right'>Resources</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((p) => {
              return (
                <TableRow key={p.email + p.createdAt}>
                  <TableCell className='flex flex-row items-center gap-2'>
                    <Avatar className='size-6'>
                      <AvatarImage src={p.avatar} alt={p.name} />
                      <AvatarFallback>{p.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Link href={p.github} className='font-medium'>
                      {p.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className='text-sm text-muted-foreground'>
                      {p.email}
                    </div>
                  </TableCell>
                  <TableCell className='text-right'>{p.resources}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
