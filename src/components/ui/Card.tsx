import { ReactNode } from 'react';

// Card component for reusable card layout
// Used for centering content with a shadowed background

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  const base = "flex items-center justify-center px-4";
  return (
    // Auth Container - Full screen centering  
    <div className={`${base} ${className}`.trim()}>
      <div className="w-full max-w-[420px] h-auto rounded-2xl px-6 py-10 md:p-10 bg-white shadow-[0_24px_48px_0_#919EAB29]">
        {children}
      </div>
    </div>
  );
}
