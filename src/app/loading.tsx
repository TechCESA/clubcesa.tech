import Loader from '@/components/loader';

export default function loading() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Loader />
    </div>
  );
}
