import { DangerTriangle } from '@solar-icons/react';

import { HTMLAttributes, ReactNode } from 'react';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function AlertMessage({ children, ...props }: DivProps) {
  return (
    <div
      className="flex items-center gap-1 pl-3 transition-all duration-300 
        opacity-100 translate-y-0 animate-in fade-in slide-in-from-top-2"
      {...props}
    >
      <DangerTriangle weight='Bold' className='text-error' />
      {children}
    </div>
  );
}