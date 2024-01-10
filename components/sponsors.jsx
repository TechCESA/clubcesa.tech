import Image from 'next/image';
import '@/css/sponsors.css';
// const holding = '/images/holding01.png';

export default function Sponsors() {
  return (
    <div>
      <p className='text-center text-4xl font-bold'>Sponsors</p>
      <div
        className='hero'
        style={{
          width: '100%',
          position: 'relative',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: '0.9',
          display: 'flex' /* Enable flexbox for main div */,
          justifyContent: 'center',
          alignItems: 'center' /* Center content vertically */,
        }}
      >
        <div
          style={{
            width: '93%',
            height: 'auto',
          }}
        >
          <div className='my-10 grid grid-cols-2 items-center  justify-center justify-items-center gap-4  md:grid-flow-col  md:grid-cols-1 md:gap-10 lg:grid-cols-3 lg:grid-rows-1'>
            <div className='flex justify-center rounded-2xl border-2 border-white/30 bg-white/80 px-8 py-2 hover:bg-white/40'>
              <a href='#'>
                <Image
                  src='/sponsors/slack-logo.png'
                  alt='sponsors'
                  width={240}
                  height={320}
                />
              </a>
            </div>

            <div className='flex justify-center rounded-2xl border-2 border-white/30 bg-white/80 px-8 py-2 hover:bg-white/40'>
              <a href='#'>
                <Image
                  src='/sponsors/slack-logo.png'
                  alt='sponsors'
                  width={240}
                  height={320}
                />
              </a>
            </div>
            <div className='flex justify-center rounded-2xl border-2 border-white/30 bg-white/80 px-8 py-2 hover:bg-white/40'>
              <a href='#'>
                <Image
                  src='/sponsors/slack-logo.png'
                  alt='sponsors'
                  width={240}
                  height={320}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
