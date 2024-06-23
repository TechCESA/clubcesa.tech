'use server';

import { db } from '@/firebaseConfig';
import { convertTagsFtoB } from '@/lib/convert-tags';
import { arrayUnion, collection, doc, writeBatch } from '@firebase/firestore';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import * as jose from 'jose';
import { encodedJWTSecrete } from '@/lib/encoded_JWT_secrete';

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
    const userToken = cookies().get('user_verify_token')?.value as string;
    const { payload } = await jose.jwtVerify(userToken, encodedJWTSecrete());

    const resourceRef = doc(collection(db, ResourceStr));

    batch.set(resourceRef, {
      title,
      description,
      link,
      tags,
      author: {
        name: payload['name'],
        email: payload['email'],
        linkedin: payload['linkedin'],
      },
      isVerified: false,
    });

    for (const tg of tags) {
      const tagDocRef = doc(db, TagStr, tg);
      batch.update(tagDocRef, { docId: arrayUnion(resourceRef) });
    }

    await batch.commit();
  } catch (error) {
    console.error('Firebase Error:', error);
    return { message: 'Firebase Error: Failed to add resource.' };
  }

  redirect('/learn/thank-you');
}
