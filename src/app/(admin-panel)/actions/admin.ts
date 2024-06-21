'use server';

import { db } from '@/firebaseConfig';
import { encodedJWTSecrete } from '@/lib/encoded_JWT_secrete';
import { doc, getDoc } from '@firebase/firestore';
import bcryptjs from 'bcryptjs';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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

  const admin = await getAdmin(email);

  if (admin.error || admin.data === null) {
    return { ...prevState, error: admin.error };
  }

  if (admin.data.email != email) {
    return { ...prevState, error: 'Invalid Email' };
  }

  const isPasswordValid = await bcryptjs.compare(password, admin.data.password);

  if (!isPasswordValid) {
    return { ...prevState, error: 'Invalid Password' };
  }

  const token = await new jose.SignJWT({ email: admin.data.email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(encodedJWTSecrete());

  cookies().set('cesa_admin_token', token, { maxAge: 3600 });

  redirect('/admin/dashboard');
}

type ADMIN = {
  email: string;
  password: string;
};

interface AdminType {
  data: ADMIN | null;
  error: string | null;
}

async function getAdmin(email: string): Promise<AdminType> {
  if (!email) {
    return {
      error: 'Invalid Email',
      data: null,
    };
  }

  try {
    const resourceRef = doc(db, 'admin', 'users');
    const docSnap = await getDoc(resourceRef);
    if (!docSnap.exists()) {
      return { error: 'Invalid Email', data: null };
    }

    const data = docSnap.data().data as ADMIN[];

    const admin = data.find((admin) => {
      if (admin.email === email) {
        return { data: admin, error: null };
      }
    }) as ADMIN;

    if (!admin) {
      return { error: 'Invalid Email', data: null };
    }

    return { data: admin, error: null };
  } catch (error) {
    return {
      error: 'Internal Server Error',
      data: null,
    };
  }
}
