import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight, CreditCard, Landmark, Briefcase } from 'lucide-react';

interface Account {
  name: string;
  balance: string;
  path: string;
  type: 'credit' | 'treasury' | 'checking';
}

export function AccountsSummary() {
  const accounts: Account[] = [
    {
      name: 'Credit Card',
      balance: '$12,505.87',
      path: '/accounts/credit',
      type: 'credit',
    },
    {
      name: 'Treasury',
      balance: '$200,000.00',
      path: '/accounts/treasury',
      type: 'treasury',
    },
    {
      name: 'Ops / Payroll',
      balance: '$2,023,267.12',
      path: '/accounts/depository',
      type: 'checking',
    },
    {
      name: 'AP',
      balance: '$226,767.82',
      path: '/accounts/depository',
      type: 'checking',
    },
    {
      name: 'AR',
      balance: '$0.00',
      path: '/accounts/depository',
      type: 'checking',
    },
  ];

  const getAccountIcon = (type: string) => {
    switch (type) {
      case 'credit':
        return <CreditCard className="h-4 w-4 text-gray-700" />;
      case 'treasury':
        return <Briefcase className="h-4 w-4 text-gray-700" />;
      case 'checking':
        return <Landmark className="h-4 w-4 text-gray-700" />;
      default:
        return <Landmark className="h-4 w-4 text-gray-700" />;
    }
  };

  return (
    <Card className="mercury-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium">Accounts</h3>
      </div>
      <div className="space-y-3">
        {accounts.map((account, index) => (
          <Link
            key={index}
            href={account.path}
            className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              {getAccountIcon(account.type)}
              <span className="text-sm">{account.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">{account.balance}</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
          </Link>
        ))}
        <div className="pt-2 flex items-center">
          <Link
            href="/accounts"
            className="text-xs text-mercury-accent font-medium flex items-center"
          >
            +2 View all accounts
          </Link>
        </div>
      </div>
    </Card>
  );
}
