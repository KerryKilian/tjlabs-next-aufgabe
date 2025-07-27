import { ReactNode } from 'react';

interface FloatingInputWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingInputWrapper({ children, className = '' }: FloatingInputWrapperProps) {
  return (
    <div className={`relative h-[53px] bg-[#919EAB14] rounded-lg pl-3 pr-[10px] flex items-end pt-2 ${className}`}>
      {children}
    </div>
  );
}
