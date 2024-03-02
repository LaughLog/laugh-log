import Sidebar from '@/app/(dashboard)/_components/sidebar/sidebar';
import StartWithTemplate from '@/app/(dashboard)/_components/startWithTemplate';
import TeamBoard from '@/app/(dashboard)/_components/teamBoard';

const Dashboard = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="flex h-full w-[calc(100vw-328px)] flex-col justify-between gap-16 overflow-hidden px-14">
        <StartWithTemplate />
        <TeamBoard />
      </div>
    </div>
  );
};

export default Dashboard;
