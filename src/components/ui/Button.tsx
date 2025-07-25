import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button 
      className="h-12 min-w-16 px-4 bg-primary hover:bg-[#454F5B] text-white border-none rounded-[8px] font-bold text-[15px] leading-[26px] tracking-normal cursor-pointer gap-2 flex items-center justify-center transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}