'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { db } from '@/firebaseConfig';
import { convertTagsFtoB } from '@/lib/convert-tags';
import { arrayUnion, collection, doc, writeBatch } from '@firebase/firestore';
import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ResourceSchema = z.object({
  title: z
    .string()
    .min(30, 'Minimum 30 characters required')
    .max(50, 'Title length is more than maximum'),
  description: z
    .string()
    .min(200, 'Minimum 300 characters required')
    .max(300, 'Description length is more than maximum'),
  link: z.string().url('Invalid URL format'),
  tags: z.array(z.string()).nonempty('At least one tag is required'),
});

enum FormFields {
  Button = 'button',
  Title = 'title',
  Description = 'description',
  Link = 'link',
  Tags = 'tags',
}

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
  const title = formData.get(FormFields.Title) as string;
  const description = formData.get(FormFields.Description) as string;
  const link = formData.get(FormFields.Link) as string;
  const tags = convertTagsFtoB(selectedTags);

  const result = ResourceSchema.safeParse({
    title,
    description,
    link,
    tags,
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const batch = writeBatch(db);

  try {
    const session = await getServerSession(authOptions);

    if (!session) throw new Error();

    const resourceRef = doc(collection(db, ResourceStr));

    batch.set(resourceRef, {
      title,
      description,
      link,
      tags,
      author: {
        name: session.user.name,
        email: session.user.email,
        avatar: session.user.image,
        github: session.user.github,
      },
      isVerified: false,
      createdAt: Date.now(),
    });

    for (const tg of tags) {
      const tagDocRef = doc(db, TagStr, tg);
      batch.update(tagDocRef, {
        docId: arrayUnion({ resourceRef, isVerified: false }),
      });
    }

    await batch.commit();
  } catch (error) {
    console.error('Firebase Error:', error);
    return { message: 'Firebase Error: Failed to add resource.' };
  }

  redirect('/learn/thank-you');
}
