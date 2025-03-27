import { TopBarActions } from '@/components/top-bar-actions';
import { Suspense } from 'react';
import { FinancialDashboardClient } from '@/components/financial-dashboard-client';
import FinancialDashboard from '@/components/financial-dashboard';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[968px] mx-auto">
      <span className="text-xl text-[#1e1e2a] mb-2">Welcome, John Doe</span>
      <TopBarActions />
      <Suspense
        fallback={
          <div className="grid gap-12 w-full h-full">
            <div className="grid gap-6 md:grid-cols-2 items-stretch h-full">
              <Skeleton className="w-full h-full min-h-[365px] min-w-[470px]" />
              <Skeleton className="w-full h-full" />
            </div>
            <div className="grid gap-6 md:grid-cols-3 h-full">
              <Skeleton className="w-full h-full min-w-[306px] min-h-[274px]" />
              <Skeleton className="w-full h-full" />
              <Skeleton className="w-full h-full" />
            </div>
          </div>
        }
      >
        <FinancialDashboard />
      </Suspense>
    </div>
  );
}
