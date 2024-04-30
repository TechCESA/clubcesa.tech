import { BackButton } from '@/components/back-button';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-bold text-cesa-blue'>Comming Soon...</h1>
      <BackButton />
    </div>
  );
}
