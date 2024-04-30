import Hero from '@/components/hero';
import NabBar from '@/components/navbar';

export default function Page() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <main className='mx-auto max-w-7xl'>
        <NabBar />
        <Hero />
      </main>
    </div>
  );
}
