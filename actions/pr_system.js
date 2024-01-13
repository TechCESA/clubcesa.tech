const REFERRAL_OWNERS_URL =
  'https://script.google.com/macros/s/AKfycbxuMT8v8sICVj-JCq99brTmVEDmipcgHY3rdrH-c-L0dU_D08CWKPGwOf6iLLrqTJd6Rg/exec';
const VALO_REFERRALS_URL =
  'https://script.google.com/macros/s/AKfycbzTCl2-fiAryHO9xjdsZPTc3FX0NC5zBJEIjqVE3EeLtq3CnAeX5hjLdGM2fxom2QFa/exec';

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(
      `There has been a problem with 'script.google.com' fetch operation: ${error.message}`
    );
  }
};

function fetchReferralOwners() {
  return fetchData(REFERRAL_OWNERS_URL);
}

function fetchReferrals() {
  return fetchData(VALO_REFERRALS_URL);
}

export async function getReferralData() {
  try {
    const [referralOwners, referrals] = await Promise.all([
      fetchReferralOwners(),
      fetchReferrals(),
    ]);

    const referralCounts = referrals.reduce((acc, referral) => {
      const code = referral['Referral Code'];
      acc[code] = ((acc[code] || 0) + 1) * 5;
      return acc;
    }, {});

    const referralData = referralOwners.map((owner) => ({
      Rank: 0,
      'Full Name': owner['Full Name'],
      Points: referralCounts[owner['Referral Code']] || 0,
    }));

    referralData.sort((a, b) => b['Points'] - a['Points']);

    referralData.forEach((data, index) => {
      data['Rank'] = index + 1;
    });

    return referralData;
  } catch (error) {
    throw new Error(
      `Error with 'Promise.all' fetch operation of 'script.google.com': ${error.message}`
    );
  }
}
