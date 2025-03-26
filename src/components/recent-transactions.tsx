import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight, ChevronRight, ArrowDown, ArrowUp, AlertTriangle } from 'lucide-react';

interface Transaction {
  date: string;
  name: string;
  status?: 'failed';
  amount: string;
  account: string;
  paymentMethod: string;
}

export function RecentTransactionsComponent() {
  const transactions: Transaction[] = [
    {
      date: 'Mar 26',
      name: 'Payment from Acme Corp',
      amount: '$200.00',
      account: 'AR',
      paymentMethod: 'Request or Invoice Payment'
    },
    {
      date: 'Mar 26',
      name: 'Payment from NASA',
      status: 'failed',
      amount: '$419.00',
      account: 'AR',
      paymentMethod: 'Request or Invoice Payment'
    },
    {
      date: 'Mar 26',
      name: 'Mercury Working Capital',
      amount: '$2,200.00',
      account: 'Ops / Payroll',
      paymentMethod: 'Working Capital Loan Payment'
    },
    {
      date: 'Mar 26',
      name: 'Lily\'s Eatery',
      amount: '$0.93',
      account: 'Ops / Payroll',
      paymentMethod: 'Jane B. 1234'
    },
    {
      date: 'Mar 26',
      name: 'From AR',
      amount: '$54,810.16',
      account: 'Ops / Payroll',
      paymentMethod: 'Transfer'
    },
    {
      date: 'Mar 26',
      name: 'To Ops / Payroll',
      amount: '$54,810.16',
      account: 'AR',
      paymentMethod: 'Transfer'
    },
    {
      date: 'Mar 26',
      name: 'Deli 77',
      amount: '$6.91',
      account: 'Credit account',
      paymentMethod: 'Jane B. 5555'
    }
  ];

  return (
    <Card className="mercury-card overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <Link
          href="/transactions"
          className="flex items-center text-sm font-medium"
        >
          Recent transactions <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="overflow-x-auto -mx-4">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-mercury-border-light">
              <th className="px-4 py-2 text-xs text-mercury-text-secondary font-medium">Date</th>
              <th className="px-4 py-2 text-xs text-mercury-text-secondary font-medium">To/From</th>
              <th className="px-4 py-2 text-xs text-mercury-text-secondary font-medium">Amount</th>
              <th className="px-4 py-2 text-xs text-mercury-text-secondary font-medium">Account</th>
              <th className="px-4 py-2 text-xs text-mercury-text-secondary font-medium">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={index}
                className="border-b border-mercury-border-light hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-xs">{tx.date}</td>
                <td className="px-4 py-3 text-xs flex items-center">
                  {tx.name.startsWith('From') && <ArrowDown className="h-3 w-3 mr-1 text-mercury-money-in" />}
                  {tx.name.startsWith('To') && <ArrowUp className="h-3 w-3 mr-1 text-mercury-money-out" />}
                  {tx.status === 'failed' ? (
                    <div className="flex items-center">
                      {tx.name}
                      <span className="text-xs ml-1 text-amber-700 font-medium">Failed</span>
                    </div>
                  ) : (
                    tx.name
                  )}
                </td>
                <td className="px-4 py-3 text-xs font-medium">{tx.amount}</td>
                <td className="px-4 py-3 text-xs">{tx.account}</td>
                <td className="px-4 py-3 text-xs">{tx.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
