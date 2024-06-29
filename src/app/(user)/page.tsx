import Hero from '@/components/hero';
import Bento from '@/components/bento';
import { Separator } from '@/components/ui/separator';

export default function Page() {
  return (
    <main className='mb-24'>
      <Hero />
      <Separator />
      <Bento />
    </main>
  );
}
