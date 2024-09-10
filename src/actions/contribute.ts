'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { db } from '@/firebaseConfig';
import { convertTagsFtoB } from '@/lib/convert-tags';
import { arrayUnion, collection, doc, writeBatch } from '@firebase/firestore';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ResourceSchema = z.object({
  title: z
    .string()
    .min(30, 'Minimum 30 characters required')
    .max(50, 'Title length is more than maximum'),
  description: z
    .string()
    .min(200, 'Minimum 200 characters required')
    .max(
      300,
      'Description length is more than maximum, it should be less than 300 characters',
    ),
  link: z.string().url('Invalid URL format'),
  tags: z.array(z.string()).nonempty('At least one tag is required'),
});

const ResourceStr = 'resources';
const TagStr = 'tags';

type State = {
  errors?: {
    link?: string[];
    title?: string[];
    description?: string[];
    tags?: string[];
  };
  message?: string;
};

export async function contributeResourceAction(
  selectedTags: string[],
  prevState: State,
  formData: FormData,
): Promise<State> {
  const { title, description, link } = Object.fromEntries(formData);
  const tags = convertTagsFtoB(selectedTags);

  const result = ResourceSchema.safeParse({
    title: (title as string).trim(),
    description: (description as string).trim(),
    link: (link as string).trim(),
    tags,
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  try {
    const session = await getServerSession(authOptions);

    if (!session) throw new Error();

    const batch = writeBatch(db);

    const resourceRef = doc(collection(db, ResourceStr));

    const authorRef = doc(db, 'authors', `${session.user.id}`);

    batch.set(resourceRef, {
      title,
      description,
      link,
      tags,
      author: session.user.id,
      isVerified: false,
      createdAt: Date.now(),
    });

    batch.update(authorRef, {
      resources: arrayUnion(resourceRef.id),
    });

    for (const tg of tags) {
      const tagDocRef = doc(db, TagStr, tg);
      batch.update(tagDocRef, {
        resources: arrayUnion({ id: resourceRef.id, isVerified: false }),
      });
    }

    await batch.commit();
  } catch (error) {
    console.error('Firebase Error:', error);
    return { message: 'Firebase Error: Failed to add resource.' };
  }

  redirect('/learn/thank-you');
}
