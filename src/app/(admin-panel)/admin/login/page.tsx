'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginFormAction } from '@/app/(admin-panel)/actions/admin';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [state, formAction] = useFormState(loginFormAction, {
    error: null,
    message: null,
  });

  return (
    <div className='flex min-h-svh w-full items-center justify-center'>
      <form action={formAction} className='flex flex-col items-start gap-6'>
        <div className='flex flex-col items-start gap-2'>
          <Label htmlFor='email' className='font-semibold'>
            Email
          </Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            className='min-w-96'
            required
            autoFocus
          />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <Label htmlFor='password' className='font-semibold'>
            Password
          </Label>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            className='min-w-96'
            required
          />
        </div>
        <div className='flex w-full flex-col gap-2'>
          {state.error && <p className='text-destructive text-sm'>{state.error}</p>}
          <LoginButton />
        </div>
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className='flex w-full items-center justify-center'
    >
      {pending ? <span className='animate-bounce text-3xl'>...</span> : 'Login'}
    </Button>
  );
}
