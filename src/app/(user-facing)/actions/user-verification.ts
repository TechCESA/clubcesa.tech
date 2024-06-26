/**
 * This is unused code
 */

'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import * as nodemailer from 'nodemailer';
import { cookies } from 'next/headers';
import * as jose from 'jose';
import { encodedJWTSecrete } from '@/lib/encoded_JWT_secrete';

const UserSchema = z.object({
  name: z
    .string()
    .min(5, 'Minimum 5 characters required')
    .max(25, 'Name length is more than maximum'),
  email: z.string().email(),
  otp: z
    .string({ message: 'Verify your email first' })
    .min(6, 'Enter complete OTP'),
  github: z
    .string()
    .url('Please provide correct Github Profile URL')
    .startsWith('https://www.github.com/in/'),
});

type State = {
  errors?: {
    name?: string[];
    email?: string[];
    otp?: string[];
    github?: string[];
  };
  message?: string;
};

const OTPGenerated = (Math.floor(Math.random() * 900000) + 100000).toString();

export async function verifyUserAction(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const name = formData.get('name');
  const email = formData.get('email');
  const otp = formData.get('otp');
  const github = formData.get('github');

  const result = UserSchema.safeParse({
    name,
    email,
    otp,
    github,
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  try {
    if (OTPGenerated !== result.data.otp) {
      throw new Error();
    }

    const token = await new jose.SignJWT({
      name: result.data.name,
      email: result.data.email,
      github: result.data.github,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(encodedJWTSecrete());

    cookies().set('user_verify_token', token, { maxAge: 3600 });
  } catch (error) {
    console.error('User verification error: ', error);
    return { message: 'Invalid OTP.' };
  }

  redirect('/learn/contribute');
}

/**
 * Limit this "sendOTPEmail" to avoid spamming
 * like 5 mails/hr
 */

export async function sendOTPEmail(userEmail: string) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  let mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: userEmail,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${OTPGenerated}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully!');
  } catch (error) {
    console.error('Error sending OTP email:', error);
  }
}
