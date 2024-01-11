import { getReferralData } from '@/actions/pr_system';

export default async function LeaderBoard() {
  const referralData = await getReferralData();

  return (
    <div className='my-12 overflow-x-auto'>
      <h2 className='py-2 text-center text-lg font-semibold capitalize'>
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
  );
}
