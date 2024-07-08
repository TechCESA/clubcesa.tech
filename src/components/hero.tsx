import { cn } from '@/lib/utils';
import '@/styles/heading.scss';
import { TypewriterText } from './typewriter-text';

export default function Hero() {
  return (
    <div className='relative z-10 mb-4 flex min-h-screen flex-col items-center justify-center overflow-hidden md:mb-0 md:pb-12'>
      <BackgroundText />
      <div
        className='glitch text-center text-8xl font-black leading-none tracking-wider sm:text-[12rem]'
        data-text='CESA'
      >
        CESA
      </div>
      <h3 className='whitespace-nowrap font-bold text-cesa-blue sm:text-2xl'>
        {`Community `}
        <TypewriterText />
        {` Students`}
      </h3>
    </div>
  );
}

function BackgroundText() {
  return (
    <div className='pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center gap-4 pt-8 text-5xl font-extrabold opacity-20 md:gap-8 md:text-9xl'>
      <TextAnimation className='translate-x-10 text-black/20' text='Computer' />
      <TextAnimation
        className='-translate-x-40 text-black/40'
        text='Engineering'
      />
      <TextAnimation className='text-black/60' text='Students' />
      <TextAnimation
        className='-translate-x-40 text-black/40'
        text='Association'
      />
      <TextAnimation
        className='block translate-x-10 text-black/20 md:hidden'
        text='Computer'
      />
      <TextAnimation
        className='block -translate-x-40 text-black/40 md:hidden'
        text='Engineering'
      />
      <TextAnimation
        className='block text-black/60 md:hidden'
        text='Students'
      />
      <TextAnimation
        className='block -translate-x-40 text-black/40 md:hidden'
        text='Association'
      />
    </div>
  );
}

function TextAnimation({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-row justify-around gap-12 overflow-hidden whitespace-nowrap pb-6',
        className,
      )}
    >
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </div>
  );
}
