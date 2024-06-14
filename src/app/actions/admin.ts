'use server';

import { redirect } from 'next/navigation';
import bcryptjs from 'bcryptjs';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import { encodedJWTSecrete } from '@/lib/encoded_JWT_secrete';

type FormState = {
  error: string | null;
  message: string | null;
};

export async function loginFormAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  /* This should be fetched from the database */
  const user = {
    email: '',
    password: '',
  };

  if (user.email != email) {
    return { ...prevState, error: 'Invalid Email' };
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);

  if (!isPasswordValid) {
    return { ...prevState, error: 'Invalid Password' };
  }

  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(encodedJWTSecrete());

  cookies().set('cesa_admin_token', token, { maxAge: 3600 });

  redirect('/admin/dashboard');
}
