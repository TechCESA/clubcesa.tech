'use client';

import CustomizedCarousel from '@/components/customized-carousel';
import {
  CreativeTeam,
  DigitalTeam,
  ManagementTeam,
  MarketingTeam,
  PhotographyTeam,
  PublicRelationTeam,
  SportsTeam,
  TechnicalTeam,
} from '@/utils/team';

const getRandomDelay = () =>
  Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;

const TEAMS = [
  {
    teamName: 'Management Team',
    team: ManagementTeam,
    snapDelay: getRandomDelay(),
  },
  {
    teamName: 'Creative Team',
    team: CreativeTeam,
    snapDelay: getRandomDelay(),
  },
  {
    teamName: 'Technical Team',
    team: TechnicalTeam,
    snapDelay: getRandomDelay(),
  },
  {
    teamName: 'Marketing and Sponsorship Team',
    team: MarketingTeam,
    snapDelay: getRandomDelay(),
  },
  {
    teamName: 'Photography Team',
    team: PhotographyTeam,
    snapDelay: getRandomDelay(),
  },
  { teamName: 'Digital Team', team: DigitalTeam, snapDelay: getRandomDelay() },
  {
    teamName: 'Public Relation Team',
    team: PublicRelationTeam,
    snapDelay: getRandomDelay(),
  },
  { teamName: 'Sports Team', team: SportsTeam, snapDelay: getRandomDelay() },
];

export default function Page() {
  return (
    <div className='container mx-auto my-20'>
      {TEAMS.map(({ teamName, team, snapDelay }, idx) => (
        <CustomizedCarousel
          key={teamName}
          teamName={teamName}
          team={team}
          snapDelay={snapDelay}
        />
      ))}
    </div>
  );
}
