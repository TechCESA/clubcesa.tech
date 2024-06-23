import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='relative mt-0 h-44 w-full'>
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
