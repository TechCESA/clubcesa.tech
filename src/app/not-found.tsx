import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='flex min-h-screen cursor-help  select-none flex-col items-center justify-center gap-2'>
      <h1 className='font-mono text-3xl font-semibold '>404</h1>
      <Link
        href='/'
        className='underline underline-offset-2 hover:text-blue-500'
      >
        Go back to homepage
      </Link>
    </div>
  );
}
