// components/NavItemContent.tsx
import Link from 'next/link';
import { cn } from '@/lib/utils';

type NavItemContentProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: string | number;
  dot?: boolean;
  disabled?: boolean;
};

export default function NavItemContent({
  href,
  icon,
  label,
  badge,
  dot,
  disabled = false,
}: NavItemContentProps) {
  return (
    <Link
      href={href}
      className={cn(
        'mercury-nav-item',
        'hover:bg-mercury-active-nav hover:opacity-100 transition-all',
        disabled && 'cursor-not-allowed opacity-30 hover:opacity-30'
      )}
    >
      {icon}
      <span className="flex-grow text-sm">{label}</span>
      {badge && (
        <span className="flex items-center justify-center w-5 h-5 text-xs bg-[#E9E8F0] rounded-full">
          {badge}
        </span>
      )}
      {dot && <span className="w-2 h-2 bg-[#6a6dd8] rounded-full mr-1"></span>}
    </Link>
  );
}
