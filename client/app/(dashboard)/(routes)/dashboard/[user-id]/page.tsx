import Main from '@/app/(dashboard)/_components/main';
import StartTemplate from '@/app/(dashboard)/_components/startTemplate';
import TeamBoard from '@/app/(dashboard)/_components/teamBoard';
import React from 'react';

const DashBoard = () => {
  return (
    <div className="flex h-[100%] w-[100%]">
      <div className="sidebar h-full w-[328px] shrink-0 bg-[red]"></div>
      <Main>
        <StartTemplate />
        <TeamBoard />
      </Main>
    </div>
  );
};

export default DashBoard;
