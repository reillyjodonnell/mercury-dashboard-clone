import {
  ArrowLeftFromLine,
  ArrowRightLeft,
  Mail,
  Plus,
  Receipt,
  Send,
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function TopBarActions() {
  return (
    <div className="flex space-x-4">
      <TopBarButton text="Send" Icon={Send} isActive={true} />
      <TopBarButton text="Request" Icon={ArrowLeftFromLine} />
      <TopBarButton text="Transfer" Icon={ArrowRightLeft} />
      <TopBarButton text="Deposit" Icon={Plus} />
      <TopBarButton text="Pay Bill" Icon={Mail} />
      <TopBarButton text="Create Invoice" Icon={Receipt} />
    </div>
  );
}

function TopBarButton({
  text,
  Icon,
  isActive,
}: {
  text: string;
  Icon: any;
  isActive: boolean;
}) {
  return (
    <Button
      className={cn(
        ' bg-mercury-background rounded-full h-8 space-x-1 ',
        isActive
          ? 'bg-mercury-accent text-mercury-border-light hover:bg-[#465bd1]'
          : ' text-mercury-text-secondary hover:text-mercury-accent hover:bg-[#70739329]'
      )}
    >
      <Icon className="max-h-[11px] max-w-[11px]" />
      <span
        className={cn(
          'text-mercury-text-secondary',
          isActive && 'text-mercury-border-light'
        )}
      >
        {text}
      </span>
    </Button>
  );
}
