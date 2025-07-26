import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-[500px] border-0 focus:outline-none bg-transparent hover:bg-[#00000014] transition-colors cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}
