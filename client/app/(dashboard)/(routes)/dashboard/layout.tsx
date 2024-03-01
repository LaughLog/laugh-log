import { DashboardLayoutProps } from '@/types/dashboard';
import Sidebar from '../../_components/sidebar/sidebar';

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
