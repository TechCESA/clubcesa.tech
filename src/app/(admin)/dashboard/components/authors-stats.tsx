import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table';
import { AuthorType } from '../../actions/dashboard';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
                <TableRow>
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
