import { Button } from '@/components/ui/button';
import Link from 'next/link';

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const NOT_FOUND_SENT = [
  "You seek a treasure most divine, but alas, that's not on this website of mine!",
  "Like Dory in Finding Nemo, what you're looking for... just keeps swimming, swimming, swimming!",
  "My internal search results say... nope, can't find that here. Maybe try googling it?",
  "Looks like you've reached a dead end... this page doesn't have what you're searching for.",
];

export default function NotFoundComponent() {
  return (
    <div className='flex min-h-[75vh] flex-col items-center justify-center gap-6'>
      <h1 className='text-xl font-bold text-cesa-blue'>X_X</h1>
      <p className='w-1/2 text-center text-xs font-medium sm:w-1/3 sm:text-lg'>
        {NOT_FOUND_SENT[getRandomNumber(0, 3)]}
      </p>
      <Button
        variant='outline'
        className='font-semibold text-cesa-blue'
        asChild
      >
        <Link href='/'>Back to Home</Link>
      </Button>
    </div>
  );
}
