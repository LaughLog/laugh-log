'use client';

import { useOrganization } from '@clerk/nextjs';

import { addOrganization } from '@/lib/firebaseUtils';
import Sidebar from '@/app/(dashboard)/_components/sidebar/sidebar';
import StartWithTemplate from '@/app/(dashboard)/_components/startWithTemplate';
import TeamBoard from '@/app/(dashboard)/_components/teamBoard';

const Dashboard = () => {
  const { organization } = useOrganization();

  if (organization) {
    addOrganization(organization.id);
  }

  return (
    <div className="flex h-full w-full">
      <Sidebar />
      {organization && (
        <div className="flex h-full w-[calc(100%-328px)]">
          <div className="flex h-full w-[calc(100vw-328px)] flex-col justify-between gap-16 overflow-hidden px-14">
            <StartWithTemplate organizationId={organization.id} />
            <TeamBoard organizationId={organization.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
