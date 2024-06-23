export default function Loader() {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className='size-10 animate-spin rounded-full border-b-2 border-t-2 border-cesa-blue'></div>
      <h4 className='text-md animate-pulse text-center font-semibold'>
        Loading bytes...
      </h4>
    </div>
  );
}
