import React from 'react';
import { Card } from '@/components/ui/card';

export function BalanceCard() {
  return (
    <Card className="mercury-card bg-white">
      <div className="flex flex-col">
        <h3 className="font-medium text-mercury-text-secondary mb-2">
          Mercury balance
        </h3>
        <div className="font-display ">$5,216,471.18</div>
        <div className="flex items-center mt-2 gap-2">
          <button className="text-xs text-mercury-text-secondary border-b border-gray-300">
            Graph or table
          </button>
        </div>

        <div className="flex mt-6 mb-2 space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-mercury-money-in rounded-full"></div>
            <div className="text-sm">
              <div className="font-medium">$1.7M</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-mercury-money-out rounded-full"></div>
            <div className="text-sm">
              <div className="font-medium">$418K</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
