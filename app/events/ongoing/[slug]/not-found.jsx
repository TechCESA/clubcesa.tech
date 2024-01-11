import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-2'>
      <h2 className='text-xl font-semibold'>404 Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        href='/'
        className='mt-4 rounded-md bg-white px-4 py-2 text-sm text-black transition-colors hover:bg-gray-400'
      >
        Go Back
      </Link>
    </main>
  );
}
