'use client';

import {
  sendOTPEmail,
  verifyUserAction,
} from '@/app/(user-facing)/actions/user-verification';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import { useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { z } from 'zod';

export default function VerifyUser() {
  const [isVerifyEmailSend, setIsVerifyEmailSend] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');

  const emailRef = useRef<HTMLInputElement>(null);

  const [formState, formAction] = useFormState(verifyUserAction, {
    errors: {},
    message: '',
  });

  function sendEmailToUser() {
    const userEmail = emailRef.current?.value;
    const emailSchema = z.string().email().endsWith('@gmail.com');

    if (!userEmail) return null;

    const res = emailSchema.safeParse(userEmail);
    if (!res.success) {
      setEmailError(res.error.errors[1].message);
      return;
    }

    setIsVerifyEmailSend(true);
    setEmailError('');

    sendOTPEmail(userEmail);
  }

  return (
    <div className='container flex min-h-screen flex-col items-center'>
      <form
        action={formAction}
        className='my-8 flex w-full flex-col items-start gap-6 rounded-lg bg-primary-foreground p-4 shadow-md md:my-24 md:max-w-[70%] md:px-12 md:py-8'
      >
        <h1 className='w-full text-center text-xl font-bold'>
          Verify yourself
        </h1>
        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='name' className='font-semibold'>
            Name
          </Label>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            required
            autoFocus
          />
          {formState.errors?.name && (
            <p className='text-sm text-destructive'>{formState.errors.name}</p>
          )}
        </div>
        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='email' className='font-semibold'>
            Email
          </Label>
          <div className='flex w-full flex-row items-center justify-between gap-4'>
            <Input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              required
              ref={emailRef}
            />
            <Button className='bg-cesa-blue' onClick={sendEmailToUser}>
              Verify
            </Button>
          </div>
          {emailError ? (
            <p className='text-sm text-destructive'>{emailError}</p>
          ) : null}
          {formState.errors?.email && (
            <p className='text-sm text-destructive'>{formState.errors.email}</p>
          )}
        </div>
        {isVerifyEmailSend ? (
          <div className='flex w-full flex-col items-start gap-2'>
            <Label htmlFor='otp' className='font-semibold'>
              Enter OTP
            </Label>
            <InputOTP id='otp' name='otp' maxLength={6} required>
              <InputOTPGroup className='bg-white'>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        ) : null}
        {formState.errors?.otp && (
          <p className='text-sm text-destructive'>{formState.errors.otp}</p>
        )}
        <div className='flex w-full flex-col items-start gap-2'>
          <Label htmlFor='linkedin' className='font-semibold'>
            LinkedIn Profile
          </Label>
          <Input
            type='url'
            id='linkedin'
            name='linkedin'
            placeholder='LinkedIn Profile URL'
            required
          />
          {formState.errors?.linkedin && (
            <p className='text-sm text-destructive'>
              {formState.errors.linkedin}
            </p>
          )}
        </div>
        <div className='flex w-full flex-col gap-2'>
          {formState.message && (
            <p className='text-sm text-destructive'>{formState.message}</p>
          )}
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className='flex w-full items-center justify-center bg-cesa-blue'
    >
      {pending ? (
        <span className='animate-bounce text-3xl'>...</span>
      ) : (
        'Submit'
      )}
    </Button>
  );
}
