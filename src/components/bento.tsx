import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Bento() {
  return (
    <div className='container mt-8 grid min-h-screen grid-cols-1 gap-4 md:mt-16 md:grid-cols-3'>
      <Link href='/memories'>
        <div className='relative overflow-hidden'>
          <span className='absolute -bottom-3 left-2 text-5xl font-extrabold leading-none md:-bottom-10 md:left-6 md:text-8xl'>
            *
          </span>
          <span className='absolute -right-4 -top-4 text-9xl font-extrabold leading-none md:-right-12 md:-top-12 md:text-[16rem]'>
            *
          </span>
          <Card>
            <CardHeader className='flex h-full flex-col items-center justify-center p-4'>
              <div className='text-xl font-semibold'>Dive into</div>
              <div className='text-4xl font-extrabold text-[#34E721] md:text-5xl'>
                Memories
              </div>
            </CardHeader>
          </Card>
        </div>
      </Link>

      <Link href='members' className='row-span-2'>
        <Card className='bg-[#FF5C00] p-2 text-accent'>
          <CardHeader className='flex h-full flex-col items-center text-center'>
            <div className='relative aspect-[6/2] h-auto w-full md:aspect-[6/1]'>
              <Image
                src='/images/members.svg'
                fill
                alt='Members'
                className='object-contain object-center'
              />
            </div>
            <div className='text-xl font-semibold'>Know More About</div>
            <div className='text-5xl font-extrabold'>
              <span className='hidden md:inline'>Our</span> Members
            </div>
          </CardHeader>
        </Card>
      </Link>

      <Link
        href='https://www.instagram.com/cesa.bvcoe'
        className='row-span-4 min-h-60 overflow-hidden'
        target='_blank'
      >
        <Card className='relative h-full bg-[#FFD338] text-accent'>
          <div className='pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center pt-8 text-7xl font-extrabold leading-none md:gap-8 md:text-9xl'>
            <span className='-rotate-12'>Follow</span>
            <span className='-rotate-12'>Follow</span>
            <span className='-rotate-12'>Follow</span>
            <span className='-rotate-12'>Follow</span>
            <span className='-rotate-12'>Follow</span>
          </div>
          <CardHeader className='flex items-center justify-center'>
            <Image
              src='/images/cesa-insta.svg'
              height={200}
              width={200}
              alt='Insta Handle'
              className='absolute -bottom-60 aspect-[4/5] w-full object-contain object-center'
            />
          </CardHeader>
        </Card>
      </Link>

      <div className='relative row-span-4'>
        <p className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] whitespace-nowrap text-2xl font-bold text-cesa-blue'>
          Coming Soon...
        </p>
        <div className='h-full w-full overflow-hidden'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='h-full w-full rounded-lg border object-cover shadow-sm'
          >
            <source
              src='https://media4.giphy.com/media/rcFs59ww1R7yeFszmo/giphy.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <Card className='row-span-2'>
        <CardHeader className='flex h-full flex-col items-center justify-center'>
          <CardTitle className='text-6xl font-extrabold text-cesa-blue md:text-9xl'>
            CESA
          </CardTitle>
          <CardDescription className='text-center'>
            Computer Engineering Students Association
          </CardDescription>
        </CardHeader>
      </Card>

      <Link
        href='https://maps.app.goo.gl/WGGRXyM3hWPDUHwQ6'
        target='_blank'
        className='relative aspect-[1/1] h-full w-auto'
      >
        <Image
          src='/images/bvcoe-map.png'
          fill
          alt='BVCOE Map'
          className='h-full w-full overflow-hidden rounded-lg border object-contain object-center shadow-sm'
        />
      </Link>

      <Card>
        <CardHeader className='flex h-full flex-col items-center justify-center'>
          <div className='relative aspect-[6/3] h-auto w-full'>
            <Image
              src='/images/cesa-love.svg'
              fill
              alt='Love CESA'
              className='object-contain object-center'
            />
          </div>
          <CardTitle className='text-balance text-center text-3xl font-bold text-primary'>
            Crafted with <span className='text-[#FF0000]'>Love</span> by CESA
            Tech Team
          </CardTitle>
        </CardHeader>
      </Card>

      <Link href='https://www.instagram.com/cesa.bvcoe' target='_blank'>
        <Card className='anita row-span-1 flex h-full items-center justify-center hover:text-destructive'>
          <CardHeader className='flex flex-row items-center justify-center gap-8'>
            <Image
              src='/icons/insta.svg'
              height={40}
              width={40}
              alt='Instagram'
              className='object-contain object-center'
            />
            <CardTitle className='flex flex-col text-xl font-semibold md:text-3xl'>
              <p>@cesa.bvcoe</p>
              <p>Instagram</p>
            </CardTitle>
          </CardHeader>
        </Card>
      </Link>

      <Card className='col-span-1 md:col-span-2'>
        <CardHeader className='flex h-full flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='text-balance text-center text-2xl font-bold'>
              Connect with us for more exciting stuff and to grow community
              together!
            </div>
            <Button
              variant='secondary'
              className='bg-[#3399ff] text-xl font-bold text-accent hover:bg-cesa-blue'
              asChild
            >
              <Link
                href='mailto:connect.cesaofficial@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Connect
              </Link>
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
