import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { StatsType } from '@/types/dashboard';

export default function StatsComponent({ data }: { data: StatsType }) {
  return (
    <div className='mx-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <Link href='/dashboard/resources'>
        <Card className='flex flex-col items-center justify-center gap-2 p-6 hover:bg-slate-50'>
          <div className='text-4xl font-bold'>{data.resourcesLen}</div>
          <div className='text-muted-foreground'>Total Resources</div>
        </Card>
      </Link>
      <Card className='flex flex-col items-center justify-center gap-2 p-6 hover:bg-slate-50'>
        <div className='text-4xl font-bold'>{data.tagsLen}</div>
        <div className='text-muted-foreground'>Total Tags</div>
      </Card>
      <Card className='flex flex-col items-center justify-center gap-2 p-6 hover:bg-slate-50'>
        <div className='text-4xl font-bold'>{data.authorsLen}</div>
        <div className='text-muted-foreground'>Total Authors</div>
      </Card>
      <Card className='flex flex-col items-center justify-center gap-2 p-6 hover:bg-slate-50'>
        <div className='text-4xl font-bold'>{data.adminsLen}</div>
        <div className='text-muted-foreground'>Total Admins</div>
      </Card>
    </div>
  );
}
