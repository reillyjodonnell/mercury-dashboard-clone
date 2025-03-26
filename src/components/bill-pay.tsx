import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Receipt, ChevronRight } from 'lucide-react';

export function BillPayComponent() {
  return (
    <Card className="mercury-card">
      <div className="flex items-center justify-between mb-3">
        <Link
          href="/bill-pay"
          className="flex items-center text-sm font-medium"
        >
          <Receipt className="h-4 w-4 mr-2 text-gray-700" />
          Bill Pay
        </Link>
        <Link
          href="/bill-pay"
          className="text-xs bg-white border border-mercury-border text-mercury-text rounded-full w-5 h-5 flex items-center justify-center"
        >
          +
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3">
        <div className="flex flex-col">
          <span className="text-xs text-mercury-text-secondary">Outstanding</span>
          <span className="text-sm font-medium">11</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-mercury-text-secondary">Overdue</span>
          <span className="text-sm font-medium">1</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-mercury-text-secondary">Due soon</span>
          <span className="text-sm font-medium">-</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-mercury-border-light">
        <span className="text-xs text-mercury-text-secondary">Inbox <span className="font-medium">3 bills</span></span>
        <Link
          href="/bill-pay"
          className="text-xs flex items-center text-mercury-text-secondary"
        >
          View <ChevronRight className="h-3 w-3 ml-1" />
        </Link>
      </div>
    </Card>
  );
}
