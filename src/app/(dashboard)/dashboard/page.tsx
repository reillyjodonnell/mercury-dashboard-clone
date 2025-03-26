import { TopBarActions } from '@/components/top-bar-actions';
import FinancialDashboard from '@/components/financial-dashboard';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[968px] mx-auto">
      <span className="text-xl text-[#1e1e2a] mb-2">Welcome, John Doe</span>
      <TopBarActions />
      <FinancialDashboard />
    </div>
  );
}
