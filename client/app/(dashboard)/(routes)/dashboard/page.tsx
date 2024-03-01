import MainContainer from '@/app/(dashboard)/_components/mainContainer';
import StartTemplate from '@/app/(dashboard)/_components/startTemplate';
import TeamBoard from '@/app/(dashboard)/_components/teamBoard';

const Dashboard = () => {
  return (
    <MainContainer>
      <StartTemplate />
      <TeamBoard />
    </MainContainer>
  );
};

export default Dashboard;
