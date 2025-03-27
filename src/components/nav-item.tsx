'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import NavItemContent from './nav-item-content';
import {
  BookOpen,
  Building2,
  CreditCard,
  FileText,
  House,
  ListOrdered,
  LucideProps,
  Mailbox,
  Receipt,
  RefreshCcw,
  TrendingUp,
} from 'lucide-react';

type NavItemProps = {
  href: string;
  label: string;
  badge?: string | number;
  dot?: boolean;
  disabled?: boolean;
};

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  '/dashboard': House,
  '/tasks': Mailbox,
  '/transactions/': ListOrdered,
  '/payments': Receipt,
  '/cards': CreditCard,
  '/capital': TrendingUp,
  '/accounts': Building2,
  '/bill-pay': Receipt,
  '/invoicing': FileText,
  '/expenses': RefreshCcw,
  '/accounting': BookOpen,
} as const;

export default function NavItem({
  href,
  label,
  badge,
  dot,
  disabled = false,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const Icon = iconMap[href];

  return (
    <div
      className={cn(isActive && 'bg-[#7073930f]', !isActive && 'opacity-85')}
    >
      <NavItemContent
        href={href}
        icon={
          Icon ? (
            <Icon
              size={14}
              className={cn(isActive ? 'text-[#5266eb]' : '')}
              strokeWidth={1.75}
            />
          ) : null
        }
        label={label}
        badge={badge}
        dot={dot}
        disabled={disabled}
      />
    </div>
  );
}
