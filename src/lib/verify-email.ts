'use server';

import { getResourceAction } from '@/actions/admin-resources';
import VerificationEmail from '@/emails/resource-verification';
import { db } from '@/firebaseConfig';
import { UserType } from '@/types/user';
import { doc, getDoc } from '@firebase/firestore';
import { render } from '@react-email/components';
import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function sendVerifyEmail({
  userId,
  resourceId,
}: {
  userId: string;
  resourceId: string;
}) {
  const author = (
    await getDoc(doc(db, 'authors', userId.toString()))
  ).data() as UserType;

  const resource = await getResourceAction(resourceId);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const emailHtml = render(
    VerificationEmail({ user: author, resource: resource }),
  );

  const mailOptions = {
    from: `CESA ${process.env.NODEMAILER_EMAIL}`,
    to: author.email,
    subject: `Thanks for sharing "${resource?.title ?? 'resource'}" on CESA Community!`,
    html: emailHtml,
  } satisfies Mail.Options;

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
