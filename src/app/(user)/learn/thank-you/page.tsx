import { Button } from '@/components/ui/button';
import { CheckCircle2Icon, CheckIcon } from 'lucide-react';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className='flex min-h-[80vh] flex-col items-center justify-center gap-4'>
      <CheckCircle2Icon className='size-16 stroke-cesa-blue' strokeWidth='3' />
      <div>
        <h1 className='mb-2 text-center text-3xl font-bold'>
          Thank you, for your contribution!
        </h1>
        <p className='text-center text-base text-gray-500'>
          {`We'll be sending you a confirmation email about your contribution in short period.`}
        </p>
      </div>
      <Button
        variant='outline'
        className='font-semibold text-cesa-blue'
        asChild
      >
        <Link href='/learn'>Back to Learn</Link>
      </Button>
    </div>
  );
}
