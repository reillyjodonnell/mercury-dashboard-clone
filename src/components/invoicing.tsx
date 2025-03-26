import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { FileText, ChevronRight } from 'lucide-react';

export function InvoicingComponent() {
  return (
    <Card className="mercury-card">
      <div className="flex items-center justify-between mb-3">
        <Link
          href="/invoicing"
          className="flex items-center text-sm font-medium"
        >
          <FileText className="h-4 w-4 mr-2 text-gray-700" />
          Invoicing
        </Link>
        <Link
          href="/invoicing/create-invoice"
          className="text-xs bg-white border border-mercury-border text-mercury-text rounded-full w-5 h-5 flex items-center justify-center"
        >
          +
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-1 my-3">
        <div className="flex flex-col">
          <span className="text-xs text-mercury-text-secondary">Overdue</span>
          <span className="text-sm font-medium">4</span>
        </div>
        <div className="flex flex-col col-span-3">
          <span className="text-xs text-mercury-text-secondary">$950.00</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-mercury-text-secondary">Paid</span>
          <span className="text-sm font-medium">12</span>
        </div>
        <div className="flex flex-col col-span-3">
          <span className="text-xs text-mercury-text-secondary">$6K</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-mercury-border-light">
        <span className="text-xs text-mercury-text-secondary">Open <span className="font-medium">12 invoices</span> <span className="font-medium">$12.3K</span></span>
        <Link
          href="/invoicing"
          className="text-xs flex items-center text-mercury-text-secondary"
        >
          View <ChevronRight className="h-3 w-3 ml-1" />
        </Link>
      </div>
    </Card>
  );
}
