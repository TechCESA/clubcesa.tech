import { getReferralData } from '@/actions/pr_system';

export default async function Page() {
  const referralData = await getReferralData();

  return (
    <div className='bg-white text-black'>
      <div className='mx-auto max-w-7xl overflow-x-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20'>
        <h2 className='pb-6 text-center text-xl font-semibold capitalize'>
          Referral Leaderboard
        </h2>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              {Object.keys(referralData[0]).map((key) => (
                <th
                  key={key}
                  scope='col'
                  className='whitespace-nowrap px-3 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-500'
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {referralData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index} className='px-3 py-3 text-left'>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
