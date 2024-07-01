import { getAllTags } from '@/actions/user-resources';
import ContributeForm from '@/components/contribute-form';
import { convertTagsBtoF } from '@/lib/convert-tags';

export default async function ContributePage() {
  const tagsData = await getAllTags({ all: true });

  const tagsLabel = tagsData.data
    ? convertTagsBtoF(tagsData.data).sort((a, b) => a.localeCompare(b))
    : [];

  return (
    <div className='container flex min-h-screen flex-col items-center'>
      <ContributeForm tags={tagsLabel} />
    </div>
  );
}
