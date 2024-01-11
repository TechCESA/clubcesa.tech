const fetchData = async (url) => {
  try {
    const response = await fetch(url);
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
  return fetchData(process.env.REFERRAL_OWNERS_URL);
}

function fetchReferrals() {
  return fetchData(process.env.REFERRALS_URL);
}

export async function getReferralData() {
  try {
    const [referralOwners, referrals] = await Promise.all([
      fetchReferralOwners(),
      fetchReferrals(),
    ]);

    const referralCounts = referrals.reduce((acc, referral) => {
      const code = referral['Referral Code'];
      acc[code] = (acc[code] || 0) + 1;
      return acc;
    }, {});

    const referralData = referralOwners.map((owner) => ({
      ...owner,
      referrals: referralCounts[owner['Referral Code']] || 0,
    }));

    referralData.sort((a, b) => b.referrals - a.referrals);
    return referralData.slice(0, 10);
  } catch (error) {
    throw new Error(
      `Error with 'Promise.all' fetch operation of 'script.google.com': ${error.message}`
    );
  }
}
