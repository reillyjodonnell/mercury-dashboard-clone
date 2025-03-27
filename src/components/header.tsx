import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Bell, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-white  px-4 py-3 ">
      <div className="flex items-center justify-center max-w-[968px] mx-auto w-full gap-8">
        <div className="flex items-center w-full">
          <div className="relative  w-full">
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
            variant="ghost"
            className="mercury-btn-secondary h-10 flex items-center gap-1 w-[175px] text-[#5266eb] border-[#70739329] rounded-full"
          >
            Move Money <ChevronDown className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className="mercury-btn-secondary flex items-center rounded-full bg-[#7073931a] border-0 h-10 w-10 text-[#70707d]"
          >
            <Bell className="h-3 w-3 " />
          </Button>

          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <Image
              width={40}
              height={40}
              alt="User avatar"
              src="https://cdn-development.mercury.com/demo-assets/avatars/user-avatar.jpg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
