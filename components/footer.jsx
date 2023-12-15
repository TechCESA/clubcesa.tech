export default function Footer() {
  return (
    <footer className='bg-zinc-900 py-4' id='connect'>
      <div className='m-auto flex max-w-[90vw] flex-col items-center justify-between sm:max-w-[75vw] md:flex-row md:items-start'>
        <div className='address mb-8 text-center text-white md:text-start'>
          <div className='py-2 font-bold'>Address</div>
          <div className='address w-60 text-sm'>
            BVCOENM, Sector-7, CBD Belapur, Navi Mumbai, Maharashtra 400614
          </div>
        </div>

        <div className='follow mb-8 w-40 text-center text-white'>
          <div className='py-2 font-bold'>Follow Us</div>
          <div className='flex justify-around'>
            <div className='h-10 w-10 rounded-full bg-slate-200'></div>
            <div className='h-10 w-10 rounded-full bg-slate-200'></div>
            <div className='h-10 w-10 rounded-full bg-slate-200'></div>
          </div>
        </div>

        <div className='flex flex-col text-center text-white md:text-start'>
          <div className='py-2 font-bold'>Contact Us</div>
          <div>9372356911</div>
          <div className='email'>techcesa@gmail.com</div>
        </div>
      </div>
    </footer>
  );
}
