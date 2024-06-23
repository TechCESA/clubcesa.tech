"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathName = usePathname();
  return (
<<<<<<< HEAD
    <footer className={`relative h-44 w-full ${pathName !== '/learn' && 'mt-24' }`}>
=======
    <footer className='relative mt-0 h-44 w-full'>
>>>>>>> 2767f472fc9f31445d98384841e5d8c4f438a9ed
      <Image
        src='/images/footer.svg'
        alt='Footer Image'
        fill
        className='object-cover object-center'
        priority={false}
      />
    </footer>
  );
}
