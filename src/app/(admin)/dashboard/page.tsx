import StatsComponent from './components/stats-component';
import AdminStats from './components/admin-stats';
import { getStats } from '../actions/dashboard';
import TagStats from './components/tags-stats';
import AuthorStats from './components/authors-stats';

export default async function Component() {
  const [data] = await Promise.all([await getStats()]);

  return (
    <div className='my-10 flex min-h-screen w-full flex-col bg-muted/40'>
      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
        <StatsComponent data={data.stats} />
        <div className='grid gap-4 md:grid-cols-2'>
          <TagStats data={data.tags.tags} />
          <AdminStats data={data.admins} />
        </div>
        <AuthorStats data={data.authors} />
      </main>
    </div>
  );
}
