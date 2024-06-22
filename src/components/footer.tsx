"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className={`relative h-44 w-full ${pathName !== '/learn' && 'mt-24' }`}>
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
