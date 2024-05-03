'use client';

import { useOrganization } from '@clerk/nextjs';

import { addOrganization } from '@/lib/utils/firebase';
import Sidebar from '@/app/(dashboard)/_components/sidebar/sidebar';
import StartWithTemplate from '@/app/(dashboard)/_components/startWithTemplate';
import TeamBoard from '@/app/(dashboard)/_components/teamBoard';
import { Suspense } from 'react';
import Loading from './loading';
import Subtitle from '../../_components/subtitle';

const Dashboard = () => {
  const { organization } = useOrganization();

  if (organization) {
    addOrganization(organization.id);
  }

  return (
    <div className="flex h-full w-full">
      <Sidebar />
      {organization && (
        <div className="flex h-full w-[calc(100vw-328px)] flex-col justify-between gap-16 overflow-hidden px-14">
          <StartWithTemplate organizationId={organization.id} />
          <div className="flex h-[calc(100vh-332px)] w-full flex-col gap-6">
            <Subtitle>회의록</Subtitle>
            <Suspense fallback={<Loading />}>
              <TeamBoard organizationId={organization.id} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
