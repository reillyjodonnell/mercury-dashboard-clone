import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, ChevronDown, ChevronRight } from 'lucide-react';

export function MoneyMovementComponent() {
  const transactions = [
    {
      name: 'Venture Debt Loan',
      amount: '$1,000,000.00',
      path: '/transactions'
    },
    {
      name: 'GenPro',
      amount: '$414,983.19',
      path: '/transactions'
    },
    {
      name: 'Google',
      amount: '$66,651.08',
      path: '/transactions'
    },
    {
      name: 'Milgram Brokerage',
      amount: '$58,164.93',
      path: '/transactions'
    }
  ];

  return (
    <Card className="mercury-card">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium">Money movement</h3>
        <div className="flex items-center text-xs font-medium">
          Mar 2025 <ChevronDown className="h-3 w-3 ml-1" />
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        {/* Money In */}
        <div>
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 text-mercury-money-in mr-2" />
            <span className="text-xs text-mercury-text-secondary mr-1">Money in</span>
            <span className="text-sm font-medium">$1,691,344.53</span>
          </div>

          <div className="mt-3 pl-6">
            <h4 className="text-xs text-mercury-text-secondary mb-2">Top sources</h4>
            <div className="space-y-2">
              {transactions.map((tx, index) => (
                <div key={index} className="flex justify-between items-center">
                  <Link href={tx.path} className="text-xs hover:underline">{tx.name}</Link>
                  <span className="text-xs">{tx.amount}</span>
                </div>
              ))}
              <Link
                href="/transactions"
                className="text-xs flex items-center text-mercury-accent mt-1"
              >
                View all
              </Link>
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-xs text-mercury-text-secondary">Last 3 months average</span>
              <span className="text-xs font-medium ml-1">$39.5K</span>
            </div>
          </div>
        </div>

        {/* Money Out */}
        <div className="pt-4 border-t border-mercury-border-light">
          <div className="flex items-center">
            <TrendingDown className="h-4 w-4 text-mercury-money-out mr-2" />
            <span className="text-xs text-mercury-text-secondary mr-1">Money out</span>
            <ChevronDown className="h-3 w-3 mr-1 text-mercury-text-secondary" />
            <span className="text-sm font-medium">$395,014.22</span>
          </div>

          <div className="mt-3 pl-6">
            <h4 className="text-xs text-mercury-text-secondary mb-2">Top spend</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Link href="/transactions" className="text-xs hover:underline">Jordi O'Donnell</Link>
                <span className="text-xs">$90,797.16</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href="/transactions" className="text-xs hover:underline">Gusto (Payroll)</Link>
                <span className="text-xs">$90,122.53</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href="/transactions" className="text-xs hover:underline">Google</Link>
                <span className="text-xs">$67,572.59</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href="/transactions" className="text-xs hover:underline">Milgram Brokerage</Link>
                <span className="text-xs">$52,099.06</span>
              </div>
              <Link
                href="/transactions"
                className="text-xs flex items-center text-mercury-accent mt-1"
              >
                View all
              </Link>
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-xs text-mercury-text-secondary">Last 3 months average</span>
              <span className="text-xs font-medium ml-1">$139K</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
