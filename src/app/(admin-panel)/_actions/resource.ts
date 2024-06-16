'use server';

import { db } from '@/firebaseConfig';
import { FormField, FormState, TAGType } from '@/lib/types';
import { doc, getDoc } from '@firebase/firestore';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ResourceSchema = z.object({
  title: z.string().min(30, 'Minimum 30 characters required'),
  description: z.string().min(300, 'Minimum 300 characters required'),
  link: z.string().url('Invalid URL format'),
  tags: z.array(z.string()).nonempty('At least one tag is required'),
});

export async function addResourceAction(
  selectedTags: TAGType[],
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const title = formData.get(FormField.Title) as string;
  const description = formData.get(FormField.Description) as string;
  const link = formData.get(FormField.Link) as string;
  const tags = selectedTags.map((tag) => tag.value);

  const result = ResourceSchema.safeParse({
    title,
    description,
    link,
    tags,
  });

  if (!result.success) {
    const errorField = result.error.errors[0].path[0];

    let field: FormField;
    if (Object.values(FormField).includes(errorField as FormField)) {
      field = errorField as FormField;
    } else {
      field = FormField.Button;
    }

    return {
      ...prevState,
      error: {
        field,
        message: result.error.errors[0].message,
      },
    };
  }

  try {
    /**
     * Add data to Firebase
     */
  } catch (error) {
    return {
      ...prevState,
      error: {
        field: FormField.Button,
        message: 'Failed to add resource',
      },
    };
  }

  redirect('/admin/dashboard');
}
