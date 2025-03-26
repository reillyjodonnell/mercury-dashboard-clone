import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { CreditCard as CreditCardIcon, ChevronRight } from 'lucide-react';

export function CreditCardComponent() {
  return (
    <Card className="mercury-card">
      <div className="flex items-center justify-between mb-3">
        <Link
          href="/accounts/credit"
          className="flex items-center text-sm font-medium"
        >
          <CreditCardIcon className="h-4 w-4 mr-2 text-gray-700" />
          Credit Card
        </Link>
        <span className="text-sm font-medium">$12,505.87</span>
      </div>

      <div className="flex flex-col mt-4 mb-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-mercury-text-secondary">Balance</span>
          <span className="text-xs text-mercury-text-secondary">Pending</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs font-medium">$21,249 available</span>
          <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-mercury-border-light">
        <div className="flex items-center gap-1">
          <span className="text-xs text-mercury-text-secondary">Autopay</span>
          <Link href="/accounts/credit" className="text-xs text-mercury-accent">Mar 31</Link>
        </div>
        <Link
          href="/accounts/credit"
          className="text-xs bg-white border border-mercury-border text-mercury-text px-2 py-1 rounded-md font-medium hover:bg-mercury-active-nav"
        >
          Pay
        </Link>
      </div>
    </Card>
  );
}
