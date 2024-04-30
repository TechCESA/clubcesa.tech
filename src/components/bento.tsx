import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';

export default function Bento() {
  return (
    <div className='container min-h-screen'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col gap-4'>
          <div className='relative overflow-hidden'>
            <span className='absolute -bottom-10 left-10 text-9xl font-extrabold leading-none'>
              *
            </span>
            <span className='absolute -right-12 -top-12 text-[16rem] font-extrabold leading-none'>
              *
            </span>
            <Card className='py-6'>
              <CardHeader className='flex flex-col items-center'>
                <CardContent className='text-xl font-bold'>
                  Dive into
                </CardContent>
                <CardTitle className='text-3xl font-extrabold text-[#34E721]'>
                  Memories
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Dive into Memories</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className='flex flex-col gap-4'>
          <Card>
            <CardHeader>
              <CardTitle>Dive into Memories</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dive into Memories</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className='flex flex-col gap-4'>
          <Card>
            <CardHeader>
              <CardTitle>Dive into Memories</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dive into Memories</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
