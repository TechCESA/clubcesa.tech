import Hero from '@/app/_components/hero.jsx';
import Navbar from '@/app/_components/navbar.jsx';

export default function Home() {
  return (
    <main className='m-auto max-w-[90vw] sm:max-w-[75vw]'>
      <Navbar />
      <Hero />
    </main>
  );
}
