import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Bell, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white  px-4 py-3 ">
      <div className="flex items-center justify-center max-w-[968px] mx-auto">
        <div className="flex items-center w-full">
          <div className="relative w-[520px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercury-text-secondary h-4 w-4" />
            <Input
              type="text"
              placeholder="Search or jump to"
              className="mercury-search pl-9 h-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs px-1 py-0.5 bg-gray-200 rounded">
              Ctrl K
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="mercury-btn-secondary h-10 flex items-center gap-1 "
          >
            Move Money <ChevronDown className="h-4 w-4" />
          </Button>

          <Bell className="h-5 w-5 text-gray-700" />

          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <span className="text-xs font-medium">J</span>
          </div>
        </div>
      </div>
    </header>
  );
}
