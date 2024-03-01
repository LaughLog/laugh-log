import MainContainer from '@/app/(dashboard)/_components/mainContainer';
import StartTemplate from '@/app/(dashboard)/_components/startTemplate';
import TeamBoard from '@/app/(dashboard)/_components/teamBoard';
import React from 'react';

const DashBoard = () => {
  return (
    <div className="flex h-[100%] w-[100%]">
      <div className="sidebar h-full w-[328px] shrink-0 bg-coral500">
        사이드바
      </div>
      <MainContainer>
        <StartTemplate />
        <TeamBoard />
      </MainContainer>
    </div>
  );
};

export default DashBoard;
