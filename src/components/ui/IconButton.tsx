import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  "aria-label": string;
}

export default function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-[500px] border-0 focus:outline-none bg-transparent"
      {...props}
    >
      {children}
    </button>
  );
}
