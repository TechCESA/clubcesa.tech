'use client';

import { Button } from '@/components/ui/button';
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
import { convertTagBtoF } from '@/lib/convert-tags';
import { sortTagByName, sortTagByResource } from '@/lib/sort';
import { TagType } from '@/types/dashboard';
import { ArrowDownUpIcon } from 'lucide-react';
import { useState } from 'react';
import AddTagDialog from './add-tag-dialog';

const ITEMS_PER_PAGE = 5;

export default function TagStats({ data }: { data: TagType[] }) {
  const [tagSort, setTagSort] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <Card className='mx-4 md:mx-0'>
      <CardHeader>
        <CardTitle className='flex flex-row items-start justify-between'>
          <span>Tags with Resources</span>
          <AddTagDialog prevTags={data} />
        </CardTitle>
        <CardDescription>List of tags with no. of resources.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='space-x-2'>
                <span>Tags</span>
                <ArrowDownUpIcon
                  className='inline cursor-pointer'
                  size={16}
                  onClick={() => {
                    sortTagByName({ data, desc: tagSort });
                    setTagSort(!tagSort);
                  }}
                />
              </TableHead>

              <TableHead className='space-x-2 text-right'>
                <span>Resources</span>
                <ArrowDownUpIcon
                  className='inline cursor-pointer'
                  size={16}
                  onClick={() => {
                    sortTagByResource({ data, desc: tagSort });
                    setTagSort(!tagSort);
                  }}
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((tag) => {
              return (
                <TableRow key={tag.id}>
                  <TableCell className='px-3 py-1'>
                    {convertTagBtoF(tag.id)}
                  </TableCell>
                  <TableCell className='text-right'>
                    {tag.numberOfRes}
                  </TableCell>
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
