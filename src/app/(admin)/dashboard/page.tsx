import { getStats } from '@/actions/dashboard';
import StatsComponent from '@/components/stats-component';
import TagStats from '@/components/tags-stats';
import UserStats from '@/components/user-stats';

export default async function Dashboard() {
  const [data] = await Promise.all([await getStats()]);

  return (
    <div className='my-10 min-h-screen bg-muted/40'>
      <main className='grid items-start gap-4 sm:px-6 sm:py-0 md:gap-8 md:p-4'>
        <StatsComponent data={data.stats} />
        <div className='grid gap-4 md:grid-cols-2'>
          <TagStats data={data.tags} />
          <UserStats data={data.admins} isAdmin={true} />
        </div>
        <UserStats data={data.authors} />
      </main>
    </div>
  );
}
