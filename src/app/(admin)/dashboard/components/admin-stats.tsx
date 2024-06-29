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
import { AdminType } from '../../types/dashboard';

export default async function AdminStats({ data }: { data: AdminType }) {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Admins</CardTitle>
        <CardDescription>
          List of admin users and their associated details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sr.no</TableHead>
              <TableHead>Email</TableHead>
              {/* <TableHead>Resources</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.email.map((email, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{email}</TableCell>
                {/* <TableCell>10</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
