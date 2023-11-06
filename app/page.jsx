import Hero from '../modules/pages/home/home.jsx';
import Navbar from '../modules/pages/navbar/navbar.jsx';

export default function Home() {
  return (
    <main className='m-auto max-w-[90vw] sm:max-w-[75vw]'>
      <Navbar />
      <Hero />
    </main>
  );
}
