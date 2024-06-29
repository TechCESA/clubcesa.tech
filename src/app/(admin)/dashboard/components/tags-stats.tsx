'use client';
import { useState } from 'react';
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
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { sortTags } from '../../lib/sort';

const ITEMS_PER_PAGE = 5;

export default function TagStats({
  data,
}: {
  data: { id: string; data: number }[];
}) {
  const [tagSort, setTagSort] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

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
            <TableRow className='text-md'>
              <TableHead className='flex flex-row items-center space-x-2'>
                <p>Tags</p>
                {tagSort ? (
                  <ArrowDownCircle
                    size={16}
                    onClick={() => {
                      if (!tagSort) return;
                      sortTags(data, false);
                      setTagSort(false);
                    }}
                  />
                ) : (
                  <ArrowUpCircle
                    size={16}
                    onClick={() => {
                      if (tagSort) return;
                      sortTags(data, true);
                      setTagSort(true);
                    }}
                  />
                )}
              </TableHead>

              <TableHead className='text-right'>Resources</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((tag) => {
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
        <div className='mt-8 flex justify-between'>
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
