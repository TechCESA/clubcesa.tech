import Events from '@/components/events/events';
import Hero from '@/components/hero';
import NabBar from '@/components/navbar';
import PastEvents from '@/components/past_events/past_events';
import Teams from '@/components/teams/teams';
import About from '@/components/about';

export default function Page() {
  return (
    <>
      <div
        id='background'
        className='relative min-h-screen overflow-hidden bg-[url("/background.png")] bg-cover bg-fixed bg-center bg-no-repeat md:bg-top'
      >
        <div className='absolute -bottom-10 -left-8 z-10 h-[80px] w-[110%] bg-black blur-xl'></div>
        <main className='mx-auto max-w-7xl'>
          <NabBar />
          <Hero />
        </main>
      </div>
      <div className='bg-black'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20'>
          <Events />
          <PastEvents />
        </div>

        <About />
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20'>
          <Teams />
        </div>
      </div>
    </>
  );
}
