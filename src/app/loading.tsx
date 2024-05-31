export default function loading() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
      <div className='h-20 w-20 animate-spin rounded-full border-b-2 border-t-2 border-blue-800'></div>
      <p className='text-md text-center font-normal'>Loading bytes...</p>
    </div>
  );
}
