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
import { convertTagBtoF } from '@/lib/convert-tags';

export default function TagStats({
  data,
}: {
  data: { id: string; data: number }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tags with Resources</CardTitle>
        <CardDescription>
          Resources categorized by their associated tags.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tag</TableHead>
              <TableHead>Resources</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((tag) => {
              return (
                <TableRow key={tag.id}>
                  <TableCell className='px-3 py-1'>
                    {convertTagBtoF(tag.id)}
                  </TableCell>
                  <TableCell className='text-right'>{tag.data}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
