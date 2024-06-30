import {
  getAllResources,
  getAllTags,
  getResourceAction,
} from '@/actions/admin-resources';
import EditForm from '@/components/edit-form';
import Loader from '@/components/loader';
import { convertTagsBtoF } from '@/lib/convert-tags';
import React from 'react';

export async function generateStaticParams() {
  const resources = await getAllResources();

  if (!resources) {
    return [{ id: '' }];
  }

  return resources.map((res) => ({ id: res.id }));
}

export default async function EditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [resource, tags] = await Promise.all([
    getResourceAction(id),
    getAllTags({ all: true }),
  ]);

  if (!resource) {
    return (
      <div className='flex min-h-96 items-center justify-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='container flex min-h-screen flex-col items-center'>
      <EditForm
        id={id}
        resource={resource}
        tags={convertTagsBtoF(tags).sort((a: string, b: string) =>
          a.localeCompare(b),
        )}
      />
    </div>
  );
}
