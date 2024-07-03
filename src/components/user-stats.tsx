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
import { formatDate } from '@/lib/date';
import { UserType } from '@/types/user';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function UserStats({
  data,
  isAdmin = false,
}: {
  data: UserType[];
  isAdmin?: boolean;
}) {
  return (
    <Card className='w-screen md:w-auto'>
      <CardHeader>
        <CardTitle>{isAdmin ? 'Admins' : 'Authors'}</CardTitle>
        <CardDescription>
          {isAdmin
            ? 'List of admins and their associated details.'
            : 'List of authors and their associated details.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              {isAdmin ? null : <TableHead>Joined At</TableHead>}
              {isAdmin ? null : <TableHead>Resources</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((usr) => (
              <TableRow key={usr.id}>
                <TableCell>
                  <Link href={usr.github} target='_blank'>
                    <Avatar className='size-6'>
                      <AvatarImage src={usr.avatar} alt={usr.name} />
                      <AvatarFallback>{usr.name}</AvatarFallback>
                    </Avatar>
                  </Link>
                </TableCell>
                <TableCell>{usr.name}</TableCell>
                <TableCell>{usr.email}</TableCell>
                {isAdmin ? null : (
                  <TableCell>{formatDate(usr.createdAt)}</TableCell>
                )}
                {isAdmin ? null : <TableCell>{usr.resources.length}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
